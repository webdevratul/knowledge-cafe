import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddtoBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    reading_time_minutes,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full mb-8 rounded-md"
        src={cover}
        alt={`cover picture of the title ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-[60px]" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time_minutes} min red</span>
          <button
            onClick={() => handleAddtoBookmark(blog)}
            className="ml-2 text-red-600 text-2xl"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p className="my-4">
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time_minutes)}
        className="my-4 underline text-blue-400"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddtoBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
