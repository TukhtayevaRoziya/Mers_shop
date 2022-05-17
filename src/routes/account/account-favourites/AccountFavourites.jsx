import React from 'react';
import classes from './AccountFavourites.module.css';
import AccountProduct from '../account-product/AccountProduct';
// import productImage from "../../../assets/karzinka/product.png";
import AccountEmpty from '../account-empty/AccountEmpty';

const AccountFavourites = () => {
    const data = [
        // {
        //   id: 0,
        //   productImage: productImage,
        //   productTitle: `Black/Red/Blue 1" Extra Flow Breather 1" Push In Vent Filter for Valve Cover`,
        //   productRatings: 4,
        //   productCost: 12.99,
        //   productCount: 3
        // },
        // {
        //   id: 1,
        //   productImage: productImage,
        //   productTitle: `Black/Red/Blue 1" Extra Flow Breather 1" Push In Vent Filter for Valve Cover`,
        //   productRatings: 4,
        //   productCost: 12.99,
        //   productCount: 5
        // },
        // {
        //     id: 2,
        //     productImage: productImage,
        //     productTitle: `Black/Red/Blue 1" Extra Flow Breather 1" Push In Vent Filter for Valve Cover`,
        //     productRatings: 4,
        //     productCost: 12.99,
        //     productCount: 5
        //   },
        //   {
        //     id: 3,
        //     productImage: productImage,
        //     productTitle: `Black/Red/Blue 1" Extra Flow Breather 1" Push In Vent Filter for Valve Cover`,
        //     productRatings: 4,
        //     productCost: 12.99,
        //     productCount: 5
        //   },
        //   {
        //     id: 4,
        //     productImage: productImage,
        //     productTitle: `Black/Red/Blue 1" Extra Flow Breather 1" Push In Vent Filter for Valve Cover`,
        //     productRatings: 4,
        //     productCost: 12.99,
        //     productCount: 5
        //   }
      ]
    return (
        <div className={classes.account__favourites}>
            <div className={classes.favourites__header}>
                <h1>Мое избранное</h1>
            </div>
            { /*@uncomment data to see actual results! */
                data?.length > 0 ? <AccountProduct data={data}  /> : <AccountEmpty/>
            }
            
        </div>
    )
}

export default AccountFavourites
