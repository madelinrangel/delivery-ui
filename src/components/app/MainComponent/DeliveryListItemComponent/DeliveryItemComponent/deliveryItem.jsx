import React, { Component } from 'react';
import './deliveryItem.css';
import Icon from '@material-ui/core/Icon';
import MenuDeliveryItem from './menuDeliveryItem';
import Moment from 'react-moment';
import CurrencyFormat from 'react-currency-format';

class DeliveryItem extends Component {

    render() {
        const { departureDate, departure, arrival, price, numberOfPackages } = this.props.item;

        return (
            <div className="item-delivery">
                <section className="item-delivery__first-section">
                    <span className="item-delivery__departure-date">
                        <Moment format="dddd Mo H:m A">{departureDate}</Moment>
                    </span>
                </section>
                <section className="item-delivery__second-section">
                    <span className="item-delivery__logo-send">
                        <Icon className="item-delivery__logo ">send</Icon>
                    </span>
                    <span className="item-delivery__departure-city">
                        <span className="">{departure.city.name}, {departure.state.abbreviation}, {departure.city.zipCode}</span>
                    </span>
                    <span className="item-delivery__logo-expand">
                        <Icon className="item-delivery__logo ">expand_more</Icon>
                    </span>
                    <span className="item-delivery__arrival-city">
                        <span className="">{arrival.city.name}, {arrival.state.abbreviation}, {arrival.city.zipCode}</span>
                    </span>
                </section>
                <section className="item-delivery__third-section">
                    <span className="item-delivery__logo-shipping">
                        <Icon className="item-delivery__logo ">local_shipping_rounded</Icon>
                    </span>
                    <span className="item-delivery__price">
                        <CurrencyFormat value={price} displayType={'text'} fixedDecimalScale={true} decimalScale={2} prefix={'$'} />
                    </span>
                    <span className="item-delivery__number-of-packages">
                        <span className="item-delivery__number-of-packages-area">{numberOfPackages}</span>
                    </span>
                    <span className="item-delivery__logo-more-vert">
                        <MenuDeliveryItem
                            item={this.props}
                        />
                    </span>
                </section>
            </div>
        );
    }
}

export default DeliveryItem;