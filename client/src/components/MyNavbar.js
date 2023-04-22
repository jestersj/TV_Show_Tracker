import MyLink from "@/components/MyLink";
import styles from '../styles/MyNavbar.module.css'
import MyContainer from "@/components/MyContainer";
import {Context} from "@/context/AppWrapper";
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {useRouter} from "next/router";
import {Container, Grid} from "@mui/material";

const MyNavbar = () => {
    const {user} = useContext(Context)
    const router = useRouter()
    return (
        <header className={styles.navbar}>
            <Container maxWidth='lg'>
                <Grid container>
                    <Grid item>
                        <MyLink text={'Главная'} href={'/'}/>
                    </Grid>
                    {
                        user.isAuth
                            ?
                            <>
                                <Grid item>
                                    <MyLink text={'Мои фильмы и сериалы'} href={'/shows'}/>
                                </Grid>
                                <Grid item>
                                    <button onClick={() => {
                                        user.setIsAuth(false)
                                        router.push('/')
                                    }}>Выход</button>
                                </Grid>
                            </>
                            :
                            <MyLink text={'Авторизация'} href={'/auth'}/>
                    }
                </Grid>
            </Container>
        </header>
    );
};

export default observer(MyNavbar);