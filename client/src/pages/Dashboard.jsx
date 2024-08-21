import { Button, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    console.log(tabFromUrl);
  }, [location.search]);

  return (
    <div>
      <div>{/* SideBar */}
      <DashSidebar/>
      </div>
      {/* Profile */}
      <DashProfile/>
    </div>
  );
}

export default Dashboard;
