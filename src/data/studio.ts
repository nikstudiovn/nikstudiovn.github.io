const RAW_BASE = "https://raw.githubusercontent." + "com/nikstudiovn/XSign";

export const STUDIO_CONFIG = {
  brand: "NiK Studio",
  domain: "nikstudiovn.github.io",
  assets: {
    hero: "/assets/hero.jpg",
    vix: "/assets/vix.jpg",
    xsign: `${RAW_BASE}/main/docs/images/xsign_readme_4screens_4k.png`,
    music: "/assets/music.jpg"
  },
  xsign: {
    version: "v1.0.0",
    bundleId: "com.nikstudiovn.xsign",
    urlScheme: "xsign://",
    repoUrl: "https://github.com/nikstudiovn/XSign",
    releaseUrl: "https://github.com/nikstudiovn/XSign/releases/latest",
    altSourceUrl: `${RAW_BASE}/refs/heads/main/app-repo.json`
  },
  audio: {
    vixDry: "",
    vixWet: "",
    musicTrack: ""
  },
  socials: {
    tiktok: "https://www.tiktok.com/@iamnik.21",
    facebook: "https://www.facebook.com/share/17pAm6m1Kh/?mibextid=wwXIfr",
    telegram: "https://t.me/nikvn21",
    github: "https://github.com/nikstudiovn"
  }
};
