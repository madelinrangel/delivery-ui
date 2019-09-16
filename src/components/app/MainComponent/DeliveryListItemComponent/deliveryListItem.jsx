import React, { Component } from "react";
import DeliveryItem from "./DeliveryItemComponent/deliveryItem";
import './deliveryListItem.css';
import Fab from "./floatingActionButton";

class DeliveryListItem extends Component {
    render() {
        const { listItems, onDelete } = this.props;
        return (
            <section className="list-items">
                {listItems.map(item => (
                    <DeliveryItem
                        key={item.id}
                        item={item}
                        onDelete={onDelete}
                    />
                ))}
                <section className="list-items">
                    <Fab
                    />
                </section>
            </section>
        );
    }
}

export default DeliveryListItem;