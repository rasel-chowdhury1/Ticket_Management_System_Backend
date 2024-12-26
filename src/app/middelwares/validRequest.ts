import { NextFunction, Request, Response } from "express"


const validateRequest = (schema: any) => {

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            // validation check
            //if everything allright next() ->
            // console.log( 'req.body -> ', req.body,);
            await schema.parseAsync( req.body);
      
            next();
          } catch (err) {
            next(err);
          }
          
    }
}

export default validateRequest;
