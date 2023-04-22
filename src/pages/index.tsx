import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header, { HeaderLink } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>LegalAI</title>
        <meta name="description" content="Sitio para consulta inteligente y resolucion de problemas legales" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Logo.png" />
      </Head>

      <Header>
        <HeaderLink href="/#" valor="Iniciar Sesion" />
        <HeaderLink href="/##" valor="Registrarse" />
      </Header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <Image src="/images/hero_img.png" alt="Hero" fill className={styles.bg} />
          <h1 className={styles.title}>
            Servicios de contratación de abogados y consultoría con IA
          </h1>
          <h2 className={styles.motto}>
            Legal, Fácil y Accesible.
          </h2>
          <Link href="/home-user" className={styles.boton}>
            <Image src="/images/cerebro_button.png" alt="Cerebro" width={20} height={20} />
            Consulta con nuestra I.A.
          </Link>
        </div>

        <div className={styles.acciones}>
          <div className={styles.accion}>
            <Image src="/images/crearContrato.png" alt="Crear Contrato" width={100} height={100} />
            <h3>Crear Contrato</h3>
            <p>
              Crea un contrato con nuestra I.A.
            </p>
          </div>
          <div className={styles.accion}>
            <Image src="/images/estrategiaJuridica.png" alt="Estrategia Juridica" width={100} height={100} />
            <h3>Crea una Estrategia Juridica</h3>
            <p>
              Pregunta, asesorate y crea la mejor estrategia para tu caso
            </p>
          </div>
          <div className={styles.accion}>
            <Image src="/images/contactoAbogados.png" alt="Contacto Abogado" width={100} height={100} />
            <h3>Contacta a un Abogado</h3>
            <p>
              Contacta a un abogado para que te asesore y de seguimiento a tu caso
            </p>
          </div>
        </div>

        <div className={styles.acerca}>

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

      <Footer />
    </>
  );
}
