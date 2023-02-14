import Head from 'next/head'
import { motion } from 'framer-motion'


const Layout = ({ children, title }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Weather App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="author" content="João Gustavo" />
        <meta name="keywords" content="weather, app, nextjs, chakra-ui" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        <meta property="og:locale" content="en_US" />
      </Head>
      {children}
    </motion.article>
  )
}

export default Layout