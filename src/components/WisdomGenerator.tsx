import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const tips = [
  "Raat ko sunglasses pehno – mysterious vibes 😎",
  "Hamesha ek spoon carry karo, kab zarurat pad jaaye kya pata 🥄",
  "Do pizza lo – ek asli, ek backup 🍕",
  "Apne plants se baat karo, humans se achhe listener hote hai 🌱",
  "Plane land ho to clap karo – crew waale feel aate hain 👏",
  "Apna WiFi naam rakho 'FBI Surveillance Van' – mazaa aayega 🕵️",
  "Convince nahi kar paaye? Confuse kar do 🤯",
  "Dance karo like no one's watching... par sab record kar rahe hain 💃📱",
  "Sandwich me chips daalo – ban jao legend 🥪🔥",
  "Bas 'k' text karo – pura convo control tumhare haath me 📱",
  "Socks aur sandals pehno – apni marzi ka swag dikhana hai 🧦👡",
  "Chalte chalte steps count karo – ekdum human Fitbit 👣",
  "Shower me Oscar speech practice karo – future ready 🚿🏆",
  "Pizza British accent me order karo – sab confuse ho jayenge 🍕🇬🇧",
  "Pizza ko microwave karo – thoda chaos bhi zaroori hai 🍕⚡",
  "'Vintage' bolo – ghar ki har broken cheez cool lagne lagegi 🏠",
  "Har message ka reply do – 'Noted.' – boss level efficiency 📝",
  "Dessert pehle khao – zindagi logical nahi hoti 🍰",
  "Security cameras ko wave karo – Big Brother se dosti banao 👋📹",
  "WiFi ka password rakho 'password123' – sab ke saamne chhup jao 🔐",
  "Lift ke mirror me pose maaro – thoda filmy feel banta hai 🪞",
  "Monday ko bhi smile karo – log confuse ho jaayenge 😁",
  "Traffic me horn bajane se signal green nahi hota – try meditation 🚦🧘‍♂️",
  "Khaali bottle fridge me rakho – dikhane ke liye ki organized ho 🧊",
  "Meeting me mute pe gaali de sakte ho... par camera band bhi rakho 🎤🙊",
  "T-shirt ulta pehn lo – fashion statement ban jaata hai 🔄👕",
  "Apne alarm ko motivational naam do – 'Uth jaa legend' ⏰🔥",
  "Text 'seen' and ignore – ego boost milta hai 😌📱",
  "Ghar ke plants ko naam do – emotional connection banta hai 🪴❤️",
  "Momos ko chopsticks se khane ki koshish mat karo – desi ho, desi raho 🥢🥟",
  "Thand me AC chalu karo – rich feeling aati hai ❄️💸",
  "Lift me kisi ko awkwardly ghooro – lifelong yaadgar moment ban jaayega 😐👀",
  "Online meeting me camera off rakhke chole bhature kha sakte ho 🍽️💻",
  "TV remote se fan band karne ki koshish karo – kabhi kabhi kaam kar jaata hai 📺🌀",
  "Ghar me shoes pehno – guest wali feeling aati hai 👞🏠",
  "Birthday pe khud ko gift bhejo – self-love level max 🎁💖",
  "Paise khatam? UPI QR code DP bana lo – donate shuru 📱💸",
  "Friend ko 'bhai' bulao, girlfriend se bacha rahega 👀🧠",
  "Kapde press mat karo – bolo 'wrinkle is new fashion' 👕✨",
  "TV par volume ko even number pe set karo – shanti milegi 🔊✌️",
  "Delivery boy ko 'bhaiya' bulao – fast service milti hai 🚴‍♂️",
  "Tea pe coding karo – 10x developer ban jaoge ☕💻",
  "Fridge me kuch nahi to thoda ghoor lo – mind fresh ho jaata hai 🧠🧊",
  "Apni crush ke photo ko wallpaper mat banao – awkward ho jaata hai 😳📱",
  "Raat ko paani mat piyo – fridge bhoot ban jaata hai 🚰👻",
  "Google pe 'how to be rich' search karo – at least effort toh kiya 💰🔍",
  "Khud se hi arguments practice karo – har fight jeet jaoge 😤🪞",
  "Chips ki sound me guilt chup jaata hai – extra khush raho 🍟😅",
  "Bunk karo, par guilt ke sath – balance zaroori hai 🎓🤫",
  "Kisi ko 'bhai sahab' bolo – respect milti hai instantly 🙏🧔",
  "Apne email ke sign off me 'Regards, CEO' likho – power feel aayegi 💼📩",
  "Fan ki speed 5 pe rakho – maximum wind = maximum productivity 🌀💪",
  "Window band karo – par duniya ke liye nahi, noise cancel ke liye 🪟🙉",
  "Ghar ki light on chhod do – bijli board ko pareshan karo 💡⚡",
  "Fridge me photo chipkao – childhood ka nostalgia active ho jaayega 🖼️🧊",
  "Old WhatsApp group me 'hi' bhejo – chaos guaranteed 💬🔥",
  "Shirt andar karne se responsible feel aata hai – chahe kuch bhi ho 👔🙃",
  "Calendar me chhutti mark karo – chahe milti ho ya nahi 📆🤞",
  "Light dim karo, aur socho – bas socho, kuch karo mat 💡🧠",
  "Sleep schedule set karo – fir usse tod do 😴⏰",
  "Jab kuch na samjho, bas haan me haan milao 🤝😅",
  "Zyada bolne se better hai emoji bhejna – feelings 10x clear hote hain 😎👌",
  "Kabhi kabhi bina reason apne aap ko claps do 👏💪",
  "Shower me gaana gao – auto-tune ka asli feel wahi milta hai 🎤🚿",
  "Paise nahi ho to bhi online cart bharo – satisfaction free hai 🛒😌",
  "Apne socks ka colour match mat karo – rebel inside 🧦🎨",
  "Zoom call pe sirf shirt pehno – below camera kuch bhi chalega 👕🩳",
  "Screenshot lo, par use kabhi mat karo – habit hai 📸🤷‍♂️",
  "Selfie leke delete kar do – therapy hai 📷🗑️",
  "Lifts me 'sorry wrong floor' bolkar awkward moments enjoy karo 🛗🙈",
  "Water bottle me paani nahi – swag bhar ke rakho 💦😎",
  "Kabhi kabhi bina reason phone uthao aur rakho – test hai 📞📴",
  "To-do list likho – aur ignore karo 📝🛌",
  "Apni handwriting dekh ke khud confuse ho jao ✍️😵",
  "Ghar me shoes ulta rakho – design experiment banta hai 👟↔️",
  "Sleep lete waqt phone uthao – eye strain ka asli maza aata hai 📱😩",
  "Weekend plan karo – aur pura cancel kar do 📅🚫",
  "Crush ko like karo – aur fir unlike kar do 😬❤️💔",
  "Dog ko 'bro' bulao – instant bonding 🐶👊",
  "Empty cup me tea ke sip lo – drama queen feel 🎭☕",
  "Shopping cart me filter laga ke expensive items dekho – sapna free hai 🛍️💎",
  "Apne joke pe khud hi haaso – contagious hota hai 😆🎉",
  "Every notification important hota hai – jab tak wo Swiggy na ho 📲🍔",
  "New tab open karo – par kaam wala mat karo ➕💻",
  "Pen ke click se stress relief milta hai – office therapy 🖊️😤",
  "Late night thoughts = future Nobel prize ideas 🌌🧠",
  "Apni hi photo like karo – sabse bada fan banna padta hai 📸❤️",
  "Kabhi bina reason sare buttons daba do – mood fresh ho jaata hai 🔘😜",
  "Mirror me aankhon me aankh daalo – filmy hero wali feel aati hai 🪞🕶️",
  "Garama garam chai ke saath overthinking bhi banta hai ☕🤔",
  "WhatsApp DP change karte hi life sorted lagti hai 📱😎",
  "Alarm snooze karo – zindagi ke saath compromise karna padta hai ⏰🛌",
  "Khaali pocket me haath daalke rich feel lo – sab imagination ka game hai 🤑🖐️",
  "Kabhi randomly kisi ko bol do – 'Aapko dekha toh laga... hero ho!' 🎬😆",
  "Toothbrush ke saath mic samajh ke singing karo – sabse sasta concert 🎤🪥",
  "Aankh band karke calculator use karo – trust the math vibes 🧮🧘",
  "Fan me haath daalke superhero feel lena – full childhood nostalgia 🦸‍♂️🌀",
  "TV mute karke guessing game khelo – desi Netflix challenge 📺🤫"
];


