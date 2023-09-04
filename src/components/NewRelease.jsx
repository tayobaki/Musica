import release1 from "../assets/release1.png";
import release2 from "../assets/nostalgia.png";
import release3 from "../assets/nostalgia.png";
import release4 from "../assets/nostalgia.png";
import release5 from "../assets/nostalgia.png";
import release6 from "../assets/nostalgia.png";
import release7 from "../assets/nostalgia.png";
import release8 from "../assets/nostalgia.png";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const NewRelease = () => {
  return (
    <div className="mt-9 text-white lg:pl-16">
      <h1 className=" text-2xl font-bold  pb-6">New releases.</h1>
      <div className="flex items-center w-full overflow-hidden">
        <Splide
          options={{
            type: "slide",
            perPage: 6,
            perMove: 1,
            gap: "1rem",
            arrows: true,
            drag: true,
            pagination: false,
            breakpoints: {
              640: {
                perPage: 3,
              },
              770: {
                perPage: 4,
              },
              840: {
                perPage: 5,
              },
            },
          }}
        >
          <SplideSlide>
            <div className=" rounded-3xl">
              <img src={release1} alt="" className=" w-40 h-40" />
              <span>Life in a bubble</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className=" rounded-3xl">
              <img src={release2} alt="" className=" w-40 h-40" />
              <span>Life in a bubble</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className=" rounded-3xl">
              <img src={release3} alt="" className=" w-40 h-40" />
              <span>Life in a bubble</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className=" rounded-3xl">
              <img src={release4} alt="" className=" w-40 h-40" />
              <span>Life in a bubble</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className=" rounded-3xl">
              <img src={release5} alt="" className=" w-40 h-40" />
              <span>Life in a bubble</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className=" rounded-3xl">
              <img src={release6} alt="" className=" w-40 h-40" />
              <span>Life in a bubble</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className=" rounded-3xl">
              <img src={release7} alt="" className=" w-40 h-40" />
              <span>Life in a bubble</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className=" rounded-3xl">
              <img src={release8} alt="" className=" w-40 h-40" />
              <span>Life in a bubble</span>
            </div>
          </SplideSlide>
          
        </Splide>
      </div>
    </div>
  );
};

export default NewRelease;

