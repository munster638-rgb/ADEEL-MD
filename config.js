const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0R4K29mUDdZNGduTkZjci92SXVSUm56eDBiRVkvRmsyMDNDWnVzTnAwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmlLL1VNTDNwUHU0VjlHOWpPd3RwWHB2dy9xL2VCcVFOR2MyZ1ppVGJrUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRk5DVkhRT0xjbzJRVG1Sd0ZDdEJna3BqK09DWnZsdEwvOG5pQ1FPQUVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJON1ZLeUdnUUJBRjVVM2ZPZExhTVhzSjdPcU1LdE9BZlF6M1dZWnhWYUVVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1PYVpLamN2V1dCMFFmR1ZONUZVTG9ERU5aSmN4clhYYk8yQ2hBdVdQbVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtlSTZicEFPN2ZQYW9Na0FVQ3hPTDNxbXdUK0IvQ3NGOW9DdzE4MnBoVGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9aQTFWT1c1eXJlM0hWMDNRMWtSUEd2b2hQYXR0LzlUakw1SDYyb2ZIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2ZxMmNHK3RlUDFuc3F5VjZuR2FDOWdJbzBDOWVpUTVuRmVOa2FMbVpIbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYyNXBOUnAyNnZqNVpja05ZYVhmNndibS92S1ZpRzFUamlhRGg0aWxZMGdPOFN6cVRJYXlYa2dkOVNBSFRhMmkvSXYzcXVHdmt2RElOUURXaHNXWkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA2LCJhZHZTZWNyZXRLZXkiOiJRRWJsRkRHb1ducUdxTHNlZ0xyRXNyNlkzK3hWUktKaXRyMjhXV1FzaU5zPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNzY3NjU2NzUzN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzJDMUM1NTU3Q0ZERkVBRDg2QjNBMEJDRTBGMDZCMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYyODMxMDczfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzc2NzY1Njc1MzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM1MjZCNzgwREU2MTEyMkQzNUMxOTBGRjE4OTk3MkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MjgzMTA3NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQURFRUw1TUQiLCJtZSI6eyJpZCI6IjIzNzY3NjU2NzUzNzoxM0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIyNDc5OTI5Mjk1Njg2NjoxM0BsaWQiLCJuYW1lIjoiZWtvMjg2NjE1In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMU0l0YmNDRU5EVnlzZ0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5UnFSZmtlYTBPbkZOQjN2cmcyRGh1ZVVQaXRlc1pjVnlxOEFVc2RGSjJvPSIsImFjY291bnRTaWduYXR1cmUiOiJnNFpGeHhPTkNFMmpxYm92U3VrY2EwUy9QeXg3dGtZR1VaYnRkZ294ZjFKTnROTVJtZ3VMOFFnOVNvUGJ2VUZBaUNwOGk4Rlg4MWdKMnlWaFhoN2RCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicnJXRGRkZTRZaURNbXREbFVZM1oxYjQ4V0N6cmcrNHV0S21zelpTM242NGZINzZJZ1BVMG1QTHhKcElMME1uWDQ0ZjVTc2RGWEQxdThVWmhoeWtDQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2NzY1Njc1Mzc6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2tha1g1SG10RHB4VFFkNzY0Tmc0Ym5sRDRyWHJHWEZjcXZBRkxIUlNkcSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUFnZ04ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYyODMxMDY5LCJsYXN0UHJvcEhhc2giOiJubTNCYiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS0dEIn0= || "",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Eclise*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn-bandaheali.vercel.app/file/ADEEL-MD31424.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ADEEL-MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "ADEEL-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923035512967",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ADEEL-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴅᴇᴇʟ-ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn-bandaheali.vercel.app/file/ADEEL-MD31424.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*ADEEL-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT ||true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD |true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE |true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING |true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923035512967",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 
ANTI_CALL: process.env.ANTI_CALL || "false"
// make it true for auto call reject 
};
