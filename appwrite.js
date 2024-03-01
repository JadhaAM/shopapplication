
import { Client, Account,Databases, ID } from "appwrite";

const Client = new Client();
Client.setEndpoint('https://cloud.appwrite.io/v1').setProject('65d1dcf01411d4f7356c');

const account = new Account(Client);

export const databases = new Databases(Client);

export const storage = new Storage(Client);

export const createAccount={}

const sessionToken = await account.createPhoneSession(
    ID.unique(),
    '+91 9307257984'
);
const session = await account.updatePhoneSession(
    userId,
    '[SECRET]'
);
const userId = sessionToken.userId;