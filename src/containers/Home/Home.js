import { motion } from 'framer-motion';
import styles from './Home.module.scss';

function Home() {
  return (
    <section id="home" className={styles.home}>
      <motion.h1 initial="hidden" animate="visible" variants={{ visible: { opacity: 1, translateX: 0, transition: { delay: 0.4 } }, hidden: { opacity: 0, translateX: -100 } }}>
        React App!
      </motion.h1>
      <motion.p initial="hidden" animate="visible" variants={{ visible: { opacity: 1, translateY: 0, transition: { delay: 0.6 } }, hidden: { opacity: 0, translateY: 10 } }}>
        Test
      </motion.p>
    </section>
  );
}

export default Home;
