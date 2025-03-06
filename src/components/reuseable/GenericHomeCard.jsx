const GenericHomeCard = ({
  iconSrc = "/src/assets/default-icon.png",
  title,

  buttonText,
  inputField,
}) => {
  return (
    <div className="flex flex-col items-start justify-center bg-[#242424] text-white p-4 rounded-lg w-full max-w-sm shadow-md">
      <div className="flex items-center gap-3">
        <img src={iconSrc} alt="icon" className="w-6 h-6" />
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
    </div>
  );
};

export default GenericHomeCard;
