const MAX_AMOUNT = 99;

module.exports = {
    name: "clear",
    description: "czyści x wiadomości kanał",
    run(msg, args)
    {
        if(!isNaN(args[args.length-1]))
        {
            if(args[args.length-1] > MAX_AMOUNT) return msg.channel.send(`O matko tyle nawet ja nie usunę max to: ${MAX_AMOUNT}`);

            msg.channel.bulkDelete(parseInt(args[args.length-1])+1).then(()=>{
                msg.channel.send(args[args.length-1] == 1 ? `Usunięto 1 wiadomość`: `Usunięto ${args[args.length-1]} wiadomości`).then((msg) => {
                    setTimeout(()=>{msg.delete()}, 2000)
                })
            })
        }
        else
            msg.channel.send("Pochamuj sie podaj ilość na końcu");
    }
}