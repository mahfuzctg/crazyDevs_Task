const Source = () => {
  return (
    <div className="flex source_box w-[820px] h-[62px] bg-[#242424] mx-auto">
      {/* Left side */}

      <div className="flex bg-[#2B2B2B] source_box_right px-5  ">
        <div className="flex gap-1">
          <img src="/assets/source/Files-Left.png" alt="" />
          <span>Article.docs</span>
        </div>

        <div className="flex gap-1">
          <img
            src="/assets/source/Checkbox.png"
            className=" items-center"
            alt=""
          />
          <span>Force OCR</span>
          <img src="/assets/source/Tooltip.png" alt="" />
          <img src="/assets/source/icon-close-small.png" alt="" />
        </div>
      </div>

      {/* Right side */}
      <div className="flex bg-[#2B2B2B] source_box_right px-2 gap-2  ">
        <div className="flex gap-1">
          <img src="/assets/source/Files.png" alt="" />
          <span>Article.docs</span>
        </div>

        <div className="flex gap-1">
          <img
            src="/assets/source/Checkbox.png"
            className="items-center"
            alt=""
          />
          <span>Force OCR</span>
          <img src="/assets/source/Tooltip.png" alt="" />
          <img src="/assets/source/icon-close-small.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Source;
