import { Request, Response } from 'express'
import Yup from 'yup'
import CreateService from '../service/User/CreateService';

const findAll = async (req: Request, res: Response) => {

}

const store = async (req: Request, res: Response): Promise<Response> => {
    const userData = req.body;


    const service = await CreateService({userData});

    return res.status(201).json({data: service, message: 'OK'});

}