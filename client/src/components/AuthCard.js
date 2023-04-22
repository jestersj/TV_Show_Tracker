import style from '../styles/AuthCard.module.css'
import MyContainer from "@/components/MyContainer";
const AuthCard = ({children}) => {
    return (
        <div className={style.card}>
                {children}
        </div>
    );
};

export default AuthCard;