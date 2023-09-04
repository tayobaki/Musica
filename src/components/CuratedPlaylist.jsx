import vector from "/vector.svg";
import esma from "../assets/Pexels Photo by Eric Esma.png";

const CuratedPlaylist = () => {
  return (
    <div className='lg:pl-16'>
      <div className='bg-[#609EAF] text-white rounded-3xl h-[503px] relative overflow-hidden lg:w-[686px] lg:h-[373px] '>
        <div className='py-7 pl-7 grid h-full'>
          <h6>Curated playlist</h6>
          <div
            className=' gap-4 h-[450px] w-[276px] flex flex-col justify-end pb-7 lg:h-full
             '
          >
            <h1 className='leading-[120%] text-4xl font-bold'>R & B Hits</h1>
            <p className='w-full text-sm'>
              All mine, Lie again, Petty call me everyday, Out of time, No love,
              Bad habit, and so much more
            </p>
          </div>
        </div>

        <img
          src={vector}
          alt='Vector'
          className='Vector  w-[675.002px] h-[967.598px] stroke-white absolute top-0 bottom-0 right-0 overflow-hidden '
        />
        <img
          src={esma}
          alt=''
          className='absolute top-0 bottom-0 right-0 overflow-hidden hidden lg:block'
        />
      </div>
    </div>
  );
};

export default CuratedPlaylist;
