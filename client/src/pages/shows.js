import MainLayout from "@/layouts/MainLayout";
import {fetchAll} from "@/http/showApi";
import {useContext, useEffect} from "react";
import {Context} from "@/context/AppWrapper";
import {useRouter} from "next/router";
import {observer} from "mobx-react-lite";

const Shows = observer(() => {
    const {user, shows} = useContext(Context)
    const router = useRouter()
    useEffect(() => {
        if (!user.isAuth) {
            router.push('/')
        } else {
            fetchAll().then((data) => shows.setShows(data))
        }
    }, [])
    return (
        <MainLayout>
            {
                shows.shows.map(show =>
                    <h1 key={show.id}>{show.name}</h1>
                )
            }
        </MainLayout>
    );
});

export default Shows;