import React from 'react'
import styles from "./categories.module.css"

const Categories = () => {

    const categories = ["Minutas", "Ensaladas", "Platos", "Guarniciones"]

  return (
    <section className={styles.categories_section}>
        {categories.map((category,index) => <div key={index}>{category}</div>)}
    </section>
  )
}

export default Categories