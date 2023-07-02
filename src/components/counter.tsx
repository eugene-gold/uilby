import { useState } from "react"
import classes from './styles.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
        
    }
    return (
        <div className={classes.btn}>
            <span>{count}</span>
            <button onClick={increment}>increment</button>
        </div>
    )
}