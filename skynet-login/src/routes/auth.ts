import { Router } from 'express';
import AuthController from '../controllers/authController';

const router = Router();
const authController = new AuthController();

export function setRoutes(app: Router) {
    app.post('/login', authController.login);
    app.post('/register', authController.register);
}