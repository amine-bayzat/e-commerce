import React from 'react';
import './collection.style.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPreview = ({items, title}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                    .filter((item, index) => index < 4)
                    .map(({id, ...otherItemsProps}) => {
                        return (
                            <CollectionItem key={id} {...otherItemsProps} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CollectionPreview;
