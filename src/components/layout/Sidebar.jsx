import SidebarCard from "../card/SidebarCard";
import SiteLogoAndIcons from "../header/SiteLogoAndIcons";
import AvatarWithInfo from "../profile/AvatarWithInfo";
import BtnRounded from "../reuseable/BtnRounded";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-4 w-[280px] h-[868px]">
      {/* Sidebar logo and icons */}
      <SiteLogoAndIcons />

      {/* Rounded buttons with hover effects */}
      <div className="flex flex-col gap-4 ">
        <BtnRounded
          iconSrc="/assets/left-btn-icon-sidebar.png"
          buttonText="Add Folder"
          border={true}
          borderColor="border-[#454444]"
          className="transition-all duration-300 ease-in-out hover:bg-[#565656] hover:text-white active:scale-95"
        />
        <BtnRounded
          iconSrc="/assets/left-btn-icon-sidebar.png"
          buttonText="Create Chat"
          className="bg-[#454444] transition-all duration-300 ease-in-out hover:bg-[#565656] hover:text-white active:scale-95"
          border={true}
          borderColor="border-[#454444]"
        />
      </div>

      {/* Sidebar bottom card */}
      <SidebarCard />

      {/* Avatar with info */}
      <AvatarWithInfo />
    </div>
  );
};

export default Sidebar;
