/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/HomeUser.module.scss";
import { useState } from "react";
import Footer from "@/components/Footer";
import Header, { HeaderLink } from "@/components/Header";

export default function HomeUser() {
  const [messages, setMessages] = useState<{
    role: "user" | "assistant";
    content: string;
  }[]>([
    // { role: "user", content: "Hola" },
    // { role: "assistant", content: "Hola, ¿en qué puedo ayudarte?" },
    // { role: "user", content: "Quiero crear un contrato de compra-venta." },
    // { role: "assistant", content: "¿Qué tipo de contrato?" },
    // { role: "user", content: "Un contrato de compra-venta de un vehículo." },
    // { role: "assistant", content: "¿Qué tipo de vehículo?" },
    // { role: "user", content: "Un automóvil." },
    // {
    //   role: "assistant", content: `Bien, el contrato quedaría algo como: 
    // Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate voluptates placeat itaque. 
    // Sunt excepturi, sed perferendis aperiam eius eligendi tempore quis autem? Aspernatur optio dicta minus, soluta tenetur quam rem dolor, quisquam facilis in saepe inventore ad? 
    // Doloremque aliquam dolorem voluptate illum aliquid, ipsum deleniti autem optio. Modi qui cumque maiores quam facilis dolorum ad tenetur officia dolore architecto? 
    // Nisi illum maiores explicabo architecto commodi minima iste beatae, facilis ab! Tempora porro hic unde blanditiis nemo. Eum voluptatibus quod autem blanditiis sit nulla neque dolorum ea, aliquam eligendi optio sequi deleniti iste quibusdam molestiae nam accusamus ipsam voluptate aperiam ut ab. 
    // Voluptatem distinctio recusandae explicabo in quae eaque, consequatur commodi dolores quaerat quam obcaecati ipsum quas repellat error aperiam esse suscipit doloribus tempore repellendus quis ducimus eos, maiores hic temporibus. Animi excepturi harum totam, officia aperiam odit maxime, ea laboriosam nisi neque nam obcaecati itaque. 
    // Neque adipisci magnam deserunt aliquam, itaque quas, explicabo odit in nihil repellendus voluptates facere minus vero nostrum. Laborum magni, autem ea libero dolore consequuntur et optio a atque laudantium fuga, architecto ratione aliquam minima temporibus tempora labore repellendus nulla. 
    // Sed suscipit quo nemo quidem tempora veritatis, ratione commodi tenetur qui eveniet nam molestias nostrum consequatur officia distinctio nulla excepturi deserunt et quaerat eius neque dignissimos recusandae consequuntur. 
    // Quo vel, asperiores molestiae distinctio tenetur commodi reprehenderit in neque obcaecati fugiat harum quia doloribus quisquam iure exercitationem quod? Aperiam impedit delectus temporibus voluptates repudiandae natus excepturi tenetur dicta fugiat velit dolor iusto voluptate exercitationem inventore harum magni rem nesciunt, non perspiciatis? Nisi harum aliquid nobis, tempora nam vero, modi rem porro fuga perspiciatis officiis sed corporis facilis reiciendis? 
    // Dignissimos modi praesentium quam harum corrupti enim placeat iusto voluptatum quibusdam eius minima tempore, officiis, quis repellat mollitia laboriosam reprehenderit quisquam. Reiciendis pariatur veritatis placeat quae dolores quas.` },
  ]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessages(current => [...current, { role: "user", content: message }]);

    setLoading(true);

    console.log(messages);
    fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messageStack: [...messages, { role: "user", content: message }] }),
    }).then(response => response.json()).then(body => {
      console.log(body);
      setMessages(current => [...current, body.completion]);
      setLoading(false);
    });

    setMessage("");
  };

  return (
    <>
      <Header>
        <HeaderLink href="/home-user" valor="Chat" />
        <HeaderLink href="/casos" valor="Mis Casos" />
        <HeaderLink href="/documentos " valor="Mis Documentos" />

        <Image src="https://api.dicebear.com/6.x/thumbs/svg?seed=Cleo" alt="User" width={40} height={40} className={styles.userImage} />
      </Header>

      <main>
        <div className={styles.chat}>
          <Link href="/linkedin" className={styles.goAbogados}>
            Contratar un abogado
          </Link>
          {messages.length === 0 &&
            <div className={styles.chatBackground}>
              <h2 >Nuevo Chat</h2>
              <h3>Legal, Facil y Accesible</h3>
              <div className={styles.ejemplos}>

                <div className={styles.ejemplo}>
                  <Image src="/images/crearContrato.png" alt="Crear Contrato" width={100} height={100} />
                  <h3>Crear Contrato</h3>
                  <p>
                    "Crea un contrato de compra-venta."
                  </p>
                </div>

                <div className={styles.ejemplo}>
                  <Image src="/images/estrategiaJuridica.png" alt="Contrato Laboral" width={100} height={100} />
                  <h3>Contrato Laboral</h3>
                  <p>
                    "Crea un contrato para contratar a un empleado."
                  </p>
                </div>

                <div className={styles.ejemplo}>
                  <Image src="/images/contactoAbogados.png" alt="Asistencia Legal" width={100} height={100} />
                  <h3>Asistencia Legal</h3>
                  <p>
                    "Necesito asistencia para un problema legal."
                  </p>
                </div>
              </div>
            </div>
          }

          {messages.length > 0 &&
            <div className={styles.conversacion}>
              {messages.map((message, index) => (
                <div key={index} className={message.role === "user" ? styles.userMessage : styles.assistantMessage}>
                  <p>{message.content}</p>
                </div>
              ))}
            </div>
          }

          <form onSubmit={handleSubmit} className={styles.chatForm}>
            <input type="text" placeholder="Escribe un mensaje" value={!loading ? message : "Generando respuesta . . ."} onChange={(e) => setMessage(e.target.value)} disabled={loading} />
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