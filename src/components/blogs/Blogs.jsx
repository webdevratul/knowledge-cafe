import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({ handleAddtoBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <div className="md:w-2/3">
        <h2 className="text-4xl mb-8">Blogs: {blogs.length}</h2>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddtoBookmark={handleAddtoBookmark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blog>
        ))}
      </div>
    </>
  );
};

Blogs.propTypes = {
  handleAddtoBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blogs;
