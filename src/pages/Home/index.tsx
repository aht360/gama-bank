import React from 'react';
import Register from './Register';
import Info from './Info';
import Anuidade from './Anuidade';
import Complexity from './Complexity';
import Footer from './Footer';

const Home = () => {
    return(
        <div style={{overflow: 'hidden'}}>
            <Register />
            <Info />
            <Anuidade />
            <Complexity />
            <Footer />
        </div>
    );
}

export default Home;