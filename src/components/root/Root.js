import { Outlet } from 'react-router-dom'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { Frame } from '../frame/Frame'
import style from './root.module.css'


export const Root = () => {
    const {height, width} = useWindowDimensions()
    return (
        <div className={style.root}
         style={{backgroundSize: `${width}, ${height}`}}>
            <Frame height={height} width={width}/>
            <main className={style.viewport}
            style={{height: height-[6*16]}}>
                <Outlet/>
            </main>
        </div>
    )
}
