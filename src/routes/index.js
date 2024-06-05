import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import Home from "pages/home";
import Tweets from "pages/tweets";
import Engagements from "pages/engagements";
import DashboardRightSec from "components/dashboardRightSec";
import DraftTweets from "components/drafttweets";
import DefaultLayout from "layout/defaultLayout";
import SlackNotification from "components/slackNotification";
// import Layout from "components/layout";
import { authRoute, privateRoute } from "./helper";
import Accounts from "components/accounts";

import Postingtimes from "components/Posting";
import Comments from "components/comment";

import InboxHeader from "components/inboxheader";
import DeleteAccount from "components/deleteAcoount";
import Password from "components/password";
import Dashboard from "components/dashboard";
import Inbox from "pages/inbox";
import Followers from "pages/followers";
import Tweethistory from "components/tweethistory";
import Calendar from "components/calendar";
import QueueList from "components/queuelist";
import Notification from "components/notificationset";
import MonitorSetting from "components/monitorSetting";
import AccountManager from "pages/inbox/accountManager";
import {
  defaultNavigation,
  tweetMenu,
  inboxMenu,
  followersMenu,
  inboxMonitorSettingsMenu,
} from "../utils/NavMenus";
import Draft from "components/draft";
import Mentions from "pages/inbox/mention";
import Keywords from "pages/inbox/keywords";
import NonFollowers from "components/nonFollowers";

const Routes = ({ login }) => {
  return (
    <>
      {!login && (
        <Switch>
          {authRoute?.map(({ path, component }, index) => (
            <Route key={index} path={path} element={component} />
          ))}

          {/* <Route path='/' element={<DefaultLayout />}> */}
          <Route
            path="/"
            element={
              <ProtectedRoute
                component={DashboardRightSec}
                navItems={defaultNavigation}
              />
            }
          />
          <Route path="/home" element={<Home />} />
          <Route
            path="/tweets"
            element={<ProtectedRoute component={Tweets} navItems={tweetMenu} />}
          />
          <Route path="/dasboardRightSec" element={<DashboardRightSec />} />
          <Route path="/engagements" element={<Engagements />} />

          <Route
            path="/postingtimes"
            element={
              <ProtectedRoute component={Postingtimes} navItems={tweetMenu} />
            }
          />
          <Route
            path="/draft"
            element={<ProtectedRoute component={Draft} navItems={tweetMenu} />}
          />
          <Route path="/drafttweets" element={<DraftTweets />} />
          <Route
            path="/tweethistory"
            element={
              <ProtectedRoute component={Tweethistory} navItems={tweetMenu} />
            }
          />
          <Route path="/comments" element={<Comments />} />
          <Route path="/inboxheader" element={<InboxHeader />} />
          <Route
            path="/accounts"
            element={
              <ProtectedRoute
                component={Accounts}
                navItems={inboxMonitorSettingsMenu}
              />
            }
          />

          <Route
            path="/deleteAccount"
            element={
              <ProtectedRoute
                component={DeleteAccount}
                navItems={inboxMonitorSettingsMenu}
              />
            }
          />

          <Route
            path="/password"
            element={
              <ProtectedRoute
                component={Password}
                navItems={inboxMonitorSettingsMenu}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route
            path="/slackNotification"
            element={
              <ProtectedRoute
                component={SlackNotification}
                navItems={inboxMonitorSettingsMenu}
              />
            }
          />

          <Route
            path="/rollsList"
            element={
              <ProtectedRoute
                component={AccountManager}
                navItems={inboxMonitorSettingsMenu}
              />
            }
          />

          <Route
            path="/inbox"
            element={<ProtectedRoute component={Inbox} navItems={inboxMenu} />}
          />

          <Route
            path="/mentions"
            element={
              <ProtectedRoute component={Mentions} navItems={inboxMenu} />
            }
          />

          <Route
            path="/keywords"
            element={
              <ProtectedRoute component={Keywords} navItems={inboxMenu} />
            }
          />
          <Route
            path="/monitorSetting"
            element={
              <ProtectedRoute
                component={MonitorSetting}
                navItems={inboxMonitorSettingsMenu}
              />
            }
          />
          <Route
            path="/followers"
            element={
              <ProtectedRoute component={Followers} navItems={followersMenu} />
            }
          />
           <Route
            path="/non-followers"
            element={
              <ProtectedRoute component={NonFollowers} navItems={followersMenu} />
            }
          />
          <Route
            path="/calendar"
            element={
              <ProtectedRoute component={Calendar} navItems={tweetMenu} />
            }
          />
          <Route path="/tweets/queuelist" element={<QueueList />} />
          <Route
            path="/notification"
            element={
              <ProtectedRoute
                component={Notification}
                navItems={inboxMonitorSettingsMenu}
              />
            }
          />
          {/* </Route> */}
        </Switch>
      )}
      {/* {login && (
        <Switch>
          {privateRoute?.map(({ path, component }, index) => (
            <Route
              key={index}
              path={path}
              element={<Layout>{component}</Layout>}
            />
          ))}
          <Route path="*" element={<Navigate to={"/"} />} />
        </Switch>
      )} */}
    </>
  );
};
const SharedLayoutComponent = (Component, navItems) => {
  return (
    <DefaultLayout navItems={navItems}>
      <Component />
    </DefaultLayout>
  );
};
const ProtectedRoute = ({ component: Component, navItems }) => {
  return SharedLayoutComponent(Component, navItems);
};
export default Routes;
