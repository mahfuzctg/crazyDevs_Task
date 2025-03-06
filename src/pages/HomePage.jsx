import UploadCard from "@/components/card/UploadCard";
import HomeHeadTitle from "@/components/header/HomeHeadTitle";

const HomePage = () => {
  return (
    <div>
      <div>
        <HomeHeadTitle />
      </div>
      <div className="grid grid-cols-2">
        <UploadCard />
      </div>
    </div>
  );
};

export default HomePage;
