import {useState, useEffect} from 'react';
import axios from 'axios'
import CardList from './CardList'
import { SearchBox } from './SearchBox';

export default function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filtereddata, setFiltereddata] = useState(data)
  const url = "https://jsonplaceholder.typicode.com/users";

  const infoData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    infoData();
  }, []);

  useEffect(() => {
    const filtereddata = data.filter((item) =>  {
      return item.name.toLowerCase().includes(searchValue.toLowerCase())
     });
     setFiltereddata(filtereddata);
  }, [data, searchValue]);
  const handleChange = (e) =>{
    setSearchValue(e.target.value)
  }
  return (
    <div style={{textAlign:"center"}}>
      <p>Filter Monsters</p>
      <SearchBox  onChange={handleChange}/>   
      <CardList filtereddata={filtereddata}/>
    </div>
  );
}
