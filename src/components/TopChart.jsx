import heart from "/heart.svg";
import musica from "../assets/musica1.png";
import { NavLink } from "react-router-dom";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const TopChart = () => {
  return (
    <div className=' w-full overflow-hidden'>
      <h1 className=' text-white text-2xl font-bold'>Top charts</h1>
      <Splide
        options={{
          type: "slide",
          perPage: 3,
          perMove: 1,
          gap: "2rem",
          arrows: true,
          pagination: true,
        }} className=""  //  overflow-hidden relative  translate-y-0
      >
        <div className='flex gap-2 lg:flex-col w-full vertical  '>
          <SplideSlide>
            <div className='flex items-center mt-5  bg-[#1A1E1F] cursor-pointer hover:shadow-white/25 hover:shadow-inner transition-all rounded-3xl p-5 text-white w-[323px] h-[233px] lg:flex-col  lg:w-full lg:h-fit '>
              <div className='flex flex-col w-full  relative h-full   lg:flex-row'>
                <div className='flex flex-col  lg:flex-row'>
                  <img
                    src={musica}
                    alt=''
                    className='rounded-xl w-[108px] h-[99px] lg:w-16 lg:h-16'
                  />
                  <div className='grid lg:pl-4'>
                    <h1 className='mt-4 lg:mt-0 text-lg leading-5 lg:leading-none'>
                      Golden age of 80s
                    </h1>
                    <p className='text-white/50 text-xs'>Sean swadder</p>
                    <span className=' text-sm lg:text-xs mt-3 lg:mt-0'>
                      2:34:25
                    </span>
                  </div>
                </div>
                <div className='  absolute top-0 right-0  flex lg:top-[50%]  lg:-translate-y-[50%] '>
                  <div className='p-1 block rounded-full border border-gray-400 circle'>
                    <img
                      src={heart}
                      alt='heartSvg'
                      className='heart hover:bg-red-400'
                    />
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className='flex items-center mt-5 lg:mt-0  bg-[#1A1E1F] cursor-pointer hover:shadow-white/25 hover:shadow-inner transition-all rounded-3xl p-5 text-white w-[323px] h-[233px] lg:flex-col  lg:w-full lg:h-fit '>
              <div className='flex flex-col w-full  relative h-full   lg:flex-row'>
                <div className='flex flex-col  lg:flex-row'>
                  <img
                    src={musica}
                    alt=''
                    className='rounded-xl w-[108px] h-[99px] lg:w-16 lg:h-16'
                  />
                  <div className='grid lg:pl-4'>
                    <h1 className='mt-4 lg:mt-0 text-lg leading-5 lg:leading-none'>
                      Golden age of 80s
                    </h1>
                    <p className='text-white/50 text-xs'>Sean swadder</p>
                    <span className=' text-sm lg:text-xs mt-3 lg:mt-0'>
                      2:34:25
                    </span>
                  </div>
                </div>
                <div className='absolute top-0 right-0  flex lg:top-[50%]  lg:-translate-y-[50%]'>
                  <div className='p-1 block rounded-full border border-gray-400 circle'>
                    <img
                      src={heart}
                      alt='heartSvg'
                      className='heart hover:bg-red-400'
                    />
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='flex items-center mt-5 lg:mt-0  bg-[#1A1E1F] cursor-pointer hover:shadow-white/25 hover:shadow-inner transition-all rounded-3xl p-5 text-white w-[323px] h-[233px] lg:flex-col  lg:w-full lg:h-fit '>
              <div className='flex flex-col w-full  relative h-full   lg:flex-row'>
                <div className='flex flex-col  lg:flex-row'>
                  <img
                    src={musica}
                    alt=''
                    className='rounded-xl w-[108px] h-[99px] lg:w-16 lg:h-16'
                  />
                  <div className='grid lg:pl-4'>
                    <h1 className='mt-4 lg:mt-0 text-lg leading-5 lg:leading-none'>
                      Golden age of 80s
                    </h1>
                    <p className='text-white/50 text-xs'>Sean swadder</p>
                    <span className=' text-sm lg:text-xs mt-3 lg:mt-0'>
                      2:34:25
                    </span>
                  </div>
                </div>
                <div className='absolute top-0 right-0  flex lg:top-[50%]  lg:-translate-y-[50%]'>
                  <div className='p-1 block rounded-full border border-gray-400 circle'>
                    <img
                      src={heart}
                      alt='heartSvg'
                      className='heart hover:bg-red-400'
                    />
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        </div>
          </Splide>
    </div>
  );
};

export default TopChart;
