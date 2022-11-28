import { useState, useEffect } from 'react'
import MasterPage from '../components/MasterPage'
import styles from '../styles/carrito.module.css'

const Carrito = ({carrito, actualizarCantidad,eliminarProducto}) => {

  const [total,setTotal] = useState(0)
const calculoTotal = 0
  useEffect(() => {
    calculoTotal = carrito.reduce((total,producto) => total + (producto.cantidad * producto.Precio), 0)
    setTotal(calculoTotal)
  },[carrito])
console.log(calculoTotal)
  return (
    <MasterPage pagina='Carrito de compras'>
      <main className='contenedor'>
        <h1 className='heading'>Carrito</h1>

        <div className={styles.contenido}>
            <div className={styles.carrito}> 
                <h2>Articulos</h2>

                {carrito.length === 0 ? 'Carrito vacio' : (
                  carrito.map(producto => (
                    <div key={producto.id} className={styles.producto} >
                      <div>
                        <p className={styles.nombre} >{producto.Nombre}</p>
                        <div className={styles.cantidad}>
                          <p>Cantidad:</p>
                          <select className={styles.select} onChange={ e => actualizarCantidad({
                            id: producto.id,
                            cantidad: e.target.value
                          })} value={producto.cantidad}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option> 
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                          </select>
                        </div>
                        <p className={styles.precio}>$<span>{producto.Precio}</span></p>
                        <p className={styles.subtotal}>Subtotal: $<span>{producto.cantidad * producto.Precio}</span></p>
                      </div>
                      <button className={styles.eliminar} type='button' onClick={() => eliminarProducto(producto.id)}>X</button>
                    </div>
                  ))
                )}
            </div>

            <aside className={styles.resumen}>
                <h3>Resumen del carrito</h3>
                <p>Total a pagar: ${total}</p>
            </aside>
        </div>
      </main>
    </MasterPage>
  )
}

export default Carrito
