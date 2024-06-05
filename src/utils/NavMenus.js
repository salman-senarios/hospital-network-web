export const defaultNavigation = [
  {
    title: "Dashboard",
    to: "/",
    active: "/",
  },
  {
    title: "Tweets",
    to: "#",
    menus: [
      {
        title: "Tweet overview",
        to: "#",
        active: "overview",
      },
      {
        title: "Tweets",
        to: "#",
        active: "/",
      },
      {
        title: "Engagements",
      },
      {
        title: "Average engagements",
      },
      {
        title: "Media",
      },
      {
        title: "Hashtags",
      },
      {
        title: "Time of day",
      },

      {
        title: "Time of week",
      },
      {
        title: "Frequently used wordsFrequently used words",
      },
      {
        title: "Tweet analytics",
      },
    ],
  },
  {
    title: "Follower acquisition",
    to: "#",
    active: "/follower",
    menus: [
      {
        title: "Tweet overview2",
        to: "/tweets",
        active: "/tweets",
      },
      {
        title: "Acquisition overview",
      },
      {
        title: "Followers",
      },
      {
        title: "Following",
      },

      {
        title: "Follower/Following ratio",
      },
      {
        title: "Acquisition analytics",
      },
      {
        title: "Follower analytics",
      },
    ],
  },
  {
    title: "Report",
    to: "#",
    active: "#",
  },
];

export const tweetMenu = [
  {
    title: "Scheduled Tweets",
    to: "/tweets",
    active: "tweets",
  },
  {
    title: "Calendar",
    to: "/calendar",
    active: "calendar",
  },
  {
    title: "Draft Tweets",
    to: "/draft",
    active: "draft",
  },
  {
    title: "Posting times",
    to: "/postingtimes",
    active: "postingtimes",
  },
  {
    title: "Tweet history",
    to: "/tweethistory",
    active: "tweethistory",
  },
  {
    title: "Quick Tweet",
    to: "#",
  },
  {
    title: "RSS Auto Tweet",
    to: "#",
  },
  {
    title: "Bulk scheduling",
    to: "#",
  },
];

export const List = [
  {
    title: "All",
    to: "/comments",
    active: "comments",
  },
  {
    title: "Mentions",
    to: "/accounts",
    active: "accounts",
  },
  {
    title: "Keyword Monitor",
    to: "/engagements",
    active: "engagements",
  },
  {
    title: "Keyword Monitor setting",
    to: "/postingtimes",
    active: "postingtimes",
  },
  {
    title: "Account Setting",
    to: "/accounts",
    active: "accounts",
  },
  {
    title: "Password",
    to: "/password",
    active: "password",
  },
  {
    title: "Notification settings",
    to: "/notification",
    active: "notification",
  },
];

export const inboxMenu = [
  {
    title: "All",
    to: "#",
    active: "inbox",
  },
  {
    title: "Mentions",
    to: "/mentions",
    active: "mentions",
  },
  {
    title: "Keyword Monitor",
    to: "/keywords",
    active: "keywords",
  },
  {
    title: "Keyword Monitor setting",
    to: "/monitorSetting",
    active: "monitorSetting",
  },
];

export const followersMenu = [
  {
    title: "Not following",
    to: "#",
    active: "#",
  },
  {
    title: "Non-followers",
    to: "/non-followers",
    active: "non-followers",
  },
  {
    title: "Inactive",
    to: "#",
    active: "#",
  },
  {
    title: "Mutual followers",
    to: "#",
    active: "#",
  },
  {
    title: "Following",
    to: "#",
    active: "#",
  },
  {
    title: "Followers",
    to: "#",
    active: "#",
  },
  {
    title: "Keep list",
    to: "#",
    active: "#",
  },
  {
    title: "Hidden list",
    to: "#",
    active: "#",
  },
  {
    title: "New followers",
    to: "#",
    active: "#",
  },
  {
    title: "New unfollowed",
    to: "#",
    active: "#",
  },
  {
    title: "Tweet engagement",
    to: "#",
    active: "#",
  },
];

export const inboxMonitorSettingsMenu = [
  {
    title: "@captainhaider48",
    // to: "#",
    menus: [
      {
        title: "Keyword Monitor settings",
        to: "/monitorSetting",
        active: "monitorSetting",
      },
      {
        title: "Slack notifications",
        to: "/slackNotification",
        active: "slackNotification",
      },
      {
        title: "Account managers",
        to: "/rollsList",
        active: "rollsList",
      },
    ],
  },
  {
    title: "SocialDog account",
    to: "#",
    active: "#",
    menus: [
      {
        title: "Account Setting",
        to: "/accounts",
        active: "accounts",
      },
      {
        title: "Password",
        to: "/password",
        active: "password",
      },
      {
        title: "Notification settings",
        to: "/notification",
        active: "notification",
      },
    ],
  },
];
