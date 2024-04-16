import { useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Details = () => {
    const {id} = useParams();
    return (
        <div>
            <Navbar></Navbar>

            <div>
                <div className="card lg:card-side bg-base-100">
                    <figure className="w-[40%] max-sm:w-full"><img className="w-[60%] rounded-xl max-sm:w-1/2" src="" alt="Album" /></figure>
                    <div className="card-body w-[50%] max-sm:w-full">
                        <h2 className="card-title text-4xl">{id}</h2>
                        {/* <p className="text-xl text-gray-500 font-bold">By : {book.author}</p>
                        <div className="border-y-[1px]">
                            <p className="text-xl font-bold text-gray-500 py-4">{book.category}</p>
                        </div>
                        <p className="text-lg text-gray-500"><span className="font-bold text-black">Review : </span>{book.review}</p>
                        <div className="border-b-[1px] text-xl py-8 flex gap-8">
                            <span className="font-bold">Tag</span>
                            <button className="bg-green-50 py-1 px-3 rounded-full text-[#23BE0A]">#{book.tags[0]}</button>
                            <button className="bg-green-50 py-1 px-3 rounded-full text-[#23BE0A]">#{book.tags[1]}</button>
                        </div>
                        <table className="text-xl">
                            <tr>
                                <td className="py-4">Number of Pages:</td>
                                <td className="py-4">{book.totalPages}</td>
                            </tr>
                            <tr>
                                <td className="py-4">Publisher:</td>
                                <td className="py-4">{book.publisher}</td>
                            </tr>
                            <tr>
                                <td className="py-4">Year of Publishing:</td>
                                <td className="py-4">{book.yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td className="py-4">Rating:</td>
                                <td className="py-4">{book.rating}</td>
                            </tr>
                        </table>
                        <div className="card-actions">
                            <button onClick={handleReadBook} className="btn btn-outline text-xl">Read</button>
                            <button onClick={handleWishList} className="btn bg-[#50B1C9] text-white text-xl">Wishlist</button>
                        </div> */}
                    </div>
                    
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Details;