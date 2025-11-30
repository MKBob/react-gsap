import { createContext, useState } from "react";

export const NavbarContext = createContext();
export const NavbarColorContext = createContext();

export const NavProvider = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false);
    const [navColor, setNavColor] = useState("#000000");

    return (
        <NavbarContext.Provider value={[navOpen, setNavOpen]}>
            <NavbarColorContext.Provider value={[navColor, setNavColor]}>
                {children}
            </NavbarColorContext.Provider>
        </NavbarContext.Provider>
    );
};
export default NavProvider;
