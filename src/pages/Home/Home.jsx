import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import Card from "../Shared/Cards/Card";



const Home = () => {
    const residential = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Techno-Real-Estate | Home</title>
            </Helmet>
            <SwiperSlider></SwiperSlider>
            <div className="py-8 container m-auto">
                <h1 className="py-12 text-4xl font-bold text-center">Residential</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-fit m-auto">
                    {
                        residential.map(res => <Card key={res.id} residential={res}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;