import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookamarks, setBookmarks] = useState([]);

  const [redingTime, setRedingTime] = useState(0);

  const handleAddtoBookmark = (blog) => {
    const newBookmarks = [...bookamarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (id, time) => {
    const newRedingTime = redingTime + time;
    setRedingTime(newRedingTime);

    // Remove bookmark
    const remainingBookmarks = bookamarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-7xl mx-auto mt-8">
        <Blogs
          handleAddtoBookmark={handleAddtoBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookamarks={bookamarks} redingTime={redingTime}></Bookmarks>
      </main>
    </>
  );
}

export default App;
