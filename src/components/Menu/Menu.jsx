import React from 'react'
import Navbar from '../Navbar/Navbar'
import Title from '../Title/Title'
import MenuCard from '../MenuCard/MenuCard'
import styles from "./menu.module.css"
import Categories from '../Categories/Categories'
import Payment from '../Payment/Payment'


const Menu = () => {
  return (
    <section className={styles.menu_section}>
        <Title />
        <Categories />
        <MenuCard />
        <Payment />
        <Navbar />
    </section>
  )
}

export default Menu