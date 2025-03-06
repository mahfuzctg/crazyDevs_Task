import BtnRounded from "./BtnRounded";

const GenericCard = () => {
  return (
    <div>
      <div className=" mt-60  card">
        <h1 className="text-md">Upgrade to Premium</h1>
        <span className="text-sm">Make the most of all features!</span>
        <BtnRounded
          iconSrc="/src/assets/left-btn-icon-sidebar.png"
          buttonText="Upgrade"
          border={true} // Enable border
          borderColor="border-orange-500 " // Set the border color to red
        />
      </div>
    </div>
  );
};

export default GenericCard;
