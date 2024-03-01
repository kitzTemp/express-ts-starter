import { Express } from 'express'

export default async function Serve(app: Express) {
  app.listen(process.env.PORT, () => {
    console.log('')
    console.log(new Date())
    console.log(`Server Started @ http://localhost:${process.env.PORT}`)
    console.log('')
  })
}
