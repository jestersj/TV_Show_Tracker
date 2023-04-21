import MyLink from "@/components/MyLink";
import styles from '../styles/MyNavbar.module.css'
import Container from "@/components/Container";
import {Context} from "@/context/AppWrapper";
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {useRouter} from "next/router";

const MyNavbar = () => {
    const {user} = useContext(Context)
    const router = useRouter()
    return (
        <header className={styles.navbar}>
            <Container>
                <MyLink text={'Главная'} href={'/'}/>
                {
                    user.isAuth
                    ?
                        <div>
                            <MyLink text={'Мои фильмы и сериалы'} href={'/shows'}/>
                            <button onClick={() => {
                                user.setIsAuth(false)
                                router.push('/')
                            }}>Выход</button>
                        </div>
                        :
                        <MyLink text={'Авторизация'} href={'/auth'}/>
                }
            </Container>
        </header>
    );
};

export default observer(MyNavbar);