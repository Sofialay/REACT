import React, {useState, useReducer, useEffect} from 'react';
import {getData} from '../../data/Data';
import {INIT, reducer} from '../reducer/Reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './CarouselCards.scss';

// !! TO DO:
//   Hacer el slider usando useEffect 

const CarouselCards = () => {
  
    const [currentCard, setCurrentCard] = useState(0);
    const [images, dispatch] = useReducer(reducer,[]);

    const getImages = async () =>{
      const dataImages = await getData();
      dispatch({type: INIT, payload: dataImages}); 
    }

    useEffect(() => {
      getImages();
    }, []);


    useEffect(() => {
      switch(currentCard) {
          case 0: setCurrentCard(0);
          break;
          case 1: setCurrentCard(-390);
          break;
          case 2: setCurrentCard(-600);
          break;
          case 3: setCurrentCard(-900);
          break;
          default: setCurrentCard(0);
      }
    }, [currentCard]);

      return(
      <React.Fragment>
        <div className="container">
          <div className="container-slider" style={{transform: `translateX(${currentCard}px)`}}>
            {
              images.map(item => {
                console.log('pepito', item)
                return(
                  <div key={item.id} className="container-img">
                    <img src={item.images} />
                    <p>{item.description}</p>
                  </div>
                )
              })
            }
            </div>
            <button className="btn-prev" onClick={() => setCurrentCard(currentCard - 1)}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className="btn-next" onClick={() => setCurrentCard(currentCard + 1)}><FontAwesomeIcon icon={faChevronRight} /></button>

          </div>
       
      </React.Fragment>
    )
  }

 {/* //  disabled={`${cardIndex === 0 ? 'disabled': ''}`} onClick={() => setCardIndex(cardIndex - 1)} 
        //  disabled={`${cardIndex === cardIndex.lenght ? 'disabled': ''}`} onClick={() => setCardIndex(cardIndex + 1)}  */}
  

    // if(!images){
    // return (
    //      <h1>Loading...</h1>
    //   )}else{
    //     return (
    //       <div key={images.id} className="container-img">
    //         <img src={images.images} />
    //       </div>


            // <ul>
            //     {
            //         images.map((image, index) => {
            //             return (
            //                 <li key={index}>
            //                     <img src={image.images} />
            //                 </li>
            //             )
            //         })
            //     }
            // </ul>
    //     )
    // }

      // <React.Fragment> 
      //  
      //   {
      //     if(images === undefined){
      //         return(
      //             <h1>Loading...</h1>
      //         );
      //     }else {
      //         return(
      //           <div key={images.id} className="container-img">
      //               <img src={images[1].images} />
      //           </div>
      //         )}
      //   }
        

export default CarouselCards;