import { createContext, useContext, useState } from "react";

const ContextStatus = createContext();
const ContextStatusProvider = ContextStatus.Provider;

function StatusProvider({ children }){
    const [favAuthor, setFavAuthor] = useState(JSON.parse(localStorage.getItem('favAuthor')) ? JSON.parse(localStorage.getItem('favAuthor')) : []);

    return (
        <ContextStatusProvider value={{favAuthor, setFavAuthor}}>
            {children}
        </ContextStatusProvider>
    )
}

function useStatus() {
    const all = useContext(ContextStatus);
    return all;
}

export { StatusProvider, useStatus };
