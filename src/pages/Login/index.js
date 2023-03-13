import React from 'react'
import BoxLogin from '../../components/BoxLogin';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Background } from './styles';

const Login = () => {
  return (
    <>
      <Background>
        <Header />
        <BoxLogin />
        <Footer />
      </Background>
    </>
  )
}

export default Login