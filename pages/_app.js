import Head from 'next/head';
import '../styles/globals.css'; // Pastikan untuk mengimpor file CSS jika ada
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <link rel="icon" href="/logo-nextjs.png" />
        <title>Portfolio | Hilarius Alan</title>
      </Head>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
