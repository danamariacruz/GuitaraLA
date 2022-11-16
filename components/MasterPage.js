import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MasterPage = ({children,pagina}) => {
  return (
    <div>
      <Head>
          <title>GuitaraLA - {pagina}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MasterPage
