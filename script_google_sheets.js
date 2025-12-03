function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // =========================
  // REGISTRO CON CITA (QR)
  // =========================
  if (d.tipo === "registro_qr") {
    var sh = ss.getSheetByName("registro_qr") || ss.insertSheet("registro_qr");

    if (sh.getLastRow() === 0) {
      sh.appendRow([
        "Fecha registro", "Nombre", "Correo", "Teléfono", "Motivo",
        "Delegación", "Negocio", "Fecha", "Departamento",
        "Hora entrada", "Hora salida", "QR ID"
      ]);
    }

    sh.appendRow([
      new Date(),
      d.nombre || "",
      d.correo || "",
      d.telefono || "",
      d.motivo || "",
      d.delegacion || "",
      d.negocio || "",
      d.fecha || "",
      d.departamento || "",
      d.hora_entrada || "",
      d.hora_salida || "",
      d.qr_id || ""
    ]);
  }

  // =========================
  // REGISTRO SIN CITA (VISITANTES)
  // =========================
  else if (d.tipo === "registro_visitantes") {
    var sh2 = ss.getSheetByName("registro_visitantes") || ss.insertSheet("registro_visitantes");

    if (sh2.getLastRow() === 0) {
      sh2.appendRow([
        "Fecha registro", "Nombre", "Correo", "Fecha Nac", "Domicilio",
        "Teléfono", "Motivo", "Delegación", "Negocio",
        "Departamento", "Hora entrada", "Hora salida", "QR ID"
      ]);
    }

    sh2.appendRow([
      new Date(),
      d.nombre || "",
      d.correo || "",
      d.fecha_nac || "",
      d.domicilio || "",
      d.telefono || "",
      d.motivo || "",
      d.delegacion || "",
      d.negocio || "",
      d.departamento || "",
      d.hora_entrada || "",
      d.hora_salida || "",
      d.qr_id || ""
    ]);
  }

  // =========================
  // REGISTRO DE ACCESOS (ESCANEO)
  // =========================
  else if (d.tipo === "acceso") {
    var sh3 = ss.getSheetByName("accesos") || ss.insertSheet("accesos");

    if (sh3.getLastRow() === 0) {
      sh3.appendRow([
        "Fecha registro", "Nombre", "Correo", "Departamento",
        "Fecha", "Hora", "QR ID", "Tipo"
      ]);
    }

    sh3.appendRow([
      new Date(),
      d.nombre || "",
      d.correo || "",
      d.departamento || "",
      d.fecha || "",
      d.hora || "",
      d.qr_id || "",
      d.tipo || ""
    ]);
  }

  return ContentService.createTextOutput("ok");
}
