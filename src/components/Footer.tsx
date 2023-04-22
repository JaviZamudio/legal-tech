import Link from "next/link";
import styles from "@/styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} LegalTech. Todos los derechos reservados.
      </p>
      <Link href="/privacy">Politica de Privacidad</Link>
      <Link href="/terms">Terminos y Condiciones</Link>
      <Link href="/contact">Contacto</Link>
      <Link href="/about">Acerca de LegalTech</Link>
    </footer>
  );
}