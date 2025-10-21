export interface User {
    id: string;
    username: string;
    email: string;
    password: string; // Consider storing hashed passwords
}

export interface AuthRequest {
    username: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}