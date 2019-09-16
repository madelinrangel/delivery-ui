import React, { Component } from 'react';
import ItemMenuTop from "./itemMenuTop";
import './menuTop.css';

class MenuTop extends Component {
    render() {
        const { listItems } = this.props;
        return (
            <header className="menu-top">
                <section className="menu-top__section">
                    {listItems.map(item => (
                        <ItemMenuTop
                            key={item.id}
                            item={item}
                        />
                    ))}
                </section>
            </header>
        );
    }
}

export default MenuTop;