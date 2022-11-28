import {useState} from 'react'
import styles from '../../styles/tienda.module.css'
import MasterPage from '../../components/MasterPage'

const Producto = ({resultado,agregarCarrito}) => {  
  
  const [cantidad, setCantidad] = useState(1)

  const {Nombre, descripcion,Precio} = resultado[0]

  const handletSubmit = e => {
    e.preventDefault()

    const seleccion = {
      id: resultado[0].id, Nombre, descripcion,Precio,cantidad
    }

    agregarCarrito(seleccion)
  }

  return (
    <MasterPage pagina={`Guitarra ${Nombre}`}>
      <div className={styles.guitarra}>
        <div className={styles.contenido}>
          <h3>{Nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${Precio}</p>      

          <form className={styles.formulario} onSubmit={handletSubmit}>
            <label htmlFor='cantidad'>Cantidad:</label>
            <select onChange={e => setCantidad(e.target.value)} id='cantidad'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
            </select>

            <input type='submit' value='Agregar al carrito' />
          </form>

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
