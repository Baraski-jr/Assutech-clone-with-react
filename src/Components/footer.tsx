import Assutech from "../assets/icons/Logos/Assutech.png"
import Facebook from "../assets/icons/small-icons/facebook.svg"
import X from "../assets/icons/small-icons/twitter.svg"
import Linkend from "../assets/icons/small-icons/linkend.svg"
const Footer = () => {
    return ( 
        <footer className="bg-footer-pattern bg-cover bg-no-repeat text-secondary ">
            <div className="">
                <div className="container w-[90%] md:max-w-[74rem] lg:max-w-[90rem] mx-auto">
                    <div className="border-b py-16 flex flex-wrap lg:gap-x-10 lg:space-x-10">
                        <div className="py-2 md:w-[30%]">
                            <figure className="space-y-5">
                                <img className="w-[10rem] object-cover" src={Assutech} alt="Logo" />
                                <figcaption className="">
                                    <p className="">Assutech is Teamwork. Goals. Results.</p>
                                </figcaption>
                            </figure>
                            <div className="py-5">
                                <p className="">
                                    Nonetheless, we do have our fair share of fun. The space is always open for company and hot drinks, plus, if you're feeling lucky,challenge the team to a PS5 game of FIFA. May the odds ever be in your favor 😉
                                </p>
                            </div>
                        </div>
                        <div className="space-y-6 py-5 lg:w-[25%] md:w-1/2">
                            <h3 className="font-bold text-3xl"> Explore </h3>
                            <div className="flex justify-between w-[60%] md:w-[100%]">
                                <ul className="space-y-2">
                                    <li className="text-base font-semibold list-disc list-inside hover:text-pink-100">Home</li>
                                    <li className="text-base font-semibold list-disc list-inside hover:text-pink-100">Blog</li>
                                    <li className="text-base font-semibold list-disc list-inside hover:text-pink-100">Team</li>
                                    <li className="text-base font-semibold list-disc list-inside hover:text-pink-100">Go Digital</li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="text-base font-semibold list-disc list-inside hover:text-pink-100">Join Assutech</li>
                                    <li className="text-base font-semibold list-disc list-inside hover:text-pink-100">Internship</li>
                                    <li className="text-base font-semibold list-disc list-inside hover:text-pink-100">Contact Us</li>
                                    <li className="text-base font-semibold list-disc list-inside hover:text-pink-100">Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-6 py-5 lg:w-[30%]">
                            <h3 className="font-bold text-3xl"> Explore </h3>
                            <div className="space-y-1">
                                <a href="/" className="underline italic underline-offset-2 block">7 - 8 Madiba Mall</a>
                                <a href="/" className="underline italic underline-offset-2 block">Brufut Gardens Estate</a>
                                <a href="/" className="underline italic underline-offset-2 block">The Gambia, West Africa</a>
                            </div>
                            <div className="flex space-x-2">
                                <a href="/" className="underline italic underline-offset-2 block">+220 3814760</a>
                                <span>|</span>
                                <a href="/" className="underline italic underline-offset-2 block">info@assutech.gm</a>
                            </div>
                            <div className="flex space-x-2">
                                <a href="facebook.com" className="hover:scale-110 transition-all duration-150">
                                    <img src={Facebook} alt="FaceBook Icon" />
                                </a>
                                <a href="facebook.com" className="hover:scale-110 transition-all duration-150">
                                    <img src={X} alt="X Icon" />
                                </a>
                                <a href="facebook.com" className="hover:scale-110 transition-all duration-150">
                                    <img src={Linkend} alt="Linkend Icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="py-10 flex justify-between">
                        <div className="text-sm">
                            <p>© 2023 Assutech </p> 
                        </div>
                        <div className="">
                            <p>All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}
export default Footer;