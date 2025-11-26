export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  image: string;
}

export const experienceConfig: Experience[] = [
  {
    id: "1",
    company: "AnimeCorp",
    role: "Fake Frontend",
    period: "2023 - Present",
    description: "uhh... just a fake.",
    image: "https://images-ext-1.discordapp.net/external/9DK4VwqkEYcpJUTtVBVsp29RsZY6LZxFvtVqMFhod8k/%3Fsize%3D4096/https/cdn.discordapp.com/banners/1142569095561224202/2bb693cedba7ab5e7517bc855bf08111.webp?format=webp&width=600&height=400",
  },
  {
    id: "2",
    company: "ShitX",
    role: "Fake Rust Dev",
    period: "2021 - 2023",
    description: "i love ownershit but i dont want to be a fake",
    image: "https://images-ext-1.discordapp.net/external/TYbVH2ebw9VNUjyKTi4CXc5r-mY9GtaYqY-3Zw4M3ZA/%3Fsize%3D4096/https/cdn.discordapp.com/banners/1288747360356401234/8ed66d7962536fe683505d011723dbb4.webp?format=webp&width=600&height=400",
  },
  {
    id: "3",
    company: "Agency by Python",
    role: "Python Dev",
    period: "2019 - 2021",
    description: "create most powerfull (not), interesting (uhh... damn dude), but fun (kinda)",
    image: "https://images-ext-1.discordapp.net/external/h-yCfff2dnNdf4iJxAJTW-vHey423oH7zU1cLCsP-yY/%3Fsize%3D4096/https/cdn.discordapp.com/banners/766470093504380949/058d8d0dece27dbc41aa7899d443bce5.webp?format=webp&width=600&height=400",
  },
];
