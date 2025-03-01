/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2025-03-01 18:30
*****************************************************************************************/

// ===== IMPORT
import { Response } from "express";

interface BaseResponseAPI {
    body?: any;
    statusCode: number;
}

const createResponse = (statusCode:number, body?: any ) : BaseResponseAPI => ({ body, statusCode });

const httpHelper = {
    OK: (data: any) => createResponse(200, data),
    Created: (data: any) => createResponse(201, data),
    NoContent: () => createResponse(204),
    BadRequest: (error?: string | Error) => createResponse(400, error ?? "Bad Request"),
    Unauthorized: (error?: string) => createResponse(401, error ?? "Unauthorized"),
    Forbidden: (error?: string) => createResponse(403, error ?? "Forbidden"),
    NotFound: (error?: string) => createResponse(404, error ?? "Not Found"),
    InternalServerError: (error?: string | Error) => createResponse(500, error ?? "Internal Server Error"),
    
    send: (res: Response, response: BaseResponseAPI) => res.status(response.statusCode).json(response.body),
};

export default httpHelper;
