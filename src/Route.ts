import { Express, Request, Response } from 'express'

export default async function Routes(app: Express) {
  app.get('/', (req: Request, res: Response) => {
    res.json({
      message: 'Hello Express + TypeScirpt!!',
    })
  })
}
