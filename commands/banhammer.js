const { lchown } = require("fs");

const log = console.log
const MAX_AMOUNT = 99;

module.exports = {
    name: "banhammer",
    description: "banuje użytkonika",
    run(msg, args)
    {
        if(args.length == 0) return msg.channel.send("Oznacz kogo chcesz zbanować")
        
        let member = msg.mentions.members.first();
        if(member == null) return msg.channel.send('Nie moge znaleźć takiej osoby');
        if(!member.bannable) return msg.channel.send('Nie moge zbanować tego człowieka jest zbyt silny dla mnie');

        member.ban().then(()=>{
            msg.channel.send(`Użytkownik ${member} został pomyślnie zbanowany`);
        });
    }
}