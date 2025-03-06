import GenericHomeCard from "../reuseable/GenericHomeCard";

const UploadCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4   ">
      <GenericHomeCard
        iconSrc="/src/assets/upload-drag-img.png"
        title="Drag & drop local files here, or click to select"
      />
      <GenericHomeCard
        iconSrc="/src/assets/upload-url-img.png"
        title="Enter in a public URL:"
      />
      <GenericHomeCard
        iconSrc="/src/assets/upload-drop-img.png"
        title="Add files from Dropbox"
      />
      <GenericHomeCard
        iconSrc="/src/assets/upload-drive-img.png"
        title="Add files from Google Drive"
        buttonText="Connect"
      />
    </div>
  );
};

export default UploadCard;
