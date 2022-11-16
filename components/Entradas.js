
import Link from 'next/link'
import {formatearFecha} from '../helpers'
import style from '../styles/Entrada.module.css'

const Entradas = ({entrada}) => {
  
  const {titulo, resumen, id,created_at} = entrada
  return (
    <div>
        <article>
          <div className={style.contenido}>            
            <h1>{titulo}</h1>
            <p className={style.fecha}>{formatearFecha(created_at)}</p>
            <p className={style.resumen}>{resumen}</p>
            <Link href={`/blogs/${id}`}>
                <a className={style.enlace}>Leer más</a>
            </Link>
          </div>
        </article>
    </div>
  )
}

export default Entradas
