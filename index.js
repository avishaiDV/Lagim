const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async() =>{
 console.log(`${bot.user.username} is online!`);
bot.user.setActivity(`Lags Fixer`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}help`){
      let embed = new Discord.RichEmbed()
      .setThumbnail(bot.user.displayAvatarURL)
      .setColor(`#f4424e`)
      .setDescription("Help menu")
      .addField("prefix", ".")
      .addField("instagram, insta, אינסטגרם", "הפקודה הזאת תשלח לכם את האינסטגרם שלנו!")
      .addField("youtube, yt, יוטיוב, ערוץ", "הפקודה הזאת תשלח לנו את הערוץ המאוווד לאגי שלנו!")
      .addField("sales, הנחות", "הפקודה הזאת תתן לכם את הרשימה של המוצרים השווים שלנו במחירים זולים!!")
      .setFooter("the bot was coded by: avishaiDV");
      message.channel.send(embed)
  }

  if(cmd === `${prefix}instagram` || cmd === `${prefix}אינסטגרם` || cmd === `${prefix}insta`){
      message.channel.send("תעקבו אחרינו באינסטגרם! @Lagim.il");
  }

  if(cmd === `${prefix}youtube` || cmd === `${prefix}yt` || cmd === `${prefix}ערוץ` || cmd === `${prefix}יוטיוב`){
      let embed  = new Discord.RichEmbed()
      .setColor(`#8341f4`)
      .addField("אל תשכחו להפעיל את הפעמון!:", "https://www.youtube.com/channel/UCxzqBZ7mJsKKsjcpW03RKVw")
      .setFooter("the bot was coded by: avishaiDV");
      message.channel.send(embed)
  }
  if(cmd === `${prefix}הנחות` || cmd === `${prefix}sales`){
      let embed  = new Discord.RichEmbed()
      .setDescription("רשימת מגוון ההנחות למוצרים שלנו:")
      .setColor(`#4ff441`)
      .addField("אוזניות גיימינג איכותיות עם באס מוגבר!", ".Thrustmaster")
      .addField("מסך מחשב LED מבית  AOC (27 אינץ')", ".AG271QX")
      .addField("כסא גיימינג", ".gamingchair")
      .addField("SILVER LINE  SCORPIUS GHD-099V אוזניות", ".silverline");
      message.channel.send(embed)
  }

  if(cmd === `${prefix}Thrustmaster`){
      message.channel.send(`אהלן שאלוקייים!

      אנחנו גאים להציג לכם את הדיל שעובדים עליו כבר המון זמן...
      
      במיוחד לחברי קבוצת "לאגים"!
      
      אוזניות מבית Thrustmaster  דגם Y-300CPX
      
      הדור הבא של אוזניות USB המציעות בס מוגבר וביצועים משופרים.
      
      קצת על אוזניות גיימינג מסדרת- Y של Thrustmaster
      
      מותאמות ל – Playstation 3+4 | XBOX-ONE+360 | MAC | PC | | SMARTPHONES TABLETS |  | PS VITA  | NINTENDO
      
      -עובד עם בקרי One Xbox עם שקע אוזניות סטריאו 3.5 מ"מ
      
      -דרייבר 50מ"מ אמיתי נותן צליל אודיו ברור: לשמוע הכל, להגיב במהירות!
      
      -עיצוב ייחודי בצורת Y ,אשר מספק באופן מושלם נוחות יוצאת דופן: רפידות אוזניים גדולות, אולטרה רכות ובידוד פסיבי יעיל
      
      -מיקרופון איכותי שנועד למקד רק את הקול שלך עבור תקשורת יעילה ביותר עם שחקנים נוספים.
      
      -שנתיים אחריות יבואן רשמי!
      
      המחירון בזאפ:  245-299 ₪
      
      המחיר לחברי הקבוצה הוא 230 ₪ עם קוד קופון. (קוד הקופון לחברי הקבוצה בלבד ולא ניתן להעברה)
      
      יש להזין את הקוד קופון בקופה: LAG69
      
      למפרט המלא ורכישה >
      
       http://bit.ly/2GqvX2V`);
  }

  if(cmd === `${prefix}AG271QX`){
      message.channel.send(`לגיימרים הרציניים שבינינו..לשאלוקים מארץ השאלוקים בלבד!

      הצעה חדשה שנכנסה לחברי לאגים!
      
      מסך מחשב LED מבית  AOC 
       27  אינץ', 
      AOC מדורג כאחד הטובים בעולם!
      
      והפעם דגם   AOC AGON AG271QX 27
      -סוג פנל- TN
      ·         -גודל מסך- "27
      ·         -תאורה אחורית- W-LED
      ·         -רזולוציה- 25601440 x  
      ·         -יחס מסך- 16:9
      ·         -מהירות תגובה- 1 ms
      ·         -בהירות- 350cd/m²
      ·         -ניגודיות- 1000:1
      ·         -ממשק אנלוגי- VGA
      ·         -ממשק דיגטלי- D.P ,HDMI x 2, USB3.0 x 4
      ·         -זווית הטיה-3.5° / 21.5°
      ·         -אפשרות הרכבה בקיר- (YES (100mm
      ·         -צבע מסך- BLACK-RED
      ·         -כבלים כלולים- VGA,DVI, HDMI, D.P, Audio,USB 3.0, Power Cable
      ·         -רמקולים מובנים
      ·         משקל כולל מעמד 6.8 kg
      ·         מידות כולל סטנד 623x433x218mm
      
      המחירון בזאפ? 2999-3559 ש"ח 
      
      אבל לכם שאלוקים?  ב 1999 ₪ בלבד! מחיר שלא תמצאו בארץ...!
      
      הגיע הזמן לצלול לחווית גיימינג שונה לחלוטין :]
      
      למפרט המלא ורכישה >http://bit.ly/2rmDzJD
      
      קוד קופון להכניס בקופה >
      1478LAG`);
  }

  if(cmd === `${prefix}gamingchair`){
      message.channel.send(`שאלוקים יקרים!

      מכירים?SILVER LINE  SCORPIUS GHD-099V את אוזניות
     
     אוזניות + מיקרופון לגיימרים באיכות גבוהה לכל מטרה.
     
     ---- ומה כלול בחבילה?
     
     -אוזניות + מיקרופון
     
     -חיבור 3.5 מ“מ מתאים לרוב סוגי קונסולות המשחק, טלפונים ניידים ומחשבים ניידים
     
     ±כבל איכותי ועבה באורך 1.5 מטר 5%-
     
     מצורף מתאם מיוחד באורך 70 ס“מ לחיבור האוזניות למחשב נייח בעל 2 כניסות נפרדות (אוזניות ומיקרופון)-
     
     למימוש ההטבה כנסו עכשיו ללינק הבא
     
     http://bit.ly/2RGD7Bz
     
     והכניסו את הקוד קופון
     SL70
     
     בהצלחה!`);
  }
  if(cmd === `${prefix}silverline`){
     message.channel.send(`שאלוקים יקרים!

      מכירים?SILVER LINE  SCORPIUS GHD-099V את אוזניות
     
     אוזניות + מיקרופון לגיימרים באיכות גבוהה לכל מטרה.
     
     ---- ומה כלול בחבילה?
     
     -אוזניות + מיקרופון
     
     -חיבור 3.5 מ“מ מתאים לרוב סוגי קונסולות המשחק, טלפונים ניידים ומחשבים ניידים
     
     ±כבל איכותי ועבה באורך 1.5 מטר 5%-
     
     מצורף מתאם מיוחד באורך 70 ס“מ לחיבור האוזניות למחשב נייח בעל 2 כניסות נפרדות (אוזניות ומיקרופון)-
     
     למימוש ההטבה כנסו עכשיו ללינק הבא
     
     http://bit.ly/2RGD7Bz
     
     והכניסו את הקוד קופון
     SL70
     
     בהצלחה!`);
  }




  
});


bot.login(process.env.BOT_TOKEN);
