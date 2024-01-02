import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  console.log(bookmark);
  const { title } = bookmark;
  return (
    <div className="bg-slate-300 rounded-md p-4 my-4">
      <h3 className="text-2xl">{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
