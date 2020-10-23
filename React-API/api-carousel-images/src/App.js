import React, {useState, useContext, useReducer, useEffect} from 'react';
// import {getData} from './data/Data';
// import {INIT, reducer} from './Components/reducer/Reducer';
// import Data from './data/Data';
import CarouselCards from './Components/Carousel/CarouselCards';
import Header from './Components/Header/Header';
import Context from './Components/context/Context';
import Reducer from './Components/reducer/Reducer';

import './App.scss';

//TO DO'S
// Crear la UI para las imagenes, componente carousel.
// Poner las interacciones, cursor pointer, blur en imagenes
// Añadir funcionalidad de abrir fotos
// Añadir un boton para agregar fotos / POST-API
// Añadir el Header 
// Añadir Iconos y links de redes sociales



function App() {



  return (
  //  <Context.Provider value={{images, dispatchImg}}>
    <CarouselCards />
  // </Context.Provider>
  );
}

export default App;
