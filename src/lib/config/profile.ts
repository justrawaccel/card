export interface ProfileConfig {
  name: string;
  login: string;
  role: string;
  bio: string;
  avatar: string;
  email: string;
  cvUrl: string;
  social: {
    github?: string;
    x?: string;
    linkedin?: string;
  };
}

export const profileConfig: ProfileConfig = {
  name: "w. Nazar",
  login: "justrawaccel",
  role: "Software Engineer",
  bio: "I want to be a genius, but genius has overtaken me, so I do backend development, I'm an anime fan, I love humor, but it doesn't love me back. Oh, I definitely forgot to turn off the iron. BYE!",
  avatar: "https://cdn.discordapp.com/avatars/1137937979982221384/a_9772da5a3d91581cc7832a067eddf3b7.gif",
  email: "hello@justrawaccel.dev",
  cvUrl: "/hellnot.png",
  social: {
    github: "https://github.com/justrawaccel",
    x: "https://x.com/justrawaccel",
    linkedin: "https://linkedin.com/in/hatevibecoders",
  },
};
