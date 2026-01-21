const SingleCard = ({ item, bg }) => {
  const { title, totalNumber, icon } = item;

  return (
    <div className={`p-5 rounded-md flex justify-between items-center ${bg}`}>
      <div>
        <h4 className="text-white text-sm">{title}</h4>
        <span className="text-white text-2xl font-semibold">
          {totalNumber}+
        </span>
      </div>

      <i className={`${icon} text-3xl text-white/90`}></i>
    </div>
  );
};

export default SingleCard;