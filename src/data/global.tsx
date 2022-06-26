import { OverviewIcon, PackagesIcon, ProjectsIcon, RepositoriesIcon, StarsIcon } from "../components";

export const topBannerLinks = [
  {
    name: "Pull requests",
    link: "https://github.com/pulls"
  },
  {
    name: "Issues",
    link: "https://github.com/issues"
  },
  {
    name: "Marketplace",
    link: "https://github.com/marketplace"
  },
  {
    name: "Explore",
    link: "https://github.com/explore"
  }
];

export const panelContents = [
  {
    name: "Overview",
    icon: <OverviewIcon />,
    link: "https://github.com/Nikaidou-Shinku",
    count: 0
  },
  {
    name: "Repositories",
    icon: <RepositoriesIcon />,
    link: "https://github.com/Nikaidou-Shinku?tab=repositories",
    count: 17
  },
  {
    name: "Projects",
    icon: <ProjectsIcon />,
    link: "https://github.com/Nikaidou-Shinku?tab=projects&type=beta",
    count: 0
  },
  {
    name: "Packages",
    icon: <PackagesIcon />,
    link: "https://github.com/Nikaidou-Shinku?tab=packages",
    count: 0
  },
  {
    name: "Stars",
    icon: <StarsIcon />,
    link: "https://github.com/Nikaidou-Shinku?tab=stars",
    count: 110
  }
];

export const headerMoreList = [
  {
    name: "New repository",
    link: "https://github.com/new"
  },
  {
    name: "Import repository",
    link: "https://github.com/new/import"
  },
  {
    name: "New gist",
    link: "https://gist.github.com/"
  },
  {
    name: "New organization",
    link: "https://github.com/organizations/new"
  },
  {
    name: "New project",
    link: "https://github.com/users/Nikaidou-Shinku/projects/new?type=beta"
  }
];

export const headerSelfList = [
  [
    {
      name: "Your profile",
      link: "https://github.com/Nikaidou-Shinku"
    },
    {
      name: "Your repositories",
      link: "https://github.com/Nikaidou-Shinku?tab=repositories"
    },
    {
      name: "Your codespaces",
      link: "https://github.com/codespaces"
    },
    {
      name: "Your organizations",
      link: "https://github.com/settings/organizations"
    },
    {
      name: "Your projects",
      link: "https://github.com/Nikaidou-Shinku?tab=projects&type=beta"
    },
    {
      name: "Your stars",
      link: "https://github.com/Nikaidou-Shinku?tab=stars"
    },
    {
      name: "Your gists",
      link: "https://gist.github.com/mine"
    }
  ],
  [
    {
      name: "Upgrade",
      link: "https://github.com/account/choose?action=upgrade"
    },
    {
      name: "Feature preview",
      link: "#"
    },
    {
      name: "Help",
      link: "https://docs.github.com/"
    },
    {
      name: "Settings",
      link: "https://github.com/settings/profile"
    }
  ],
  [
    {
      name: "Sign out",
      link: "#"
    }
  ]
];

export const footerList = [
  {
    name: "Terms",
    link: "https://docs.github.com/en/github/site-policy/github-terms-of-service"
  },
  {
    name: "Privacy",
    link: "https://docs.github.com/en/github/site-policy/github-privacy-statement"
  },
  {
    name: "Security",
    link: "https://github.com/security"
  },
  {
    name: "Status",
    link: "https://www.githubstatus.com/"
  },
  {
    name: "Docs",
    link: "https://docs.github.com/"
  },
  {
    name: "Contact GitHub",
    link: "https://support.github.com/?tags=dotcom-footer"
  },
  {
    name: "Pricing",
    link: "https://github.com/pricing"
  },
  {
    name: "API",
    link: "https://docs.github.com/"
  },
  {
    name: "Training",
    link: "https://services.github.com/"
  },
  {
    name: "Blog",
    link: "https://github.blog/"
  },
  {
    name: "About",
    link: "https://github.com/about"
  }
];

export const SelfInfos = {
  name: "yurzhang",
  id: "Nikaidou-Shinku",
  followers: 34,
  following: 43,
  position: "China",
  link: "https://yurzhang.com",
  twitter: "yurzhang"
};

export const LanguageColor = {
  TypeScript: "#3178c6",
  Rust: "#dea584",
  Python: "#3572a5"
};

export interface IPinnedRepo {
  name: string;
  description: string;
  language: keyof typeof LanguageColor;
  stars: number;
  forks: number;
}

export const PinnedRepos: IPinnedRepo[] = [
  {
    name: "PastePlz",
    description: "A simple online pastebin.",
    language: "TypeScript",
    stars: 6,
    forks: 0
  },
  {
    name: "PastePlz-backend",
    description: "The backend of PastePlz.",
    language: "Rust",
    stars: 1,
    forks: 0
  },
  {
    name: "Luogu-usercard",
    description: "A plugin to decorate Luogu with exquisite user card.",
    language: "TypeScript",
    stars: 36,
    forks: 4
  },
  {
    name: "free-paint",
    description: "自用洛谷冬日绘板作画脚本",
    language: "Python",
    stars: 2,
    forks: 0
  }
];
