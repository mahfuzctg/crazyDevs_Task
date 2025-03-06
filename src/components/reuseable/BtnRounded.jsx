import { Button } from "../ui/button";

const BtnRounded = ({ iconSrc, buttonText, className = "" }) => {
  return (
    <div>
      <div
        className={`flex items-center justify-center site_header_rounded_btn ${className}`}
      >
        <img src={iconSrc} alt="icon" />
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
};

export default BtnRounded;
