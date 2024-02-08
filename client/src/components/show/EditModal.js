import {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {editShow} from "@/http/showApi";
import {Box, Button, Card, Container, Modal, Rating, TextField} from "@mui/material";
import {Context} from "@/context/AppWrapper";
import {observer} from "mobx-react-lite";
import style from "@/styles/AddShow.module.css";

const EditModal = ({open, handleClose}) => {
    const {shows} = useContext(Context)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(1);
    const [file, setFile] = useState(null);
    const { query } = useRouter();
    useEffect(() => {
        setName(shows.shows[0].name)
        setDescription(shows.shows[0].description)
        setRating(shows.shows[0].rating)
    }, [shows.shows])

    function edit() {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('rating', `${rating}`)
        formData.append('img', file)
        editShow(query.id, formData).then((data) => {
            shows.setShows([data])
            handleClose()
        })
    }
    return (
            <Modal open={open}
                   onClose={handleClose}
            >
                <Container maxWidth='sm'>
                    <Card className={style.card}>
                        <Box component='form' className={style.box}>
                            <h2>Редактировать шоу</h2>
                            <TextField
                                className={style.input}
                                variant='standard'
                                label='Название'
                                sx={{
                                    input: {
                                        color: 'white',
                                    }
                                }}
                                focused
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                className={style.input}
                                variant='outlined'
                                label='Описание'
                                sx={{
                                    textArea: {
                                        color: 'white'
                                    }
                                }}
                                focused
                                multiline
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <p>Оценка: {rating}</p>
                            <Rating
                                max={10}
                                value={rating}
                                onChange={(e) =>setRating(e.target.value)}
                                required
                            />
                            <TextField
                                className={style.input}
                                type='file'
                                variant='outlined'
                                label='Картинка'
                                sx={{
                                    input: {
                                        color: 'white',
                                    }
                                }}
                                focused
                                required
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            <Button variant="contained" onClick={edit}>
                                Сохранить
                            </Button>
                        </Box>
                    </Card>
                </Container>
            </Modal>
    );
};

export default observer(EditModal);