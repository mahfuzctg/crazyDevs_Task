const GenericHomeCard = ({
  iconSrc = "/assets/default-icon.png",
  title,
  inputField,
}) => {
  return (
    <div className="flex flex-col mx-auto  upload_card  ">
      <div className="flex items-center gap-x-2">
        <img src={iconSrc} alt="icon" className="" />
        <p>{title}</p>
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
