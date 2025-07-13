function mostrarInfo(ramo) {
  const info = {
    teoria_general: "Prerrequisito: Teoría General de la Norma Jurídica",
    electivo1: "Prerrequisito: Teoría y Política Económica",
    pensamiento_critico: "Prerrequisitos: Teoría General de la Norma Jurídica, Sociedad y Derecho, Técnicas de Estudio, Expresión Oral y Escrita",
    proceso_civil: "Prerrequisito: Disposiciones Comunes a Todo Procedimiento",
    contratacion_civil: "Prerrequisito: Teoría de las Obligaciones"
  };

  document.getElementById('infoAsignatura').innerText = info[ramo];
  document.getElementById('popup').style.display = 'block';
}

function cerrarPopup() {
  document.getElementById('popup').style.display = 'none';
}