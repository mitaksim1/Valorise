// Middleware à être utilisé dans une route
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

// 6. Pour qu'on puisse récupérer l'user_id de l'utilisateur
interface IPayload {
    sub: string;
}

export function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
    // 1. Récupérer le token
    const authToken = request.headers.authorization;
    // 2. Valider si token est rempli
    if (!authToken) {
        // .end() prend le message par défault de l'erreur 401
        return response.status(401).end();
    }

    // 4. On veut juste récupérer le token sans le "Bearer"
    // split(): divise selon le paramètre passé dans notre cas "espace" créant un array
    // Bearer "token" = ["Bearer", "token"]
    const [,token] = authToken.split(" ");
    // console.log(token); 
    // 3. Valider si token est valide
    try {
        // console.log(decode); on reçoit email, iat, exp et sub
        const { sub } = verify(
            token, 
            "d80b1e117cb96b49a69f35ad7d77a787"
        ) as IPayload;
        
        // 5. Récupérer les informations de l'utilisateur
        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).end();
    }
    
    
}