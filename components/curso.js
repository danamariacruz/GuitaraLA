import styles from '../styles/curso.module.css'

const Curso = ({curso}) => {

  const {contenido, titulo} = curso

  return (   
    <div className={`contenedor ${styles.grid}`}>
      <div className={styles.contenido}>
        <h2 className='heading'>{titulo}</h2>
        <p>{contenido}</p>
      </div>
    </div>
  )
}

export default Curso
