// Middleware à être utilisé dans une route
import { Request, Response, NextFunction } from "express";

// Middleware pour gérer les erreurs, besoin de 4 paramètres
export function handleErrors(err: Error, request: Request, response: Response, next: NextFunction) {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal ServerError",
    });
}