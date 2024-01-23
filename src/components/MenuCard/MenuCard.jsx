import {useEffect, useState} from 'react'
import styles from "./menuCard.module.css"
import { getFoods } from '../../service/food.service'

const MenuCard = ({selectedCategory}) => {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const data = await getFoods();
      setFoods(data);
    };

    fetchFoods();
  }, []);

  const filteredFoods = selectedCategory
    ? foods.filter((food) => food.category === selectedCategory)
    : foods;
    console.log("filteredFoods", filteredFoods);

  return (
    
    <section className={styles.menucard_section}>
        <div>
        
        {filteredFoods.map((food, index) => (
          <div key={index} className={styles.menucard}>
            <h1>{food.name}</h1>
            <h1>{food.price}</h1>
          </div>
        ))}
        </div>
    </section>
  )
}

export default MenuCard
