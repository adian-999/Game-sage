import { ImInstagram } from "react-icons/im";


const Section2 = () => {
  return (
    <div>

      <div className="grid grid-rows-1 justify-center my-12  ">

      <h2 className="text-4xl font-bold text-purple-950 ">Follow Us On Instagram </h2>
      <p className="text-5xl text-purple-800 ml-40 my-6 "><ImInstagram></ImInstagram></p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-10/12 mx-auto bg-purple-900 p-4 md:p-16 rounded-3xl">
  <img src='/section2/images (10).jpeg' alt="" className="w-full h-50 object-cover rounded-2xl" />
  <img src='/section2/images (11).jpeg' alt="" className="w-full h-50 object-cover rounded-2xl" />
  <img src='/section2/images (12).jpeg' alt="" className="w-full h-50 object-cover rounded-2xl" />
  <img src='/section2/images (13).jpeg' alt="" className="w-full h-50 object-cover rounded-2xl" />
  <img src='/section2/images (8).jpeg' alt="" className="w-full h-50 object-cover rounded-2xl" />
  <img src='/section2/images (9).jpeg' alt="" className="w-full h-50 object-cover rounded-2xl" />
</div>





    </div>
  );
};

export default Section2;
