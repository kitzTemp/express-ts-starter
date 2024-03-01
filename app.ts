import express, { Express } from 'express'
const app: Express = express()

import * as env from 'dotenv'
import Serve from './src/Serve'
import Routes from './src/Route'

env.config()

Routes(app)
Serve(app)
