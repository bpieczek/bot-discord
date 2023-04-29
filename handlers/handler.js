require("dotenv").config();
const { readdirSync } = require("fs");
const { Collection } = require("discord.js");
const ascii = require("ascii-table");
const table = new ascii().setHeading("Command", "Load status");

module.exports = (client) => {
  client.commands = new Collection();

  const commandFiles = readdirSync(__dirname + "/../commands");

  for (const file of commandFiles) {
    const command = require(__dirname + `/../commands/${file}`);

    if (command.name && command.description && command.template) {
      client.commands.set(command.name, command);
      table.addRow(file, "✅ -> evrything fine");
    } else {
      table.addRow(file, "❌ -> sth is missing");
    }
  }
  console.log(table.toString());

  client.on("messageCreate", (msg) => {
    const { author } = msg;
    console.log(msg.content, msg.author.tag, msg.channel.name);

    if (author.bot) {
      return;
    }

    if (!msg.content.startsWith(process.env.PREFIX)) return;

    const args = msg.content
      .slice(process.env.PREFIX.length)
      .trim()
      .split(/ +/g);

    const cmd = args.shift().toLowerCase();
    console.log(cmd);
    if (!client.commands.has(cmd)) return;
    try {
      client.commands.get(cmd).run(msg, args);
    } catch (error) {
      console.log(error);
      msg.reply(
        "Problem w wywołaniu komendy, aby uzyskć pomoc prosze skontaktuj sie z autorem bota"
      );
    }
  });
};
