import React from 'react'
import {About,Footer,Skills,Header,Testimonial,Work} from './container'
import {Navbar} from './components';
const App = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Testimonial/>
        <Footer/>
    </div>
  );
}

export default App;