import React,{useEffect, useState} from 'react'
import styles from "./menuCard.module.css"
import { getFoods } from '../../service/food.service'
const MenuCard = () => {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const data = await getFoods();
      setFoods(data);
    };

    fetchFoods();
  }, []);
  return (
    
    <section className={styles.menucard_section}>
        <div>
          <p>
            {/* SACAR INFO DE LA BASE DE DATOS */}
            Pechuga grille al verdeo con arroz
            Pastel de papa
            Pollo al horno con papas
            Carne al horno con pure
            Pure de papas
            Milanesa napolitana con Pure
            Milanesa de berenjenas con ensalada
            Ensalada multicolor con atun 
            Ensalada cesar con pollo
            Ensalada con legumbres
            Canelones de verdura con salsa blanca y tuco
            Ravioles 
            Ñoquis caseros

          </p>
          {foods.map((food,index) => <div key={index}>{food.name}</div>)}
        </div>
    </section>
  )
}

export default MenuCard