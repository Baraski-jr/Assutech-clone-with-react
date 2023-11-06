import { useEffect, useState } from "react";
import BlogCard from "../Components/cards/blog-card";
import Hero from "../Components/hero/hero";


const Blogs = () => {
  const url: string = "http://localhost:3000/blogs";
  const [blogs, setBlosgs] = useState<BlogCard[]>([])

  useEffect(() => {
      const FetchData = async (url: string) => {
        const response = await fetch(url);
        const data = await response.json()
        setBlosgs(data.cards)   
        console.log(data.cards[0].poster)
      }
      FetchData(url)
    }, [])
  return (
    <div className="min-h-[95vh] space-y-10">
      <section>
        <Hero mainTitle={"Tech Talks"} subTitle={"We distill the Trends, Thoughts and Technologies."} />
      </section>
      <section className="container w-[95%] md:w-[85%] md:max-w-[74rem] lg:max-w-[90rem] py-20 mx-auto ">
        <div className="flex flex-wrap gap-5 lg:gap-8">
          {
            blogs.map(({id, title, image, tags, poster}:BlogCard) => (
                <BlogCard key={id} id={id} title={title} image={image} tags={tags} poster={poster} />
            ))
          }
        </div>
      </section>
    </div>
  );
};
export default Blogs;