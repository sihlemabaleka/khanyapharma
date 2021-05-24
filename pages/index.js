import Head from 'next/head';
import styles from '../styles/Home.module.css';

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// bring connect from react-redux, it's the bridge for connecting component to redux
import { connect } from 'react-redux';

import { useSession, signIn, signOut } from 'next-auth/client';

const Home = props => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={`w-full h-full bg-black`} />
      <h1 className="text-xs text-green">Testing NEXTJS on BLITZJS</h1>
    </div>
  );
};

Home.propTypes = {
  loading: PropTypes.bool
};

// Get state to props
const mapStateToProps = state => ({
  loading: state.loading
});

// Get dispatch / function to props
const mapDispatchToProps = dispatch => ({});

// To make those two function works register it using connect
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
