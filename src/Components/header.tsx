import { useState, useEffect } from "react";
import assutechLogo from "../assets/icons/Logos/Assutech.png";
import { Link } from "react-router-dom";

interface Nav {
  id: number;
  url: string;
  name:  string;
}

const Header = () => {
  const [links, setLinks] = useState<Nav[]>([]);
  const url: string = "http://localhost:3000/nav-links";
  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setLinks(data);
    };
    FetchData();
  }, []);
  return (
    <header className="bg-primary fixed z-10 w-full py-[2rem] md:py[3rem] px-5 shadow-lg">
      <nav className="container md:max-w-[74rem] lg:max-w-[90rem] mx-auto flex justify-between items-center">
        <img className="" src={assutechLogo} alt="Assutech Logo" />
        <div>
          <i className="fa-solid fa-bars text-secondary md:hidden"></i>
          <div className="gap-8 md:flex flex-row">
            {links.map(({ name, id, url }) => {
              if (url === "*") return null;
              return (
                <Link
                  key={id}
                  className="text-secondary hidden md:block hover:text-red-200 duration-200"
                  to={url}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
