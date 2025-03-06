import UploadCard from "@/components/card/UploadCard";
import HomeHeadTitle from "@/components/header/HomeHeadTitle";
import HomeTitle from "@/components/header/HomeTitle";

const HomePage = () => {
  return (
    <div>
      {/* Home Head title here */}
      <div>
        <HomeHeadTitle />
      </div>
      {/* Home title is here */}
      <>
        <HomeTitle />
      </>

      {/* Home upload cards here */}
      <div className="grid grid-cols-2">
        <UploadCard />
      </div>
    </div>
  );
};

export default HomePage;
