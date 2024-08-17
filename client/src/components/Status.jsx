import { useDispatch, useSelector } from "react-redux"
import { changeStatus, checkApple, checkGameOut, moveSnake, setDirection } from "../store/gameSlice";
import { useRef } from "react";
import { SaveLengthToDB } from "../request";


export default function Status() {
  const status = useSelector(store => store.game.status)
  const snakeSize = useSelector(state => state.game.snakeSize)
  const dispatch = useDispatch()

  let timer = useRef(null);

  const update = () => {
    dispatch(moveSnake())
    dispatch(setDirection())
    dispatch(checkApple())
    dispatch(checkGameOut())

  };
  const startTimer = () => timer.current = setInterval(() => update(), 200)
  const stopTimer = () => clearInterval(timer.current)

  const clickHandler = () => {
    if(status === 'Restart'){
      SaveLengthToDB({ length: snakeSize })
      window.location.reload()
    
      return;
    }
    if (status !== 'Pause') startTimer()
    else stopTimer()
    dispatch(changeStatus())
  }

  return (
    <div className="Status">
      <button className='start-button' onClick={clickHandler}>{status}</button>
    </div>

  )
}
