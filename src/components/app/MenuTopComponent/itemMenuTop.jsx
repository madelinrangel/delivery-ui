import React, { Component } from 'react';

import './itemMenuTop.css';

import Icon from '@material-ui/core/Icon';

class ItemMenuTop extends Component {

    render() {
        // object destructuring is done to simplify code
        const { name, type } = this.props.item;
        return (
            <div className="menu-top__item">
                <Icon className="menu-top__item-logo">{type}</Icon>
                <div>{name}</div>
            </div>
        );
    }
}

export default ItemMenuTop;