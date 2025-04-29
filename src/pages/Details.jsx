import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaHeart, FaStar } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";
import Footer from "../components/Footer";

const Details = () => {
  const game = useLoaderData();

  const { name, email, userName, rating, year, details, photo, genres } = game;

  const[isWatchlist,setWatchlist]=useState(false);

  const handleAddToWatchList=()=>{
    fetch("http://localhost:5000/Watchlist",{
      method : "POST",
      headers : {
        "content-type":"application/json"
      },
      body:JSON.stringify(game)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        setWatchlist(true);
        Swal.fire({
          title: "Added to Watchlist!",
          icon: "success",
          timer: 1500,
        });
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-xl shadow-lg flex flex-col md:flex-row">
        {/* Game Cover */}
        <img src={photo} alt={name} className="w-full md:w-1/3 rounded-lg shadow-md" />

        {/* Game Info */}
        <div className="p-6 flex flex-col justify-between">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{name}</h2>
          <p className="text-gray-700 text-sm mb-4">{details}</p>

          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold">Rating:</span>
            <div className="flex items-center text-yellow-500">
              <FaStar /> <span className="ml-1">{rating}</span>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Published:</strong> {year}</p>
            <p><strong>Genre:</strong> {genres}</p>
            <p><strong>Added By:</strong> {userName} ({email})</p>
          </div>

          <div className="flex gap-6 items-center">



            {/* Open the modal using document.getElementById('ID').showModal() method */}
         <button className="btn hidden" onClick={()=>document.getElementById('my_modal_1').showModal()}>open          modal</button>
         <dialog id="my_modal_1" className="modal">
           <div className="modal-box">
             <h3 className="font-bold text-lg">OPPPPPSS!!</h3>
             <p className="py-4">You will able to play the game after download it from App-store or Play-store</p>
             <div className="modal-action">
               <form method="dialog">
                 {/* if there is a button in form, it will          close the modal */}
                 <button className="btn">Close</button>
               </form>
             </div>
           </div>
         </dialog>



          <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="mt-6 bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md">
            Play Now
          </button>


          <button onClick={handleAddToWatchList} className="btn py-2 px-6 mt-6 text-2xl text-red-600  "><FaHeart />{isWatchlist ? "In Watchlist" : "Add to Watchlist"}</button>
          </div>
        </div>
      </div>
      <div className="mt-98">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Details;
