import React, { useRef, useState, useEffect } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";

const Grocerycard = ({ grocery, onDelete, onEdit }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [formData, setFormData] = useState({
    groceryName: "",
    groceryQuantity: "",
    groceryPrice: "",
    groceryDescription: "",
    groceryImage: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        groceryName: grocery.groceryName,
        groceryQuantity: grocery.groceryQuantity,
        groceryPrice: grocery.groceryPrice,
        groceryDescription: grocery.groceryDescription,
        groceryImage: grocery.groceryImage,
      });
    }
  }, [isOpen, grocery]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `https://grocery-app-server-23yj.onrender.com/groceries/${grocery.id}`,
        formData
      );

      onEdit({ ...formData, id: grocery.id }); // Update the card with edited data
      onClose();
    } catch (error) {
      console.error("Error updating grocery:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://grocery-app-server-23yj.onrender.com/groceries/${grocery.id}`
      );
      onDelete(grocery.id); // Remove the deleted card from the list
    } catch (error) {
      console.error("Error deleting grocery:", error);
    }
  };

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Grocery Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Grocery Name:</FormLabel>
              <Input
                name="groceryName"
                value={formData.groceryName}
                onChange={handleChange}
                ref={initialRef}
                placeholder="Grocery Name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Grocery Quantity:</FormLabel>
              <Input
                name="groceryQuantity"
                value={formData.groceryQuantity}
                onChange={handleChange}
                placeholder="Grocery Quantity"
              />
            </FormControl>
            {/* Add similar FormControl components for other fields */}
          </ModalBody>

          <ModalFooter>
            <Button
              style={{
                width: "80px",
                height: "40px",
                backgroundColor: "#abeff1",
              }}
              mr={3}
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              style={{
                width: "80px",
                height: "40px",
                backgroundColor: "#abeff1",
              }}
              onClick={onClose}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div
        className="grocery-card"
        style={{
          width: "300px",
          height: "400px",
          gap: "10px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#6cb5b7",
          borderRadius: "10px",
        }}
      >
        <img
          className="grocery-image"
          style={{ width: "200px", height: "200px", borderRadius: "10px" }}
          src={grocery.groceryImage}
          alt={grocery.groceryName}
        />
        <div className="grocery-details">
          <h3 className="grocery-name">Name:{grocery.groceryName}</h3>
          <p className="grocery-quantity">
            Quantity: {grocery.groceryQuantity}
          </p>
          <p className="grocery-price">Price: ${grocery.groceryPrice}</p>
          <p className="grocery-description">
            Description:{grocery.groceryDescription}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "200px",
          }}
        >
          <Button
            style={{
              width: "80px",
              height: "40px",
              backgroundColor: "#abeff1",
            }}
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button
            style={{
              width: "80px",
              height: "40px",
              backgroundColor: "#abeff1",
            }}
            onClick={handleOpen}
          >
            Edit
          </Button>
        </div>
      </div>
    </>
  );
};

export default Grocerycard;
