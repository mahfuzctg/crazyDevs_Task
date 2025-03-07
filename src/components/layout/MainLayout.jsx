import HomePage from "@/pages/HomePage";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className=" side_layout">
        {/* Sidebar content goes here */}
        <Sidebar></Sidebar>
      </div>

      {/* Main content */}
      <div className="w-[75%]  main_dotted_bg">
        {/* Main content goes here */}
        <HomePage></HomePage>
      </div>
    </div>
  );
};

export default MainLayout;
