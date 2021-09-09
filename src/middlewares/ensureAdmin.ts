// Middleware à être utilisé dans une route
import { Request, Response, NextFunction } from "express";

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    // Vérifie si l'utilisateurs est admin
    const admin = true;

    if (admin) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized"
    })
}