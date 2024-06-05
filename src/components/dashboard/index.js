import React from "react";
import style from "./dashboard.module.scss";
import DashboardItem from "../dashboardItem";
import { Link } from "react-router-dom";
import DefaultLayout from "layout/defaultLayout";

const Dashboard = ({ navItems }) => {
  // const tweets = [
  //   { title: "Tweet overview" },
  //   { title: "Tweets" },
  //   {
  //     title: "Engagements",
  //   },
  //   {
  //     title: "Average engagements",
  //   },
  //   {
  //     title: "Media",
  //   },
  //   {
  //     title: "Hashtags",
  //   },
  //   {
  //     title: "Time of day",
  //   },

  //   {
  //     title: "Time of week",
  //   },
  //   {
  //     title: "Frequently used wordsFrequently used words",
  //   },
  //   {
  //     title: "Tweet analytics",
  //   },
  // ];

  // const follower = [
  //   {
  //     title: "Acquisition overview",
  //   },
  //   {
  //     title: "Followers",
  //   },
  //   {
  //     title: "Following",
  //   },

  //   {
  //     title: "Follower/Following ratio",
  //   },
  //   {
  //     title: "Acquisition analytics",
  //   },
  //   {
  //     title: "Follower analytics",
  //   },
  // ];

  return (
    <div className={style.navItemsContainer}>
      <DashboardItem defaultNavigation={navItems} />

      {/* <hr className={style.line} />
        <div className={style.report}>
          <Link to="#">Report</Link>
        </div> */}
    </div>
  );
};

export default Dashboard;
// const defaultNavigation = [
//   {
//     title: "Dashboard",
//     to: "/",
//     active: "/",
//   },
//   {
//     title: "Tweets",
//     to: "#",
//     menus: [
//       {
//         title: "Tweet overview",
//         to: "/tweet/overview",
//         active: "overview",
//       },
//       {
//         title: "Tweets",
//         to: "#",
//       },
//       {
//         title: "Engagements",
//       },
//       {
//         title: "Average engagements",
//       },
//       {
//         title: "Media",
//       },
//       {
//         title: "Hashtags",
//       },
//       {
//         title: "Time of day",
//       },

//       {
//         title: "Time of week",
//       },
//       {
//         title: "Frequently used wordsFrequently used words",
//       },
//       {
//         title: "Tweet analytics",
//       },
//     ],
//   },
//   {
//     title: "Follower acquisition",
//     to: "#",
//     menus: [
//       {
//         title: "Tweet overview2",
//         to: "/tweets",
//       },
//       {
//         title: "Acquisition overview",
//       },
//       {
//         title: "Followers",
//       },
//       {
//         title: "Following",
//       },

//       {
//         title: "Follower/Following ratio",
//       },
//       {
//         title: "Acquisition analytics",
//       },
//       {
//         title: "Follower analytics",
//       },
//     ],
//   },
//   {
//     title: "Report",
//     to: "/report",
//     active: "report",
//   },
// ];
