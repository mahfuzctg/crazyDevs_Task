import BtnRounded from "./BtnRounded";

const GenericCard = ({
  title,
  description,
  buttonText,
  iconSrc,
  border = false,
  borderColor = "border-gray-300",
  className = "",
}) => {
  return (
    <div className={`p-4 rounded-lg shadow-md card ${className}`}>
      <h3 className="text-md font-semibold">{title}</h3>
      <span className="text-sm text-gray-600">{description}</span>
      <BtnRounded
        iconSrc={iconSrc}
        buttonText={buttonText}
        border={border}
        borderColor={borderColor}
      />
    </div>
  );
};

export default GenericCard;
