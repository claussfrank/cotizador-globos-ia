import { AIProjectClient } from "@azure/ai-projects";
import { DefaultAzureCredential } from "@azure/identity";

export async function generarPropuestaComercial(datosCotizacion) {
  const projectEndpoint = process.env.FOUNDRY_PROJECT_ENDPOINT;
  const agentName = process.env.FOUNDRY_AGENT_NAME || "cotizador-globos-ia";

  if (!projectEndpoint) {
    throw new Error("Falta configurar la variable FOUNDRY_PROJECT_ENDPOINT.");
  }

  if (
    datosCotizacion === null ||
    typeof datosCotizacion !== "object" ||
    Array.isArray(datosCotizacion)
  ) {
    throw new TypeError("Los datos de cotización deben ser un objeto.");
  }

  console.log("FOUNDRY_PROJECT_ENDPOINT:", projectEndpoint);
console.log("FOUNDRY_AGENT_NAME:", agentName);

const credential = new DefaultAzureCredential();

try {
  const token = await credential.getToken(
    "https://cognitiveservices.azure.com/.default"
  );

  console.log("TOKEN OK:", !!token);
} catch (tokenError) {
  console.error("TOKEN ERROR:");
  console.error(tokenError);
}

  const client = new AIProjectClient(
    projectEndpoint,
    new DefaultAzureCredential()
  );
  const openAIClient = client.getOpenAIClient();
  let datos;

  try {
    datos = JSON.stringify(datosCotizacion);
  } catch (error) {
    throw new TypeError("Los datos de cotización deben ser serializables.", {
      cause: error
    });
  }

  if (typeof datos !== "string") {
    throw new TypeError("Los datos de cotización deben ser serializables.");
  }

  let response;
  try {
    response = await openAIClient.responses.create(
      {
        input: `Genera una propuesta comercial para esta cotización:\n${datos}`
      },
      {
        body: {
          agent_reference: {
            name: agentName,
            type: "agent_reference"
          }
        }
      }
    );
  } catch (error) {
    throw new Error(
      `No se pudo obtener la propuesta comercial del agente "${agentName}".`,
      { cause: error }
    );
  }

  if (
    !response ||
    typeof response.output_text !== "string" ||
    !response.output_text.trim()
  ) {
    throw new Error("El agente no devolvió una propuesta comercial en texto.");
  }

  return response.output_text.trim();
}
