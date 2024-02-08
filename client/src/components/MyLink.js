import {useRouter} from "next/router";
import styles from '../styles/MyLink.module.css';
const MyLink = ({text, href}) => {
    const router = useRouter()
    return (
        <p className={styles.link}
           onClick={() => router.push(href)}
        >
            {text}
        </p>

    );
};

export default MyLink;