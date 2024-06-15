import PropTypes from "prop-types";

function Card({ title }) {
  return (
    <div className="mt-10 h-[300px] w-[300px] rounded-md bg-gradient-to-b from-slate-900 to-slate-800 p-6 text-center">
      <h2 className="mb-2 text-lg font-medium">{title}</h2>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;
