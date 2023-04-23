import MainLayout from "@/layouts/MainLayout";
import {Box, Button, Card, Container, Rating, TextField} from "@mui/material";
import style from "@/styles/AddShow.module.css";
import {useState} from "react";
import {addShow} from "@/http/showApi";
import {useRouter} from "next/router";

const Add = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(1)
    const [file, setFile] = useState(null)
    const router = useRouter()

    function add() {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('rating', `${rating}`)
        formData.append('img', file)
        addShow(formData).then((data) => router.push('/shows'))
    }

    return (
        <MainLayout>
            <Container maxWidth='sm'>
                <Card className={style.card}>
                    <Box component='form' className={style.box}>
                        <h2>Добавить шоу</h2>
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
                        <Button variant="contained" onClick={add}>
                            Добавить
                        </Button>
                    </Box>
                </Card>
            </Container>
        </MainLayout>
    );
};

export default Add;