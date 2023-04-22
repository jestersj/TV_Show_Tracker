import MyNavbar from "@/components/MyNavbar";
import MyContainer from "@/components/MyContainer";
import {Container} from "@mui/material";


const MainLayout = ({children}) => {
    return (
        <>
            <MyNavbar/>
            <Container maxWidth='lg' style={{marginTop: '30px'}}>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;