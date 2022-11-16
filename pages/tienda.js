import MasterPage from '../components/MasterPage'
import Listado_guitarra from '../components/listado_guitarra'
import styles from '../styles/grid.module.css'

const Tienda = ({guitarras}) => {
  console.log(guitarras)
  return (
    <MasterPage pagina='tienda'>
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>

        
            <div className={styles.grid}>
                {guitarras.map(e => (
                  <Listado_guitarra 
                      key={e.id}
                      guitarra={e}
                  />
                ))}
            </div>
      </main>
    </MasterPage>
  )
}

export async function getStaticProps() {
	
  const respuesta = await fetch(`${process.env.API_URL}/guitaras`)
  const guitarras = await respuesta.json()

return {
  props: {
    guitarras
  }
}
}

export default Tienda
