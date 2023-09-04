import collections from "/collections.svg";
import home from "/home.svg";
import profile from "/profile.svg";
import radio from "/radio.svg";
import exit from "/exit.svg";
import videos from "/videos.svg";


const Aside = () => {
  return (
    <div className="nav fixed lg:absolute top-0 z-50 left-0 bg-[#1A1E1F] lg:hidden lg:top-36">
      <div className='  pt-20 top-0   lg:w-fit lg:h-fit lg:pt-0 left-0   w-screen h-screen overflow-hidden flex flex-col lg:pl-0 z-50 pl-4  text-white'>
        <div className='flex flex-col items-start lg:items-center
         py-3 font-bold text-lg gap-1   '>
          <img
            src={home}
            alt=''
            className="hover:bg-yellow-300 cursor-pointer  bg-clip-text"
          />
          <h1 className=' lg:hidden'>Home</h1>
        </div>
        <div className='flex flex-col items-start py-3 font-bold text-lg gap-1   '>
          <img
            src={collections}
            alt=''
          />
          <h1 className=' lg:hidden'>My collections</h1>
        </div>
        <div className='flex flex-col items-start py-3 font-bold text-lg gap-1   '>
          <img
            src={radio}
            alt=''
          />
          <h1 className=' lg:hidden'>Radio</h1>
        </div>
        <div className='flex flex-col items-start py-3 font-bold text-lg gap-1   '>
          <img
            src={videos}
            alt=''
          />
          <h1 className=' lg:hidden'>Music Videos</h1>
        </div>
        <div className='flex flex-col items-start py-3 font-bold text-lg gap-1   '>
          <img
            src={profile}
            alt=''
          />
          <h1 className=' lg:hidden'>Profile</h1>
        </div>
        <div className='flex flex-col items-start py-3 font-bold text-lg gap-1   '>
          <img
            src={exit}
            alt=''
          />
          <h1 className=' lg:hidden'>Log out</h1>
        </div>
      </div>
    </div>
  );
};

export default Aside;
