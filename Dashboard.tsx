import React from "react";
import {
  Page,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  PageSidebar,
  PageSidebarBody,
  PageSection,
  PageToggleButton,
} from "@patternfly/react-core";
import BarsIcon from "@patternfly/react-icons/dist/esm/icons/bars-icon";
import "@patternfly/react-core/dist/styles/base.css";
import logo from "./images/tcs-logo.webp";
import "./Home.css";
import NavMixed from "./Sidebar.tsx";
import { Breadcrumb, BreadcrumbItem } from "@patternfly/react-core";
import { FaUserCircle, FaBell, FaDoorOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FunctionComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const navigate = useNavigate();

  const onSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const logoutFunction = () => {
    alert("Logout?");
    navigate("/");
  };

  const header = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton
          variant="plain"
          aria-label="Global navigation"
          isSidebarOpen={isSidebarOpen}
          onSidebarToggle={onSidebarToggle}
          id="vertical-nav-toggle"
        >
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <img src={logo} alt="tcs-logo" className="nav-logo" />
      </MastheadMain>
      <div className="profile-icons flex gap-8">
        <FaBell className="profile-icon" />
        <FaUserCircle className="profile-icon" />
        <button onClick={logoutFunction}>
          <FaDoorOpen className="profile-icon" />
        </button>
      </div>
    </Masthead>
  );

  const sidebar = (
    <PageSidebar
      isSidebarOpen={isSidebarOpen}
      id="vertical-sidebar"
      className="home-sidebar"
    >
      <PageSidebarBody>
        <NavMixed></NavMixed>
      </PageSidebarBody>
    </PageSidebar>
  );

  return (
    <Page header={header} sidebar={sidebar} className="font-serif">
      <PageSection>
        <Breadcrumb ouiaId="BasicBreadcrumb">
          <BreadcrumbItem to="/home">Home</BreadcrumbItem>
          <BreadcrumbItem to="/dashboard">DashBoard</BreadcrumbItem>
        </Breadcrumb>
      </PageSection>
      <PageSection>
        <h1 className="text-3xl font-bold">This is Dashboard</h1>
      </PageSection>
    </Page>
  );
};

export default Dashboard;
