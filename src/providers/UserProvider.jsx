// @ts-nocheck
import {  useContext, useState } from 'preact/hooks'; 
import { createContext } from 'preact'


const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userData) => {

        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser=() => useContext(UserContext);