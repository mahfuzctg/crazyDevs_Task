import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SiteLogoAndIcons = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex w-full justify-between items-center">
      {/* Logo Section */}
      <div className="flex gap-2 items-center ml-3">
        <img
          src="/assets/Logo-icon.png"
          className="w-[29px] h-[29px]"
          alt="Logo-icon"
        />
        <img
          src="/assets/Logo-label.png"
          className="w-[96px] h-[18px]"
          alt="Website Logo"
        />
      </div>

      {/* Search & Icons Section */}
      <div className="flex gap-2 items-center">
        {/* Search Input Toggle */}
        {isSearchOpen && (
          <div className="flex items-center gap-2 bg-[#2B2B2B] rounded-md px-2">
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-24"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(false)} // Hide search on click
              className="hover:bg-gray-300 w-[28px] h-[28px]"
            >
              <img
                src="/assets/source/icon-close-small.png"
                alt="Close-search-icon"
                className="w-[20px] h-[20px]"
              />
            </Button>
          </div>
        )}

        {/* Search Toggle Button */}
        {!isSearchOpen && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(true)}
            className="hover:bg-gray-200 w-[28px] h-[28px] transition-all"
          >
            <img
              src="/assets/icon-search.png"
              alt="Search-icon"
              className="w-[24px] h-[24px]"
            />
          </Button>
        )}

        {/* Sidebar Toggle Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="hover:bg-gray-300 w-[28px] h-[28px]"
        >
          <img
            src={
              isSidebarOpen
                ? "/assets/source/icon-close-small.png"
                : "/assets/icon-sidebar-left.png"
            }
            alt="Sidebar-icon"
            className="w-[24px] h-[24px]"
          />
        </Button>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-10 bottom-5 w-[10%] my-auto  h-[100%] bg-[#fefefe] text-white p-4 shadow-lg transition-all">
          <p>Side bar</p>
        </div>
      )}
    </div>
  );
};

export default SiteLogoAndIcons;
