import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Card from "../Shared/Cards/Card"
import { Helmet } from "react-helmet";


const Home = () => {
    const residential = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
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