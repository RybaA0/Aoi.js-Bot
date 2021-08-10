const aoi = require("aoi.js")

const bot = new aoi.Bot({

     token: "token", 

     prefix: "prefix"

});

bot.onMessage({

  guildOnly: false  //blokuję wiadomości na pv 

});

bot.loadCommands(`./commands/`) //ładuje pliki z folderu commands
