const niveles=[
{numero:"01",titulo:"Bienvenida, Inclusión y Cultura General",resumen:"Un espacio de bienvenida, cultura, consulta e inclusión.",edad:"Cultura general",descripcion:"El primer nivel funciona como un espacio de bienvenida y encuentro. Aquí se concentran servicios culturales, áreas de consulta, atención inclusiva y espacios destinados a eventos y presentaciones.",video:"videos/nivel-01.mp4",espacios:[
["◆","Auditorio Principal","Espacio equipado para eventos culturales, conferencias y presentaciones."],
["●","Tienda Editorial y Café","Venta de libros de la Editorial El Salvador, publicaciones oficiales y espacio de cafetería."],
["♿","Servicios Inclusivos","Literatura adaptada en sistema Braille, audiolibros, tecnología accesible para personas con discapacidad visual y un espacio acondicionado para la atención inclusiva."],
["★","Salas VIP y de Consulta","Áreas destinadas a atención rápida y recepción."]]},
{numero:"02",titulo:"Primera Infancia",resumen:"Literatura, juego y estimulación para los más pequeños.",edad:"0 a 7 años",descripcion:"Un espacio diseñado para acompañar el desarrollo de la primera infancia mediante literatura, juego, estimulación, actividades creativas y servicios pensados para niños y familias.",video:"videos/nivel-02.mp4",espacios:[
["📚","Colección Árbol de Vida","Área infantil con literatura especializada para los más pequeños, incluyendo obras en español, inglés y náhuat."],
["●","Zonas de Estimulación","Espacios lúdicos, área de cuentacuentos y actividades kinestésicas."],
["◆","Zona LEGO Infantil","Módulos de bloques para el desarrollo de habilidades motrices y creativas."],
["♥","Servicios para la familia","Sala de lactancia materna y Área de Calma para la autorregulación emocional de niños."]]},
{numero:"03",titulo:"Niñez y Adolescencia",resumen:"Lectura, creatividad y tecnología para estudiantes.",edad:"8 a 12 años",descripcion:"Un nivel dedicado a niños en edad escolar, donde la lectura se combina con creatividad, construcción, tecnología interactiva y espacios de aprendizaje grupal.",video:"videos/nivel-03.mp4",espacios:[
["📚","Colección Infantil/Juvenil","Libros interactivos, narrativa para estudiantes y material educativo adaptado a edades escolares."],
["◆","Zona LEGO y Creatividad","Espacio con sets avanzados de construcción LEGO y mesas temáticas, incluyendo ambientación sobre El Principito."],
["▣","Tecnología Interactiva","Pantallas táctiles, recursos pedagógicos digitales, salas de lectura grupales y laboratorios interactivos."]]},
{numero:"04",titulo:"Juventud, Pop Culture y Cómics",resumen:"Manga, cómics, cultura popular, tecnología y gaming.",edad:"13 a 17 años",descripcion:"Un espacio pensado para jóvenes donde la literatura juvenil convive con el manga, los cómics, la cultura popular, la tecnología y las experiencias gaming.",video:"videos/nivel-04.mp4",espacios:[
["★","Zonas Temáticas","Áreas ambientadas sobre sagas de cultura popular como Harry Potter, Star Wars, El Señor de los Anillos, Marvel y Game of Thrones."],
["◆","Manga y Cómics","Colección especializada de novelas gráficas, historieta internacional, manga y literatura juvenil."],
["▣","Salas Informáticas y Gaming","Computadoras con acceso a internet, zonas informáticas para estudiantes y cabinas temáticas."]]},
{numero:"05",titulo:"Colección General y Archivo Histórico",resumen:"Conocimiento, investigación y memoria histórica.",edad:"Colección general",descripcion:"Este nivel concentra el acervo bibliográfico principal y espacios dedicados a la investigación, consulta especializada y conservación de la memoria histórica de El Salvador.",video:"videos/nivel-05.mp4",espacios:[
["📚","Acervo Bibliográfico Principal","Colección física general de obras literarias, historia nacional e internacional, filosofía, ciencias exactas y ciencias sociales."],
["◆","Resguardo Documental","Espacios dedicados a la conservación de la memoria histórica de El Salvador y fondos bibliográficos de consulta especializada."],
["●","Salas de Estudio Silencioso","Cabinas individuales de concentración y mesas de lectura para investigación académica."]]},
{numero:"06",titulo:"Tecnología, Innovación y Gamification",resumen:"Robótica, impresión 3D, videojuegos, VR e innovación.",edad:"Tecnología e innovación",descripcion:"Un nivel orientado a la innovación y el aprendizaje tecnológico, combinando fabricación digital, robótica, videojuegos, realidad virtual, simuladores y espacios de trabajo colaborativo.",video:"videos/nivel-06.mp4",espacios:[
["◆","Laboratorio de Robótica e Impresión 3D","Equipamiento de maquetado 3D, impresoras de resina, escáneres tridimensionales y talleres de prototipado."],
["●","Zona Gamer","Consolas de videojuegos de última generación y estaciones de entrenamiento."],
["VR","Simuladores y VR","Sala de Realidad Virtual, simuladores de carrera y aviación profesional."],
["▣","Coworking y Consulta Digital","Área de trabajo colaborativo, biblioteca digital con acceso a tablets y e-readers Kindle, y salas para aprendizaje de software."]]},
{numero:"07",titulo:"Cultura, Arte y Terraza Panorámica",resumen:"Arte, gastronomía, eventos y una vista panorámica de San Salvador.",edad:"Cultura y entretenimiento",descripcion:"El último nivel reúne espacios culturales y de entretenimiento junto con una terraza panorámica desde donde se puede apreciar el Centro Histórico de San Salvador.",video:"videos/nivel-07.mp4",espacios:[
["★","Galería de Arte","Sala de exhibición para artes visuales y exposiciones temporales de artistas nacionales e internacionales."],
["◆","Auditorio Secundario / Eventos","Espacio para conferencias, conversatorios y actividades al aire libre."],
["●","Restaurante","Servicio gastronómico con vista al Centro Histórico de San Salvador."],
["360°","Terraza Mirador","Mirador 360° hacia la Plaza Gerardo Barrios, la Catedral Metropolitana y el Palacio Nacional."]]}
];

