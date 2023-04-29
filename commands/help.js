require("dotenv").config();
const { EmbedBuilder } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
  name: "help",
  description: "Wysyła obecne komendy",
  template: "help",
  run(msg, args) {
    const exampleEmbed = new EmbedBuilder()
      .setColor("Random")
      .setTitle("Wszystkie komedy jakie posiada bot:")
      .setAuthor({
        name: `${msg.author.username}`,
        iconURL: `${msg.author.avatarURL()}`,
      })
      .setTimestamp();

    const commandFiles = readdirSync(__dirname).filter((file) =>
      file.endsWith(".js")
    );

    for (const file of commandFiles) {
      const command = require(__dirname + `/${file}`);
      exampleEmbed.addFields({
        name: process.env.PREFIX + command.template,
        value: command.description,
      });
    }
    msg.channel.send({ embeds: [exampleEmbed] });
  },
};
