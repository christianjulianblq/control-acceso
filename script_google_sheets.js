function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (data.tipo === "registro_qr") {
    var sheet1 = ss.getSheetByName("registro_qr") || ss.insertSheet("registro_qr");
    sheet1.appendRow([new Date(), data.nombre, data.correo , data.telefono , data.motivo , data.delegacion , data.negocio , data.departamento , data.hora_entrada, data.hora_salida, data.qr_id]);
  } else if (data.tipo === "registro_visitantes") {
    var sheet2 = ss.getSheetByName("registro_visitantes") || ss.insertSheet("registro_visitantes");
    sheet2.appendRow([new Date(), data.nombre, data.correo, data.fecha_nac, data.domicilio, data.telefono, data.motivo, data.delegacion, data.negocio , data.departamento, data.hora_entrada, data.hora_salida, data.qr_id]);
  }
  return ContentService.createTextOutput("OK");
}
