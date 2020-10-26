import React from 'react';
import CarouselCards from './Components/Carousel/CarouselCards';
import Header from './Components/Header/Header';
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
  <React.Fragment>
    <Header/>
    <CarouselCards />
  </React.Fragment>
  )
}

export default App;
