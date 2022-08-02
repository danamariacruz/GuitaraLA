import Head from 'next/head'

const MasterPage = ({children,pagina}) => {
  return (
    <div>
      <Head>
          <title>QuitaraLA - {pagina}</title>
      </Head>
      {children}
    </div>
  )
}

export default MasterPage