const lista=document.getElementById("listaNiveles");
const pNiveles=document.getElementById("pantallaNiveles");
const pInfo=document.getElementById("pantallaInformacion");
const numero=document.getElementById("numeroNivel");
const titulo=document.getElementById("tituloNivel");
const edad=document.getElementById("edadNivel");
const descripcion=document.getElementById("descripcionNivel");
const extra=document.getElementById("informacionExtra");
const regresar=document.getElementById("btnRegresar");
const contenedorVideo=document.getElementById("contenedorVideoNivel");
const tituloVideo=document.getElementById("tituloVideoNivel");

function crearNiveles(){
  niveles.forEach((n,i)=>{
    const b=document.createElement("button");
    b.className="nivel";
    b.type="button";
    b.innerHTML=`<div class="numero">NIVEL ${n.numero}</div><div class="tarjeta-edad">${n.edad}</div><h3>${n.titulo}</h3><p>${n.resumen}</p>`;
    b.addEventListener("pointerup",()=>mostrarNivel(i));
    lista.appendChild(b);
  });
}
function mostrarVideoNivel(nivel){
  tituloVideo.textContent = "Presentación del nivel";
  contenedorVideo.innerHTML = `
    <video class="reproductor-video" controls playsinline preload="metadata">
      <source src="${nivel.video}" type="video/mp4">
      Tu navegador no puede reproducir este video.
    </video>
  `;

  const video = contenedorVideo.querySelector("video");
  video.addEventListener("error", ()=>{
    contenedorVideo.innerHTML = `
      <div class="video-vacio">
        <div class="video-icono">▶</div>
        <strong>Video no disponible</strong>
        <p>Coloca el archivo <strong>${nivel.video}</strong> dentro de la carpeta <strong>videos</strong> del proyecto.</p>
      </div>`;
  });
}

function mostrarNivel(i){
  const n=niveles[i];
  numero.textContent=n.numero;
  titulo.textContent=n.titulo;
  edad.textContent=n.edad;
  descripcion.textContent=n.descripcion;
  extra.innerHTML="";
  mostrarVideoNivel(n);
  n.espacios.forEach(e=>{
    const a=document.createElement("article");
    a.className="dato";
    a.innerHTML=`<div class="icono">${e[0]}</div><div><strong>${e[1]}</strong><p>${e[2]}</p></div>`;
    extra.appendChild(a);
  });
  pNiveles.classList.remove("activa");
  pInfo.classList.add("activa");
  document.querySelector(".contenido-nivel").scrollTop=0;
}
regresar.addEventListener("pointerup",()=>{
  pInfo.classList.remove("activa");
  pNiveles.classList.add("activa");
});
crearNiveles();
