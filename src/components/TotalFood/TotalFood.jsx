import React, { useEffect, useState } from "react";
import styles from "./totalfood.module.css";
import { getFoods } from "../../service/food.service";

const TotalFood = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const data = await getFoods();
      setFoods(data);
    };

    fetchFoods();
  }, []);

  const handleToggleActive = (index) => {
    setFoods((prevFoods) => {
      const updatedFoods = [...prevFoods];
      updatedFoods[index] = {
        ...updatedFoods[index],
        activado: !updatedFoods[index].activado
      };
      return updatedFoods;
    });
  };

  return (
    <section className={styles.totalfood_section}>
      {foods.map((food, index) => (
        <div key={index}>
          <div>{food.name}</div>
          <div>{food.price}</div>
          <div>{food.category}</div>
          <button onClick={() => handleToggleActive(index)}>
            {food.activado ? "Desactivar" : "Activar"}
          </button>
        </div>
      ))}
    </section>
  );
};

export default TotalFood;
