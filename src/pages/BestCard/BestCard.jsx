
const BestCard = ({ best }) => {
    const { estate_title, segment_name, status, location, description, facilities, price, area, image } = best;
    return (
        <div className="container m-auto">
            <div className="flex border-[1px] mb-6">
                <div className="w-[45%]">
                    <div className="w-full h-full flex items-center justify-center">
                        <img className="w-full h-fit" src={image} alt="" />
                    </div>
                </div>
                <div className="w-[55%]">
                    <div className="p-8">
                        <div className="flex gap-32 text-2xl py-6">
                            <h1>Segment : {segment_name}</h1>
                            <h1>For : {status}</h1>
                        </div>
                        <div className="flex gap-4 py-4 border-y-[1px] text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <p>{location} {`( ${area} )`}</p>
                        </div>
                        <p className="py-4 text-xl">{description}</p>
                        <div>
                            <ul className="list-disc pl-8 text-xl">
                                {
                                    facilities.map(facilitie => <li>{facilitie}</li>)
                                }
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold py-4">${price}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestCard;