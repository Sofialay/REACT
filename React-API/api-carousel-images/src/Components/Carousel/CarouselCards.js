import React, {useState, useReducer, useEffect} from 'react';
import {getData} from '../../data/Data';
import {INIT, reducer} from '../reducer/Reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

//hacer mobile


import './CarouselCards.scss';

const CarouselCards = () => {
  
    const [currentCard, setCurrentCard] = useState(0);
    const [pixels, setPixels] = useState(0);
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
          case 0: setPixels(0);
          break;
          case 1: setPixels(-400);
          break;
          case 2: setPixels(-830);
          break;
          case 3: setPixels(-1285);
          break;
          case 4: setPixels(-1745);
          break;
          case 5: setPixels(-2205);
          break;
          case 6: setPixels(-2620);
          break;
          case 7: setPixels(-3010);
          break;
          case 8: setPixels(-3440);
          break;
          default: setPixels(-21);
      }
    }, [currentCard]);



      return(
      <React.Fragment>
        <div className="container">
          <div className="container-slider" style={{transform: `translateX(${pixels}px)`}}>
            {
              images.map(item => {
                console.log('pepito', item)
                return(
                  <div key={item.id} className="container-img">
                    <img src={item.images} />
                    <div className="hover-description">
                    <p>{item.description}</p>
                    </div>
                  </div>
                )
              })
            }
            </div>
            <button className="btn-prev" disabled={`${currentCard === 0 ? 'disabled': ''}`} onClick={() => setCurrentCard(currentCard - 1)}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className="btn-next" disabled={`${currentCard === 8 ? 'disabled': ''}`} onClick={() => setCurrentCard(currentCard + 1)}><FontAwesomeIcon icon={faChevronRight} /></button>

          </div>
       
      </React.Fragment>
    )
  }
 

export default CarouselCards;
