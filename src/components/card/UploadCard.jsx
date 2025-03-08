import GenericHomeCard from "../reuseable/GenericHomeCard";

const UploadCard = () => {
  return (
    <div className="grid grid-cols-2 gap-3 my-5 w-[820px] h-auto mx-auto  ">
      <GenericHomeCard
        iconSrc="/assets/upload-drag-img.png"
        title="Drag & drop local files here,
or click to select"
      />
      <div>
        <GenericHomeCard
          iconSrc="/assets/upload-url-img.png"
          title="Enter in a public URL:"
        />
        <div className="bg-[#353535]   flex justify-around py-2 items-center -mt-10 ml-16 w-9/12 rounded-2xl">
          <h6>https://www.example.pdf</h6>
          <h4 className="bg-[#535353] p-1 px-2 rounded-lg">Add</h4>
        </div>
      </div>
      <GenericHomeCard
        iconSrc="/assets/upload-drop-img.png"
        title="Add files from Dropbox"
      />
      <GenericHomeCard
        iconSrc="/assets/upload-drive-img.png"
        title="Add files from Google Drive"
        buttonText="Connect"
      />
    </div>
  );
};

export default UploadCard;
