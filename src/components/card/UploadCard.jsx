import GenericHomeCard from "../reuseable/GenericHomeCard";

const UploadCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4   ">
      <GenericHomeCard
        iconSrc="/assets/upload-drag-img.png"
        title="Drag & drop local files here, or click to select"
      />
      <GenericHomeCard
        iconSrc="/assets/upload-url-img.png"
        title="Enter in a public URL:"
      />
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
