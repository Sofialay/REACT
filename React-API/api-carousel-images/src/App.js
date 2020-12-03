import React, {useState, useEffect} from 'react';
import CarouselCards from './Components/Carousel/CarouselCards';
import Header from './Components/Header/Header';
import './App.scss';
import Loader from './Components/Loader/Loader';


function App() {

  //simulacion de un Loader
const [loader, setLoader] = useState(true)

useEffect( () => {
  setTimeout(() => {
    setLoader(false);
  }, 4000);
}, []);

  return (
  <React.Fragment>
  { 
    loader ?
    <Loader/>
      :
    <section>
      <Header/>
      <CarouselCards />
    </section>
  }
  </React.Fragment>
  )
}

export default App;
