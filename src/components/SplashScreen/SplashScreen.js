import React, { Component } from 'react';
import { motion } from 'framer-motion';
import styles from './SplashScreen.module.scss';

function SplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        opacity: 1,
        fade: 0,
      };
    }

    async componentDidMount() {
      try {
        setTimeout(() => {
          this.setState({
            opacity: 0,
          });
        }, 750);
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1000);
      } catch (err) {
        console.log(err);
        this.setState({
          opacity: 0,
        });
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 500);
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading)
        return (
          <>
            <motion.div className={styles.splashScreen}>
              <motion.div animate={{ opacity: this.state.opacity, y: this.state.fade }} transition={{ duration: 0.25 }}>
                <p>Loading, thanks for waiting...</p>
              </motion.div>
            </motion.div>
          </>
        );

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default SplashScreen;
