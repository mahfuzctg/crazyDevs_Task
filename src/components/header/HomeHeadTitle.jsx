const HomeHeadTitle = () => {
  return (
    <div className="flex items-center home_head_title mx-auto w-[664px] h-[44px] justify-center">
      <>
        <img src="/assets/home-head-icon-circle.png" alt="" />
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
