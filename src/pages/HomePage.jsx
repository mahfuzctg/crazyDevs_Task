import HomeBottomBtn from "@/components/btn/HomeBottomBtn";
import UploadCard from "@/components/card/UploadCard";
import HomeHeadTitle from "@/components/header/HomeHeadTitle";
import HomeSubTItle from "@/components/header/HomeSubTItle";
import HomeTitle from "@/components/header/HomeTitle";
import Source from "@/components/source/Source";

const HomePage = () => {
  return (
    <div>
      {/* Home Head title here */}
      <>
        <HomeHeadTitle />
      </>
      <div className=" bg-amber-200 ">
        {/* Home title is here */}

        <HomeTitle />
        {/* Home Sub Title */}
        <HomeSubTItle />
        {/* Home upload cards here */}
        <>
          <UploadCard />
        </>
        {/* Source  */}
        <Source></Source>
        {/* Home start or demo btn */}
        <HomeBottomBtn />
      </div>
    </div>
  );
};

export default HomePage;
