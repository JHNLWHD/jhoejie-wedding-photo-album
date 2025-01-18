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
        alt: "JhoeJie Wedding Picture with Newspaper Invitation",
    },
    {
        asset: "1.jpg",
        width: 1080,
        height: 1620,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "2.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "3.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "4.jpg",
        width: 1080,
        height: 1620,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "5.jpg",
        width: 1080,
        height: 780,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "6.jpg",
        width: 1080,
        height: 780,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "7.jpg",
        width: 1080,
        height: 780,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "8.jpg",
        width: 1080,
        height: 780,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "9.jpg",
        width: 1080,
        height: 1549,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "10.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "11.jpg",
        width: 1080,
        height: 694,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "12.jpg",
        width: 1080,
        height: 1620,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "13.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "14.jpg",
        width: 1080,
        height: 1440,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "15.jpg",
        width: 1080,
        height: 1620,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "16.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "17.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "18.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "19.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "20.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "21.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "22.jpg",
        width: 1080,
        height: 780,
        alt: "JhoeJie Wedding Picture with Newspaper Invitation",
    },
    {
        asset: "23.jpg",
        width: 1080,
        height: 1620,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "24.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "25.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "26.jpg",
        width: 1080,
        height: 1620,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "27.jpg",
        width: 1080,
        height: 780,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "28.jpg",
        width: 1080,
        height: 780,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "29.jpg",
        width: 1080,
        height: 780,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "30.jpg",
        width: 1080,
        height: 780,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "31.jpg",
        width: 1080,
        height: 1549,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "31.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "32.jpg",
        width: 1080,
        height: 694,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "33.jpg",
        width: 1080,
        height: 1620,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "34.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "35.jpg",
        width: 1080,
        height: 1440,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "36.jpg",
        width: 1080,
        height: 1620,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "37.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "38.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "39.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "40.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "41.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "42.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "43.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "44.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "45.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "46.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "47.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "48.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "49.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "50.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
    },
    {
        asset: "51.jpg",
        width: 1080,
        height: 720,
        alt: "JhoeJie Wedding Picture",
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