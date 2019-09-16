import React, { Component } from 'react';
import Switch from "react-switch";
import './itemSmartFilter.css';
import Icon from '@material-ui/core/Icon';

class ItemSmartFilter extends Component {

    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const { item } = this.props;
        return (
            <div className="smart-filter__items">
                <Icon className="smart-filter__item-logo">{this.handleTypeIcono(item.type)}</Icon>
                <Switch className="smart-filter__item-siwtch" onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} />
            </div>
        );
    }

    handleChange(checked) {
        this.setState({ checked });
        // To use the function handleListFavoriteDeliveryItems from the Statefull Component
        return (this.props.item.type === "favorite" && checked) ? this.setState(this.props.onListFavorities) : (checked === false) ? this.setState(this.props.onListAllItems) : '';
    }

    handleTypeIcono(type) {
        return type === "sale" ? 'start' : type === "calendar" ? 'today' : 'favorite_border';
    }
}

export default ItemSmartFilter;