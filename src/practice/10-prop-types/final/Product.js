import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, image, price }) => {
  const imageURL = image && image.url;
  return (
    <article className="product">
      <img src={imageURL || defaultImage} alt={name} />
      <h4>{name || "Default Name"}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
// Product.defaultProps = {
//   price: 3.99,
//   name: "Sofa",
//   image: defaultImage
// };
export default Product;
