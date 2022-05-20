import React from 'react';
import NavigationBar from './components/NavigationBar';
import Product from './components/Product';
import Footer from './components/Footer';

const Home=(props)=>{
  return(
    <div>
      <NavigationBar />
        <Product />
        {/* <h1>Ini Home</h1> */}
      <Footer />
    </div>
  )
}
export default Home;