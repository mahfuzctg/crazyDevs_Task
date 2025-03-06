const SiteLogoAndIcons = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-1 items-center">
        <img src="/src/assets/Logo-icon.png" alt="Logo-icon" />
        <img src="/src/assets/Logo-label.png" alt="Website Logo" />
      </div>
      <div className="flex gap-2">
        <img src="/src/assets/icon-search.png" alt="Search-icon" />
        <img src="/src/assets/icon-sidebar-left.png" alt="Search-icon-left" />
      </div>
    </div>
  );
};

export default SiteLogoAndIcons;
