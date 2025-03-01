/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2025-03-01 18:18
* @Description: Add here your description..
*****************************************************************************************/

// ===== IMPORTS
import express, { json, Request, Response } from 'express';
import cors from 'cors';

const createApp = () => {
    const app = express();

    // === Middleware
    app.use(json());
    app.use(cors());

    // === Add routes here
    app.get('/', async (_: Request, resp: Response) => {

        resp.status(200).json({message: "Welcome to Blue Template!"});
    })

    // === build
    return app;
}

export default createApp;