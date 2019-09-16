import React, { Component } from 'react';
import './main.css';
import DeliveryListItem from "./DeliveryListItemComponent/deliveryListItem";

class Main extends Component {
    render() {
        const { listItems, onDelete } = this.props;
        return (
            <main className="main-content">
                <DeliveryListItem
                    listItems={listItems}
                    onDelete={onDelete}
                />
            </main>

        );
    }
}

export default Main;