import SidebarCard from "../card/SidebarCard";
import SiteLogoAndIcons from "../header/SiteLogoAndIcons";
import AvatarWithInfo from "../profile/AvatarWithInfo";
import BtnRounded from "../reuseable/BtnRounded";

const Sidebar = () => {
  return (
    <>
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
      <SidebarCard />

      {/* Avatar with info */}
      <AvatarWithInfo />
    </>
  );
};

export default Sidebar;
