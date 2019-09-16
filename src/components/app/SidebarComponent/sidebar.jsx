import React, { Component } from "react";
import './sidebar.css';
import Logo from "./LogoComponent/logo";
import SmartFilter from "./SmartFilterComponent/smartFilter";
import Status from "./StatusComponent/status";

class Sidebar extends Component {
    render() {
        const { listItems, onListFavorities, onListAllItems } = this.props;
        return (
            <aside className="sidebar">
                <section className="sidebar-logo">
                    <Logo
                    />
                </section>
                <section className="sidebar-smart-filter">
                    <SmartFilter
                        listItems={listItems}
                        onListFavorities={onListFavorities}
                        onListAllItems={onListAllItems}
                    />
                </section>
                <section className="sidebar-status">
                    <Status
                    />
                </section>
            </aside>
        );
    }
}

export default Sidebar;