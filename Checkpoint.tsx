import React from "react";
import {
  Page,
  Masthead,
  MastheadToggle,
  MastheadMain,
  PageSidebar,
  PageSidebarBody,
  PageSection,
  PageToggleButton,
  Modal,
  Button,
} from "@patternfly/react-core";
import BarsIcon from "@patternfly/react-icons/dist/esm/icons/bars-icon";
import "@patternfly/react-core/dist/styles/base.css";
import logo from "./images/tcs-logo.webp";
import "./Home.css";
import NavMixed from "./Sidebar.tsx";
import { Breadcrumb, BreadcrumbItem } from "@patternfly/react-core";
import TableBasic from "./Table.tsx";
import { FaUserCircle, FaBell, FaDoorOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { classNames } from "@patternfly/react-table";

const Checkpoint: React.FunctionComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const navigate = useNavigate();

  const onSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const logoutFunction = () => {
    alert("Logout?");
    navigate("/");
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          <BreadcrumbItem to="">Migration</BreadcrumbItem>
          <BreadcrumbItem to="/checkpoint">Check_Point</BreadcrumbItem>
        </Breadcrumb>
      </PageSection>
      <PageSection className="text-3xl font-bold text-center">
        Check Point
      </PageSection>
      <PageSection>
        <div className="flex justify-between">
          <div className="w-3/4">
            <input
              type="search"
              placeholder="Search by HostName or IP_Address"
              className="border rounded-md m-2 px-2 py-1 w-3/4"
            />
            <button className="border hover:bg-green-800 bg-green-700 text-white px-4 py-0.5 rounded-md">
              Search
            </button>
          </div>
          <button
            onClick={openModal}
            className="border hover:bg-blue-700 bg-blue-600 text-white px-4 mb-2 mt-2 rounded-md"
          >
            Add Host
          </button>
        </div>
        <TableBasic />
      </PageSection>

      <Modal
        className="mx-80 rounded-md font-serif bg-gray-200 text-center"
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Create Host"
        aria-label="Add Host Modal"
      >
        <form>
          <div className="mb-4">
            <label className="font-bold text-xl">
              User Name:
              <input
                type="text"
                className="border font-normal text-lg px-2 py-0.5 rounded-md ml-2"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="font-bold text-xl">
              IP Address:
              <input
                type="text"
                className="border font-normal text-lg px-2 py-0.5 rounded-md ml-2"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="font-bold text-xl">
              Password:
              <input
                type="password"
                className="border font-normal text-lg px-2 py-0.5 rounded-md ml-4"
                required
              />
            </label>
          </div>
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem",
          }}
        >
          <Button variant="danger" onClick={closeModal} className="mr-3">
            Cancel
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Add Host
          </Button>
        </div>
      </Modal>
    </Page>
  );
};

export default Checkpoint;
