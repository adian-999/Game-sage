




import { useContext } from "react";
import { FaEdit, FaTrash, FaInfoCircle } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Cards = () => {
  const games = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const topRatedGames = [...games]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  const handleDelete = (_id) => {
    if (!user || !user.email) {
      Swal.fire("Unauthorized", "You must be logged in to delete a game!", "error");
      navigate("/login");
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://game-review-server-sigma.vercel.app/addGame/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Game Review has been deleted.",
                icon: "success"
              });

            }
          });
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {topRatedGames.map((game) => (
        <div
          key={game._id}
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <img src={game.photo} alt={game.name} className="w-full h-66 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">{game.name}</h2>
            <p className="text-gray-600 my-2">By: {game.userName}</p>
            <p className="text-yellow-500 font-semibold">⭐ {game.rating} / 5</p>
            <p className="text-gray-700 mt-2">
              {game.details ? game.details.slice(0, 100) : "No details available"}...
            </p>
            <p className="mt-2 text-sm font-semibold text-purple-800">Genre: {game.genres}</p>
            <p className="text-sm text-gray-500">Published: {game.year}</p>
          </div>

          <div className="flex space-x-4 px-4 pb-4">
            <Link to={`/details/${game._id}`} className="btn p-5 btn-sm btn-outline">
              <FaInfoCircle className="text-green-600 text-2xl" />
            </Link>

            {user && user.email === game.userEmail && (
              <>
                <Link to={`update/${game._id}`} className="btn p-5 btn-sm btn-outline">
                  <FaEdit className="text-blue-600 text-2xl" />
                </Link>
                <button
                  onClick={() => handleDelete(game._id)}
                  className="btn p-5 btn-sm btn-outline"
                >
                  <FaTrash className="text-red-600 text-2xl" />
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
