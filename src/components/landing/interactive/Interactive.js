import { Cover } from '../cover/Cover'
import { Info } from './Info'
import { useState, useEffect } from 'react'
import style from './interactive.module.css'
export const Interactive= () => {
    const [start, setStart] = useState(false)
    useEffect(()=>{
        const initiate = setTimeout(()=>{
            setStart(true)
        }, 5000)
        return ()=>clearTimeout(initiate)
    },[start])
    return (
        
        <div className={style.interactive}>
            {start? 
                <Info/> : <Cover/>    
            }
        </div>
    )
}