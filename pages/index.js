import Head from 'next/head'
import Header from '../components/Header'
import MasterPage from '../components/MasterPage'

export default function Home() {
  return (
    <>
      <MasterPage pagina='inicio'></MasterPage>
      <Header />
    </>
  )
}
