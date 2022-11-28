import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import styles from '../styles/Header.module.css'

const Header = () => {

  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className='contenedor'>
          <div className={styles.barra}>
            <Link href="/">
                  <a><Image width={400} height={100} src='/img/logo.svg' alt='imagen logo'/></a>
            </Link>
            <nav className={styles.navegacion}>
                <Link href='/'>
                  <a className={router.pathname === '/' ? styles.active : ''}>Inicio</a>
                </Link>
                <Link href='/nosotros'>
                  <a className={router.pathname === '/' ? styles.active : ''}>Nosotros</a>
                </Link>
                <Link href='/blog'>
                  <a className={router.pathname === '/' ? styles.active : ''}>Blog</a>
                </Link>
                <Link href='/tienda'>
                  <a className={router.pathname === '/' ? styles.active : ''}>Tienda</a>
                </Link>
                <Link href='/carrito'>
                  <a>
                    <Image width={30} height={25} src='/img/carrito.png' alt='imagen carrito'></Image> 
                  </a>
                </Link>
            </nav>
          </div>
      </div>
    </header>
  )
}

export default Header
