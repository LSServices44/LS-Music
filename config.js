

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["705078573752647762", ""], 
  mongodbUri : "mongodb+srv://Sythe44:ShivaConnect@discordbot.l4pcc6t.mongodb.net/?retryWrites=true&w=majority&appName=DiscordBot",
  spotifyClientId : "bc6b33fcdcfe458e9dfc5f07b9ea8cef",
  spotifyClientSecret : "2e35cb9fb34a4f57bf72444484f65929",
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
