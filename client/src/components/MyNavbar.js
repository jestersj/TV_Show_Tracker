import MyLink from "@/components/MyLink";
import styles from '../styles/MyNavbar.module.css'
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
                <Grid container spacing={4}>
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
                                    <MyLink text={'Добавить шоу'} href={'/shows/add'}/>
                                </Grid>
                                <Grid item>
                                    <p className={styles.logout}
                                        onClick={() => {
                                            user.setIsAuth(false)
                                            user.setUser({})
                                            router.push('/')
                                        }
                                    }>Выход</p>
                                </Grid>
                            </>
                            :
                            <Grid item>
                                <MyLink text={'Авторизация'} href={'/auth'}/>
                            </Grid>
                    }
                </Grid>
            </Container>
        </header>
    );
};

export default observer(MyNavbar);