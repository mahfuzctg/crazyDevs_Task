const Source = () => {
  return (
    <div className="flex justify-around source_box w-[81%] bg-[#242424] mx-auto">
      {/* Right side */}

      {/* Left side */}
      <div className="flex bg-[#2B2B2B] px-2">
        <div className="flex">
          <img src="/public/assets/source/Files.png" alt="" />
          <span>Article.docs</span>
        </div>

        <div className="flex">
          <img src="/assets/source/icon-close-small.png" alt="" />
          <img
            src="/public/assets/source/Checkbox.png"
            className="-ml-[16%] items-center"
            alt=""
          />
          <span>Force OCR</span>
          <img src="/assets/source/Tooltip.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Source;
