import HomePage from "@/pages/HomePage";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="flex justify-around">
      {/* Sidebar */}
      <Sidebar></Sidebar>

      {/* Main content */}
      <div className="main_dotted_bg w-[1116px] h-auto ">
        {/* Main content goes here */}
        <HomePage></HomePage>
      </div>
    </div>
  );
};

export default MainLayout;
