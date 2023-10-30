import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./category-preview.styles.scss";
import ProductCard from "../product-card-component/product-cart.component";
export default function CategoryPreview({ title, products }) {
  return (
    <Fragment>
      <div className="category-preview-container">
        <h2>
          <Link to={title}>
          <span className="title">{title.toUpperCase()}</span>
          </Link>
         
        </h2>
        <div className="preview">
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} products={product} />
            ))}
        </div>
      </div>
    </Fragment>
  );
}
