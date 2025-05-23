import { MoonIcon, SunMediumIcon } from "lucide-react";
import { useTheme } from "../ThemeContext/ThemeContext.jsx";

function ThemeToggle() {
  const { isDark, setIsDark } = useTheme();

  return (
    <button onClick={() => setIsDark(!isDark)}>
      {isDark ? (
        <SunMediumIcon className="h-8 w-8 rounded-full bg-blue-500/20 p-1" />
      ) : (
        <MoonIcon className="h-8 w-8 rounded-full bg-blue-500/20 p-1" />
      )}
    </button>
  );
}

export default ThemeToggle;
