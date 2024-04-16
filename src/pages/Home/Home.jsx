import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Card from "../Shared/Cards/Card"


const Home = () => {
    const residential = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-3 gap-y-6">
                {
                    residential.map(res => <Card key={res.id} residential={res}></Card>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;