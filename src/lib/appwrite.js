import { Client, Account, Databases, ID } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6713428c001848195a8a');

export const account = new Account(client);
export const databases = new Databases(client);

export { ID };