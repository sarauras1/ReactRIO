import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../cotegory-preview/category-preview"
import Category from "../category/category";
export default function Shop() {
  return (
    <Fragment>
      <Routes>
        <Route index element={<CategoryPreview />} />
        <Route path=":category" element={<Category/>}/>
      </Routes>
    </Fragment>
  );
}
