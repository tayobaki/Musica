import bar from "../assets/bar.svg";
import musicaLogo from "/musica.svg";
import search from "/search.svg";



const NavBar = () => {
  return (
    <div className=" ">
      <div className='flex items-center lg:gap-16 justify-between lg:justify-normal '>
        <div className='flex items-center gap-x-5 lg:gap-x-0'>
          <img
            src={bar}
            alt='menu'
            className="menubar cursor-pointer lg:hidden z-50"
          />
          <img
            src={musicaLogo}
            alt='musicaLogo'
          />
        </div>

        <div className='flex items-center gap-5 py-0 lg:pr-[964px] lg:w-[1122px] lg:h-[73px]'>
          <img
            src={search}
            alt='searchButton'
            className="cursor-pointer "
          />

          <span className="hidden lg:block text-sm font-semibold text-gray-500/25 w-full">
            <input type="text" placeholder="Search artists" className=" w-full h-full border-none outline-none bg-transparent text-sm block"/>
          </span>

        </div>
      </div>


      

    </div>
  );
};

export default NavBar;
