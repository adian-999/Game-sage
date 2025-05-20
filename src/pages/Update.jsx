import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";


const Update = () => {

  const game = useLoaderData();
  const{name,email,_id,userName,rating,year,details,photo,genres}=game;

  const [showDropdown, setShowDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");

    const handleSelect = (item) => {
      setSelectedItem(item);
      setShowDropdown(false);
    };

    const handleSubmit=(e)=>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const userName = form.userName.value;
      const rating = form.rating.value;
      const year = form.year.value;
      const details = form.details.value;
      const photo = form.photo.value;
      const genres = form.genres.value;

      const newGame = {name,email,userName,rating,year,details,photo,genres}

      console.log(newGame)

      fetch(`https://game-review-server-sigma.vercel.app/addGame/${_id}`,{
        method:'Put',
        headers: {
          'content-type':'application/json'
        },
        body : JSON.stringify(newGame)
      })
      .then(res=> res.json())
      .then(data=>{
         console.log(data)
         if(data.modifiedCount){
          Swal.fire({
            title: "Successfully Updated the game review",
            icon: "success",
            draggable: true
          });
         }
      })




    }


  return (
    <div style={{ fontFamily: 'Kranky, serif' }}>

      {/* Navbar */}
      <Navbar />

      <h2 className="text-2xl sm:text-3xl font-extrabold text-center my-6 sm:my-12 text-purple-950">
       Update a Game Review
      </h2>

      <p className="text-amber-950 w-11/12 sm:w-2/4 mx-auto text-center">
        Add your favorite game to our growing collection! Submit details, upload a cover, and share your experience with other gamers. Whether you're a player or developer, showcase your game and help others discover new adventures.Update the reviews!
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="text-center bg-purple-200 mt-6 sm:mt-12 p-6 sm:p-12 w-full sm:w-7/12 mx-auto rounded-3xl shadow-xl my-6 sm:my-12 relative">

        {/* Game Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="input-group">
              <span className="text-lg font-semibold">Game Name:</span>
              <input defaultValue={name}  name="name"   placeholder="Game Name" type="text" className="input input-bordered w-full" />
            </label>
          </div>

          <div className="form-control">
            <label className="input-group">
              <span className="text-lg font-semibold">User Email:</span>
              <input name="email" defaultValue={email} placeholder="User Email" type="email" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        {/* User Name & Rating */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="form-control">
            <label className="input-group">
              <span className="text-lg font-semibold">User Name:</span>
              <input name="userName" defaultValue={userName} placeholder="User Name" type="text" className="input input-bordered w-full" />
            </label>
          </div>

          <div className="form-control">
            <label className="input-group">
              <span className="text-lg font-semibold">Rating:</span>
              <input name="rating" defaultValue={rating} placeholder="Rating" type="text" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        {/* Publishing Year & Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="form-control">
            <label className="input-group">
              <span className="text-lg font-semibold">Publishing Year:</span>
              <input name="year" defaultValue={year} placeholder="Publishing Year" type="text" className="input input-bordered w-full" />
            </label>
          </div>

          <div className="form-control">
            <label className="input-group">
              <span className="text-lg font-semibold">Details:</span>
              <input name="details" defaultValue={details} placeholder="Details" type="text" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        {/* Game Cover Image */}
        <div className="form-control my-4">
          <label className="input-group">
            <span className="text-lg font-semibold">Game Cover Image:</span>
            <input name="photo" defaultValue={photo} placeholder="Photo URL" type="url" className="input input-bordered w-full" />
          </label>
        </div>

        {/* Dropdown for Genres */}
        <div className="form-control my-4 relative">
          <label className="input-group">
            <span className="text-lg font-semibold">Genres:</span>
            <input
              name="genres"
              defaultValue={genres}
              value={selectedItem}
              placeholder="Select a genre"
              readOnly
              onClick={() => setShowDropdown(!showDropdown)}
              type="text"
              className="input input-bordered w-full"
            />
          </label>

          {showDropdown && (
            <ul className="absolute left-0 top-full mt-1 w-full bg-base-100 rounded-box shadow-md z-10">
              <li>
                <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleSelect("Action")}>
                  Action
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleSelect("Adventure")}>
                  Adventure
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleSelect("RPG")}>
                  RPG
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleSelect("Shooter")}>
                  Shooter
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Submit Button */}
        <input className="btn btn-block my-6 bg-purple-950 text-white hover:bg-purple-700 transition" value="Update Review" type="submit" />
      </form>
      <Footer></Footer>
    </div>
  );
};

export default Update;
