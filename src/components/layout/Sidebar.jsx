import SiteLogoAndIcons from "../header/SiteLogoAndIcons";
import BtnRounded from "../reuseable/BtnRounded";
import GenericCard from "../reuseable/GenericCard";

const Sidebar = () => {
  return (
    <div className="min-h-screen">
      {/* sidebar logo and icons */}
      <SiteLogoAndIcons />

      {/* rounded btn */}
      <BtnRounded
        iconSrc="/src/assets/left-btn-icon-sidebar.png"
        buttonText="Add Folder"
        border={true}
        borderColor="border-[#454444] "
      />
      <BtnRounded
        iconSrc="/src/assets/left-btn-icon-sidebar.png"
        buttonText="Create Chat"
        className="bg-[#454444]"
        border={true}
        borderColor="border-[#454444] "
      />

      {/* sidebar bottom card */}
      <GenericCard />
    </div>
  );
};

export default Sidebar;
