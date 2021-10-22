export default interface User {
    uid: string;
    name: string;
    email: string;
    password?: string;
    token: string;
    provider: string;
    imageURL: string;
}