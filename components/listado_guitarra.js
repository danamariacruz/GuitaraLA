import Link from 'next/link'
import React from 'react'
import styles from '../styles/tienda.module.css'

const listado_guitarra = ({guitarra}) => {
 
  const {Nombre, descripcion,Precio,url} = guitarra
  return (
    <div className={styles.contenido}>
      <h3>{Nombre}</h3>
      <p className={styles.descripcion}>{descripcion}</p>
      <p className={styles.precio}>${Precio}</p>
      <Link href={`/guitaras/${url}`}>
          <a className={styles.enlace}>Ver Producto</a>
      </Link>
    </div>
  )
}

export default listado_guitarra
