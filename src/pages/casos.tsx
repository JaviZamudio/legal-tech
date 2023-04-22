/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Casos.module.scss";
import { useState } from "react";
import Footer from "@/components/Footer";
import Header, { HeaderLink } from "@/components/Header";

export default function Casos() {
  console.log(styles);
  return (
    <>
      <Head>
        <title>LegalTech</title>
        <meta name="description" content="Sitio para consulta inteligente y resolucion de problemas legales" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Logo.png" />
      </Head>

      {/* <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/Logo.png" alt="Logo" width={60} height={60} />
          <h1 className={styles.logoTitle}>
            LegalTech
          </h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/login">Casos</Link>
            </li>
            <li>
              <Link href="/register">Documento Solicitados</Link>
            </li>
          </ul>
        </nav>
      </header> */}
      <Header>
        <HeaderLink href="/casos" valor="Casos" />
        <HeaderLink href="/docs" valor="Documentos Solicitados" />
        <Image src="https://api.dicebear.com/6.x/thumbs/svg?seed=Bandit" alt="User" width={40} height={40} className={styles.userImage} />
      </Header>

      <main>
        <div className={styles.mainContainer}>
          <div className={styles.contenedor}>
            <aside className={styles.aside}>
              <h2> Casos </h2>
              <p>Familiar</p>
              <p>Mercantil</p>
              <p>Laboral</p>
              <p>Penal</p>
            </aside>
          </div>
          <div className={styles.tarjetas}>
            <div className={styles.tarjeta}>
              <Image src="/images/alan.png" alt="Alan" width={200} height={200}  className={styles.images}/>
              <div className={styles.datos}>
                <h3>Daniel Villalobos</h3>
                <p>Caso: 6781</p>
                <p>Corregidora, Querétaro</p>
                <i>"Hola licenciado, me gustaría saber cuál es el estado actual de la demanda, espero su respuesta"</i>
              </div>
              
            </div>
            <div className={styles.tarjeta}>
              <Image src="/images/javi.png" alt="estrellas" width={200} height={200}  className={styles.images}/>
              <div className={styles.datos}>
                <h3>Javier Zamudio</h3>
                <p>Caso: 6781</p>              
                <p>El Marquez, Querétaro</p>
                <i>"Buen dia Lic, ¿para cuando quiere los papeles? No los tengo en la mano en este momento."</i>
              </div>
              
            </div>

            <div className={styles.tarjeta}>
              <Image src="/images/noel.png" alt="estrellas" width={200} height={200} />
              <div className={styles.datos}>
                <h3>Noel Vazquez</h3>
                <p>Caso: 2731</p>
                <p>Juriquilla, Querétaro</p>
                <i>"Le envio el comprobante de la transferencia adjunto el comprobante de mi transferencia"</i>
              </div>
            </div>

            <div className={styles.tarjeta}>
              <Image src="/images/ivan.png" alt="estrellas" width={200} height={200} />
              <div className={styles.datos}>
                <h3>Ivan Castillo</h3>
                <p>Caso: 1535</p>
                <p>Humilpan, Querétaro</p>
                <i>"¡Hola! ¿Me podría apoyar con la realización de un contrato de compra-venta? ¡Gracias!"</i>
              </div>
            </div>

            <div className={styles.tarjeta}>
              <Image src="/images/hector.png" alt="estrellas" width={200} height={200} />
              <div className={styles.datos}>
                <h3>Héctor Cortez</h3>
                <p>Caso: 6969</p>
                <p>Corregidora, Querétaro</p>
                <i>"¡Hola! Podría darme un consejo. Es que creo que el juez no me está creyendo en lo que digo"</i>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}