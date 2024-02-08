import style from '../styles/Container.module.css';
const MyContainer = ({children}) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    );
};

export default MyContainer;