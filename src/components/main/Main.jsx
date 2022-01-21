import React from 'react';
// import { link } from 'react-router-dom';
import './main.scss';
import './mediaQ-main.scss';
import Card from './Card';

const Main = () => {
   return (
      <main className='home-main'>
         <div className='gallery'>
            <Card />
         </div>
      </main>
   ); 
};

export default Main;