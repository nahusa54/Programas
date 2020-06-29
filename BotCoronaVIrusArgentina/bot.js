
require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');


class Corona {
  constructor(Infectados, muertos, recuperados) {
this.Infectados=Infectados;
this.muertos=muertos;
this.recuperados=recuperados;
  
  }
  SumarTotal(Infectados, muertos, recuperados) {
      this.Infectados+=Infectados;
      this.muertos+=muertos;
      this.recuperados+=recuperados;
      
}
  
  Rempla(Infectados, muertos, recuperados) {
      this.Infectados=Infectados;
    
      this.muertos=muertos;
      this.recuperados=recuperados;
          
          }


}
class Lista {
 constructor(Lista){
   this.Lista=Lista;
 }
 AgregarPaises (Pais){
  this.Lista += Pais;

 }
}
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {

  if (msg.content === 'Help') {
    channel = msg.channel;

 msg.reply("Los comandos son los siguientes: ");
 channel.send("Corona: dara inicion al comando para poder ver la cantidad de infectados de cada pais");
 channel.send("Cuarentena: Dira cuantos dias quedan para que finalice la cuarentena");

  }
 if (msg.content === 'Corona') {
  
   channel = msg.channel;
    L = new Lista("");

   fetch("https://pomber.github.io/covid19/timeseries.json")
   .then(response => response.json())
   .then(data => {
 var countryList = Object.keys(data);
 countryList.forEach(function(country,index) { 
 L.AgregarPaises(country+",");
 }
 )
 channel.send("Lista de paises: "+L.Lista);
 ;})



  
   const collector = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, { time: 5000 });
  

         
   collector.on('collect', msg => {

 c = new Corona(0,0,0);

  fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(data => {
      
      try{

    
      data[msg.content.toString()].forEach(({ date, confirmed, recovered, deaths }) =>
        c.Rempla(confirmed,deaths,recovered),
      );} catch (err){msg.reply("No existe el pais o esta mal escrito ");
    return; }
      if(typeof c === 'undefined'){
        msg.reply("No existe el pais o esta mal escrito ");
      } else {
      channel = msg.channel;
      msg.reply("En total hay: ");
      channel.send("infectados: "+c.Infectados);
      channel.send("muertos: "+c.muertos);
      channel.send("recuperados: "+c.recuperados);
      channel.send("por el coronavirus");
    }
    })
 })}

 
 if (msg.content==="Cuarentena"){
  var dateObj = new Date();
 
  const Cuarentena = new Date("2020-04-12");
  
  msg.reply("Faltan: "+ dateDiffInDays(dateObj,Cuarentena));
  
 }
 if (msg.content==="Que dia es hoy?"){
  var today = new Date();
  var dateObj = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
   today = mm + '/' + dd + '/' + yyyy;
  msg.reply(today);
  
 }

 if (msg.content==="Hola"){
  
  msg.reply("Que onda joto");
  
 }
 
 });
 client.on("guildMemberAdd", member => {
  member.send(
    `Skere`
  )
})
/*
var schedule = require('node-schedule');
var scheduleFunction = schedule.scheduleJob('0 21 * * *', function(){

  c = new Corona(0,0,0);
  const fetch = require('node-fetch');

  fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(data => {
      data["Argentina"].forEach(({ date, confirmed, recovered, deaths }) =>
        c.Rempla(confirmed,recovered,deaths),
      );

      channel = msg.channel
      channel.reply("En total hay: ");
      channel.send("infectados:"+c.Infectados);
      channel.send("Muertos:"+c.muertos);
      channel.send("Recuperados:"+c.recuperados);
      channel.send("Por el coronavirus");
    
    })


});
*/
 client.login(process.env.BOT_TOKEN);


 function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}