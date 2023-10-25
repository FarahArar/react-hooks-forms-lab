import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm(props) {
  const initialFormData = {
    itemName: "",
    itemCategory: "Produce",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: formData.itemName,
      category: formData.itemCategory,
    };

    onItemFormSubmit(newItem);

    setFormData(initialFormData);
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label htmlFor="itemName">Item Name:</label>
      <input
        type="text"
        id="itemName"
        name="itemName"
        value={formData.itemName}
        onChange={handleInputChange}
      />

      <label htmlFor="itemCategory">Category:</label>
      <select
        id="itemCategory"
        name="itemCategory"
        value={formData.itemCategory}
        onChange={handleInputChange}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
