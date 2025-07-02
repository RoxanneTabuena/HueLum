import { useState, useEffect } from 'react'
import { Interactive } from './interactive/Interactive'
import { Lamp } from './lamp/Lamp'
import { themes, backgrounds } from './landing.content'
import style from './landing.module.css'
export const Landing = () => {
    const [color, SetColor] = useState(0)
    const [start, setStart] = useState(false)
    useEffect(()=>{
        const initiate = setTimeout(()=>{
            setStart(true)
        }, 5000)
        return ()=>clearTimeout(initiate)
    },[start])
    const handleProgressColor = () => {
        SetColor(prev=>prev === themes.length-1 ? 0 : prev + 1)
    }

    return (
        <div className={style.landing} 
        style={{
            border: `solid ${themes[color]} 2px`,
            color: themes[color],
            backgroundColor: `${start && backgrounds[color]}`
            }}>
            <Interactive color={color} start={start}/>
            <Lamp handleProgressColor={handleProgressColor} color={themes[color]}/>
        </div>
    )
}