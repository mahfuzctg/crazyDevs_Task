import BtnRounded from "../reuseable/BtnRounded";

const HomeBottomBtn = () => {
  return (
    <div className="flex items-center justify-center gap-6  fixed bottom-32 ml-44  ">
      {/* Start Button */}
      <BtnRounded
        buttonText="Start"
        className="bg-[#454444]  transition-all duration-200 ease-in-out 
                   hover:bg-[#FB9937] active:scale-95"
        border={true}
        borderColor="border-[#FB9937]"
        onClick={() => alert("Start Button Clicked!")}
      />

      {/* Centered "Or" */}
      <h3 className="text-white text-lg font-semibold">or</h3>

      {/* Start With Demo Dive Button */}
      <BtnRounded
        iconSrc="/assets/icon-deep-dive.png"
        buttonText="Start With Demo Dive"
        className="bg-[#FB9937] home_bottom_demo_btn transition-all duration-200 ease-in-out 
                   hover:bg-[#454444] active:scale-95"
        border={true}
        borderColor="border-[#FB9937]"
        onClick={() => alert("Demo Dive Button Clicked!")}
      />
    </div>
  );
};

export default HomeBottomBtn;
