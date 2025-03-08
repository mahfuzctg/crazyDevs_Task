import GenericCard from "../reuseable/GenericCard";

const SidebarCard = () => {
  return (
    <div className="mt-24">
      {/* Card for Premium Upgrade */}
      <GenericCard
        title="Upgrade to Premium"
        buttonText="Upgrade plan"
        description="Make the most of all features!"
        iconSrc="/assets/left-btn-icon-sidebar.png"
        border={true}
        borderColor="border-orange-500 hover:bg-[#FB9937]"
        className="mt-60"
        buttonLink="/upgrade"
        onClick={() => alert("Start Button Clicked!")}
      />
    </div>
  );
};

export default SidebarCard;
