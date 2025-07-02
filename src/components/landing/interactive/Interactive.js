import { Cover } from '../cover/Cover'
import { Info } from './Info'
import style from './interactive.module.css'
export const Interactive= ({start, color}) => {
    return (
        
        <div className={style.interactive}>
            {start? 
                <Info color={color}/> : <Cover/>    
            }
        </div>
    )
}