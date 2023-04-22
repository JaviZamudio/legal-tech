import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

export default async function handler(
  req: NextApiRequest & { body: { messageStack: any[] } },
  res: NextApiResponse
) {

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const leyes = [{
    nombre: "Constitucion Politica de los Estados Unidos Mexicanos",
    articulos: [
      {
        numero: 1,
        contenido: "En los Estados Unidos Mexicanos todo individuo gozará de las garantías que otorga esta Constitución, las cuales no podrán restringirse ni suspenderse, sino en los casos y con las condiciones que ella misma establece",
      },
      {
        numero: 2,
        contenido: `Está prohibida la esclavitud en los Estados Unidos Mexicanos. Los esclavos del 
        extranjero que entren al territorio nacional, alcanzarán, por ese solo hecho, su libertad y la 
        protección de las leyes`
      },
      {
        numero: 3,
        contenido: `La enseñanza es libre; pero será laica la que se dé en los establecimientos 
        oficiales de educación, lo mismo que la enseñanza primaria, elemental y superior que se 
        imparta en los establecimientos particulares.
        
        Ninguna corporación religiosa, ni ministro de algún culto, podrán establecer o dirigir 
        escuelas de instrucción primaria. 
        Las escuelas primarias particulares sólo podrán establecerse sujetándose a la vigilancia 
        oficial. 
        En los establecimientos oficiales se impartirá gratuitamente la enseñanza primaria. `
      }
    ],
  }];

  // const context = `Eres un experto en asesoría legal de chat
  //   de intelegencia artificial, 
  //   debes brindarle al usuario la estrategia 
  //   legal más efectiva para su caso, brindando consejos
  //   para resolverlo entre pares. También 
  //   puede generar documentos como contratos o analizarlos.
  //   Cuando generes un documento indica que se trata de un documento,
  //   encerrando el contenido de solamente el documento en un par de 
  //   asteriscos por ejemplo **Contrato**.
  //   Puede dar consejos y cosas para que el usuario tenga cuidado.
  //   Si es necesario, después de dar los consejos o estrategías
  //   se pueda recomendar un abogado en nuestro sistema. 
  //   Para la recomendación de un abogado que pueda abordar el caso
  //   sará necesario determinar que el abogado sea competente para abordar
  //   el caso, considerando su especialidad, asi como su nivel de 
  //   confiabilidad y eficiencia`;

  const context = `Eres un experto en leyes de Mexico. Te comunicarás con un abogado que está resolviendo un problema legal.
  Debes poner tu conocimiento legal a disposición del abogado, y brindarle información sobre las leyes que se aplican a su caso,
  o cualquier otra información que pueda ser útil para resolver su problema legal.
  Puedes dar consejos y cosas para que el abogado tenga cuidado.
  `;

  const { messageStack } = req.body; // [{ role: "user", content: "Hola" }]

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: context },
        { role: "system", content: "Leyes Importantes: " + JSON.stringify(leyes) },
        ...messageStack,
      ],
    });

    // console.log(completion.data.choices[0].message);
    return res.status(200).json({ completion: completion.data.choices[0].message });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }

  res.status(200).json({ name: "Hello world" });
}