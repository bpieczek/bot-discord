require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const chalk = require("chalk");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const commandHandler = require("./handlers/handler");

commandHandler(client);

client.on("ready", () => {
  console.log(chalk.blue("Działa!"));
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setActivity({
    name: "Type .help",
  });
});

client.login(process.env.TOKEN);

client.on("debug", () => {});
client.on("warn", () => {});
client.on("error", () => {});
