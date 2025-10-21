import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public async login(req: Request, res: Response): Promise<void> {
        try {
            const { username, password } = req.body;
            const token = await this.authService.validateUser(username, password);
            res.status(200).json({ token });
        } catch (error) {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }

    public async register(req: Request, res: Response): Promise<void> {
        try {
            const { username, password, email } = req.body;
            const user = await this.authService.registerUser(username, password, email);
            res.status(201).json({ user });
        } catch (error) {
            res.status(400).json({ message: 'Registration failed' });
        }
    }
}