import React, { Component } from "react";
import './App.css';
import Main from "./MainComponent/main";
import MenuTop from "./MenuTopComponent/menuTop";
import Sidebar from "./SidebarComponent/sidebar";

/**
 * Stateful React Component
 */
class App extends Component {
  state = {
    listItemsDelivery: [
    ],
    listItemsSmartFilter: [
      { id: 1, type: "sale", checked: false },
      { id: 2, type: "calendar", checked: false },
      { id: 3, type: "favorite", checked: false }
    ],
    listItemsMenuTop: [
      { id: 1, name: "Home", type: "home" },
      { id: 2, name: "Messages", type: "email" },
      { id: 3, name: "Wishlist", type: "star" },
      { id: 4, name: "Settings", type: "settings" },
      { id: 5, name: "My Account", type: "person" }
    ]
  };

  render() {
    return (
      <main className="container">
        <MenuTop
          listItems={this.state.listItemsMenuTop}
        />
        <Main
          listItems={this.state.listItemsDelivery}
          onDelete={this.handleDelete}
        />
        <Sidebar
          listItems={this.state.listItemsSmartFilter}
          onListFavorities={this.handleListFavoriteDeliveryItems}
          onListAllItems={this.handleListAllItems}
        />
      </main>
    );
  }

  /**
   * Function that consumes a RESTFUL API to get delivery items
   */
  componentDidMount() {
    fetch('http://localhost:3000/api/deliveries/deliveries.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({ listItemsDelivery: data });
      })
      .catch(console.log)
  }

  /**
   *  Function that removes a delivery item of the state object and list the others
   */
  handleDelete = itemDeliveryId => {
    const listItemsDelivery = this.state.listItemsDelivery.filter(c => c.id !== itemDeliveryId);
    this.setState({ listItemsDelivery });
  };

  /**
   *  Function that list favorite deliverty items
   */
  handleListFavoriteDeliveryItems = () => {
    const listItemsDelivery = [...this.state.listItemsDelivery];
    const data = listItemsDelivery.filter(c => c.favorite);
    this.setState({ listItemsDelivery: data });
  };

  /**
   *  Function that list all deliverty items
   */
  handleListAllItems = () => {
    /*
    const listItemsDelivery = this.state.listItemsDelivery.filter(c => c);
    this.setState({ listItemsDelivery });
    */
  };

}

export default App;