module.exports = {
  name: "ping",
  description: "Wysyła daną wiadomość np ping x razy",
  template: "ping <dowolny ciąg znaków> <ilość powtórzeń>",
  run(msg, args) {
    if (args.length < 2)
      return msg.channel.send(
        "Hola hola ta komenda potrzebuje **przynajmniej** dwóch argumentów"
      );
    if (!isNaN(args[args.length - 1]))
      for (let i = 0; i < args[args.length - 1]; i++)
        msg.channel.send(args.slice(0, -1).join(" "));
    else msg.channel.send("Pochamuj sie podaj ilość na końcu");
  },
};
