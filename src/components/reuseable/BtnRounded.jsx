import { Button } from "../ui/button";

const BtnRounded = ({
  iconSrc,
  buttonText,
  className = "",
  border = false,
  borderColor = "", // Default border color
}) => {
  return (
    <div>
      <div
        className={`flex items-center justify-center site_header_rounded_btn ${className} ${
          border ? `border ${borderColor}` : ""
        }`}
      >
        <img src={iconSrc} alt="icon" />
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
};

export default BtnRounded;
