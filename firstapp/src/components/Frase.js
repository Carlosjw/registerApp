import styles from './Frase.module.css' // importando css

function Frase(){
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}><em>Este é um <b>componente</b> com uma frase</em></p>
        </div>
    )
}

export default Frase