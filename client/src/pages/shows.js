import MainLayout from "@/layouts/MainLayout";
import {fetchAll} from "@/http/showApi";
import {useContext, useEffect} from "react";
import {Context} from "@/context/AppWrapper";
import {useRouter} from "next/router";
import {observer} from "mobx-react-lite";
import ShowList from "@/components/show/ShowList";

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
            <ShowList shows={shows}/>
        </MainLayout>
    );
});

export default Shows;