import React, { useCallback } from "react";
import { t } from "ttag";

import Link from "metabase/core/components/Link";
import Tooltip from "metabase/components/Tooltip";
import LogoIcon from "metabase/components/LogoIcon";

import SearchBar from "metabase/nav/components/SearchBar";
import NewButton from "metabase/nav/containers/NewButton";
import {
  SearchBarContainer,
  SearchBarContent,
} from "metabase/nav/containers/Navbar.styled";

import Database from "metabase/entities/databases";
import { isSmallScreen } from "metabase/lib/dom";

import { AppBarRoot, LogoIconWrapper, SidebarButton } from "./AppBar.styled";

type Location = {
  pathname: string;
  query: Record<string, string>;
};

type Props = {
  isSidebarOpen: boolean;
  location: Location;
  onNewClick: () => void;
  onToggleSidebarClick: () => void;
  handleCloseSidebar: () => void;
  onChangeLocation: (nextLocation: Location) => void;
};

function AppBar({
  isSidebarOpen,
  location,
  onNewClick,
  onToggleSidebarClick,
  handleCloseSidebar,
  onChangeLocation,
}: Props) {
  const onLogoClick = useCallback(() => {
    if (isSmallScreen()) {
      handleCloseSidebar();
    }
  }, [handleCloseSidebar]);

  return (
    <AppBarRoot id="mainAppBar">
      <LogoIconWrapper>
        <Link to="/" onClick={onLogoClick} data-metabase-event="Navbar;Logo">
          <LogoIcon size={24} />
        </Link>
      </LogoIconWrapper>
      <Tooltip tooltip={isSidebarOpen ? t`Close sidebar` : t`Open sidebar`}>
        <SidebarButton
          name={isSidebarOpen ? "chevronleft" : "chevronright"}
          onClick={onToggleSidebarClick}
        />
      </Tooltip>
      <SearchBarContainer>
        <SearchBarContent>
          <SearchBar location={location} onChangeLocation={onChangeLocation} />
        </SearchBarContent>
      </SearchBarContainer>
      <NewButton setModal={onNewClick} />
    </AppBarRoot>
  );
}

export default Database.loadList({ loadingAndErrorWrapper: false })(AppBar);
