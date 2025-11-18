// Configura estos valores antes de subir a producción
// Lista de usuarios y contraseñas (puedes cambiarlas o agregarlas)
const usuarios = {
  recepcion: { nombre: "Recepción", pass: "recepcion123" },
  secretario: { nombre: "Oficina del Secretario", pass: "secretario123" },
  impulso: { nombre: "Dirección de Impulso Económico", pass: "impulso123" },
  emprendimiento: { nombre: "Dirección de Emprendimiento", pass: "emprendimiento123" },
  rural: { nombre: "Dirección de Desarrollo Rural y Agropecuario", pass: "rural123" },
  admin: { nombre: "admin", pass: "1234" }
};
const SUPABASE_URL = "https://gtruqvwrsmhhnflwtxdt.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0cnVxdndyc21oaG5mbHd0eGR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4MDM4ODQsImV4cCI6MjA3MTM3OTg4NH0.ZqIINGhpbtgAhyt_-T5KKmWeITbqzX5lp3VtSlDCkRk";
const GOOGLE_SHEETS_WEBHOOK = "https://script.google.com/macros/s/AKfycbwjh0BjaeU9lrdaAbRj6LsyW9B7QEFsRBAsqrMPTnjFInyOMXetk7tp4hAaV3InLqAs/exec";
