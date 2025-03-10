const GenericHomeCard = ({
  iconSrc = "/assets/default-icon.png",
  title,
  inputField,
}) => {
  return (
    <div className="flex upload_card w-[406px] h-[120px] bg-[#242424]  ">
      <div className="flex items-center gap-x-2 text-start">
        <img src={iconSrc} alt="icon" className="" />
        <div className="title">{title}</div>
      </div>

      {inputField ? (
        <div className="flex items-center w-full bg-gray-500 rounded-md">
          <input
            type="text"
            placeholder="Enter URL"
            className="w-full bg-transparent text-gray-300 outline-none"
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GenericHomeCard;
