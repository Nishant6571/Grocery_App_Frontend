import { Box, Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Grocery = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    groceryName: "",
    groceryQuantity: "",
    groceryPrice: "",
    groceryDescription: "",
    groceryImage: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(data);
      await axios.post(
        "https://grocery-app-server-23yj.onrender.com/groceries",
        {
          data,
        }
      );
      setData({
        groceryName: "",
        groceryQuantity: "",
        groceryPrice: "",
        groceryDescription: "",
        groceryImage: "",
      });
    } catch (error) {
      console.error("Error adding grocery:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        gap: "20px",
      }}
    >
      <Button
        onClick={() => {
          navigate("/grocerylist");
        }}
        style={{ width: "100%", height: "40px", backgroundColor: "#abeff1" }}
      >
        Grocery List
      </Button>
      <Box
        backgroundColor={"teal"}
        borderRadius={"10px"}
        padding={"20px 20px 20px 20px"}
        w="400px"
        h="400px"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          gap: "20px",
        }}
      >
        <Heading>Add Grocery</Heading>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            gap: "10px",
          }}
          onSubmit={handleSubmit}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="grocery-name">Grocery Name:</label>
            <input
              value={data.groceryName}
              style={{ border: "2px solid black", borderRadius: "5px" }}
              type="text"
              id="grocery-name"
              onChange={(e) =>
                setData({ ...data, groceryName: e.target.value })
              }
            />
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="grocery-quantity">Grocery Quantity:</label>
            <input
              value={data.groceryQuantity}
              onChange={(e) =>
                setData({ ...data, groceryQuantity: e.target.value })
              }
              style={{ border: "2px solid black", borderRadius: "5px" }}
              type="text"
              id="grocery-quantity"
            />
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="grocery-price">Grocery Price:</label>
            <input
              value={data.groceryPrice}
              onChange={(e) =>
                setData({ ...data, groceryPrice: e.target.value })
              }
              style={{ border: "2px solid black", borderRadius: "5px" }}
              type="text"
              id="grocery-price"
            />
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="grocery-description">Grocery Description:</label>
            <input
              value={data.groceryDescription}
              onChange={(e) =>
                setData({ ...data, groceryDescription: e.target.value })
              }
              style={{ border: "2px solid black", borderRadius: "5px" }}
              type="text"
              id="grocery-description"
            />
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="grocery-image">Grocery Image:</label>
            <input
              value={data.groceryImage}
              onChange={(e) =>
                setData({ ...data, groceryImage: e.target.value })
              }
              style={{ border: "2px solid black", borderRadius: "5px" }}
              type="text"
              id="grocery-image"
            />
          </Box>
          <Button
            type="submit"
            style={{
              height: "40px",
              backgroundColor: "#abeff1",
            }}
          >
            Add Grocery
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Grocery;
