import { createContext } from "react";

// we add a hook to context [value, function]
const ThemeContext = createContext<[string, (theme: string) => void]>([
  "green",
  // tslint:disable-next-line: no-empty
  () => {}
]);

export default ThemeContext;
