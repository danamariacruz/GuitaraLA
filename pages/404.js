import MasterPage from '../components/MasterPage'
import Link from 'next/link'

const Pagina404 = () => {
  return (
    <MasterPage pagina='Página no encontrada'>
      <p className='error'>Página no encontrada</p>
      <Link href='/'><a className='error-enlance'>Ir a inicio</a></Link>
    </MasterPage>
  )
}

export default Pagina404
