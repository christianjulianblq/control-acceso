export default async function handler(req, res) {
  // Solo aceptar POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // URL de tu Google Apps Script
    const webhookUrl = "https://script.google.com/macros/s/AKfycbzeWNCxGg08ok1gGUMbiUDQUJsiXF0gcPrAu4LqYG0bwtcidlICB4VoNxHtAG79jRyo/exec";

    // Reenviar la petición a Google Apps Script
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    const text = await response.text();

    // Responder al navegador
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(text);

  } catch (err) {
    console.error("❌ Error en proxy:", err);
    res.status(500).json({ error: "Error enviando a Google Sheets" });
  }
}
