import { Link } from "react-router-dom";
import AevumLogo from "@/assets/AevumLogo.png";

interface LogoProps {
  showText?: boolean;
  className?: string;
}

const Logo = ({ showText = true, className = "" }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary p-1.5">
        <img 
          src={AevumLogo} 
          alt="Aevum Solutions logo" 
          className="h-full w-full object-contain"
        />
      </div>
      {showText && (
        <span className="text-xl font-semibold text-foreground">Aevum Solutions</span>
      )}
    </Link>
  );
};

export default Logo;
