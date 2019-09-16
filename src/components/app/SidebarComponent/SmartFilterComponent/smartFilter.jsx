import React, { Component } from 'react';
import './smartFilter.css';
import ItemSmartFilter from "./ItemSmartFilterComponent/itemSmartFilter";
import Icon from '@material-ui/core/Icon';

class SmartFilter extends Component {
    render() {
        const { listItems, onListFavorities, onListAllItems } = this.props;
        return (
            <React.Fragment>
                <section className="sidebar-smart-filter__header">
                    <Icon classes="smart-filter__header-logo">highlight</Icon>
                    <span className="smart-filter__header-label" >Smart Filters</span>
                </section>
                {
                    listItems.map(item => (
                        <ItemSmartFilter
                            key={item.id}
                            item={item}
                            onListFavorities={onListFavorities}
                            onListAllItems={onListAllItems}
                        />
                    ))
                }
            </React.Fragment>
        );
    }
}

export default SmartFilter;