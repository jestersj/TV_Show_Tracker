import '../styles/global.css'
import {AppWrapper, Context} from "@/context/AppWrapper";
import {useContext} from "react";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    )
}