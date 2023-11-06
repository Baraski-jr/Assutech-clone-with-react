interface BlogCard {
    id: number;
    title: string;
    image: string;
    tags: string[];
    poster: {
      name: string;
      role: string;
      company: string;
    }
  }
const BlogCard = ({id, title, image, tags, poster}: BlogCard) => {

    return ( 
            <figure key={id} className="bg-secondary flex-1 shadow-md w-full mx-auto md:mx-0 max-w-[30rem] md:max-w-[20rem] lg:max-w-[30rem] min-w-[20rem] md:w-[30%] lg:w-4/3">
                <div className="">
                    <img src={image} alt="blog poster" />
                </div>
                <figcaption className=" py-7 px-5  space-y-5">
                    <div className="flex flex-wrap gap-2">
                        {
                            tags?.map((tag:string) => (
                                <p key={tag} className="bg-fourth text-sm py-1 px-2">{tag}</p>
                            ))
                        }
                    </div>
                    <div className="font-semibold text-xl">
                        <h2 className=""> {title} </h2>
                    </div>
                    <div className="space-y-2">
                        <div className="text-sm font-medium">
                            <p>By {poster.name} </p>
                        </div>
                        <div className="flex space-x-1 text-xs font-semibold text-gray-400">
                            <p>{poster.company}, {poster.role} </p>
                            <div className="flex space-x-1">
                                <span>·</span>
                                <p>June 02, 2023</p>
                            </div>
                        </div>
                    </div>
                </figcaption>
            </figure>
     );
}
 
export default BlogCard;