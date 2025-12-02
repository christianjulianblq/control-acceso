export default async function handler(req, res) {
  // Solo aceptar POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    // Agregar automáticamente el "creado_por" si no viene en el body
    const data = {
      ...req.body,
      creado_por: req.body.creado_por || "DESCONOCIDO"
    };

    console.log("📥 Datos recibidos en /api/sheets:", data);

    // URL de tu Google Apps Script
    const webhookUrl = "https://script.google.com/macros/s/AKfycbwjh0BjaeU9lrdaAbRj6LsyW9B7QEFsRBAsqrMPTnjFInyOMXetk7tp4hAaV3InLqAs/exec";

    // Reenviar la petición a Google Apps Script
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    console.log("📤 Enviando a Google Apps Script:", JSON.stringify(data));

    const text = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(text);

  } catch (err) {
    console.error("❌ Error en proxy:", err);
    res.status(500).json({ error: "Error enviando a Google Sheets" });
  }
}
