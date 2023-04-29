module.exports = {
  name: "dziala",
  description: "Odsyła wiadomość o dzialaniu bota",
  template: "dziala",
  run(msg, args) {
    msg.reply("Działa!");
  },
};
