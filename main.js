const express = require("express")
const app = express()
const Discord = require("discord.js")
const client = new Discord.Client();
const data = require('dotenv').config({ path: 'C:/Users/hugon/Desktop/KanyeWest/.env' }).parsed 
const path = require("path")
const PORT = process.env.PORT || 3000;
console.log(data)

const Neko = require("neko-love");
const api = new Neko.Client();

const websiteDirectory = "C:/Users/hugon/Desktop/KanyeWest/index.ejs"


app.set("view engine", "ejs");

app.get('/', async (req, res) => {
  const proie = client.users.cache.get(data.id)
  console.log(client.users.cache)
  res.render(websiteDirectory, {
    avatar: proie.displayAvatarURL({ dynamic: true }, { format: "png", size: 512 }),
    user: proie,
    status: proie.presence.status,
    image: await api.neko()
  })
})

client.on('ready', async () => {
  console.log(`✔ Le bot est prêt !`);
  app.listen(PORT, () => console.log("✔ Le site est prêt !"))
})

client.login(data.token)