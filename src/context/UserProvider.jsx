import { createContext, useState} from "react";


export const UserContext = createContext("user");

// const ThemeProvider = ({children}) => {
//     const [isDark, setIsDark] = useState(false)
// return <ThemeContext.Provider value={{isDark, setIsDark}}>{children}</ThemeContext.Provider>
// }

// export default ThemeProvider;