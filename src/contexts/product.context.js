import {createContext, useState, useEffect} from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase.utils';

export const ProductsContext = createContext({
    categoriesMap: {}
})
 
export const ProductsProvider = ({children}) =>{
    const [categoriesMap, setCategoriesMap] = useState({});
   
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('collections');
            setCategoriesMap(categoryMap);
        }
      getCategoriesMap();
      }, []);
    const value = {categoriesMap}
    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}