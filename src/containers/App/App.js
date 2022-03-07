import React from 'react';
import Header from '../../components/Header/Header';
import Home from '../../containers/Home/Home';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Home />
    </div>
  );
}

export default App;