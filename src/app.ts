import express, { Application, Request, Response } from 'express';
import NotFound from './app/middelwares/NotFound';
import router from './app/routes/indes';
import GlobalErrorHandler from './app/middelwares/GlobalErrorHandler';
const app : Application = express()
const port = 3000

app.use(express.json());
app.use("", router);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to our Ticket management system project...')
})
  
  app.listen(port, () => {
    console.log(`Ticket management sysetem listening on port ${port}`)
  })

  app.use(GlobalErrorHandler)

   app.use(NotFound)

  export default app;