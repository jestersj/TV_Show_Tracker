import styles from '../styles/MyLink.module.css'
import {useRouter} from "next/router";
const MyLink = ({text, href}) => {
    const router = useRouter()
    return (
        // <Link href={href} style={{textDecoration: "none"}}>
        //     <p className={styles.link}>{text}</p>
        // </Link>
        <p className={styles.link}
           onClick={() => router.push(href)}
        >
            {text}
        </p>

    );
};

export default MyLink;