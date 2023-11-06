import { useEffect, useState } from "react";

interface Tool {
    map(arg0: { id: any; name: void; image: any; text: any; }): import("react").ReactNode;
    id: string;
    name: string;
    image: string;
    text: string;
}
const Tools = () => {
    const [tools, setTools] = useState<Tool[]>([])
    const url: string = "http://localhost:3000/tools"
    useEffect(() => {
        const FetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setTools(data)
        }
        FetchData()
    },[])
    return ( 
        <div className="flex flex-wrap gap-y-9 justify-center content-center">
            {tools.map(({id, name, text}) => (
                <figure  key={id} className="px-8 py-5 lg:w-1/3 md:w-6/12 flex flex-col md:items-center space-y-2">
                    <img className="w-[5rem]" src="https://images.ctfassets.net/cj99wyjdwjw1/58byyr4H4PDKt6H29NM5Md/34ebc1ec6b72dde8872fae7f3962f694/icon01.png?w=200&h=200&q=50&fm=webp" alt={name} />
                    <figcaption className="flex flex-col md:items-center space-y-2 md:px-10">
                        <h3 className="font-bold md:text-center text-lg">{name}</h3>
                        <p className="font-light text-left md:text-center text-base pr-5 md:pr-0 md:px-3xl">{text}</p>
                    </figcaption>
                </figure>
            ))}
        </div>
     );
}
 
export default Tools;