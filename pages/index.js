import MasterPage from '../components/MasterPage'
import Listado_guitarra from '../components/listado_guitarra'
import Entradas from '../components/Entradas'
import Curso from '../components/curso'
import styles from '../styles/grid.module.css'

export default function Home({guitaras,blogs,cursos}) {
  console.log(cursos)
  return(
    <>
    <MasterPage pagina='inicio'></MasterPage> 
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <div className={styles.grid}>
          {guitaras.map(e => (
            <Listado_guitarra 
                key={e.id}
                guitarra={e}
            />
          )).slice(-3)}
        </div>
      </main>

      <Curso curso={cursos} />

      <section className='contenedor'>
        <h2 className='heading'>Ultimas entradas</h2>
            <div className={styles.grid}>
              {blogs.map(e => (
                <Entradas 
                    key={e.id}
                    entrada={e}
                />
              )).slice(-3)}
          </div>
      </section>
     </>    
  )
}

export async function getStaticProps() {
  const guitarras = `${process.env.API_URL}/guitaras`
  const entradas = `${process.env.API_URL}/blogs`
  const curso = `${process.env.API_URL}/cursos`
 
  const [resG,resE,resC] = await Promise.all([
    fetch(guitarras),
    fetch(entradas),
    fetch(curso)
  ])
 
  
  const [guitaras, blogs,cursos] = await Promise.all([
    resG.json(),
    resE.json(),
    resC.json()
  ])
  
  return {
    props: {
      guitaras,
      blogs,
      cursos
    }
  }
}