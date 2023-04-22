import React from 'react';
import MainLayout from "@/layouts/MainLayout";
import {useRouter} from "next/router";

const ShowPage = () => {
    const {query} = useRouter()
    return (
        <MainLayout>
            {query.id}
        </MainLayout>
    );
};

    export default ShowPage;