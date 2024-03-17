import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grocerycard from "../component/Grocerycard";

const Grocerylist = () => {
  const [groceryData, setGroceryData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchGroceryData = async () => {
      try {
        const response = await axios.get(
          `https://grocery-app-server-23yj.onrender.com/groceries`
        );
        setGroceryData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGroceryData();
  }, []);

  const handleDelete = (id) => {
    setGroceryData(groceryData.filter((grocery) => grocery.id !== id));
  };

  const handleEdit = (updatedGrocery) => {
    const updatedData = groceryData.map((grocery) =>
      grocery.id === updatedGrocery.id ? updatedGrocery : grocery
    );
    setGroceryData(updatedData);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "2600px",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        gap: "5px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "2500px",
          display: "flex",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <Button
          onClick={() => navigate("/")}
          style={{ width: "80px", height: "40px", backgroundColor: "#abeff1" }}
        >
          back
        </Button>
        <div
          style={{
            width: "80%",
            height: "1000px",
            display: "grid",
            gridTemplateRows: "repeat(2 ,1fr)",
            gridTemplateColumns: "repeat(3 ,1fr)",
            justifyItems: "center",
            gap: "20px",
          }}
        >
          {groceryData.map((grocery) => (
            <Grocerycard
              key={grocery.id}
              grocery={grocery}
              onDelete={handleDelete} // Pass the handleDelete function to Grocerycard
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div>
          <Button
            style={{
              backgroundColor: "#abeff1",
              margin: "0 5px",
            }}
          >
            1
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Grocerylist;
