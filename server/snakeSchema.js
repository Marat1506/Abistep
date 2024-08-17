import mongoose, { Schema } from "mongoose"




export const SnakeSchema = Schema({
    length: Number
})

export const Snake = mongoose.model('snakes', SnakeSchema)

export async function SaveLengthToDb(req, res) {
    try {
        console.log("req = ", req.body)
        const snake = await Snake.create({
            length: Number(req.body.length) 
        })
        return res.status(201).json("Данные записаны")
    } catch (error) {
        return res.status(500).json("Ошибка: " + error)
    }
}
export async function getInfo(req, res) {
    try {
        console.log("посиупил запрос")
        const info = await Snake.find()
        console.log("f = ", info)

        return res.status(299).json(info)
    } catch (error) {
        return res.status(500).json("Ошибка: " + error)
    }
}