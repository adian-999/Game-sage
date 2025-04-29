

const Section = () => {
  return (
    <div>

      <h2 className="text-3xl font-bold text-center lg:w-1/2 mx-auto  lg:my-12 text-purple-900">"Unleash the Gamer in You – Honest Reviews, Latest Releases, Hidden Gems, and Expert Insights for Every Gaming Enthusiast!"</h2>

      <div className=" w-10/12 mx-auto grid grid-cols-2 gap-5 lg:grid-cols-4 justify-around bg-indigo-100 p-12 rounded-4xl shadow-2xl ">

      <div>
        <img className="w-38 rounded-full h-48" src="/public/section/cb29acdc6551cbfbd85e7d8ec3209946.jpg" alt="" />
        <h3 className="text-xl font-bold">Shadow Strikers</h3>
        <p className="py-6">"Strike from the Shadows, Conquer <br /> the Battlefield!"</p>
      </div>

      <div>
        <img className="w-38 rounded-full h-48" src="/public/section/draw-you-as-your-favorite-video-game-character.png" alt="" />
        <h3 className="text-xl font-bold">Inferno Quest </h3>
        <p className="py-6">"Unleash the Fury of <br /> the Forgotten Gods!"</p>
      </div>

      <div>
        <img className="w-38 rounded-full h-48" src="/public/section/images (8).jpeg" alt="" />
        <h3 className="text-xl font-bold">Titan’s Wrath </h3>
        <p className="py-6">"Unleash the Fury of <br /> the Forgotten Gods!"</p>
      </div>

      <div>
        <img className="w-38 rounded-full h-48" src="/public/section/images (9).jpeg" alt="" />
        <h3 className="text-xl font-bold">Dark Horizon</h3>
        <p className="py-6">"A World of Shadows, A <br />Battle for Survival!"</p>
      </div>


      </div>

    </div>
  );
};

export default Section;
