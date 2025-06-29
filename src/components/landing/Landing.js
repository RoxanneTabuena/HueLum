import { Interactive } from './interactive/Interactive'
import { Lamp } from './lamp/Lamp'
import style from './landing.module.css'
export const Landing = () => {
    return (
        <div className={style.landing}>
            <Interactive/>
            <Lamp/>
        </div>
    )
}