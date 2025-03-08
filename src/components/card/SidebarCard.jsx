import GenericCard from "../reuseable/GenericCard";

const SidebarCard = () => {
  return (
    <div className=" mt-24">
      {/* Card for Premium Upgrade */}
      <GenericCard
        title="Upgrade to Premium"
        description="Make the most of all features!"
        buttonText="Upgrade"
        iconSrc="/assets/left-btn-icon-sidebar.png"
        border={true}
        borderColor="border-orange-500"
        className="mt-60 "
      />
    </div>
  );
};

export default SidebarCard;
