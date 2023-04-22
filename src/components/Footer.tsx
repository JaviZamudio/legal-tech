import Link from "next/link";
import styles from "@/styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} LegalAI. Todos los derechos reservados.
      </p>
      <Link href="/#">Politica de Privacidad</Link>
      <Link href="/#">Terminos y Condiciones</Link>
      <Link href="/#">Contacto</Link>
      <Link href="/#">Acerca de LegalAI</Link>
    </footer>
  );
}
