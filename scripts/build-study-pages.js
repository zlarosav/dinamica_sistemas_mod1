const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "build");

const weeks = [
  {
    id: 1,
    input: "Semana1.html",
    title: "Semana 1",
    pdf: "Teoria Semana1.pdf",
    summary: "Definición de sistema, elementos, entradas, salidas, ambiente, objetivos y clasificaciones.",
    refs: [
      [2, "Definiciones de sistema: componentes relacionados que interactuan para lograr un objetivo comun."],
      [2, "Definiciones de sistema: grupo de unidades combinadas y todo integrado u organizado."],
      [3, "Un sistema como combinacion de componentes que actuan para alcanzar un objetivo especifico."],
      [3, "Sistema conceptual: elementos relacionados formados por conceptos, como el lenguaje."],
      [3, "Sistema compuesto por objetos: maquina formada por varias partes."],
      [3, "Sistema formado por sujetos: individuos dentro de una organizacion."],
      [6, "Entrada o insumo: aquello que el sistema recibe o importa de su mundo exterior."],
      [6, "Ejemplo de entrada: el computador necesita energia electrica y datos para procesar informacion."],
      [6, "Ejemplo de entrada: la planta necesita luz solar, agua y nutrientes para procesar su alimento."],
      [7, "Salida o producto: resultado final de la operacion o procesamiento de un sistema."],
      [7, "Flujos de salida: permiten exportar el resultado de las operaciones al medio ambiente."],
      [7, "Ejemplo de salida: el computador produce energia calorica e informacion."],
      [8, "Salidas positivas y negativas: su relacion determina la supervivencia del sistema."],
      [8, "Sistema viable: sobrevive adaptado al medio y a sus exigencias cambiantes."],
      [8, "Autoorganizacion: mantener una estructura permanente y modificarla segun las circunstancias."],
      [8, "Autocontrol: mantener las principales variables dentro de ciertos limites."],
      [9, "Ambiente: medio que rodea externamente al sistema."],
      [9, "Ambiente o entorno: fuente de recursos y amenazas para el sistema."],
      [9, "Sistema y ambiente: interaccion constante, interrelacion e interdependencia."],
      [10, "Supersistema: cuando el ambiente se analiza como un sistema mayor."],
      [11, "Procesamiento o transformador: mecanismo de conversion de entradas en salidas."],
      [11, "Retroalimentacion: compara la salida con un criterio previamente establecido."],
      [12, "Objetivos: tambien llamados propositos, finalidades, logros, misiones, visiones o metas."],
      [12, "Objetivos: determinan el funcionamiento y coordinan elementos, relaciones, insumos y productos."],
      [14, "Sistema abierto: interactua con su ambiente."],
      [14, "Ejemplos de sistema abierto: sistema hospitalario, perro, familia y estacion de radio."],
      [14, "Sistema cerrado: levanta barreras para evitar influencias del ambiente."],
      [14, "Ejemplos de sistema cerrado: motor de auto, reloj desechable y llanta de auto."],
      [14, "Sistema fisico o concreto: compuesto por equipos, maquinaria, objetos y cosas reales."],
      [14, "Sistema abstracto: compuesto por conceptos, planes, hipotesis e ideas."],
      [14, "Sistema natural: abunda en la naturaleza, como rios o bosques."],
      [14, "Sistema artificial: creado por el hombre, como trenes, aviones o computadoras."],
      [15, "Sistema simple: pocos elementos y pocas relaciones."],
      [15, "Sistema complejo: numerosos elementos y relaciones entre ellos."],
      [15, "Sistema discreto: definido por variables discretas."],
      [15, "Sistema continuo: definido por variables continuas."],
      [15, "Sistema dinamico: mantiene retroalimentacion de la informacion."],
      [15, "Sistema estatico: la salida depende de la entrada y no reacciona ante influjos del medio."],
      [16, "Checkland, sistemas fisicos disenados: martillos, automoviles, tranvias y cohetes espaciales."],
      [17, "Checkland, sistemas abstractos disenados: matematicas, poemas y filosofias."],
    ],
  },
  {
    id: 2,
    input: "Semana2.html",
    title: "Semana 2",
    pdf: "Teoria Semana2.pdf",
    summary: "Propiedades de sistemas: apertura, totalidad, objetivo, equifinalidad, feedback, entropía, sinergia, homeostasis, recursividad y propiedades emergentes.",
    refs: [
      [2, "Sistemas abiertos: relacion permanente con el ambiente e intercambio de energia, materia e informacion."],
      [2, "Ejemplos de sistemas abiertos vivos: celula, planta, insecto, hombre, grupo social y familia."],
      [3, "Sistemas cerrados: muy poco intercambio de energia, materia o informacion con el ambiente."],
      [3, "Ejemplo de sistema cerrado: reaccion quimica en recipiente sellado y aislado."],
      [4, "Sistemas abiertos: tienden a la evolucion constante y al orden estructural."],
      [4, "Sistemas cerrados: tendencia a la indiferenciacion y al desorden."],
      [5, "Totalidad: objetos y propiedades solo se comprenden como funciones del sistema total."],
      [5, "Totalidad: un sistema no es una coleccion aleatoria de componentes."],
      [5, "Totalidad: cada componente influye y es influido por todos los otros."],
      [6, "Objetivo: los sistemas organicos y sociales estan orientados hacia un objetivo."],
      [6, "Objetivo: tendencia del sistema a mantenerse vivo antes de desintegrarse."],
      [7, "Equifinalidad: resultados identicos pueden tener origenes distintos."],
      [7, "Equifinalidad: lo decisivo es la naturaleza de la organizacion y del proceso."],
      [7, "Multifinalidad: diferentes resultados pueden ser producidos por las mismas causas."],
      [8, "Proteccion y crecimiento: fuerzas homeostatica y morfogenetica."],
      [8, "Fuerza homeostatica: hace que el sistema continue como estaba anteriormente."],
      [8, "Fuerza morfogenetica: causa los cambios del sistema."],
      [8, "Ambas fuerzas permiten estabilidad y adaptacion mediante mecanismos de feedback."],
      [9, "Equipotencialidad: distintos estados pueden partir de una misma situacion inicial."],
      [9, "Equipotencialidad: imposibilidad de predicciones deterministas; el futuro es impredecible."],
      [9, "Ejemplo familiar: tras fallecer el padre, el hijo mayor puede asumir funciones parentales."],
      [10, "Retroalimentacion: puede ser positiva o negativa."],
      [10, "Retroalimentacion positiva: crecimiento de divergencias, como bola de nieve."],
      [10, "Retroalimentacion positiva: dejada a si misma conduce a la destruccion del sistema."],
      [10, "Retroalimentacion negativa: termostato; conduce a comportamiento adaptativo o finalista."],
      [10, "Ejemplo clasico: termostato como retroalimentacion negativa."],
      [11, "Retroalimentacion negativa: activa mecanismos homeostaticos y reduce la desviacion."],
      [11, "Retroalimentacion positiva: activa mecanismos de crecimiento y lleva al cambio."],
      [12, "Entropia: proceso por el que el sistema tiende a consumirse, desorganizarse y morir."],
      [12, "Entropia: se basa en la segunda ley de la termodinamica."],
      [12, "Entropia en sistemas aislados: siempre creciente."],
      [13, "Neguentropia: fuerza opuesta que produce mayores niveles de orden en sistemas abiertos."],
      [13, "Neguentropia: energia importada del ambiente para mantener la organizacion y sobrevivir."],
      [14, "Sinergia: integracion de elementos con resultado mayor que la suma simple."],
      [14, "Sinergia: del griego synergos; cooperacion y efecto superior a la suma individual."],
      [15, "Homeostasis: rasgo de sistemas autorregulados o ciberneticos."],
      [15, "Homeostasis: mantiene equilibrio dinamico y estructura constante dentro de limites."],
      [16, "Recursividad: elementos sistemicos con caracteristicas similares a las del sistema."],
      [16, "Recursividad: cada objeto puede ser una totalidad independiente."],
      [17, "Propiedad emergente: en equipo de baloncesto, el espiritu de equipo."],
    ],
  },
  {
    id: 3,
    input: "Semana3.html",
    title: "Semana 3",
    pdf: "Teoria Semana3.pdf",
    summary: "Organización como sistema abierto, características organizacionales, modelo de Katz y Kahn y modelo sociotécnico de Tavistock.",
    refs: [
      [3, "Organizacion como sistema abierto: influye sobre el ambiente y recibe influencia de el."],
      [4, "Caracteristica 1: comportamiento probabilistico y no determinista."],
      [4, "Comportamiento no determinista: la organizacion no funciona de manera totalmente fija o predecible."],
      [4, "Caracteristica 2: organizaciones como parte de una sociedad mayor y de partes menores."],
      [5, "Caracteristica 3: interdependencia de las partes."],
      [7, "Homeostasis: tendencia a permanecer en equilibrio y mantener el status quo interno."],
      [7, "Adaptabilidad: cambio del sistema para ajustarse al ambiente externo."],
      [7, "Homeostasis y adaptabilidad: conservacion del equilibrio frente a ajuste ante nuevas exigencias."],
      [11, "Limites o fronteras: barreras entre sistema y ambiente."],
      [11, "Limites o fronteras: definen campo de accion y grado de apertura."],
      [8, "Morfogenesis: caracteristica organizacional asociada con el cambio del sistema."],
      [9, "Katz y Kahn: modelo organizacional basado en teoria de sistemas y teoria de las organizaciones."],
      [9, "Katz y Kahn: aplicacion de la teoria general de sistemas al analisis organizacional."],
      [10, "Importacion: la organizacion recibe insumos del ambiente."],
      [10, "Transformacion: la organizacion procesa insumos en productos, servicios o resultados."],
      [10, "Exportacion: los sistemas abiertos exportan productos hacia el ambiente."],
      [10, "Ciclos repetitivos: importacion, transformacion y exportacion."],
      [10, "Entropia negativa: reabastecimiento de energia para mantener la estructura organizacional."],
      [11, "Informacion como insumo: senales sobre el ambiente y el funcionamiento del sistema."],
      [11, "Estado de equilibrio: flujo continuo de energia y productos con relaciones estables."],
      [11, "Diferenciacion: multiplicacion y elaboracion de funciones, roles y diferenciacion interna."],
      [11, "Equifinalidad: un sistema alcanza el mismo estado final por diversos caminos."],
      [11, "Limites o fronteras: definen el campo de accion y el grado de apertura."],
      [12, "Tavistock: la organizacion se concibe como sistema sociotecnico."],
      [12, "Tavistock: subsistemas tecnico y social."],
      [12, "Subsistema tecnico: tecnologia, territorio y tiempo."],
      [12, "Subsistema tecnico: responsable de la eficiencia potencial."],
      [12, "Subsistema social: individuos, relaciones sociales y exigencias formales e informales."],
      [12, "Subsistemas tecnico y social: interrelacionados, interdependientes y mutuamente influyentes."],
      [12, "Enfoque sociotecnico: combinacion de tecnologia y subsistema social."],
      [13, "Modelo abierto de Tavistock: importacion, conversion y exportacion."],
      [13, "Tarea primaria: permitir la supervivencia de la organizacion dentro del proceso."],
      [13, "Sistema de produccion: requiere organizacion tecnologica y organizacion de trabajo."],
      [13, "Tecnologia: limita la especie de organizacion de trabajo posible."],
      [14, "Doble funcion organizacional: tecnica y social."],
      [14, "Funcion tecnica: coordinacion del trabajo e identificacion de la autoridad."],
      [14, "Funcion social: medios para relacionar personas y lograr que trabajen juntas."],
      [14, "Subsistema tecnico: determinado por requisitos tipicos de las tareas ejecutadas."],
      [14, "Subsistemas tecnico y social: coexisten; si uno se altera, el otro recibe repercusiones."],
      [14, "Subsistema tecnico: no debe visualizarse aisladamente del subsistema social."],
    ],
  },
];

