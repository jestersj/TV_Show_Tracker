import style from '../styles/AuthCard.module.css'
import {Box, Button, Card, Container, TextField} from "@mui/material";
import {useContext, useState} from "react";
import {Context} from "@/context/AppWrapper";
import {useRouter} from "next/router";
import {login, registration} from "@/http/userApi";
import {observer} from "mobx-react-lite";
import {fetchAll} from "@/http/showApi";
const AuthCard = () => {
    const {user, shows} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLog, setIsLog] = useState(true)
    const router = useRouter()

    async function click() {
        try {
            let data
            if (isLog) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(data.info)
            user.setIsAuth(true)
            user.setToken(data.token)
            localStorage.setItem('token', data.token)
            await fetchAll().then((data) => shows.setShows(data))
            await router.push('/')
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    return (
        <Container maxWidth='sm'>
            <Card className={style.card}>
                <Box component='form' className={style.box}>
                    <h2>
                        {isLog ? 'Вход' : 'Регистрация'}
                    </h2>
                    <TextField
                        className={style.input}
                        variant='standard'
                        label='Email'
                        sx={{
                            input: {
                                color: 'white',
                            }
                        }}
                        focused
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                    <TextField
                        className={style.input}
                        variant='standard'
                        label='Password'
                        sx={{
                            input: {
                                color: 'white',
                            }
                        }}
                        focused
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                    <Button variant="contained" onClick={click}>
                        {isLog ? 'Войти' : 'Зарегистрироваться'}
                    </Button>
                    <p onClick={() => setIsLog(!isLog)} className={style.isLog}>
                        {isLog ? 'Нет аккаунта? Зарегистрируйтесь' : 'Есть аккаунт? Войдите'}
                    </p>
                </Box>
            </Card>
        </Container>
    );
};

export default observer(AuthCard);