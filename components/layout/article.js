import Head from 'next/head'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

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
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Weather App" />
        <meta property="og:description" content="Weather App" />
        <meta property="og:url" content="https://weather-app-joaogustavo.vercel.app/" />
        <meta property="og:site_name" content="Weather App" />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:image:secure_url" content="/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Weather App" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Weather App" />
        <meta name="twitter:title" content="Weather App" />
        <meta name="twitter:image" content="/images/og-image.png" />
        <meta name="twitter:image:alt" content="Weather App" />

      </Head>
      {children}
    </motion.article>
  )
}

export default Layout