import style from '../styles/AuthCard.module.css'
import Container from "@/components/Container";
const AuthCard = ({children}) => {
    return (
        <div className={style.card}>
                {children}
        </div>
    );
};

export default AuthCard;