import { FaBookmark } from "react-icons/fa";
import { LuBookMarked } from "react-icons/lu";

const Blog = ({ blog }) => {
  const {
    cover,
    author_name,
    author_img,
    post_date,
    title,
    tags,
    reading_time,
  } = blog;
  return (
    <>
      <div className="p-4 w-1/2 border  ">
        <img className="lg:w-[845px] lg:h-[450px]" src={cover} alt="" />

        {/* author img, name, posted date and reading time */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img
              className="md:w-[60px] md:h-[60px] rounded-full"
              src={author_img}
              alt=""
            />
            <div>
              <h2>{author_name}</h2>
              <p>{post_date}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <p>{reading_time} min read</p>
            <span className="cursor-pointer">
              {" "}
              <LuBookMarked className="text-purple-700 text-2xl" />
            </span>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-2xl">{title}</h2>
          {tags.map((tag, index) => (
            <a href="#" key={index} className="text-purple-600">
              {" "}
              #{tag}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
