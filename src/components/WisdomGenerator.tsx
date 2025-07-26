import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const tips = [
  "Wear sunglasses at night to be mysterious 😎",
  "Always carry a spoon. You never know when you'll need it 🥄",
  "Buy two pizzas. One as a backup 🍕",
  "Talk to your plants. They're better listeners than humans 🌱",
  "Clap when the plane lands. You're part of the crew now 👏",
  "Name your WiFi 'FBI Surveillance Van' to freak people out 🕵️",
  "If you can't convince them, confuse them 🤯",
  "Dance like no one's watching. But they are. And they're recording you 💃📱",
  "Put chips on your sandwich. Become a legend 🥪🔥",
  "Text 'k' to establish dominance in any conversation 📱",
  "Wear socks with sandals to assert your independence 🧦👡",
  "Count your steps while walking. Become a human Fitbit 👣",
  "Practice your Oscar speech in the shower 🚿🏆",
  "Always order pizza with a British accent. They'll never suspect 🍕🇬🇧",
  "Microwave leftover pizza. Chaos is a ladder 🍕⚡",
  "Use 'vintage' as an excuse for everything broken in your house 🏠",
  "Reply 'noted' to every text. Maximum efficiency achieved 📝",
  "Eat dessert first. Life's too short for logical meal orders 🍰",
  "Wave at security cameras. Make friends with Big Brother 👋📹",
  "Keep your WiFi password as 'password123'. Hide in plain sight 🔐"
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