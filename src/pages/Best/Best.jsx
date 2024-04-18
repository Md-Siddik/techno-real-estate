import { useLoaderData, useParams } from "react-router-dom";
import BestCard from "../BestCard/BestCard";
import { Helmet } from "react-helmet";
import 'animate.css';

const Best = () => {
    const residential = useLoaderData();
    const { id } = useParams();
    const res = residential.filter(res => res.price > 400000);
    const { estate_title, segment_name, status, location, description, facilities, price, area, image } = res;
    return (
        <div>
            <Helmet>
                <title>Techno-Real-Estate | BestProduct</title>
            </Helmet>
            <div className="animate__animated animate__pulse">
                {
                    res.map(best => <BestCard key={id} best={best}></BestCard>)
                }
            </div>
        </div>
    );
};

export default Best;