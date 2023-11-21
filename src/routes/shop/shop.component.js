import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../cotegory-preview/category-preview"
import Category from "../category/category";
import { useDispatch } from "react-redux";
import {  getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../app/categories/categories-reducer";

export default function Shop() {
  const dispatch = useDispatch();
 
  const getCategoriesMap = async () => {
    const categoriesArray = await getCategoriesAndDocuments('collections');
    dispatch(setCategories(categoriesArray));
    console.log(categoriesArray, "from dispatch")
  };

  useEffect( () => {  
    getCategoriesMap()
   
  }, []);

 
  return (
    <Fragment>
      <Routes>
        <Route index element={<CategoryPreview />} />
        <Route path=":category" element={<Category/>}/>
      </Routes>
    </Fragment>
  );
}
