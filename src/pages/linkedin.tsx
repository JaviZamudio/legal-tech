import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/linkedin.module.scss";
import { useState } from "react";
import Footer from "@/components/Footer";
import Header, { HeaderLink } from "@/components/Header";

export default function Linkedin() {
  console.log(styles);
  return (
    <>
      <Head>
        <title>LegalAI</title>
        <meta name="description" content="Sitio para consulta inteligente y resolucion de problemas legales" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Logo.png" />
      </Head>

      <Header>
        <HeaderLink href="/casos" valor="Casos" />
        <HeaderLink href="/linkedin/#" valor="Documentos solicitados" />
        <Image src="https://api.dicebear.com/6.x/thumbs/svg?seed=Cleo" alt="User" width={40} height={40} className={styles.userImage} />
      </Header>
      
      <main>
        <div className={styles.mainContainer}>
          <div className={styles.contenedor}>
            <div className={styles.informacion}>
              <h3>Opiniones</h3>
              <div className={styles.valoracion}>
                <Image src="/images/estrella.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <p>0 más</p>
              </div>
              <div className={styles.valoracion}>
                <Image src="/images/estrella.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella_vacia.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <p>0 más</p>
              </div>
              <div className={styles.valoracion}>
                <Image src="/images/estrella.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella_vacia.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella_vacia.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <p>0 más</p>
              </div>
              <div className={styles.valoracion}>
                <Image src="/images/estrella.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella_vacia.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella_vacia.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella_vacia.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <p>0 más</p>
              </div>
              <div className={styles.valoracion}>
                <Image src="/images/estrella.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella_vacia.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella_vacia.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella_vacia.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <Image src="/images/estrella_vacia.png" alt="estrella1" width={16} height={16}  className={styles.estrella}/>
                <p>0 más</p>
              </div>
              <h3>Filtros</h3>
              <div className={styles.infoFiltro}>
                <div className={styles.filtros}>
                  <p>Familiar</p>
                  <div className={styles.checkbox}></div>
                </div>
                <div className={styles.filtros}>
                  <p>Mercantil</p>
                  <div className={styles.checkbox}></div>
                </div>
                <div className={styles.filtros}>
                  <p>Laboral</p>
                  <div className={styles.checkbox}></div>
                </div>
                <div className={styles.filtros}>
                  <p>Penal</p>
                  <div className={styles.checkbox}></div>
                </div>
              </div>
            </div>    
          </div>
          <div className={styles.tarjetas}> 
            <div className={styles.tarjeta}>
              <Image src="/images/abogado1.png" alt="abogado1" width={230} height={200} className={styles.images} />
              <div className={styles.datos}>
                <h3>Saul Alberto Contreras</h3>
                <p>Abogado Familiar</p>
                <div className={styles.estrella}>
                  <Image src="/images/estrella.png" alt="estrella1" width={16} height={16}  />
                  <Image src="/images/estrella.png" alt="estrella2" width={16} height={16} />
                  <Image src="/images/estrella.png" alt="estrella3" width={16} height={16} />
                  <Image src="/images/estrella.png" alt="estrella4" width={16} height={16} />
                  <Image src="/images/estrella.png" alt="estrella5" width={16} height={16} />
                </div>
                <p>Corregidora, Quéretaro</p>
                <p>Soy un abogado comprometido por brindarte el mejor de los servicios</p>
              </div>
            </div>
            <div className={styles.tarjeta}>
              <Image src="/images/abogado2.png" alt="abogado2" width={230} height={150} className={styles.images} />
              <div className={styles.datos}>
                <h3>Norma Ernestina Ponce</h3>
                <p>Abogado Mercantil</p>
                <div className={styles.estrella}>
                  <Image src="/images/estrella.png" alt="estrella1" width={16} height={16} />
                  <Image src="/images/estrella.png" alt="estrella2" width={16} height={16}/>
                  <Image src="/images/estrella.png" alt="estrella3" width={16} height={16}/>
                  <Image src="/images/estrella.png" alt="estrella4" width={16} height={16}/>
                  <Image src="/images/estrella.png" alt="estrella5" width={16} height={16} />
                </div>
                <p>Huimilpan, Quéretaro</p>
                <p>Tu aliada legal en el mundo de los negocios</p>
              </div>
            </div>
            <div className={styles.tarjeta}>
              <Image src="/images/abogado3.png" alt="abogado3" width={230} height={150} className={styles.images} />
              <div className={styles.datos}>
                <h3>Antonio Castillo Vargas</h3>
                <p>Abogado Penal</p>
                <div className={styles.estrella}>
                  <Image src="/images/estrella.png" alt="estrella1" width={16} height={16}/>
                  <Image src="/images/estrella.png" alt="estrella2" width={16} height={16}/>
                  <Image src="/images/estrella.png" alt="estrella3" width={16} height={16}/>
                  <Image src="/images/estrella.png" alt="estrella4" width={16} height={16}/>
                  <Image src="/images/estrella.png" alt="estrella5" width={16} height={16}/>
                </div>
                <p>Corregidora, Quéretaro</p>
                <p>Experiencia y compromiso en derecho penal</p>
              </div>
            </div>
            <div className={styles.tarjeta}>
              <Image src="/images/abogado4.png" alt="abogado4" width={230} height={150} className={styles.images} />
              <div className={styles.datos}>
                <h3>Alan Vázquez Trujillo</h3>
                <p>Abogado Laboral</p>
                <div className={styles.estrella}>
                  <Image src="/images/estrella.png" alt="estrella1" width={16} height={16} />
                  <Image src="/images/estrella.png" alt="estrella2" width={16} height={16}/>
                  <Image src="/images/estrella.png" alt="estrella3" width={16} height={16}/>
                  <Image src="/images/estrella.png" alt="estrella4" width={16} height={16}/>
                  <Image src="/images/estrella.png" alt="estrella5" width={16} height={16}/>
                </div>
                <p>Corregidora, Quéretaro</p>
                <p>Asesoria legal para trabajadores y empresas </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
