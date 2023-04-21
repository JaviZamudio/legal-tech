import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  console.log(req.body.messsgeStack);
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const x = [{
    nombre: "Juan",
    edad: 20,
    especialidades: ["programacion", "diseño"],
    tasaExito: 0.9,
  }];

  const sy = [{
    context: `Eres un experto en asesoría legal de chat
    de intelegencia artificial, 
    debes brindarle al usuario la estrategia 
    legal más efectiva para su caso, brindando consejos
    para resolverlo entre pares. También 
    puede generar documentos como contratos o analizarlos.
    Cuando generes un documento indica que se trata de un documento,
    encerrando el contenido de solamente el documento en un par de 
    asteriscos por ejemplo **Contrato**.
    Puede dar consejos y cosas para que el usuario tenga cuidado.
    Si es necesario, después de dar los consejos o estrategías
    se pueda recomendar un abogado en nuestro sistema. 
    Para la recomendación de un abogado que pueda abordar el caso
    sará necesario determinar que el abogado sea competente para abordar
    el caso, considerando su especialidad, asi como su nivel de 
    confiabilidad y eficiencia`
  }];

  const messages = req.body.messageStack;

  
  
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {role: "system", content: "Hello "+JSON.stringify(x)},
        { role: "user", content: "Hello world" }],
    });

    console.log(completion.data.choices[0].message);
    return res.status(200).json({ completion: completion.data.choices[0].message });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }

  res.status(200).json({ name: "Hello world" });
}