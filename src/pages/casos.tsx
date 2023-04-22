/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/casos.module.scss";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function casos() {
  return (
    <>
      <Head>
        <title>LegalTech</title>
        <meta name="description" content="Sitio para consulta inteligente y resolucion de problemas legales" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Logo.png" />
      </Head>

      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/Logo.png" alt="Logo" width={60} height={60} />
          <h1 className={styles.logoTitle}>
            LegalTech
          </h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="#">Casos</Link>
            </li>
            <li>
              <Link href="#">Documento Solicitado</Link>
            </li>
          </ul>
        </nav>
      </header>

      <aside>
        <h2> Casos </h2>
        <p>Familiar</p>
        <p>Mercantil</p>
        <p>Laboral</p>
        <p>Penal</p>
      </aside>

      <main>
        <div>
          <h3>Daniel Villalobos</h3>
          <p>Caso: 6781</p>
          <Image src="/images/alan.png" alt="Alan" width={200} height={200} />
          <p>Corregidora, Querétaro</p>
          <i>"Hola licenciado, me gustaría saber cuál es el estado actual de la demanda"</i>
        </div>

        <div>
          <h3>Javier Zamudio</h3>
          <p>Caso: 6781</p>
          <img src="/images/javi.png" alt="estrellas" width={200} height={200}/>
          <p>El Marquez, Querétaro</p>
          <i>"Buen dia Lic, ¿para cuando quiere los papeles? ."</i>
        </div>

        <div>
          <h3>Noel Vazquez</h3>
          <p>Caso: 2731</p>
          <img src="/images/noel.png" alt="estrellas" width={200} height={200}/>
          <p>Juriquilla, Querétaro</p>
          <i>"Le envio el comprobante de la transferencia adjunto el comprobante de mi transferencia"</i>
        </div>

        <div>
          <h3>Héctor Cortez Alaniz</h3>
          <p>Caso: 6969</p>
          <img src="/images/hector.png" alt="estrellas" width={200} height={200}/>
          <p>Corregidora, Querétaro</p>
          <i>"Confíe en mi."</i>
        </div>

        <div>
          <h3>Iván Catillo</h3>
          <p>Caso: 1535</p>
          <img src="/images/ivan.png" alt="estrellas" width={200} height={200}/>
          <p>Corregidora, Querétaro</p>
          <i>"¿Me puede ayudar con un contrato de compra-venta?"</i>
        </div>
      </main>
      <Footer />
    </>
  );
}