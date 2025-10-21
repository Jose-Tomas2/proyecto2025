export class AuthService {
    private users: { [key: string]: { password: string } } = {};

    constructor() {
        // Initialize with some dummy users for demonstration
        this.users['user1'] = { password: 'password1' };
        this.users['user2'] = { password: 'password2' };
    }

    public validateCredentials(username: string, password: string): boolean {
        const user = this.users[username];
        return user ? user.password === password : false;
    }

    public generateToken(username: string): string {
        // In a real application, you would use a library to generate a JWT token
        return `token-for-${username}`;
    }
}