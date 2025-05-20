import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import Footer from "../components/Footer";

const Watchlist = () => {


  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("https://game-review-server-sigma.vercel.app/watchlist")
      .then((res) => res.json())
      .then((data) => setWatchlist(data));
  }, []);

  const handleRemove = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result)=>{
      if(result.isConfirmed){
        fetch(`https://game-review-server-sigma.vercel.app/watchlist/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            setWatchlist(watchlist.filter((game) => game._id !== id));
          });
      }
    })


  };



  return (
    <div>
      <Navbar></Navbar>
    <h2 className="text-2xl font-bold text-center mt-6">Your Watchlist</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {watchlist.map((game) => (
        <div key={game._id} className="card bg-white shadow-md p-4 rounded-lg">
          <img src={game.photo} alt={game.name} className="w-full h-80 object-cover rounded-lg" />
          <h3 className="text-lg font-bold mt-2">{game.name}</h3>
          <p className="text-sm text-gray-500">Rating: {game.rating}</p>
          <button
            onClick={() => handleRemove(game._id)}
            className="mt-2 px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
    <Footer></Footer>
  </div>
  );
};

export default Watchlist;
