import { Link } from "react-router-dom";
import AevumLogo from "@/assets/AevumLogo.png";

interface LogoProps {
  showText?: boolean;
  className?: string;
}

const Logo = ({ showText = true, className = "" }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      <img 
        src={AevumLogo} 
        alt="Aevum Solutions logo" 
        className="h-9 w-9 rounded-lg object-contain"
      />
      {showText && (
        <span className="text-xl font-semibold text-foreground">Aevum Solutions</span>
      )}
    </Link>
  );
};

export default Logo;
