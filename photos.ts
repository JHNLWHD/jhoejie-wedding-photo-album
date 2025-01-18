import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string, width: number) {
    return `https://jhoejie-wedding-photo-album.vercel.app/_next/image?url=${encodeURIComponent(`/images/${asset}`)}&w=${width}&q=75`;
}

const photos = [
    {
        asset: "intro.jpg",
        width: 1080,
        height: 780,
        alt: "JhoeJie Picture with Newspaper Invitation",
    },
    {
        asset: "1.jpg",
        width: 1080,
        height: 1620,
        alt: "JhoeJie Picture",
    },
    {
        asset: "2.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Picture",
    },
    {
        asset: "3.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Picture",
    },
    {
        asset: "4.jpg",
        width: 1080,
        height: 1620,
        alt: "JhoeJie Picture",
    },
    {
        asset: "5.jpg",
        width: 1080,
        height: 780,
        alt: "JhoeJie Picture",
    },
    {
        asset: "6.jpg",
        width: 1080,
        height: 780,
        alt: "JhoeJie Picture",
    },
    {
        asset: "7.jpg",
        width: 1080,
        height: 780,
        alt: "JhoeJie Picture",
    },
    {
        asset: "8.jpg",
        width: 1080,
        height: 780,
        alt: "JhoeJie Picture",
    },
    {
        asset: "9.jpg",
        width: 1080,
        height: 1549,
        alt: "JhoeJie Picture",
    },
    {
        asset: "10.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Picture",
    },
    {
        asset: "11.jpg",
        width: 1080,
        height: 694,
        alt: "JhoeJie Picture",
    },
    {
        asset: "12.jpg",
        width: 1080,
        height: 1620,
        alt: "JhoeJie Picture",
    },
    {
        asset: "13.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Picture",
    },
    {
        asset: "14.jpg",
        width: 1080,
        height: 1440,
        alt: "JhoeJie Picture",
    },
    {
        asset: "15.jpg",
        width: 1080,
        height: 1620,
        alt: "JhoeJie Picture",
    },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: assetLink(asset, width),
      alt,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: assetLink(asset, breakpoint),
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    }) as Photo,
);

export default photos;