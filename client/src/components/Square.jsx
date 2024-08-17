/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"

export default function Square({square}) {
    const {x, y} = square
    const snake = useSelector(store => store.game.snake)
    const apple = useSelector(store => store.game.apple)

    let buttonStyle = ''
    for(let s of snake) {
        if(s.x === x && s.y === y) buttonStyle = 'snake'
    }

    if(x === apple.x && y === apple.y) buttonStyle = 'apple'
    return (
        <span className="Square">
            <button className={buttonStyle}></button>
        </span>
    )
}