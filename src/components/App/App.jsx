import React from "react";
import axios from "axios";
import ShoppingList from "../ShoppingList/ShoppingList";
import { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import "./App.css";
import RemoveItem from "../RemoveItem/RemoveItem";
import ItemForm from "../Form/ItemForm.jsx";
import BuyItem from "../BuyItem/BuyItem";

function App() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const addItem = (newItem) => {
    console.log(newItem);
    axios
      .post("/list", newItem)
      .then((response) => {
        getItems();
      })
      .catch((err) => {
        alert("Error adding item");
        console.log(err);
      });
  };

  // DELETE ITEM
  const handleRemove = (event) => {
    event.preventDefault();
    let id = event.target.id;

    console.log("Deleting Item", id);

    axios
      .delete(`/list/${id}`)
      .then((response) => {
        getItems();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // DELETE REQUEST
  const clearShoppingList = () => {
    console.log("delete clicked");
    axios
      .delete(`/list/all`)
      .then((response) => {
        console.log(response);
        getItems();
      })
      .catch((err) => {
        console.log(err);
      });
  }; // end DELETE

  // PUT REQUEST
  const resetPurchasedItems = () => {
    console.log("reset clicked");
    axios
      .put(`/list/reset`)
      .then((response) => {
        console.log(response);
        getItems();
      })
      .catch((err) => {
        console.log(err);
      });
  }; // end PUT


  const markPurchasedItems = (event) => {

    event.preventDefault();
    let id = event.target.id;

    console.log("Marking purchased Item", id);

    axios
      .delete(`/list/${id}`)
      .then((response) => {
        getItems();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  


  // GET REQUEST for itemList
  const getItems = () => {
    axios
      .get("/list")
      .then((response) => {
        setItemList(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <ItemForm addItem={addItem} />
        <ShoppingList
          clearShoppingList={clearShoppingList}
          resetPurchasedItems={resetPurchasedItems}
          RemoveItem={RemoveItem}
          itemList={itemList}
          handleRemove={handleRemove}
          BuyItem={BuyItem}
          markPurchasedItems={markPurchasedItems}
        />
      </main>
    </div>
  );
}

export default App;
