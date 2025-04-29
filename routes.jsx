import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/Home";
import AddGame from "./src/pages/AddGame";
import Details from "./src/pages/Details";
import Update from "./src/pages/Update";
import AllGames from "./src/pages/AllGames";
import Watchlist from "./src/pages/Watchlist";
import Register from "./src/pages/Register";
import Login from "./src/pages/Login";
import Private from "./src/components/Private";
import MyReviews from "./src/pages/MyReviews";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    loader:()=> fetch('http://localhost:5000/addGame')
  },
  {
    path:'addreviews',
    element:<Private><AddGame></AddGame></Private>
  },
  {
    path:'details/:id',
    element:<Private><Details></Details></Private>,
    loader: ({ params }) => fetch(`http://localhost:5000/addGame/${params.id}`)

  },
  {
    path:'update/:id',
    element:<Private><Update></Update></Private>,
    loader:({params})=>fetch(`http://localhost:5000/addGame/${params.id}`)
  },
  {
    path:'allreviews',
    element:<AllGames></AllGames>,
    loader:()=> fetch('http://localhost:5000/addGame')

  },
  {
    path:'watchlist',
    element: <Watchlist></Watchlist>
  },
  {
    path:'register',
    element:<Register></Register>
  },
  {
    path: 'login',
    element:<Login></Login>
  },
  {
    path:'myReviews',
    element:<MyReviews></MyReviews>
  }
])

export default router;
