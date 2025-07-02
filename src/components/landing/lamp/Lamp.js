import lamp from '../../../assets/img/lamp.png'
import style from './lamp.module.css'
export const Lamp= ({display, color, handleProgressColor}) => {
    return (
            <img onClick={handleProgressColor} className={style.lamp} src={lamp} alt="a lamp"></img>
    )
}