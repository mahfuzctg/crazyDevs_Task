import GenericHomeCard from "../reuseable/GenericHomeCard";

const UploadCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      <GenericHomeCard
        iconSrc="/src/assets/Logo-label.png"
        title="Drag & drop local files here, or click to select"
        buttonText="Upload"
      />
      <GenericHomeCard
        iconSrc="/src/assets/setting-2.png"
        title="Enter in a public URL:"
        buttonText="https://example.com/file.pdf"
        inputField={true}
      />
      <GenericHomeCard
        iconSrc="/src/assets/Logo-icon.png"
        title="Add files from Dropbox"
        buttonText="Connect"
      />
      <GenericHomeCard
        iconSrc="/src/assets/icon-search.png"
        title="Add files from Google Drive"
        buttonText="Connect"
      />
    </div>
  );
};

export default UploadCard;
