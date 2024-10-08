
import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const config = {
    endpoint:"https://cloud.appwrite.io/v1",
    platform:'com.dlw.na',
    projectId:'66aed2e100183728c22e',
    databaseId:'66aed47f0020b33c6200',
    userCollectionId:'66aed4aa001d2330b71c',
    videoCollectionId:'66aed4ef001b131010a6',
    storageId:'66aed7f4003a26d7863f',
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId) 
    .setPlatform(config.platform)


    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);

    export const createUser = async (email, password, username) => {

        try{
            const newAccount = await account.create(
                ID.unique(), 
                email,
                password, 
                username
            ); 

            if(!newAccount) throw Error;

            const avatarUrl = avatars.getInitials(username);

            await signIn(email, password);

            const newUser = await databases.createDocument(
                config.databaseId,
                config.userCollectionId,
                ID.unique(),
                {
                    accountId: newAccount.$id,
                    email,
                    username,
                    avatar:avatarUrl
                }
            );

            return newUser;

        }catch(error){
            console.log(error);
            throw new Error(error);
        }

    }

    export const signIn = async(email, password) => { 
        try {
            const session = await account.createEmailPasswordSession(email, password);

            return session;

        } catch(error) {
            throw new Error(error);
        }  
    }

    export const getCurrentUser = async () => {
        try{
            const currentAccount = await account.get();
            if(!currentAccount) throw Error;

            const currentUser = await databases.listDocuments(
                config.databaseId,
                config.userCollectionId,
                [Query.equal('accountId', currentAccount.$id)]
            )

            if(!currentUser) throw Error;
            return currentUser.documents[0];
        }catch(error){
            console.log(error);
        }
    }

    export const getAllPosts = async () => {
        try{
            const posts = await databases.listDocuments(
                config.databaseId,
                config.videoCollectionId
            )

            return posts.documents;
        }catch(error){
            throw new Error(error);
        }
    }

    export const getLatestPosts = async () => {
        try{
            const posts = await databases.listDocuments(
                config.databaseId,
                config.videoCollectionId,
                [Query.orderDesc('$createdAt', Query.limit(7))]
            )

            return posts.documents;
        }catch(error){
            throw new Error(error);
        }
    }



