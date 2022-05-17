import React from 'react';
import card1 from "../../../assets/home/card1.png";
import  CardProduct  from '../../../utils/CardProduct';
import classes from './KarzinkaRecommendations.module.css';

const KarzinkaRecommendations = () => {
    
    return (
        <div className={classes.checkout__product_recommendations}>
       {
           new Array(10).fill().map((_, index) => 
           <CardProduct
                key={index}
                desc="Customized Front Carbon Brake Disc"
                img={card1}
                price="$122.56"
                path="/"
            />
           )
       }
    </div>
    )
}

export default KarzinkaRecommendations
