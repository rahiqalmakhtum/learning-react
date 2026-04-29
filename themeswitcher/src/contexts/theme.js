import { createContext, useContext } from "react";

//step 1: create context
export const ThemeContext = createContext({
    theme: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

//step 2: create provider
export const ThemeProvider = ThemeContext.Provider;

//Step 3: create custom hook to use context
export default function useTheme() {
    return useContext(ThemeContext);
}
