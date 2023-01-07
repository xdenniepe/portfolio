import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Seo from "./components/Seo";
import HomeContainer from "./containers/HomeContainer";
import Preloader from "./components/Preloader";
import { ThemeContext, ThemeContextProps } from "./context/ThemeProvider";
import { GREETING_DESCRIPTION, IMAGE, KEYWORDS, NAME, URL } from "./data/data";

function App() {
  // "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", 
  // "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", 
  // "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", 
  // "acid", "lemonade", "night", "coffee", "winter"

  // aqua, 
  const [Theme, setTheme] = useState("luxury");
  const value = { theme: Theme, setTheme };
  const [menuShow, showMenu] = useState(false);
  const [preloader, showPreloader] = useState(true);
  
  return (
    <ThemeContext.Provider value={value}>
      <Preloader/>
      <Seo
        url={URL}
        lang="en"
        metaDescription={GREETING_DESCRIPTION}
        keywords={KEYWORDS}
        image={IMAGE}
        title={NAME}
        author={NAME}
        theme={Theme}
      />
      <div className="flex flex-col">
        <Navbar menuShow={menuShow} showMenu={showMenu} />
        <HomeContainer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
