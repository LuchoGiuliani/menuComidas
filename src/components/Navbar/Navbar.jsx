
import styles from "./navbar.module.css"
import {linkSocial} from "./constants"

const Navbar = () => {
  return (
    <section className={styles.navbar_section}>
      {linkSocial.map((link, index) => 
      <a href={link.src} key={index}>
        <img src={link.image} alt="Redes sociales" />
      </a> )}
    </section>
  )
}

export default Navbar