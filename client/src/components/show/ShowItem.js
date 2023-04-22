import {Card, Grid} from "@mui/material";
import Image from "next/image";
import style from '../../styles/ShowItem.module.css'
import {useRouter} from "next/router";

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
            {show.name}
        </Card>
    );
};

export default ShowItem;