import Header from '../../components/Header/Header';
import Home from '../Home/Home';
import { motion } from 'framer-motion';
import styles from './App.module.scss';
import SplashScreen from '../../components/SplashScreen/SplashScreen';

function App() {
  return (
    <div className={styles.app}>
      <motion.div
        className={styles.app__splashScreen}
        initial={{
          y: '0',
        }}
        animate={{
          y: '-100%',
        }}
        transition={{
          duration: 0.25,
        }}
      ></motion.div>
      <Header />
      <Home />
    </div>
  );
}

export default SplashScreen(App);
