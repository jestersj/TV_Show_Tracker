import MyNavbar from "@/components/MyNavbar";
import Container from "@/components/Container";


const MainLayout = ({children}) => {
    return (
        <div>
            <MyNavbar/>
            <Container>
                <div>
                    {children}
                </div>
            </Container>
        </div>
    );
};

export default MainLayout;