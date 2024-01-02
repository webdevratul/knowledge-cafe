import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";
const Bookmarks = ({ bookamarks, redingTime }) => {
  return (
    <div className="md:w-1/3 ml-10">
      <div>
        <h3 className="text-2xl m-4">Reading Tiem: {redingTime}</h3>
      </div>
      <h2 className="text-3xl m-4">Bookmarks {bookamarks.length}</h2>
      {bookamarks.map((bookmark, index) => (
        <Bookmark key={index} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookamarks: PropTypes.array,
  redingTime: PropTypes.number,
};

export default Bookmarks;
