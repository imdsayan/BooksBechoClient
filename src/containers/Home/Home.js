import React, { Component } from 'react';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import HomepageDesc from '../../components/UI/Carousel/HomepageDesc';

class Home extends Component{
    render(){

        return(
        <div>
           <Toolbar />
           <HomepageDesc />
        </div>
        );
    }
}
export default Home;

