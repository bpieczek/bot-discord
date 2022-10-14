const qr = require('qrcode');
const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const file = new AttachmentBuilder('./assets/file.png');

const qrembed = new EmbedBuilder()
	.setTitle('Link do strony')
    .setTimestamp()

module.exports = {
    name: "qr",
    description: "Generuje kod qr z podanego linku",
    template: "qr <link do strony>",
    run(msg, args)
    {
        if(!args[0].startsWith("http")) return msg.channel.send('Prosze podaj link poprawny');

        qr.toFile('./assets/file.png', args[0],{
            color: {
                dark: '#192a56',
                light: '#dcdde1'
            },
            width: "1000"
        }, function(err){
            if(err) 
                return msg.channel.send('Cos poszlo nie tak');

            qrembed
            .setColor('Random')
            .setURL(args[0])
            .setImage('attachment://file.png')
            
            msg.channel.send({ embeds: [qrembed], files: [file] });
        })
    }
}