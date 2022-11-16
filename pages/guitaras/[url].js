import styles from '../../styles/tienda.module.css'
import MasterPage from '../../components/MasterPage'

const Producto = ({resultado}) => {  
  const {Nombre, descripcion,Precio} = resultado[0]

  return (
    <MasterPage pagina={`Guitarra ${Nombre}`}>
      <div className={styles.guitarra}>
        <div className={styles.contenido}>
          <h3>{Nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${Precio}</p>        
        </div>
      </div>
    </MasterPage>
  )
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitaras`)
  const resultado = await respuesta.json();

  const paths = resultado.map(guitarra => ({
    params: {
      url: guitarra.url
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params:{url}}) {
  const respuesta = await fetch(`${process.env.API_URL}/guitaras?[url]=${url}`)
  const resultado = await respuesta.json();
 
  return {
    props: {
      resultado
    }
  }

}

// export async function getServerSideProps({query:{url}}) {
//   const respuesta = await fetch(`${process.env.API_URL}/guitaras?[url]=${url}`)
//   const resultado = await respuesta.json();
 
//   return {
//     props: {
//       resultado
//     }
//   }

// }

export default Producto
