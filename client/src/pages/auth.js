import {observer} from "mobx-react-lite";
import {Context} from "@/context/AppWrapper";
import MainLayout from "@/layouts/MainLayout";
import {useContext, useState} from "react";
import AuthCard from "@/components/AuthCard";
import {login, registration} from "@/http/userApi";
import {useRouter} from "next/router";
import {Box, Card, Container} from "@mui/material";
const Auth = observer(() => {
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isReg, setIsReg] = useState(true)
    const router = useRouter()

    async function click() {
        try {
            let data
            if (!isReg) {
                data = (await login(email, password))
            } else {
                data = await registration(email, password)
            }
            user.setUser(data.info)
            user.setIsAuth(true)
            user.setToken(data.token)
            localStorage.setItem('token', data.token)
            await router.push('/')
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <MainLayout>
            <Container>
                <Card>
                    <a onClick={() => setIsReg(!isReg)}>
                        {
                            isReg ? 'Уже зарегестрированы? Войдите' : 'Нет аккаунта? Зарегистрируйтесь'
                        }
                    </a>
                    <form>
                        <input type="text"
                               placeholder='email'
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                        <br/>
                        <input type="text"
                               placeholder='password'
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        />
                    </form>
                    <button onClick={click}>
                        {
                            isReg ? 'Зарегистрироваться' : 'Войти'
                        }
                    </button>
                </Card>
            </Container>
        </MainLayout>
    );
});

export default Auth;