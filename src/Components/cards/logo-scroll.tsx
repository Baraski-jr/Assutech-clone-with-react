import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface Settings {
  dots: boolean;
  infinite: boolean;
  autoplay: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  speed: number;
  autoplaySpeed: number;
  cssEase: string;
}
interface Partner {
  id: number;
  name: string;
  url: string
}

const ScrollLogos = () => {
  // Define the Setting
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "linear"
  };

  const [partners, setLpartners] = useState<Partner[]>([]);
  const url: string = "http://localhost:3000/partners-logo";
  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setLpartners(data);
    };
    FetchData();
  }, []);
  return (
    <div className=" space-y-2 py-2 md:px-7 md:py-6">
      <h3 className="px-2 text-sm font-semibold md:hidden">Trusted by</h3>
      <div className="flex items-center gap-4 md:divide-x-2">
        <h2 className="hidden text-center text-lg font-bold md:block">
          Trusted by
        </h2>
        <Slider {...settings} className="w-full space-x-2 overflow-x-hidden px-1 py-3 md:px-[0]">
          {
            partners.map(({id, url, name}) => (
              // <h1 className="border w-10" key={id}>Omar Barra</h1>
                <img key={id} className="max-w-10 max-h-14 object-contain md:max-w-[8rem]" src={url} alt={name} />
            ))
          }
              {/* <img className="max-w-[7rem] self-center md:max-w-[8rem]" src="https://images.ctfassets.net/cj99wyjdwjw1/1GtnGsLiZY1QqJY1MU1MDT/5e78ec269a2cb48a91d05f2b2a18a6b2/careercloud-light-theme-logo__1_.webp?w=280&h=101&q=50&fm=webp" alt={name} /> */}
        </Slider>
      </div>
    </div>
  );
};

export default ScrollLogos;
