import MasterPage from '../components/MasterPage'
import Entradas from '../components/Entradas'
import styles from '../styles/grid.module.css'

const Blog = ({entradas}) => {
console.log(entradas)
  return (
    <MasterPage pagina='blog'>
        <main className='contenedor'>
          <h2 className='heading'>Blog</h2>
          <div className={styles.grid}>
            {entradas.map(e => (
              <Entradas 
                  key={e.id}
                  entrada={e}
              />
            ))}
        </div>
        </main>        
    </MasterPage>
  )
}

export async function getStaticProps() {
	
    const respuesta = await fetch(`${process.env.API_URL}/blogs`)
    const entradas = await respuesta.json()

	return {
		props: {
      entradas
		}
	}
}

export default Blog
//G3n3sis0901

