import Link from "next/link"
import styles from '../Styles/Footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={'contenedor ${styles.contenido}'}>
        <nav className={styles.navegacion}>
        <Link href="/Index"> HomePage </Link>
        <Link href="/Registrarse"> Registarse </Link>
        <Link href="/InicioSesion"> Inicio de sesion </Link>
        <Link href="/Pastilla"> Pastillas </Link>
      </nav>
      <div className={styles.info}>
       <p>Contactanos: 11 6018-4022</p>
       <p>Ayuda</p> 
       <Link href= "/Ayuda">¿Como funciona?</Link> 
       </div>
      </div>
    </footer>
  )
}

export default Footer
