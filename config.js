

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["705078573752647762", ""], 
  mongodbUri : "mongodb+srv://Sythe44:ShivaConnect@discordbot.l4pcc6t.mongodb.net/?retryWrites=true&w=majority&appName=DiscordBot",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Spotify", 
  activityType: "PLAYING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/nWqjcH2fUu",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "LAVALINK",
      password: "Sythe44",
      host: "5.39.63.207",
      port:  3849,
      secure: false
    }
  ]
}
