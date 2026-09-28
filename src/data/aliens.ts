export type Alien = {
  slug: string;
  name: string;
  image: string;
};

export const aliens: Alien[] = [
  {
    slug: "heatblast",
    name: "HEATBLAST",
    image: "/images/aliens/heatblast.png",
  },
  {
    slug: "fourarms",
    name: "FOUR ARMS",
    image: "/images/aliens/fourarms.png",
  },
  {
    slug: "xlr8",
    name: "XLR8",
    image: "/images/aliens/xlr8.png",
  },
  {
    slug: "diamondhead",
    name: "DIAMONDHEAD",
    image: "/images/aliens/diamondhead.png",
  },
  {
    slug: "cannonbolt",
    name: "CANNONBOLT",
    image: "/images/aliens/cannonbolt.png",
  },
  {
    slug: "upgrade",
    name: "UPGRADE",
    image: "/images/aliens/upgrade.png",
  },
];

export function getAlien(slug: string) {
  return aliens.find((alien) => alien.slug === slug);
}