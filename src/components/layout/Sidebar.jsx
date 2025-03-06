import SiteLogoAndIcons from "../header/SiteLogoAndIcons";
import BtnRounded from "../reuseable/BtnRounded";

const Sidebar = () => {
  return (
    <div className="min-h-screen">
      <SiteLogoAndIcons />

      {/* rounded btn */}
      <BtnRounded
        iconSrc="/src/assets/left-btn-icon-sidebar.png"
        buttonText="Add Folder"
      />
      <BtnRounded
        iconSrc="/src/assets/left-btn-icon-sidebar.png"
        buttonText="Create Chat"
        className="bg-[#454444]"
      />
    </div>
  );
};

export default Sidebar;
