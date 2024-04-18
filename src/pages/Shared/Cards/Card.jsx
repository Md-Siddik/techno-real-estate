import { Link } from "react-router-dom";

const Card = ({ residential }) => {
    const { id, estate_title, segment_name, status, location, description, facilities, price, area } = residential;
    console.log(estate_title);
    return (
        <div className="">
            <div data-aos="zoom-in" className="card w-[350px] bg-base-100 border-[1px] border-solid h-full">
                <figure className="h-[300px] rounded-t-xl bg-gray-300">
                    <img src='' alt="Shoes" className="rounded-xl w-[150px]" />
                </figure>
                <div className="card-body">
                    <div className="w-full text-left">
                        <h2 className="card-title text-xl py-4 flex items-start"><span>{id}. </span>{estate_title}</h2>
                        <div className="w-full flex gap-32 text-lg py-2">
                            <span>{segment_name}</span>
                            <span>For : {status}</span>
                        </div>
                    </div>
                    <div className="flex gap-4 py-4 border-y-[1px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p>{location}   {`( ${area} )`}</p>
                    </div>
                    <div className="text-left">
                        <p>{description}</p>
                    </div>
                    <div className="border-y-2 py-4">
                        <ul className="list-disc pl-8">
                            {
                                facilities.map(facilitie => <li>{facilitie}</li>)
                            }
                        </ul>
                    </div>
                    <div className="w-full flex gap-14 text-xl font-bold py-2">
                        <span>${price}</span>
                    </div>
                    <div className="text-center">
                        <Link residential={residential} to={`/details/${id}`}>
                            <button className="btn">View Property</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;