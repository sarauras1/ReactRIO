import { Fragment } from "react";
import "./categories.styles.scss";
import { useNavigate } from "react-router-dom";
export default function Category({ category }) {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
 const navigateHandler = () => navigate(route);
  return (
    <Fragment>
      <div className="category-container" onClick={navigateHandler}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>shop now</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
