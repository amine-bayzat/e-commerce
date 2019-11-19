import React, { Component } from 'react';
import MenuItems from '../menu-items/menu-items.component';
import './directory.style.scss';

class Directory extends Component {

    constructor() {
        super();

        this.state = {
            sections : [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    // by writing this syntax "...otherSectionProps" now we have access to the other properties as well in our state
                    this.state.sections.map(({ id, ...otherSectionProps }) => {
                        return (
                            <MenuItems key={id} {...otherSectionProps} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Directory;
