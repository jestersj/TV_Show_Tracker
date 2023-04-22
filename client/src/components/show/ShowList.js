import ShowItem from "@/components/show/ShowItem";
import {Grid} from "@mui/material";
import {observer} from "mobx-react-lite";

const ShowList = ({shows}) => {
    return (
        <Grid container spacing={4}>
            {
                shows.shows.map(show =>
                    <Grid item xs={4} key={show.id}>
                        <ShowItem show={show}/>
                    </Grid>
                )
            }
        </Grid>
    );
};

export default observer(ShowList);