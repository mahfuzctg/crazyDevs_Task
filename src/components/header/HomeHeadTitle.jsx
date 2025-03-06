const HomeHeadTitle = () => {
  return (
    <div className="flex items-center ml-40">
      <>
        <img src="/src/assets/home-head-icon-circle.png" alt="" />
      </>
      <div className="flex items-center">
        <>
          <span>
            The web version does not display local chats. To access all
            features, pleas..
          </span>
        </>
        <>
          <p className="text-[#FB9937]">install the app.</p>
        </>
      </div>
    </div>
  );
};

export default HomeHeadTitle;
