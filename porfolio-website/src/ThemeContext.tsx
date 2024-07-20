import { createContext, ReactNode, useContext, useState } from "react"

const ThemeContext = createContext({
    theme: 'sky',
    changeTheme: (value: string) => {},
})
interface Props{
    children: ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState('sky');

    const changeTheme = (value: string) => {
        setTheme(value);
    }   

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);