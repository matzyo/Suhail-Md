I'mconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_37_05_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUwLFxuICAgICAgICA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTA4LFxuICAgICAgICA5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTczLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDU0LFxuICAgICAgICAzNixcbiAgICAgICAgMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMixcbiAgICAgICAgMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDg1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDMzLFxuICAgICAgICA1NixcbiAgICAgICAgMTYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNixcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIzLFxuICAgICAgICA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4ZG8vdGdReWlOSUY2OEFNRmRTYU5uaGlUS1hUTWJXbzNJMldiRXprZ3RJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIQlNaZWpIWFExU296V1FHbEZQVFFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdlZGJlMjAzLTVmZDUtNGI2Yy05NDRiLWM5NjAzMTc4ZTMwYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDE3NixcbiAgICAgIDExMCxcbiAgICAgIDgsXG4gICAgICAxMTcsXG4gICAgICAxMjksXG4gICAgICA3MixcbiAgICAgIDksXG4gICAgICAxMjUsXG4gICAgICAxOTAsXG4gICAgICAxNCxcbiAgICAgIDI5LFxuICAgICAgODAsXG4gICAgICAyMzYsXG4gICAgICAxOSxcbiAgICAgIDcwLFxuICAgICAgMTI0LFxuICAgICAgMTA0LFxuICAgICAgOTMsXG4gICAgICAyMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgMjQ5LFxuICAgICAgMTI2LFxuICAgICAgMTkwLFxuICAgICAgMjU0LFxuICAgICAgMTQ1LFxuICAgICAgODcsXG4gICAgICAxNzksXG4gICAgICAxMjAsXG4gICAgICAyMjMsXG4gICAgICAyNTAsXG4gICAgICAyMTEsXG4gICAgICAxNTEsXG4gICAgICAyNixcbiAgICAgIDI0NyxcbiAgICAgIDIyLFxuICAgICAgMTg3LFxuICAgICAgMixcbiAgICAgIDEyMixcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCTFcxQzJTUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA4MDgzNTcxNjoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1hdHp5IFNvbHV0aW9uc1wiLFxuICAgIFwibGlkXCI6IFwiNTA1NjQ3MDAzNTI2MTY6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXlqNDhVQkVPR2F5TEVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiczRGc2tOTUlNbTdhWTRRNnFqMFduRUNjSkhMeWZYRHpJZTFJTzJTc25VPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImoxb3puRWtIaVRoZmVmSDlicDF0eEtNWHl3VFFlUERGaDJrSjBINGRrL1ZHU3llUFV0NjNjNll0RG5idmRmZHkvMVV0UWlwdGJDUHZzWm91OTZxZEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxUMndmN3NyZFNVQ1FqYThkWFBBNkJFVnFSVUtxRFZUaS9uYTFjZnlma2plZkpSRmNCMlNKdHJEYU56bi9PbFlXbW1JZFVUUkFwUCs4R04xczE4dUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODA4MzU3MTY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDU1NjI2MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
