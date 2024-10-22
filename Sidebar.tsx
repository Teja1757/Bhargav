import React from "react";
import { Nav, NavExpandable, NavItem, NavList } from "@patternfly/react-core";
import "@patternfly/react-core/dist/styles/base.css";
import { HomeAltIcon } from "@patternfly/react-icons";
import { MdSpaceDashboard } from "react-icons/md";
import { RiFolderTransferFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const NavMixed: React.FunctionComponent = () => {
  const [activeGroup, setActiveGroup] = React.useState("");
  const [activeItem, setActiveItem] = React.useState("");

  const onSelect = (
    _event: React.FormEvent<HTMLInputElement>,
    result: { itemId: number | string; groupId: number | string | null }
  ) => {
    setActiveGroup(result.groupId as string);
    setActiveItem(result.itemId as string);
  };

  return (
    <Nav onSelect={onSelect} aria-label="Mixed global">
      <NavList>
        <NavItem
          className="list-item"
          preventDefault
          id="mixed-1"
          to="#mixed-1"
          itemId="ungrouped_item-1"
          isActive={activeItem === "ungrouped_item-1"}
        >
          <div className="flex gap-3">
            <HomeAltIcon className="sidebar-icon" />
            <Link to="/home">Home</Link>
          </div>
        </NavItem>
        <NavItem
          className="list-item"
          preventDefault
          id="mixed-2"
          to="#mixed-2"
          itemId="ungrouped_item-2"
          isActive={activeItem === "ungrouped_item-2"}
        >
          <div className="flex gap-3">
            <MdSpaceDashboard className="sidebar-icon" />
            <Link to="/dashboard">Dash Board</Link>
          </div>
        </NavItem>
        <NavExpandable
          className="list-item"
          title={
            <div className="flex gap-3">
              <RiFolderTransferFill className="sidebar-icon" />
              <span>Migration</span>
            </div>
          }
          groupId="nav-mixed-group-1"
          isActive={activeGroup === "nav-mixed-group-1"}
        >
          <NavItem
            className="list-item"
            preventDefault
            id="mixed-3"
            to="#mixed-3"
            groupId="nav-mixed-group-1"
            itemId="nav-mixed-group-1_item-1"
            isActive={activeItem === "nav-mixed-group-1_item-1"}
          >
            <div>
              <Link to="/checkpoint">CheckPoint</Link>
            </div>
          </NavItem>
          <NavItem
            className="list-item"
            preventDefault
            id="mixed-4"
            to="#mixed-4"
            groupId="nav-mixed-group-1"
            itemId="nav-mixed-group-1_item-2"
            isActive={activeItem === "nav-mixed-group-1_item-2"}
          >
            FortiNet
          </NavItem>
          <NavItem
            className="list-item"
            preventDefault
            id="mixed-5"
            to="#mixed-5"
            groupId="nav-mixed-group-1"
            itemId="nav-mixed-group-1_item-3"
            isActive={activeItem === "nav-mixed-group-1_item-3"}
          >
            PaloAlto
          </NavItem>
        </NavExpandable>
      </NavList>
    </Nav>
  );
};

export default NavMixed;
