import { CircleAlert } from "lucide-react";

const DeepDive = () => {
  return (
    <>
      <div>
        <CircleAlert />
        <img src="/assets/pointing.png" className="-mt-4 ml-2" alt="pointing" />
      </div>
      <div className="w-[226px] h-[94px] deep_dive_box bg-[#1E1E1E] ">
        <h6>
          Deep Dive processes documents section by section for "unlimited"
          context, enabling complete answers. Run once per chat to unlock Table
          AI and Prompt Loops
        </h6>
      </div>
    </>
  );
};

export default DeepDive;
