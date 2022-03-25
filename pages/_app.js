import '../styles/globals.css';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: { opacity: 0 },
        pageAnimate: { opacity: 1, transition: { delay: 0.1 } },
      }}
    >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </motion.div>
  );
}

export default MyApp;
