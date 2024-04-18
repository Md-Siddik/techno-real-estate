import { useLoaderData, useParams } from "react-router-dom";
import BestCard from "../BestCard/BestCard";

const Best = () => {
    const residential = useLoaderData();
    const { id } = useParams();
    const res = residential.filter(res => res.price > 5000);
    const { estate_title, segment_name, status, location, description, facilities, price, area } = res;
    return (
        <div>
            {
                res.map(best => <BestCard key={id} best={best}></BestCard>)
            }
        </div>
    );
};

export default Best;