import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Product from "./Product";
import Products from './img_2415-Pan_Red_main';

const Products = () => {
  const productData = [
   
    {
      id: 1,
      name: "Jacquard Woven Kurta  Churidar Material ",
      description:
        "The kurta is traditionally made of cotton or silk. It is worn plain or with embroidered decoration, such as chikan; and it can be loose or tight in the torso, typically falling either just above or somewhere below the knees of the wearer.",
      status: "Available",
       
    },
    {
      
      id: 2,
      name: "Stylised Flip Flops and Slippers",
      description:
        "Flip-flops are a type of sandal, typically worn as a form of casual wear.",
      status: "Available"
    },
    {
      id: 3,
      name: "ADIDAS Adispree Running Shoes",
      description:
        "The company was started by Adolf Dassler in his mother's house; he was joined by his elder brother Rudolf in 1924 under the name Gebrüder Dassler Schuhfabrik",
      status: "Out of Stock"
    },
    {
      id: 4,
      name: "Toys For Kids",
      description:
        "A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under certain circumstances.",
      status: "Available"
    }
  ];

  const { url } = useRouteMatch();

  /* Create an array of `<li>` items for each product */
  const linkList = productData.map((product) => {
    return (
      <li key={product.id}>
        <Link to={`${url}/${product.id}`}>{product.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <div style={{ display: "block", justifyContent: "space-between" }}>
        <div
          style={{
            float: "left",
            padding: "10px",
            width: "30%",
            background: "#f0f0f0",
            marginLeft: "auto"
          }}
        >
          <h3>Products</h3>
          <ul style={{ listStyleType: "none", padding: 0, fontSize: "15px" }}>
            {linkList}
          </ul>
        </div>
      </div>

      <Route path={`${url}/:productId`}>
        <Product data={productData} />
      </Route>
      <Route exact path={url}>
        <p style={{ textAlign: "center" }}>Please select a product.</p>
      </Route>
    </div>
  );
};

export default Products;
