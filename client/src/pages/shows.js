import MainLayout from "@/layouts/MainLayout";
import {fetchAll} from "@/http/showApi";
import {useContext, useEffect} from "react";
import {Context} from "@/context/AppWrapper";
import {useRouter} from "next/router";
import {observer} from "mobx-react-lite";
import ShowList from "@/components/show/ShowList";
import {Button, ButtonGroup, Grid} from "@mui/material";
import style from '../styles/ShowPage.module.css'

const Shows = observer(() => {
    const {user, shows} = useContext(Context)
    const router = useRouter()
    useEffect(() => {
        if (!user.isAuth) {
            router.push('/')
        }
    }, [])
    return (
        <MainLayout>
            <h3>Всего {shows.shows.length} произведений</h3>
            <Grid container className={style.container}>
                <Grid item xs={2}>
                    <h3>Сортировать по:</h3>
                </Grid>
                <ButtonGroup variant='outlined' color='secondary'>
                    <Button
                            onClick={() => shows.sortByName()}
                    >
                        Названию
                    </Button>
                    <Button
                        onClick={() => shows.sortByRatingDown()}
                    >
                        Рейтингу (от высокого)
                    </Button>
                    <Button
                        onClick={() => shows.sortByRatingUp()}
                    >
                        Рейтингу (от низкого)
                    </Button>
                    <Button
                        onClick={() => shows.sortByDateOld()}
                    >
                        Дате (от старого)
                    </Button>
                    <Button
                        onClick={() => shows.sortByDateNew()}
                    >
                        Дате (от нового)
                    </Button>
                </ButtonGroup>
            </Grid>
            <ShowList shows={shows}/>
        </MainLayout>
    );
});

export default Shows;