import {Card, Rating} from "@mui/material";
import Image from "next/image";
import {useRouter} from "next/router";
import style from '../../styles/ShowItem.module.css';

const ShowItem = ({show}) => {
    const router = useRouter()
    return (
        <Card className={style.card}
              onClick={() => router.push('/shows/' + show.id)}
        >
            <Image
                loader={() => 'http://localhost:7000/' + show.img}
                src={'http://localhost:7000/' + show.img}
                alt={show.name}
                width={200}
                height={267}
            />
            <h3>{show.name}</h3>
            <Rating
                readOnly
                defaultValue={show.rating}
                max={10}
            />
        </Card>
    );
};

export default ShowItem;