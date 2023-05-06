export const settings = [
  {
    name: "Security",
    icon: "/settings/key.svg",
    subItem: [
      {
        name: "Password",
        href: "/password",
      },
      {
        name: "Two Factor Auth",
        href: "/password",
      },
      {
        name: "Impersonation",
        href: "/password",
      },
    ],
  },
  {
    name: "Billing",
    icon: "/settings/billing.svg",
    subItem: [
      {
        name: "Manage Billing",
        href: "/ManageBilling",
      },
    ],
  },
  {
    name: "Developer",
    icon: "/settings/developer.svg",
    subItem: [
      {
        name: "Web Hooks",
        href: "/ManageBilling",
      },
      {
        name: "API Keys",
        href: "/ManageBilling",
      },
    ],
  },
];

export const home = [
  {
    name: "Event Types",
    href: "/event-types",
    icon: "/event-type.svg",
  },
  {
    name: "Companies",
    href: "/companies",
    icon: "/event-type.svg",
  },
 
  {
    name: "Bookings",
    href: "/bookings",
    icon: "/bookings.svg",
  },
  {
    name: "Teams",
    href: "/Teams",
    icon: "/teams.svg",
  },
  {
    name: "Apps",
    href: "/apps",
    icon: "/apps.svg",
  },
  {
    name: "Workflows",
    href: "/workflows",
    icon: "/workflows.svg",
  },
  {
    name: "Insights",
    href: "/insights",
    icon: "/insights.svg",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: "/settings.svg",
  },
];
