import {createContext} from 'react';
import {userStore} from "@/store/UserStore";
import {showStore} from "@/store/ShowStore";

export const Context = createContext(null);

export function AppWrapper({ children }) {
    let sharedState = {
        user: userStore,
        shows: showStore
    }
    return (
        <Context.Provider value={sharedState}>
            {children}
        </Context.Provider>
    );
}
