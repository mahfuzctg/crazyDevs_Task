import HomePage from "@/pages/HomePage";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5  text-white p-4">
        {/* Sidebar content goes here */}
        <Sidebar></Sidebar>
      </div>

      {/* Main content */}
      <div className="w-4/5 p-4 main_dotted_bg">
        {/* Main content goes here */}
        <HomePage></HomePage>
      </div>
    </div>
  );
};

export default MainLayout;
