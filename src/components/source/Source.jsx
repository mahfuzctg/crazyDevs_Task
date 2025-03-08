const Source = () => {
  return (
    <div className="flex source_box w-[820px] h-[62px] bg-[#242424] mx-auto">
      {/* Left side */}

      <div className="flex bg-[#2B2B2B] source_box_right   ">
        <div className="flex gap-1">
          <img src="/assets/source/Files-Left.png" alt="" />
          <h6>Report_file.pdf</h6>
        </div>

        <div className="flex gap-1">
          <img
            src="/assets/source/Checkbox.png"
            className=" items-center"
            alt=""
          />
          <h5>Force OCR</h5>
          <img src="/assets/source/Tooltip.png" alt="" />
          <img src="/assets/source/icon-close-small.png" alt="" />
        </div>
      </div>

      {/* Right side */}
      <div className="flex bg-[#2B2B2B] source_box_right px-2 gap-2  ">
        <div className="flex gap-1">
          <img src="/public/assets/source/Files-Right.png" alt="" />
          <h6>Article.docs</h6>
        </div>

        <div className="flex gap-1">
          <img
            src="/assets/source/Checkbox.png"
            className="items-center"
            alt=""
          />
          <h5>Force OCR</h5>
          <img src="/assets/source/Tooltip.png" alt="" />
          <img src="/assets/source/icon-close-small.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Source;
