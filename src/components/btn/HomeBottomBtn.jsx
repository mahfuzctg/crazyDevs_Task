import BtnRounded from "../reuseable/BtnRounded";

const HomeBottomBtn = () => {
  return (
    <div className="flex items-center justify-center gap-6 w-9/12 mx-auto">
      {/* Start Button */}
      <BtnRounded
        iconSrc="/src/assets/left-btn-icon-sidebar.png"
        buttonText="Start"
        className="bg-[#454444] home_bottom_start_btn"
        border={true}
        borderColor="border-[#FB9937]"
      />

      {/* Centered "Or" */}
      <p className="text-white text-lg font-semibold">Or</p>

      {/* Start With Demo Dive Button */}
      <BtnRounded
        iconSrc="/src/assets/icon-deep-dive.png"
        buttonText="Start With Demo Dive"
        className="bg-[#FB9937]  home_bottom_demo_btn"
        border={true}
        borderColor="border-[#FB9937]"
      />
    </div>
  );
};

export default HomeBottomBtn;
