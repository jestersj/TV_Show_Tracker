import React, {useContext, useEffect, useState} from 'react';
import MainLayout from "@/layouts/MainLayout";
import {useRouter} from "next/router";
import {deleteShow, fetchOne} from "@/http/showApi";
import {Context} from "@/context/AppWrapper";
import {observer} from "mobx-react-lite";
import {Container, Grid, Rating, Button} from "@mui/material";
import style from '../../styles/[id]Show.module.css'
import Image from "next/image";
import EditModal from "@/components/show/EditModal";

const ShowPage = () => {
    const {query} = useRouter()
    const router = useRouter()
    const {shows} = useContext(Context)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        fetchOne(query.id).then((data) => {
            shows.setShows([data])
        })

    }, [])
    return (
        <MainLayout>
            <Container>
                <Grid container className={style.container}>
                    <Grid item xs={4}>
                        <Image
                            loader={() => 'http://localhost:7000/' + shows.shows[0].img}
                            src={'http://localhost:7000/' + shows.shows[0].img}
                            alt={shows.shows[0].name}
                            width={300}
                            height={400}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <h2>{shows.shows[0].name}</h2>
                        <h3>Описание</h3>
                        <p>{shows.shows[0].description}</p>
                        <h3>Рейтинг</h3>
                        <Rating
                            readOnly
                            value={shows.shows[0].rating}
                            max={10}
                        />
                        <Grid container className={style.buttonGroup}>
                            <Grid xs={4}>
                                <Button
                                    variant='outlined'
                                    color='green'
                                    onClick={() => setIsOpen(true)}
                                >
                                    Редактировать
                                </Button>
                            </Grid>
                            <Grid xs={6}>
                                <Button
                                    variant='outlined'
                                    color='red'
                                    onClick={() => deleteShow(query.id).then(() => router.push('/shows'))}
                                >
                                    Удалить
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <EditModal open={isOpen}
                       handleClose={() => setIsOpen(false)}
            />
        </MainLayout>
    );
};

export default observer(ShowPage);