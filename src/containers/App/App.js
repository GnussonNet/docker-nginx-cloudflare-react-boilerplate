import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import styles from './App.module.scss';

const Header = React.lazy(() => import('../../components/Header/Header'));
const Home = React.lazy(() => import('../../containers/Home/Home'));

function App() {
  return (
    <div className={styles.app}>
      {/* <Fallback /> */}
      <Suspense fallback={<Fallback />}>
        <Header />
        <Home />
      </Suspense>
    </div>
  );
}

const Fallback = () => {
  const containerRef = React.useRef();
  return (
    <motion.div ref={containerRef} className={styles.app__fallback} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25, delay: 1 }}>
      <div className={styles.app__fallback__loader}>
        <div className={styles.app__fallback__loader__inner}></div>
      </div>
      <p className={styles.app__fallback__text}>Loading page...</p>
    </motion.div>
  );
};

export default App;
