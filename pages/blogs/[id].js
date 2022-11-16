import styles from '../../styles/Entrada.module.css'
import MasterPage from '../../components/MasterPage'
import {formatearFecha} from '../../helpers'

const entrada = ({resultado}) => {  
    const {titulo, contenido, id,created_at} = resultado[0]

  return (
    <MasterPage pagina={`${titulo}`}>
      <div className={styles.post}>
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(created_at)}</p>
          <p className={styles.texto}>{contenido}</p>
          
        </div>
      </div>
    </MasterPage>
  )
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/blogs`)
  const resultado = await respuesta.json();

  const paths = resultado.map(ent => ({
    params: {
      id: ent.id.toString()
    }
  }))
 
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params:{id}}) {
  const respuesta = await fetch(`${process.env.API_URL}/blogs?[id]=${id}`)
  const resultado = await respuesta.json();
  
  return {
    props: {
      resultado
    }
  }

}

export default entrada
