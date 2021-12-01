import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { FoodItem } from "./FoodItem";

export function Food() {

  const [searchItem, setSearchItem] = useState('');
  const [foods, setFoods] = useState(null);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=fea4671adf2549c5afbc3894115c9df6&query=${searchItem}`)
      .then((data) => data.json())
      .then(data1 => {
        console.log(data1);
        setFoods(data1.results);
      });
  }, [searchItem]);



  return <div>
    <TextField id="outlined-basic" label="search Food" variant="outlined" onChange={(event) => setSearchItem(event.target.value)} />
    <div className="Food-items">

      {foods ? foods.map(({ title, image }, idx) => <FoodItem title={title} image={image} key={idx} />) : ''}
    </div>
  </div>;

}
