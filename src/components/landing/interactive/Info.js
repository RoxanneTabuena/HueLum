import style from './interactive.module.css'
export const Info= ({color}) => {

    return (
        
        <div className={style.info}
            style={{ 
            }}
        >
            <h1>Block Lume</h1>
            <div className={style.side}>
                <h2>set of 2</h2>
                <h2>$111</h2>
            </div>
                <p className={style.copy}>copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy</p>
            <button
             style={{color: color}}>purchase</button>
        </div>
    )
}