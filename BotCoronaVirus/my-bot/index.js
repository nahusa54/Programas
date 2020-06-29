const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)


})
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }
})

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
  mostrar(){
      console.log(`Infectados:${this.Infectados}`);
      console.log(`muertos:${this.muertos}`);
      console.log(`recuperados:${this.recuperados}`);
  
  }
  Rempla(Infectados, muertos, recuperados) {
      this.Infectados=Infectados;
    
      this.muertos=muertos;
      this.recuperados=recuperados;
          
          }


}
ejecutar();

function ejecutar(){
c =  new Corona(0,0,0);

const fetch = require('node-fetch');

fetch("https://pomber.github.io/covid19/timeseries.json")
.then(response => response.json())
.then(data => {
  data["Argentina"].forEach(({ date, confirmed, recovered, deaths }) =>
    c.Rempla(confirmed,recovered,deaths),
  );

  c.mostrar();
})
}

client.login("Njk0NjM1MjEzNTg1Nzc2Njgx.XoOheQ.g41PRJ6vh6kIbT6ujC6_AOcCfF4")