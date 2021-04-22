import React from 'react';

import HOUSES_DATA from './houses.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class HousesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: HOUSES_DATA
        }

    }

    render() {
        const { collections } = this.state;
        return ( <div>
            {
                collections.map( ({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ) 
                )
            }
        </div> 
        );
    }
}

export default HousesPage;

