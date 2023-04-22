import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/linkedin.module.scss";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Linkedin() {
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
              <Link href="/login">Iniciar Sesion</Link>
            </li>
            <li>
              <Link href="/register">Registrarse</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className={styles.mainContainer}>
          <div className={styles.contenedor}>
          </div>
          <div className={styles.tarjetas}>
            <p>hola</p>
            <div className={styles.tarjeta}>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}