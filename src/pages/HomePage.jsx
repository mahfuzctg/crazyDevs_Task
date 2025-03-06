import HomeBottomBtn from "@/components/btn/HomeBottomBtn";
import UploadCard from "@/components/card/UploadCard";
import HomeHeadTitle from "@/components/header/HomeHeadTitle";
import HomeSubTItle from "@/components/header/HomeSubTItle";
import HomeTitle from "@/components/header/HomeTitle";

const HomePage = () => {
  return (
    <div>
      {/* Home Head title here */}
      <div>
        <HomeHeadTitle />
      </div>
      {/* Home title is here */}

      <HomeTitle />
      {/* Home Sub Title */}
      <HomeSubTItle />
      {/* Home upload cards here */}
      <div className="grid grid-cols-2">
        <UploadCard />
      </div>

      {/* Home start or demo btn */}
      <HomeBottomBtn />
    </div>
  );
};

export default HomePage;
