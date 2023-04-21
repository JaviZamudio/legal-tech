import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>LegalTech</title>
        <meta name="description" content="Sitio para consulta inteligente y resolucion de problemas legales" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
          <h1 className={styles.logoTitle}>
            LegalTech
          </h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/login">Iniciar Sesion</Link>
            </li>
            <li>
              <Link href="/register">Registrarse</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Bienvenido a <span>LegalTech</span>
          </h1>
          <h2 className={styles.motto}>
            Resuelve tus problemas legales y recibe asesoramiento
          </h2>
          <Link href="/chat" className={styles.boton}>
            <Image src="/images/cerebro_outline.png" alt="Cerebro" width={200} height={200} />
            Consulta con nuestra I.A.
          </Link>
        </div>

        <div className={styles.acciones}>
          <div className={styles.accion}>
            <Image src="/images/crear_contrato.png" alt="Crear Contrato" width={200} height={200} />
            <h3>Crear Contrato</h3>
            <p>
              Crea un contrato con nuestra I.A.
            </p>
          </div>
          <div className={styles.accion}>
            <Image src="/images/estrategia_juridica.png" alt="Estrategia Juridica" width={200} height={200} />
            <h3>Crea una Estrategia Juridica</h3>
            <p>
              Pregunta, asesorate y crea la mejor estrategia para tu caso
            </p>
          </div>
          <div className={styles.accion}>
            <Image src="/images/contacto_abogado.png" alt="Contacto Abogado" width={200} height={200} />
            <h3>Contacta a un Abogado</h3>
            <p>
              Contacta a un abogado para que te asesore y de seguimiento a tu caso
            </p>
          </div>
        </div>

        <div className={styles.acerca}>
          <h2>Acerca de LegalTech</h2>

          <div className={styles.caracteristicas}>
            <div className={styles.caracteristica}>
              <h3>Mision</h3>
              <p>
                Ser la plataforma líder en el mercado de servicios jurídicos online, conectando a los mejores profesionales del derecho con clientes potenciales que necesitan asesoramiento legal de calidad y confianza.
              </p>
            </div>
            <div className={styles.caracteristica}>
              <h3>Vision</h3>
              <p>
                Facilitar el acceso a la justicia a través de una red de abogados especializados en diferentes áreas del derecho, que ofrecen sus servicios de forma transparente, eficiente y personalizada, adaptándose a las necesidades y expectativas de cada cliente.
              </p>
            </div>
            <div className={styles.caracteristica}>
              <h3>Valores</h3>
              <ul>
                <li>Compromiso</li>
                <li>Etica</li>
                <li>Transparencia</li>
                <li>Innovacion</li>
                <li>Satisfaccion del cliente</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} LegalTech. Todos los derechos reservados.
        </p>
        <Link href="/privacy">Politica de Privacidad</Link>
        <Link href="/terms">Terminos y Condiciones</Link>
        <Link href="/contact">Contacto</Link>
        <Link href="/about">Acerca de LegalTech</Link>
      </footer>
    </>
  );
}
