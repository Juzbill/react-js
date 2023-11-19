import React, { useState } from "react";
import { Typography, TextField, Button, Box, Paper, Grid } from "@mui/material";

interface SaleItem {
  itemName: string;
  quantity: number;
  price: number;
  tax: number;
  discount: number;
}

const SaleItemsForm: React.FC = () => {
  const [items, setItems] = useState<SaleItem[]>([]);
  const [itemName, setItemName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);

  const addItem = () => {
    const newItem: SaleItem = {
      itemName,
      quantity,
      price,
      tax,
      discount,
    };
    setItems([...items, newItem]);
    // Reset input fields
    setItemName("");
    setQuantity(1);
    setPrice(0);
    setTax(0);
    setDiscount(0);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Add Items for Sale
      </Typography>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              label="Item Name"
              fullWidth
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Quantity"
              type="number"
              fullWidth
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Price"
              type="number"
              fullWidth
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Tax"
              type="number"
              fullWidth
              value={tax}
              onChange={(e) => setTax(Number(e.target.value))}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Discount"
              type="number"
              fullWidth
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={addItem}
          style={{ marginTop: "10px" }}
        >
          Add Item
        </Button>
      </Paper>
      {items.length > 0 && (
        <div>
          <Typography variant="h5" style={{ marginTop: "20px" }}>
            Added Items:
          </Typography>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                Item: {item.itemName}, Quantity: {item.quantity}, Price: $
                {item.price}, Tax: {item.tax}%, Discount: {item.discount}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SaleItemsForm;
