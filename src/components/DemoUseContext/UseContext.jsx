import React, { createContext, useState } from "react";
import CompB from "./CompB";

export const themeText = createContext();
export default function UseContext() {
  const [theme, setTheme] = useState("light");
  const handleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <themeText.Provider value={theme}>
      <div>
        <button onClick={handleChange}>Change</button>
        <CompB />
      </div>
    </themeText.Provider>
  );
}
