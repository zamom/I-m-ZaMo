require("http").createServer((req, res) => res.end("I'm ZaMo")).listen(process.env.PORT || 8080)
const Discord = require('discord.js')
const client = new Discord.Client()

client.on("ready", async () => {
  console.log(`I'm ZaMo`)
  client.user
    .setActivity(`I'm ZaMo`, { type: "WATCHING" }) //status code
    .catch(error => console.log(error))
})

const canvacord = require("canvacord")

client.on("guildMemberAdd", async member => {
  if(member.guild.id !== "1032956415054204968") return;
  const welcomeCard = new canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarURL({ format: "png" }))
  .setColor("title", "#0cc3f3") //white
  .setColor("username-box", "#0cc3f3") //white
  .setColor("discriminator-box", "#0cc3f3") //white
  .setColor("message-box", "#0cc3f3") //white
  .setColor("border", "#000000") //black
  .setColor("avatar", "#0cc3f3") //white
  .setBackground("https://cdn.discordapp.com/attachments/893113075534798858/906893762737889320/Untitled123_20211107122709.png") //should be png format
  .setMemberCount(member.guild.memberCount)
  let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "welcome.png")
  member.guild.channels.cache.get("1053742149683925123").send(member.user.toString(), attachment)
})


client.login(process.env.TOKEN)

//https://cdn.discordapp.com/attachments/893113075534798858/906893762737889320/Untitled123_20211107122709.png
//https://cdn.discordapp.com/attachments/843060364358451200/875438575490060298/king_baybars4.jpg
////https://cdn.discordapp.com/attachments/843060364358451200/875438574659575899/1606680255792.png
//https://cdn.discordapp.com/attachments/843060364358451200/875284117716086834/Efektler_-_Kadir_Gzltp_50.jpg
//