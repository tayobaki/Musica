import music from "../assets/music.png";
import Play from "/play.svg";
import Forward from "/forward.svg";

const Footer = () => {
  return (
    <>
      <div className='footer fixed bottom-0 left-0 w-full z-50 '>
        <div className='flex items-center justify-between lg:px-16 lg:py-8 px-3'>
          <div className='flex items-center gap-3 text-white'>
            <img
              src={music}
              alt=''
            />
            <div className=''>
              <h1 className=' font-bold text-base'>Seasons in</h1>
              <span className=' text-xs font-bold text-gray-600/50'>James</span>
            </div>
          </div>

          <div className='flex gap-6 items-center'>
            <img
              src={Play}
              alt='playButton'
              className=' bg-amber-300 p-3 rounded-full'
            />
            <img src={Forward} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