const WisdomGenerator = () => {
  const [currentTip, setCurrentTip] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [buttonAnimating, setButtonAnimating] = useState(false);

  const generateTip = () => {
    setButtonAnimating(true);
    setTimeout(() => setButtonAnimating(false), 500);
    
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * tips.length);
      setCurrentTip(tips[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gradient leading-tight">
          Welcome to Your Daily Dose of Dumb
        </h1>
        <div className="text-2xl md:text-3xl">
          🤡🦄🍕🥴✨🎭🎪🎨
        </div>
      </div>

      {/* Tip Display Section */}
      <Card className="w-full max-w-2xl p-8 md:p-12 text-center shadow-glow border-2 border-primary/20 bg-card/80 backdrop-blur-sm">
        <div className="min-h-[120px] flex items-center justify-center">
          {currentTip ? (
            <p 
              className={`text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-relaxed ${
                isAnimating ? 'opacity-0 scale-75' : 'animate-fade-in-bounce opacity-100 scale-100'
              } transition-all duration-300`}
            >
              {currentTip}
            </p>
          ) : (
            <p className="text-lg md:text-xl text-muted-foreground italic">
              Click below to get a useless tip that'll change your life (or not) 🎯
            </p>
          )}
        </div>
      </Card>

      {/* Random Tip Button */}
      <Button
        onClick={generateTip}
        size="lg"
        variant="wisdom"
        className={`text-xl md:text-2xl px-8 py-4 h-auto font-bold transition-all duration-300 hover:scale-105 ${
          buttonAnimating ? 'animate-wiggle' : ''
        }`}
      >
        Give me wisdom 🧠
      </Button>

      {/* Footer Fun */}
      <div className="text-center space-y-2 opacity-60">
        <p className="text-sm text-muted-foreground">
          Warning: Side effects may include uncontrollable giggles and questionable life choices
        </p>
        <div className="text-lg">🌟✨🎈🎊🎭✨🌟</div>
      </div>
    </div>
  );
};

export default WisdomGenerator;