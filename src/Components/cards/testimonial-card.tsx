import { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";

interface Testimonial {
    id: number;
    name: string;
    image: string;
    role: string;
    company: string;
    text: string;
    swipeToSlide?: string;
    responsive: {
        breakpoint: number;
        settings: {
          slidesToShow: number;
          slidesToScroll: number;
          infinite: boolean;
          dots: boolean;
          initialSlide?: number;
        };
      }[];
 }
const TestimonialCard = () => {
      // Define the Setting
    const settings: Settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 12000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            }
          ]

    };

    const url: string = "http://localhost:3000/testimonial";
    const [testimonials, setTestimonials] = useState<Testimonial[]>([])

    useEffect(() => {
        const FetchData = async (url: RequestInfo | URL) => {
            const response = await fetch(url);
            const data = await response.json();
            setTestimonials(data)
        }
        FetchData(url)
    }, [])
    return ( 
        <div className="">
            <Slider {...settings} className="w-full overflow-x-hidden md:px-[0]">
                {testimonials.map(({id, image, name, role, company, text}) => (
                    <div key={id} className="max-w-[90%]">
                        <figure className="flex space-x-5 py-5">
                            <img className="w-[3rem] rounded-full" src={image} alt={name} />
                            <figcaption className="space-y-0 flex flex-col justify-center text-md ">
                                <h3 className="font-semibold"> {name} </h3>
                                <p className="text-sm text-gray-1"> {role} | {company} </p>
                            </figcaption>
                        </figure>
                        <div className="shadow-md py-8 px-5">
                            <p className="font-medium leading-[1.5]">
                                {text}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
     );
}
 
export default TestimonialCard;