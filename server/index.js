import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { getInfo, SaveLengthToDb } from './snakeSchema.js'

const app = express()
const port = 3000


const url = 'mongodb+srv://maratmirzabalaev:15062004marat@cluster0.sctfqvp.mongodb.net/Abistep'

mongoose
.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then((res) => console.log("Connect to DB"))
.catch((err) => console.log("DB vonnection error:" + err))

app.use(express.json())
app.use(cors())


app.get('/get/info', async(req, res) => {
    getInfo(req, res)
})
app.post('/snake', async(req, res) => {
    SaveLengthToDb(req, res)
})


app.listen(port, () => {
    console.log("conncet to 3000 port")
})