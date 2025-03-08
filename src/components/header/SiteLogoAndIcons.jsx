import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SiteLogoAndIcons = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex w-[90%] justify-between items-center">
      {/* Logo Section */}
      <div className="flex gap-4 items-center">
        <img src="/assets/Logo-icon.png" alt="Logo-icon" />
        <img src="/assets/Logo-label.png" alt="Website Logo" />
      </div>

      {/* Search & Icons Section */}
      <div className="flex gap-2 items-center">
        {isSearchOpen ? (
          <div className="flex items-center gap-2 bg-[#2B2B2B] rounded-md px-2 ">
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-24 "
              autoFocus
            />
          </div>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(true)}
            className="hover:bg-gray-200 transition-all"
          >
            <img
              src="/assets/icon-search.png"
              alt="Search-icon"
              className="w-6 h-6"
            />
          </Button>
        )}

        <Button variant="ghost" size="icon">
          <img
            src="/assets/icon-sidebar-left.png"
            alt="Sidebar-icon"
            className="w-6 h-6"
          />
        </Button>
      </div>
    </div>
  );
};

export default SiteLogoAndIcons;
