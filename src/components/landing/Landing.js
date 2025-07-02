import { useState } from 'react'
import { Interactive } from './interactive/Interactive'
import { Lamp } from './lamp/Lamp'
import { themes } from './landing.content'
import style from './landing.module.css'
export const Landing = () => {
    const [color, SetColor] = useState(0)
    const handleProgressColor = () => {
        SetColor(prev=>prev === themes.length-1 ? 0 : prev + 1)
    }

    return (
        <div className={style.landing} 
        style={{
            border: `solid ${themes[color]} 2px`,
            color: themes[color]
            }}>
            <Interactive/>
            <Lamp handleProgressColor={handleProgressColor} color={themes[color]}/>
        </div>
    )
}