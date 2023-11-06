import Button from "../Components/buttons";
import BlogCard from "../Components/cards/blog-card";
import ProductCard from "../Components/cards/product-card";
import TestimonialCard from "../Components/cards/testimonial-card";
import Tools from "../Components/cards/tools";
import ScrollLogos from "../Components/cards/logo-scroll";
import CenterHeader from "../Components/section-header/center";
import LeftHeader from "../Components/section-header/left";
import think from "../assets/Background/think.webp";
import poster from "/blogs/post-1.webp"

const Home = () => {
  return (
    <>
      // Hero Section
      <section className="relative bg-primary min-h-[70vh] md:min-h-[85vh] pt-[7rem] md:pt-[10rem] lg:pt-[12rem] px-5 border">
        <div className="container md:w-[85%] md:max-w-[74rem] lg:max-w-[90rem] mx-auto text-secondary ">
          <p className="text-[.75rem] md:text-[1rem] font-normal">
            Using software to help your business adapt to
            <span className="pl-2 font-normal opacity-80 underline underline-offset-[.7rem]">
              what is next.
            </span>
          </p>
          <h1 className="mt-5 font-bold text-[1.5rem] md:text-[4rem]">
            Fit-for-purpose software solutions that deliver business goals
          </h1>
          {/* Button */}
          <div className="py-[3rem] md:py-[4rem]">
            <Button text="Start Now" color="#861206" bgColor="#F1C3BE" />
          </div>
        </div>
      </section>
      {/* Auto scroll logo */}
      <section className="relative -top-12 left-0 md:inset-x-0 lg:w md:w-[90%] shadow-lg w-full mx-auto bg-secondary">
        <ScrollLogos />
      </section>
      {/* Second Section */}
      <section className="space-y-7 container max-w-[90%] md:max-w-[74rem] lg:max-w-[90rem] mx-auto min-h-[85vh] px-5 pb-12 bg-secondary">
        <div className="">
          <CenterHeader mainTitleOne={"Customer-focused solutions that"} mainTitleTwo={"run on all devices. Anywhere."} subTitle={"CUSTOM SOLUTIONS WE PROVIDE"} />
        </div>
        <div className="">
          <Tools />
        </div>
      </section>
      <section className=" min-h-[70vh] pb-12 lg:flex flex-wrap py-28 relative bg-thirdiary">
        <div className="container w-[95%] md:w-[85%] md:max-w-[74rem] lg:max-w-[95rem] mx-auto">
          <div className="flex flex-wrap space-y-5 md:space-y-0">
            <div className="md:w-full lg:w-5/12 space-y-3">
              <LeftHeader mainTitle={"Modern problems require modern solutions"} subTitle={"RECENT PRODUCTS"} />
              <p className="font-medium text-base leading-7 md:mr-10 sm:mr-0 lg:pr-6">
                At Assutech our approach to software development is people-focused and results-oriented while remaining alive to the realities of our rapidly changing world. We trust teams to work directly with customers to understand the goals and provide solutions in a fast and incremental way. Centered around adaptive planning, self-organization, and short modular deliverables.
              </p>
              <div className="py-8">
                <Button color={"#fff"} text={"Get Started"} bgColor={"#861206"} />
              </div>
            </div>
            {/* Products Cards */}
            <div className="lg:w-7/12">
              <ProductCard  />
            </div>
          </div>
        </div>
      </section>
      {/* WatooTijay Third Section */}
      <section className="bg-watooTijay bg-cover">
        <div className="flex flex-col justify-center container max-w-[90%] md:w-[85%] md:max-w-[74rem] lg:max-w-[90rem] mx-auto min-h-[50vh] px-5 py-12">
          <div className="text-secondary space-y-2">
            <p className="font-medium">#WatooTijay</p>
            <div className="font-semibold md:text-[3.5rem] text-[2.1rem] md:leading-1.3">
              <h1>You have ideas. We have solution.</h1>
              <h1>Time to join forces.</h1>
            </div>
            <div className="py-5">
              <Button color={"#861206"} text={"let's get to work"} bgColor={"#F8CCC8"} />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Fouth Section */}
      <section className="min-h-[95vh] md:min-h-[90vh]">
        <div className="min-h-[95vh] py-12">
          <div className="space-y-10">
            <div className="py-5 md:py-5">
              <CenterHeader mainTitleOne={"Take it from clients that trust our work"} mainTitleTwo={"and commitment to deliver."} subTitle={"DON’T JUST TAKE OUR WORD FOR IT"} />
            </div>
            <div className="px-3 md:px-5">
              <TestimonialCard />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary">
        <div className="container w-[95%] md:max-w-[74rem] md:w-[85%] lg:max-w-[90rem] mx-auto min-h-[95vh] py-5">
          <div className="">
            <div className="space-y-5 text-secondary pt-10 ">
              <LeftHeader mainTitle={"We love talking tech. If you do too, this may be the space for you."} subTitle={"TECH TALKS"} subTitleColor={"#fff"} />
            </div>
            <div className="py-5 hidden md:block">
              <Button color={"#fff"} text={"Explore All"} bgColor={"transparent"} border={"1px solid #fff"} />
            </div>
            <div className="mt-3">
              <div className="flex flex-wrap lg:flex-nowrap md:flex-wrap gap-5 lg:gap-5">
                <BlogCard id={0} title={"Flutter: Unleashing the power of modern App Development"} image={poster} tags={["Flutter", "Web App", "Mobile App", "Flexible", "Secure"]} poster={{
                  name: "Jamba Ceesay",
                  role: "Backend Engineer",
                  company: "Assutech"
                }} />
                <BlogCard id={0} title={"Flutter: Unleashing the power of modern App Development"} image={poster} tags={["Flutter", "Web App", "Mobile App", "Flexible", "Secure"]} poster={{
                  name: "Jamba Ceesay",
                  role: "Backend Engineer",
                  company: "Assutech"
                }} />
                <BlogCard id={0} title={"Flutter: Unleashing the power of modern App Development"} image={poster} tags={["Flutter", "Web App", "Mobile App", "Flexible", "Secure"]} poster={{
                  name: "Jamba Ceesay",
                  role: "Backend Engineer",
                  company: "Assutech"
                }} />
              </div>
            </div>
            <div className="md:hidden py-5">
              <Button color={"#fff"} text={"Explore All Blogs"} icon={"+"} bgColor={"transparent"} /> 
            </div>
          </div>

        </div>
      </section>
      <section className="">
        <div className="container w-full md:w-[85%] md:max-w-[74rem] lg:max-w-[90rem] mx-auto pt-20">
          <figure className="bg-primary">
            <div className="">
              <img className="w-full" src={think} alt="Think Big" />
            </div>
            <figcaption className="py-8 md:py-16">
              <div className="py-3">
                <div className="font-extrabold text-3xl mx-auto w-1/2 text-center text-secondary leading-10">
                  <p>Think Big. Think Different. Think Assutech.</p>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};
export default Home;
