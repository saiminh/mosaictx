import Head from 'next/head'

export const Layout = (props) => {

  const meta = {
    title: props.title || 'MosaicTX - The Combination Oncology People™',
    description: props.description || 'Resolving cancer’s complexity, through the power of combination therapeutics.',
    metaimg: props.metaimg || '/favicon.ico'
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.metaimg} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{props.children}</main>
    </div>
  )
}
