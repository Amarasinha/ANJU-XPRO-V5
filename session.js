//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUlYQzNBME9lektXc05ONWdGM252Wnc2bTl4TExXQmp3SFpJMWQzYTVsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZW1QQ2MzVGwxRElqZGFHMDlEVHVPVU9STmJCSE54RDlBd0tuQlRRL0NnYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTFE2eHNWb0JJdElVWTJkSTJjT1FZTy9jdzhwR2MyK1RWVWVudUhZYjBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyZzluc25HblJ0V1dpOGJqZlpacXpGdU1MK09RaGR1bTR5aHVKbWtocUZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJGeTBkbDVrSUtLRGY4elVCdVJ5b2xiV3ZuWUszbWRJSGpoOEdnbkUwVW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjE3bUVMazBDVUdJdUkwTFNxc0ptR2ExV3lHcGdNMVVHTUkwc0dnZGU2azQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0dBckM1OFdhVmlQemczSEkxWXdoOFlZa1FkdDE5S0pFVHpZSGZiR1dYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0wzSHpEUE1xdE1Bc0dnaW1CZW12UGFhYTBnR1B4ajdUeVc1SU9vMlNXMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMxNzlOVkF5T3AzYkwyTnZGSlRPNUFFYklOaVdkTW4wekhaTzE0RjFTaGwxalVvRnNVR29sMDNhRFZiOFE3REphOVdMV3pFaGh6SVNrVkdYZ1YwdmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJ1Y0VTVEJnZXlzdUJVRTdneGtqdG1hVUt5NEphWHFBYytMbVlGR3NkWVM4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5UkZxZXhmalRfU2cwVlJ0QzVyVUJ3IiwicGhvbmVJZCI6IjQ1MzIzZTgyLTIyODEtNDA1ZC04NWE3LWE5MTI0NmU3NTBjZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuVG5SQXR3OFE5VGxxVlM5NDB3U1pHSHYvWm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzJySHJVOXdqeHl1M0NDUnFEM21pZklMR2FjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlkzUFRWUDQ5IiwibWUiOnsiaWQiOiI5NDcwNDM3ODIzNjo1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTQzNjU0MzU4NDA1MTc3OjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNdVYwVkVRNkpEN3dnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaVXdUL2RNWEI1QUxvbDZkMjB5Q094bENZVjUrblhqK2pGdnZkb3VzM1NnPSIsImFjY291bnRTaWduYXR1cmUiOiJpTnI3enJUUTdPUjg1WExuRk4vVTNYRU1vYnE2VktRMk9qSkcwa3pnblV1Z3J0S0JXL3ZVQ1hCWUhkSlJWOWEzbCt6WnVidFpDVlFjd2Z2K0MvYk1EZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidlJWL04vYldMOENIRVBNVlE0REUzbGZBQ0h5MzJDOVZxVTBQc2tSWUJGbmtTOExZbFVQR3pOZzk0NHltN1hTcDZMRld5R1BtZDdTdS9zTk1NZEtyamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwNDM3ODIzNjo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldWTUUvM1RGd2VRQzZKZW5kdE1nanNaUW1GZWZwMTQvb3hiNzNhTHJOMG8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTA0MjE2NiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "9470 437 8236",
  PASSWORD: 
    process.env.PASSWORD || "Chamindu2008",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94762652043", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
