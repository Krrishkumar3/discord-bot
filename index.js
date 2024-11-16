import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith('create')) {
        const url = message.content.split('create')[1];
        return message.reply({
            content: "Generating Short ID for " + url,
        });
    }
    message.reply({
        content: "hi! from bot",
    });
});

client.on("interactionCreate", (interaction) => {
    console.log(interaction);
    interaction.reply('Pong');
});

client.login(
    "MTI1ODQwMDA0ODk4NzkwMjAzNA.Gzjc_e.xD6jVQu7MH17gnUvoBuq882FdNl7WrljWsARP8"
);

