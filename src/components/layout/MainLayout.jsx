import HomePage from "@/pages/HomePage";

const MainLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 bg-[#1E1F20] text-white p-4">
        {/* Sidebar content goes here */}
        Sidebar
      </div>

      {/* Main content */}
      <div className="w-4/5 p-4">
        {/* Main content goes here */}
        <HomePage></HomePage>
      </div>
    </div>
  );
};

export default MainLayout;
