import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from '../../app/categories/categories-selector';
import ProductCard from "../../components/product-card-component/product-cart.component";
import "../../components/category-preview/category-preview.styles.scss";

export default function Category() {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <div className="category-preview-container">
      <h2>
          <span className="title">{category.toLocaleUpperCase()}</span>
        </h2>
        <div className="preview">
          {products && products
            .map((product) => (
              <ProductCard key={product.id} products={product} />
            ))}
        </div>
      </div>
    </Fragment>
  );
}
