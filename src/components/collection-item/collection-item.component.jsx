import React from 'react';
import './collection-item.style.scss';
import CustomButton from '../custom-buttom/custom-button.component';

import { connect } from 'react-redux';
import { AddItem } from '../../redux/card/card.actions';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <div className="collection-item">
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(AddItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);