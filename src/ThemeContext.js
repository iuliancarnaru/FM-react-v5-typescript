import { createContext } from "react";

// we add a hook to context [value, function]
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
