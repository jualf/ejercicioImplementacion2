import { Aplicacion } from "./aplicacion.js";
import { Canal } from "./canal.js";
import { Categoria } from "./categoria.js";
import { Plataforma } from "./plataforma.js";
import { Stream } from "./stream.js";
import { Streamer } from "./streamer.js";
const aplicacion1 = new Aplicacion();
const twitch = new Plataforma("Twitch", "twitch.png", "is an interactive livestreaming service for content spanning gaming, entertainment, sports, music, and more", "Twtich TV");
const youtube = new Plataforma("Youtube", "Youtube Gameplay", "Plataforma de videos, gameplays y mucho mas", "youtube");
aplicacion1.agregarPlataforma(twitch); //9. Agregar una plataforma
aplicacion1.agregarPlataforma(youtube); //9. Agregar una plataforma
const streamer1 = new Streamer("El Rubius", "Streamer de juegos populares", "Facebook, Instagram"); //11. Agregar un streamer
const streamer2 = new Streamer("HolaSoyGerman", "Hola Soy German GamePlay", "Facebook, youtube"); //11. Agregar un streamer
streamer1.agregarPlataforma(twitch); //13. Agregar un canal a un streamer
streamer2.agregarPlataforma(youtube); //13. Agregar un canal a un streamer
const canal1 = new Canal("Rubius Game", "Juega Total", "Aqui encontraras streams realacionados a juegos populares como minecraft, fornite, entre otro. Disfruta!!");
const canal2 = new Canal("JuegaGerman", "Hola Soy German!", "Soy German Garmendia, sigue a jugar");
twitch.agregarCanal(canal1); //10. Agregar un canal
youtube.agregarCanal(canal2); //10. Agregar un canal
const stream1 = new Stream("3/06/2023", "30 minutos", streamer1, canal1); //12. Agregar un stream y 14. Agregar un stream a un streamer
const stream2 = new Stream("2/06/2023", "15 minutos", streamer1, canal1); //12. Agregar un stream y 14. Agregar un stream a un streamer
const stream3 = new Stream("1/05/2023", "1 Hora", streamer2, canal2);
const disparos = new Categoria("Disparos", "disparos.jpg", "Juego PVP");
stream1.agregarCategoria(disparos);
stream3.agregarCategoria(disparos);
const aventura = new Categoria("Avetura", "aventura.png", "Juego PVE");
stream1.agregarCategoria(aventura);
stream2.agregarCategoria(aventura);
aplicacion1.listadoPlataformas(); //1. Listado Plataformas
twitch.mostrarDetallePlataforma(); //2. Mostrar detalle de plataforma
twitch.listadoCanales(); //3. Mostrar el listado de canales
canal1.mostrarDetalleCanal(); //4. Mostrar detalle de Canal
twitch.agregarStreamer(streamer1);
youtube.agregarStreamer(streamer2);
youtube.listaStreamers(); //5. Mostrar el listado de streamers
streamer2.mostrarDetalleStreamer(); //6. Ver el detalle de un streamer
canal1.listadoStreams(); //7. Mostrar el listado de streams
stream1.mostrarDetalleStreame(); //8. Mostrar el detalle de un stream
