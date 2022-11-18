import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Filters from "../Filters/Filters";

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  let products = [
    {
      title:
        "Speedracer multifunction watch with Ferrari FXX K 1:43 scale model",
      image:
        "https://store.ferrari.com/product_image/560971904581424/F/w640.jpg",
      price: "175",
      id: 1,
    },
    {
      title: "Matt black Aspire chronograph watch with steel strap",
      image:
        "https://store.ferrari.com/product_image/31840166392133301/F/w640.jpg",
      price: "295",
      id: 2,
    },
    {
      title: "Matt grey Aspire chronograph watch with steel strap",
      image:
        "https://store.ferrari.com/product_image/31840166392179447/F/w640.jpg",
      price: "150",
      id: 3,
    },
    {
      title: "Matt black Aspire chronograph watch with rose gold details",
      image:
        "https://store.ferrari.com/product_image/31840166392384740/F/w640.jpg",
      price: "200",
      id: 4,
    },
  ];
  return (
    <div>
      <Filters />
      <div className="d-flex justify-content-between container mt-5">
        {products.map((item) => (
          <Card
            onClick={() => setSelectedProduct(item.id)}
            key={item.id}
            style={{
              width: "18rem",
              border: selectedProduct === item.id ? "2px solid black" : "",
            }}
          >
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.price}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link>Buy</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
