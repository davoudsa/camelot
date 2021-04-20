import React from 'react';

import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'For Sale',
                imageUrl:'https://cdn0.zoocasa.com/images/listings/c951bc2a-8edb-44d5-9793-d6704e67474a.jpg',
                id: 1,
                linkUrl: 'ForSale'
            },{
                title: 'For Rent',
                imageUrl:'https://cdn3.zoocasa.com/images/listings/0b3609ea-2789-442b-90b0-d4268af2d9c6.jpg',
                id: 2,
                linkUrl: 'ForRent'
            },{
                title: 'Sold',
                imageUrl:'https://cdn0.zoocasa.com/images/listings/0325c4fb-0963-4255-94b6-9947722afdeb.jpg',
                id: 3,
                linkUrl: 'Sold'
            },{
                title: 'Market stats',
                imageUrl:'https://www.zoocasa.com/blog/wp-content/uploads/2021/04/TREB-March-2021-Home-Prices-By-Quarter-Hero-750x429.png',
                size: 'large',
                id: 4,
                linkUrl: 'MarketStats'
            },{
                title: 'Featured Homes',
                imageUrl: 'https://cdn1.zoocasa.com/images/listings/4f89778b-4d19-4bce-b139-0bc4d9d277f9.jpg',
                size: 'large',
                id: 5,
                linkUrl: 'FeaturedHomes'
            }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'> 
            {
                this.state.sections.map(({id, ...otherSectionsProps}) => (
                    <MenuItem key={id} {...otherSectionsProps} />
                    )
                    )
            }
            </div>
        );
    }
}

export default Directory;
