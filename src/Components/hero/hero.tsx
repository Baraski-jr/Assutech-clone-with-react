interface Title {
    mainTitle: string;
    subTitle: string;
}
const Hero = ({mainTitle, subTitle}: Title) => {
    return ( 
        <main className="min-h-[30vh] md:min-h-[40vh] bg-watooTijay bg-cover flex items-end text-secondary">
            <div className="mb-8 md:mb-20 container w-[95%] md:w-[85%] md:max-w-[74rem] lg:max-w-[90rem] mx-auto space-y-5">
                <h1 className="text-3xl font-extrabold md:text-5xl lg:text-6xl">{mainTitle}</h1>
                <p className="font-bold text-md md:text-xl">{subTitle}</p>
            </div>
        </main>
     );
}
 
export default Hero;