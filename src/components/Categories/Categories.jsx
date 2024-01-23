import  { useState } from 'react'
import styles from "./categories.module.css"
import MenuCard from '../MenuCard/MenuCard'


const Categories = ({selectedCategory,onSelectCategory}) => {
  

  const categories = ["Minutas", "Ensaladas", "Platos", "Guarniciones"]
  const [activeCategory, setActiveCategory] = useState(null)
  

  const handleCategoryClick = (category) => {
    // Si la categoría seleccionada es la misma que la actual, elimina el filtro
    if (category === selectedCategory) {
      onSelectCategory(null);
      setActiveCategory(null);
    } else {
      onSelectCategory(category);
      setActiveCategory(category);
    }
  };
  return (
    <section className={styles.categories_section}>
        {categories.map((category,index) =>  <h3   className={activeCategory === category ? styles.activeCategory : styles.category}
          key={index}
          onClick={() => handleCategoryClick(category)}  
        >
          {category}
        </h3>)}

       
       
        
    </section>
  )
}

export default Categories