function readBank(fileName) {
  const source = fs.readFileSync(path.join(ROOT, fileName), "utf8");
  const match = source.match(/const bank = (\[.*?\]);/s);
  if (!match) {
    throw new Error(`No se encontro el banco de preguntas en ${fileName}`);
  }
  return JSON.parse(match[1]);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function polishSpanish(value) {
  const replacements = [
    ["interactuan", "interactúan"],
    ["interactua", "interactúa"],
    ["comun", "común"],
    ["combinacion", "combinación"],
    ["actuan", "actúan"],
    ["especifico", "específico"],
    ["maquina", "máquina"],
    ["organizacion", "organización"],
    ["Organizacion", "Organización"],
    ["energia", "energía"],
    ["electrica", "eléctrica"],
    ["calorica", "calórica"],
    ["informacion", "información"],
    ["Informacion", "Información"],
    ["operacion", "operación"],
    ["relacion", "relación"],
    ["Autoorganizacion", "Autoorganización"],
    ["segun", "según"],
    ["limites", "límites"],
    ["Limites", "Límites"],
    ["interaccion", "interacción"],
    ["interrelacion", "interrelación"],
    ["conversion", "conversión"],
    ["Retroalimentacion", "Retroalimentación"],
    ["retroalimentacion", "retroalimentación"],
    ["tambien", "también"],
    ["propositos", "propósitos"],
    ["estacion", "estación"],
    ["fisico", "físico"],
    ["Fisico", "Físico"],
    ["fisicos", "físicos"],
    ["hipotesis", "hipótesis"],
    ["rios", "ríos"],
    ["dinamico", "dinámico"],
    ["estatico", "estático"],
    ["disenados", "diseñados"],
    ["automoviles", "automóviles"],
    ["tranvias", "tranvías"],
    ["matematicas", "matemáticas"],
    ["filosofias", "filosofías"],
    ["evolucion", "evolución"],
    ["indiferenciacion", "indiferenciación"],
    ["aleatoria", "aleatoria"],
    ["homeostatica", "homeostática"],
    ["morfogenetica", "morfogenética"],
    ["situacion", "situación"],
    ["predicciones", "predicciones"],
    ["destruccion", "destrucción"],
    ["desviacion", "desviación"],
    ["clasico", "clásico"],
    ["Entropia", "Entropía"],
    ["entropia", "entropía"],
    ["termodinamica", "termodinámica"],
    ["Neguentropia", "Neguentropía"],
    ["cooperacion", "cooperación"],
    ["sistemicos", "sistémicos"],
    ["caracteristicas", "características"],
    ["probabilistico", "probabilístico"],
    ["Caracteristica", "Característica"],
    ["sociotecnico", "sociotécnico"],
    ["tecnico", "técnico"],
    ["Tecnico", "Técnico"],
    ["tecnologica", "tecnológica"],
    ["tecnologia", "tecnología"],
    ["Tecnologia", "Tecnología"],
    ["funcion", "función"],
    ["coordinacion", "coordinación"],
    ["teoria", "teoría"],
    ["aplicacion", "aplicación"],
    ["analisis", "análisis"],
    ["Importacion", "Importación"],
    ["Transformacion", "Transformación"],
    ["Exportacion", "Exportación"],
    ["Diferenciacion", "Diferenciación"],
    ["diferenciacion", "diferenciación"],
    ["multiplicacion", "multiplicación"],
    ["elaboracion", "elaboración"],
    ["senales", "señales"],
    ["produccion", "producción"],
  ];
  return replacements.reduce((text, [from, to]) => text.replace(new RegExp(`\\b${from}\\b`, "g"), to), value);
}

function pdfHref(pdf, page) {
  return `assets/${encodeURIComponent(pdf)}#page=${page}`;
}

function optionLabel(index) {
  return String.fromCharCode("A".charCodeAt(0) + index);
}

function orderedOptions(question, questionIndex) {
  const correctText = question.options[question.answer];
  const options = question.options
    .filter((_, index) => index !== question.answer)
    .map((text) => ({ text, correct: false }));
  const targetIndex = questionIndex % question.options.length;
  options.splice(targetIndex, 0, { text: correctText, correct: true });
  return options;
}

function buildArgument(question, ref) {
  const correctText = question.options[question.answer];
  const point = polishSpanish(ref.point);
  return [
    question.explanation,
    `La diapositiva/página ${ref.page} sostiene este punto con la idea: ${point}`,
    `Por eso la opción "${correctText}" es la correcta: responde al criterio central de la definición o propiedad evaluada, mientras que las demás alternativas desplazan el foco hacia elementos aislados, efectos secundarios o afirmaciones que no corresponden al punto teórico citado.`,
  ].join(" ");
}

function renderQuestion(question, index, week) {
  const correctText = question.options[question.answer];
  const ref = question.reference;
  const answerId = `answer-${week.id}-${index + 1}`;
  const options = orderedOptions(question, index)
    .map((option, optIndex) => {
      return `
        <li class="option${option.correct ? " is-correct" : ""}">
          <span class="option__letter">${optionLabel(optIndex)}</span>
          <span>${escapeHtml(option.text)}</span>
        </li>`;
    })
    .join("");

  return `
    <article class="question-card" data-question-card>
      <div class="question-card__top">
        <span class="question-number">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <p class="question-text">${escapeHtml(question.question)}</p>
          <button class="answer-toggle" type="button" data-reveal aria-expanded="false" aria-controls="${answerId}">Mostrar respuesta</button>
        </div>
      </div>
      <ol class="options" aria-label="Opciones de la pregunta ${index + 1}">
        ${options}
      </ol>
      <section class="answer-panel" id="${answerId}">
        <p><strong>Respuesta correcta:</strong> ${escapeHtml(correctText)}</p>
        <p><strong>Argumento ampliado:</strong> ${escapeHtml(buildArgument(question, ref))}</p>
        <p><strong>Referencia:</strong> ${escapeHtml(week.pdf)}, diapositiva/página ${ref.page}. ${escapeHtml(polishSpanish(ref.point))} <a href="${pdfHref(week.pdf, ref.page)}">Abrir PDF</a></p>
      </section>
    </article>`;
}

function renderWeekPage(week, allWeeks) {
  const bank = readBank(week.input);
  if (bank.length !== week.refs.length) {
    throw new Error(`${week.title}: ${bank.length} preguntas y ${week.refs.length} referencias`);
  }

  const questions = bank.map((question, index) => ({
    ...question,
    reference: {
      page: week.refs[index][0],
      point: week.refs[index][1],
    },
  }));

  const nav = allWeeks
    .map((item) => `<a class="${item.id === week.id ? "active" : ""}" href="Semana${item.id}.html">Semana ${item.id}</a>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${week.title} - Repaso Dinámica de Sistemas</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="answers-hidden">
  <header class="site-header">
    <div>
      <a class="back-link" href="index.html">Índice</a>
      <h1>${week.title}: Dinámica de Sistemas</h1>
      <p>${escapeHtml(week.summary)}</p>
    </div>
    <nav class="week-nav" aria-label="Semanas">${nav}</nav>
  </header>

  <main class="layout">
    <aside class="toolbar" aria-label="Controles de repaso">
      <div class="toolbar__block">
        <label for="search">Buscar pregunta</label>
        <input id="search" type="search" placeholder="Concepto, opción o referencia">
      </div>
      <button id="toggleAnswers" type="button">Mostrar todas las respuestas</button>
      <a class="pdf-link" href="${pdfHref(week.pdf, 1)}">Abrir teoría PDF</a>
      <p class="count"><span id="visibleCount">${questions.length}</span> de ${questions.length} preguntas visibles</p>
    </aside>

    <section class="question-list" aria-label="Preguntas de ${week.title}">
      ${questions.map((question, index) => renderQuestion(question, index, week)).join("")}
    </section>
  </main>

  <script src="study.js"></script>
</body>
</html>`;
}

function renderIndexPage() {
  const cards = weeks
    .map((week) => {
      const bank = readBank(week.input);
      return `
        <a class="index-card" href="Semana${week.id}.html">
          <span>Semana ${week.id}</span>
          <strong>${bank.length} preguntas</strong>
          <p>${escapeHtml(week.summary)}</p>
        </a>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Repaso Dinámica de Sistemas</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header site-header--index">
    <div>
      <h1>Repaso de Dinámica de Sistemas</h1>
      <p>Preguntas por semana con opciones, respuesta revelable, argumento ampliado y referencia directa a la diapositiva del PDF teórico.</p>
    </div>
  </header>
  <main class="index-grid">
    ${cards}
  </main>
</body>
</html>`;
}

const css = `:root {
  color-scheme: dark;
  --bg: #080d14;
  --bg-soft: #0d1520;
  --surface: #111b27;
  --surface-raised: #162231;
  --surface-muted: #0c131d;
  --ink: #eef5ff;
  --muted: #9bacbd;
  --line: #263749;
  --line-strong: #3d5368;
  --accent: #38d6c2;
  --accent-strong: #77f4e4;
  --accent-soft: rgba(56, 214, 194, 0.16);
  --gold: #f6c85f;
  --gold-soft: rgba(246, 200, 95, 0.14);
  --correct: #8af0a4;
  --correct-bg: rgba(48, 170, 93, 0.18);
  --danger: #ff8e8e;
  --shadow: 0 24px 70px rgba(0, 0, 0, 0.38);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at 18% 0, rgba(56, 214, 194, 0.18), transparent 32rem),
    radial-gradient(circle at 100% 8%, rgba(246, 200, 95, 0.13), transparent 28rem),
    linear-gradient(180deg, #0b121c 0, var(--bg) 22rem);
  color: var(--ink);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.55;
}

a {
  color: var(--accent-strong);
  font-weight: 850;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

button:focus-visible,
input:focus-visible,
a:focus-visible {
  outline: 3px solid rgba(119, 244, 228, 0.38);
  outline-offset: 3px;
}

.site-header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 24px;
  align-items: end;
  padding: 38px max(24px, calc((100vw - 1180px) / 2)) 28px;
  background: rgba(8, 13, 20, 0.82);
  border-bottom: 1px solid var(--line);
  box-shadow: 0 14px 50px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(14px);
}

.site-header--index {
  display: block;
}

.site-header h1 {
  max-width: 940px;
  margin: 6px 0 10px;
  font-size: clamp(2.15rem, 4vw, 3.65rem);
  line-height: 1;
  letter-spacing: 0;
}

.site-header p {
  max-width: 910px;
  margin: 0;
  color: var(--muted);
  font-size: 1.06rem;
}

.back-link {
  display: inline-flex;
  margin-bottom: 6px;
  color: var(--accent-strong);
}

.week-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
}

.week-nav a,
.toolbar button,
.pdf-link,
.answer-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0 14px;
  background: var(--surface-raised);
  color: var(--ink);
  font-weight: 850;
  transition: background 0.16s ease, border-color 0.16s ease, transform 0.16s ease, color 0.16s ease;
}

.week-nav a:hover,
.answer-toggle:hover,
.pdf-link:hover,
.toolbar button:hover,
.index-card:hover {
  transform: translateY(-1px);
}

.week-nav a {
  background: rgba(255, 255, 255, 0.04);
  color: #dce8f5;
}

.week-nav a.active {
  border-color: var(--accent);
  background: var(--accent-soft);
  color: var(--accent-strong);
}

.toolbar button,
.pdf-link {
  border-color: rgba(56, 214, 194, 0.58);
  background: linear-gradient(180deg, rgba(56, 214, 194, 0.22), rgba(56, 214, 194, 0.12));
  color: var(--accent-strong);
}

.layout {
  display: grid;
  grid-template-columns: 310px minmax(0, 1fr);
  gap: 22px;
  width: min(1180px, calc(100vw - 32px));
  margin: 24px auto 56px;
}

.toolbar {
  position: sticky;
  top: 16px;
  align-self: start;
  display: grid;
  gap: 14px;
  padding: 18px;
  background: rgba(17, 27, 39, 0.88);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(10px);
}

.toolbar__block {
  display: grid;
  gap: 7px;
}

.toolbar label {
  color: var(--muted);
  font-size: 0.86rem;
  font-weight: 850;
}

.toolbar input {
  width: 100%;
  min-height: 44px;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0 12px;
  background: var(--surface-muted);
  color: var(--ink);
}

.toolbar input::placeholder {
  color: #6f8295;
}

.toolbar input:focus {
  border-color: var(--accent);
  background: #101a26;
}

.toolbar .count {
  margin: 0;
  color: var(--muted);
  font-size: 0.95rem;
}

.question-list {
  display: grid;
  gap: 18px;
}

.question-card {
  background: linear-gradient(180deg, rgba(22, 34, 49, 0.96), rgba(15, 24, 36, 0.96));
  border: 1px solid var(--line);
  border-left: 5px solid #53677b;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.question-card.is-revealed {
  border-color: rgba(56, 214, 194, 0.44);
  border-left-color: var(--accent);
}

.question-card[hidden] {
  display: none;
}

.question-card__top {
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr);
  gap: 14px;
  padding: 18px 18px 6px;
}

.question-number {
  display: inline-grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: var(--accent-soft);
  color: var(--accent-strong);
  font-weight: 950;
}

.question-text {
  margin: 2px 0 12px;
  color: #f7fbff;
  font-size: clamp(1.08rem, 2vw, 1.42rem);
  font-weight: 880;
}

.answer-toggle {
  min-height: 36px;
  border-color: var(--line-strong);
  background: #101a26;
  color: var(--accent-strong);
  font-size: 0.92rem;
}

.question-card.is-revealed .answer-toggle {
  border-color: rgba(246, 200, 95, 0.65);
  background: var(--gold-soft);
  color: var(--gold);
}

.options {
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 14px 18px 18px 88px;
  list-style: none;
}

.option {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 10px;
  align-items: start;
  min-height: 44px;
  padding: 10px 12px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: rgba(8, 13, 20, 0.5);
  color: #d8e4ef;
}

.question-card.is-revealed .option.is-correct {
  border-color: rgba(138, 240, 164, 0.7);
  background: var(--correct-bg);
  color: var(--correct);
  font-weight: 850;
}

.option__letter {
  display: inline-grid;
  place-items: center;
  min-width: 28px;
  height: 28px;
  border-radius: 6px;
  background: #203043;
  color: #dce8f5;
  font-weight: 950;
}

.question-card.is-revealed .option.is-correct .option__letter {
  background: rgba(138, 240, 164, 0.18);
  color: var(--correct);
}

.answer-panel {
  display: none;
  gap: 10px;
  margin: 0;
  padding: 17px 18px 20px 88px;
  border-top: 1px solid rgba(246, 200, 95, 0.28);
  background: linear-gradient(180deg, rgba(246, 200, 95, 0.09), rgba(56, 214, 194, 0.06));
}

.question-card.is-revealed .answer-panel {
  display: grid;
}

.answer-panel p {
  margin: 0;
  color: #dbe7f2;
}

.answer-panel strong {
  color: var(--gold);
}

.index-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  width: min(1180px, calc(100vw - 32px));
  margin: 24px auto;
}

.index-card {
  display: grid;
  gap: 9px;
  min-height: 220px;
  padding: 22px;
  border: 1px solid var(--line);
  border-top: 5px solid var(--accent);
  border-radius: 8px;
  background: linear-gradient(180deg, rgba(22, 34, 49, 0.98), rgba(13, 21, 32, 0.98));
  color: var(--ink);
  box-shadow: var(--shadow);
  transition: transform 0.16s ease, border-color 0.16s ease;
}

.index-card:hover {
  border-color: rgba(56, 214, 194, 0.6);
  text-decoration: none;
}

.index-card span {
  color: var(--accent-strong);
  font-weight: 950;
}

.index-card strong {
  font-size: 1.85rem;
}

.index-card p {
  margin: 0;
  color: var(--muted);
}

@media (max-width: 860px) {
  .site-header,
  .layout,
  .index-grid {
    grid-template-columns: 1fr;
  }

  .site-header {
    align-items: start;
  }

  .week-nav {
    justify-content: flex-start;
  }

  .toolbar {
    position: static;
  }

  .question-card__top {
    grid-template-columns: 1fr;
  }

  .options,
  .answer-panel {
    padding-left: 18px;
  }
}
`;

const js = `const body = document.body;
const toggle = document.querySelector("#toggleAnswers");
const search = document.querySelector("#search");
const visibleCount = document.querySelector("#visibleCount");
const cards = [...document.querySelectorAll("[data-question-card]")];

function setCardRevealed(card, revealed) {
  card.classList.toggle("is-revealed", revealed);
  const button = card.querySelector("[data-reveal]");
  if (button) {
    button.textContent = revealed ? "Ocultar respuesta" : "Mostrar respuesta";
    button.setAttribute("aria-expanded", String(revealed));
  }
}

function updateGlobalButton() {
  if (!toggle) return;
  const visibleCards = cards.filter((card) => !card.hidden);
  const allVisibleRevealed = visibleCards.length > 0 && visibleCards.every((card) => card.classList.contains("is-revealed"));
  toggle.textContent = allVisibleRevealed ? "Ocultar todas las respuestas" : "Mostrar todas las respuestas";
  body.classList.toggle("answers-hidden", !allVisibleRevealed);
}

cards.forEach((card) => {
  const button = card.querySelector("[data-reveal]");
  if (!button) return;
  button.addEventListener("click", () => {
    setCardRevealed(card, !card.classList.contains("is-revealed"));
    updateGlobalButton();
  });
});

if (toggle) {
  toggle.addEventListener("click", () => {
    const visibleCards = cards.filter((card) => !card.hidden);
    const revealAll = !visibleCards.every((card) => card.classList.contains("is-revealed"));
    visibleCards.forEach((card) => setCardRevealed(card, revealAll));
    updateGlobalButton();
  });
}

if (search) {
  search.addEventListener("input", () => {
    const term = search.value.trim().toLocaleLowerCase("es");
    let visible = 0;
    cards.forEach((card) => {
      const match = card.textContent.toLocaleLowerCase("es").includes(term);
      card.hidden = !match;
      if (match) visible += 1;
    });
    visibleCount.textContent = String(visible);
    updateGlobalButton();
  });
}

updateGlobalButton();
`;

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(path.join(OUT, "assets"), { recursive: true });
fs.writeFileSync(path.join(OUT, ".nojekyll"), "", "utf8");
fs.writeFileSync(path.join(OUT, "styles.css"), css, "utf8");
fs.writeFileSync(path.join(OUT, "study.js"), js, "utf8");
fs.writeFileSync(path.join(OUT, "index.html"), renderIndexPage(), "utf8");

for (const week of weeks) {
  fs.writeFileSync(path.join(OUT, `Semana${week.id}.html`), renderWeekPage(week, weeks), "utf8");
  fs.copyFileSync(path.join(ROOT, week.pdf), path.join(OUT, "assets", week.pdf));
}

console.log(`Build generado en ${OUT}`);
