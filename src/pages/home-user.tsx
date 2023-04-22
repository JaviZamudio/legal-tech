/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/HomeUser.module.scss";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function HomeUser() {
  const [messages, setMessages] = useState([]);

  return (
    <>
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
              <Link href="/">Casos</Link>
            </li>
            <li>
              <Link href="/">Documentos Solicitados</Link>
            </li>
            <Image src="https://api.dicebear.com/6.x/thumbs/svg?seed=Cleo" alt="User" width={40} height={40} className={styles.userImage} />
          </ul>
        </nav>
      </header>

      <main>
        <div className={styles.chat}>
          {messages.length === 0 &&
            <div className={styles.chatBackground}>
              <Link href="/abogados" className={styles.goAbogados}>
                Contratar un abogado
              </Link>
              <h2>Nuevo Chat</h2>
              <h3>Legal, Facil y Accesible</h3>
              <div className={styles.ejemplos}>
                <div className={styles.ejemplo}>
                  <Image src="/images/crearContrato.png" alt="Crear Contrato" width={200} height={200} />
                  <h3>Crear Contrato</h3>
                  <p>
                    "Crea un contrato de compra-venta."
                  </p>
                </div>
                <div className={styles.ejemplo}>
                  <Image src="/images/estrategiaJuridica.png" alt="Contrato Laboral" width={200} height={200} />
                  <h3>Contrato Laboral</h3>
                  <p>
                    "Crea un contrato para contratar a un empleado."
                  </p>
                </div>
                <div className={styles.ejemplo}>
                  <Image src="/images/contactoAbogados.png" alt="Asistencia Legal" width={200} height={200} />
                  <h3>Asistencia Legal</h3>
                  <p>
                    "Necesito asistencia para un problema legal."
                  </p>
                </div>
              </div>
            </div>
          }

          <form>
            <input type="text" placeholder="Escribe un mensaje" />
            <button type="submit">
              <Image src="/images/enviar.png" alt="Enviar" width={20} height={20} />
            </button>
          </form>
        </div>

        <p className={styles.terminos}>
          *Al usar este Chat, aceptas nuestros términos y condiciones de uso, que puedes consultar <span>aquí</span>.
        </p>
      </main>

      <Footer />
    </>
  );
}