import { Express, Request, Response} from "express";
import { createUserHandler } from "./controller/user.controller";
import { validateRequest } from  './middleware/validateRequest'; 

export default function(app: Express){

    //health check 
    app.get('/check', (req: Request,res: Response) => res.sendStatus(200));

    //Register User
    //POST /api/user
    app.post('/api/users', validateRequest(createUserSchema),createUserHandler)

    //Login User
    //POST /api/sessions 

    //Get the Users session
    //GET /api/sessions

    //Logout
    //DELETE /api/sessions
}