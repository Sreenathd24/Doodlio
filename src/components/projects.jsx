import React from "react";
import "../styles/project/project.css";
import { motion } from "motion/react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const DoodleBuilder = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: "var(--ink-black)" }}
  >
    {/* Head */}
    <circle cx="80" cy="30" r="10" stroke="currentColor" strokeWidth="3" />

    {/* Body */}
    <path
      d="M80 40 Q78 65 80 85"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Left arm (placing block) */}
    <path
      d="M80 55 Q60 65 54 80"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Right arm (tool) */}
    <path
      d="M80 55 Q100 60 110 50"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Tool handle */}
    <path
      d="M110 50 L120 40"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Tool head */}
    <rect
      x="118"
      y="34"
      width="18"
      height="8"
      rx="2"
      stroke="currentColor"
      strokeWidth="3"
    />

    {/* Legs (kneeling) */}
    <path
      d="M80 85 Q65 95 60 115"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M80 85 Q90 100 88 118"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Construction blocks */}
    <rect
      x="40"
      y="92"
      width="28"
      height="16"
      rx="3"
      stroke="currentColor"
      strokeWidth="3"
    />
    <rect
      x="42"
      y="76"
      width="28"
      height="16"
      rx="3"
      stroke="currentColor"
      strokeWidth="3"
    />
    <rect
      x="44"
      y="60"
      width="28"
      height="16"
      rx="3"
      stroke="currentColor"
      strokeWidth="3"
    />

    {/* Ground */}
    <path
      d="M20 130 Q80 134 140 130"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.6"
    />

    {/* Motion / effort lines */}
    <path
      d="M56 52 Q50 46 44 50"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
    <path
      d="M112 28 Q118 24 124 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.4"
    />
  </svg>
);

const projects = [
  {
    title: "NodeVizor",
    description:
      "Track your caffeine intake and productivity correlation. Spoiler: more coffee = more features.",
    emoji: "☕",
    tags: ["TypeScript", "React"],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    rotate: 3,
    github: "https://github.com/Sreenathd24/nodevizor",
    demo: "https://nodevizor.vercel.app",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxPj8bF_mTqJM7sXjjSx_C_XSOuMSp0hr4A&s",
  },
  {
    title: "Namma Ooru Deals",
    description:
      "Because the world needs more memes. AI-powered caption suggestions included.",
    emoji: "😂",
    tags: ["React", "Express.js", "Node.js", "MonogDB"],
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    rotate: -3,
    github: "https://github.com/Sreenathd24/namma-ooru-deals",
    demo: "https://nammaoorudeals.vercel.app",
    thumbnail:
      "https://png.pngtree.com/png-vector/20190724/ourmid/pngtree-nodes-icon-for-your-project-png-image_1572766.jpg",
  },
  {
    title: "Detection of Malcious Url",
    description:
      "A todo app that actually makes you want to do things. Features: reminders, procrastination mode, and guilt-tripping notifications.",
    emoji: "📝",
    tags: ["Python", "Numpy", "pandas"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    rotate: -2,
    github: "https://github.com/Sreenathd24/Detection-of-malcious-url",
    demo: null,
    thumbnail:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSERQVFhUVFRcZGBgWFRUYHhgbFxcWGhgYFxcYICggGBonGxkWITEhJSorLi4uFx8/ODMsNygtLisBCgoKDg0OGhAQGy0mICYvLi0uLS8vKzI1Ny01LS0vNy8tKy0tLS0tLSstLS0tLy0rLS0tLS0tLS0tLS0tLSstLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EAE4QAAIBAwIDBAMIDAwGAwAAAAECAwAEERIhBTFBBhMiURRhcSMyM0KBkZLRBxVSVGJyc5OhstLTFiQ0NVNVZIKUscHwF0NjdLPhxNTx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EACsRAQACAgEDAQcEAwAAAAAAAAABAgMREgQhMRMFIjIzQWFxFFGBwULR8P/aAAwDAQACEQMRAD8A+40pSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUrFmxvQ7jagypWOcDevVOaD2lKUClKUClKUClKUClKUClKUClKUClKUClK8blQaySScHGPV+msVT7kj19f9mvAPCQBv1//AGvdiRgYx6sfJXRnEx69DitlaUGWyB5g+s1urgUpSgUpSgx1jOOtaxg7nl0FbWOOdaVHQ8juPqoGw3HLOCK2hxnHWtTc8Y2GCf8AStwNB7SlKBSlKBSlKBWppfLl5mtta5F6/poMBKfMH5xW1GzWpd9sn2ED9GK3AUHtKUoFKUoFKUoFKUoNZjOdjjNYjUfVj2c63Vgg5+36qD2NcVlSlApSlApSvM0AisHQ5BBxjP6a4+IcbtoMCeeKMnkHdVJ9ik5PyVwv2utviid/XHa3Lj51jIoJpExkk86zAqDTtda/GMsY85be4jHzugFSPD+KwTjVBNFKPON1f59J2oOyleZr2gUpSgUpSgV4RXtKDXEnrz0/9VsrCMc8eZrOgUpSgUpSgUpSgUpSgVgg5+3/AEFZ1gnX2/VQZ0pSgUpUPx/i5i0xRAPcS57tDyAGNUkmNxGuRnzJAG5oNnGeNx2+FIZ5Xz3cMYBd8c8AkBVHVmIUdTUTJb3NxvcymJDyht2ZdvKScYdv7mge3nW7hnDRFqdmMk0mO8lb3zkcgByRB0QbDPnvXVcToil5GVVUZLMQAB5knapxXTktFjwyCH4KJEJ5kKNR9bN75j6ya66q3Fu18YAWAkFjgzSwzLFGMHxlioD+QGQPM4FeCC4wGW8mLcwSkBQ/3AgGn2EH11ny9ZixTq0raYL3jstWa4L3g8Ep1PGuvo65Rx7JUw4+Q1q4HxJpQ6SqFliIDhc6SCMrImd9DDPPkVYdK38W4pFbp3kpOM4CqrOznyRF3Y4yduQBPIVoraLRuPCqYmJ1LQr3dvvGxuoh/wAuQqJR+Tl2V/xXwfwqnOFcViuFLRNnB0srAqyMOaup3VvUar8HaFHUOkN0ysAVYQEgg7gg55VwcQuiXFxbwXSXCgDUbdtMij/lTAHxLzweak5HUHkwbX2lVnh3a9JVJ9Gug6nTInckmN8AlTj2jfqDUBx7tpcidkt1WJY0UsLiJtTFsnlqGhMDGrfJz5bxW48VsluNfL6LSuDgd/38EU2kr3savpPMagDiu+ispSlBhHjfHmazrCPG+PM1nQKUpQKUpQKUpQK1zzKilnIVQMkkgADzJPKtlUb7Il0BHNGbkrmNfcO5DBst1k05Gfb0pDk+HZJ20iAciSDw3aQj3Rd42MeZOfTU2/LasJe2kS97iSDw3kMI91XxJJ6Pqk59O8f1eD21C3RVXREgMjvrwqLHyQAsSWIHUVruWaNGkexlCopZji32CgknZ/IGtU9PWO02Yq9Xe0brSdfmFy4N2jinlmiEkRKS6ECupLjukctjO+7MNvKpyvll/oWW0cMIfdie8EasVBt5/i4Oc5x8vqr6FwVg8KnvO9Bz4ygTVgke9AAGOXyVTlx8LaaMGX1a8tadN/eJDG8sjBUjUuzHoqgkn5hVd4JA51XM4ImnwSpx7kg+DhH4oOTjmzMfKt3akB3t7UDwyOZZB/04MNj5ZTCMdRmu6o1hbJVa4ywlu0hYgrDGJSmxBd2KozD8EKSM9XB6CpPtHdvFayyRkBwoCsRkKWYKGI6hc6vkqNsbCOFdMa433J3Zj1Z2O7MeZJ86w+0eo9PHwjzLT0uLlbl+x6UvemEg57sPvjDKWZSB54wM/jLUD2fsjbSCOSSNdSEKgmJ70hie8WNsCMBdtK+eOSipy+sI5cawcqcqysyMvnpZSCM9RyNR/EOz6yyFjIQrCLWuN27kkoVlzqQ5O5HyYyTXj4slIia2nUTHftvx/ttyVtuLRG5j76dCcQSC7lZgSWt4VRF3aR+9uNKIOpxnc7AZJIAqZ4Zw59fpFxhpyCFAyVhU/Ejz1O2p+bEdAABDdnuGRR30hUMSLWPBd3kK6pZQwVpGYgHSuw8qt1e/0WvQq87qPmSgR/E5P7LK23/QkY8h5Qu30WPk20/pPlWueJXVkcBlYFWUjIIIwQQeYxUV/BWx+9YfoCtSllxMm2kW9UHSMJcAfGiJwJT+FGTnP3Jcb7VMcS4Ba3JV54I5WAwC6g7c9Oeq9cHaoQ9lLH71h+gK5+yfZqyaJo5LaFpLeV4WYoCWC4MbsTzLRNGSfMmoWhKJWDjXHYbQIJNRL5CIi5YhcZIGwCjI3OBuK6eEcUjuYxLESVJIOQVKkHDKyncEGq1xzsZbeB7YxWsi5XOgaXDYyrKGXJyoIIO2/nU12b4EtrFo1d4zOzu5GNTNjJC76QAAAMnYcyd6q97l9ke+/smaVj3YznG9ed2M5xvU0iPG+PM1nXgFe0ClKUClKUClKUCqR9kO9xHLH6SFzGvuPdAlst930z/pV3qr9t7G5kgm7qQFDGPcRDqZsHJAfVkZHqPKux5cnwhbc/x23z9xcfqx1L9pZF9Dudx/J5uo/omqrXl3BJ8LbyuFk0eO1kbS7YAXddmOV+euVkshnNo3hkWNv4m2zvp0ofDzOtfpCtuStb25coebhyXx4+M0n6uy7m0SWTd4IsS/CFdWn+LTj3vXOcf3hX0Lgs+uJW70TZz4wmjVufi9McvkqgwNJPc2626yxtDO2t3t30xfxaX3wbAOQ6jGfjDyr6LZRuqASuHcZywTQDvt4cnG3rqjqJib9paOjrauPUxrvKCcluITHpHbwoPUXeV3/QIvmqQqL4PL3slxcL8HLIojP3SxLo1j8EsGx5gZ61KVCPDTKvdppTKRZKcCSMtM2ASIiSoVc7BnbIzjYI3XFczcThSQQFjq8K8mIBb3qs+MBiOQJ328628VHd3qu3vbiFYlP/UiaV9PtZJGI/Jmo3jHDwJFuVV2AdWljUk69C4SQIPfOmFOBzA6kCvD62YvnmmTxrt+XoYImMfKnnfd28T4j3WgBGkZyQqgqPeqWJJYgAYH6R68cXE7nVbC8ikdCIw6DJ0vnBCPHuGLHC7b77Gts99ZTJiSSB1znS7JsRn4rbqd/LPOvZLiyZkcyW5aMYQl08P4ozgVirEViPdncefu0zymZ7xp3cI/lsn/AGsX/lmqx1UOF8VtxeSMZ4QPRohkypjIlmJGc8+Xzip/7eWv3xB+ej+uvf6Ltgq8zqPmSkKiuJcQfX6PbYMxALMRlYUPx5BncnfSnMnyAJri4r2miyIbeeDvHGTI0iFIl5F23w7eSdTzwMmujhl5ZQpoS5hOSWZmnjLO55u5zuT+jkMAYrUpbTY3X32P8PH9dcXC7S6F5PGLoDXDDKT3CeI5ljIxnbARPbmpL7d2v3xB+ej+uuOz41a+nFvSIdPooGe9TGTMxxnOM4HL11y3h2HD2j4JcGZXnjN8ndlVCxRDu2yS3ubsAQwIGrpp3wDVq7LWckNrFHL79VO2dWkFiVTV10rhc+qsbrtPZojObiEhVJIWVGJwM4VQck+oVzcI7SmWVYpYHhaRS0ep0fUFwSraT4XAOcbjY4JxULZI7VlyuPvNoWGlKUSKUpQKUpQKUpQKUrygGua/vo4UaSZ1RF5sxwB0H6arHbjtFNC8dvb4R3Uu0hAOFB04RW2LE8ydgPaKqfFONXVyiRztHoRgx0IVMjLnSWySFxnOANyBy5Vzbb0/QZs0Rasdt+V24ZJY3RdIJtZ79LhgDghlK6TgjOjKD66kZOBxHX773S4juDv/AMyLutOPwfckyPbXzC1upYZVmgKh1DL4wWVlbTqUgEHmqkHpipOy7W3iTJJLIJEd0RogiqBrYKO6O7agTyYnPq2w2v6j2XmxTM171j6vpFnYJG0rLnMr62z5hFTbyGFFQ/am4Z9NnESHnB7xhnMcAIEjAjkzZ0KfNifimrCDVLHEI4Lm5N0TG7yDS7q2hogoEYSQDSACXypOQxY8iCZRDy05DEqqEUAKoCgDYAAYAHqxWdc9lexTLrhdJFzjUjBhnyyOtdFWIqzxLxX+H5JbK0WfN5JFlYesBYh6g3rrZeXSRrrkYKMgddyeSgDcknoN697XoD6MBlZGuAqSA4KAI8kntDLGVwcjLA42rCe0VpI5Dn3PVpHTLDTn2gZx+Ma+e9pViM+7T5h6fSzvHqIQcXaGN5MNASGL6SqmST3Ngrd5Cq6oxkjHP14Ndf2zg/oJv8HN+xW+6u1SQpFEJJ2UMwXSuF3AaWTHhGQQOZODgHBrwSXn9Hb/AJ2T/Pu6otxnU1jUflZWLR2tO/4b+DwIbyTwLj0WI4KAc5ZuhGxqxeiR/cJ9Ffqqo8Mku/TJMR25b0eLIMsmMd7Ngg93zznp5VOS3l6g1tBE6j3yxSuXx1KK6AMRzxkZxtvive6P5NXnZ/mS84twQMRPbrGs6DA1KAkq8zFLge9J3DDdTuMjKndwqeGdSRGFdDpkjZFDRsOasP0gjYjBGQa7LK7SVFkiYMjDII/98jz2O4xXFxThrMwngISdRjJzplTPwUuOnPS3NTy2JB1KXvGLm3tojLKi4BAAVFLMze9VR1J+vyqp2faeNbiWY2RIeOJFXVD4RGZWORyyTIeWeQ8q2dtprllgE0USL3+xSZpDnupdiDGvz5rHs1wKyltmuLyR093kTUbh4lwGwoADAU7a3J3dV32wgkRo34eSrqVPjhGxGDuNxUfwnj6wyiVorqZlUqneTW+EDYyQEVdTEADU2dh0ycy32k4H99D/ABz/ALdbrTszwiVtEU5diM6UvZGO3PYPVcxjmd6d3aIe/wDEb+ySfnY/rp/xG/skn52P665O0/Z7h9miEpcSPIxVEW5lGSASxLFsKoA5/wCdaeGcK4XLbyXDieIQsVkV7qXKsFDAAhsNkMuMc8455FS3RLhfjy12SP8AxG/skn52P669X7JCA+6W0yp8ZlaN9I6tpByQOZxv6jUZ2T4JY3uv3OZCgjba8lkGJQxUFgQA407rvjI33rh7V8FitLlI4del4SxDyO+4cDI1E42zSvC3hCdw+sW8ququpDKwBUjcEEZBHqxWyoLsJ/N1p+Qj/VFTtQSKUpQKxdgASeQGTWVYSLkEHkQR89B8o7QcfF88MiRlIow5VnxrfWFAOB71NIJwTknTkDFauEcNkuphBGwTC65HxnSpOAFHVmOcZ28J9lZcZ7PyWJiQuskT6kRtJVlKLqVXGSGyobxDHveW9OB8Wa0uO+CF0dBHIq41YDFkdckA4JfK9Q3qrj6XHOuin9Nvf/bSHaPsk9pEZ45nlRN5FkEeoLtlkMaqNuZBB2zvUGHdXjlj0l4pFkUMTgkZBUkA4BVmGcHBwelWPtR2uS5ga3t0kAlGmSSRCgVCRqChvEzEZA2wM5z0NbYMzRxpgNLIkaltwC5xk7jIAztkZ2HWn4OhnJbp7/qd8fu+ndlOPi7jdtBjeN9Drq1DJVWBVtsjDDoKmzUL2V4ALRHXWZGkfW7EBQTpCgKo5ABR1NTddfO5OPKeHj6KpwuRRNegkD+NE4yBzgg3rptOKQyuyROHKe+KeJQc+9Ljw6vwc5FcPa7hsAuIbqeGOSLS0UrPGjd2WZTFI+oe9BBXPTWOmSJiOMKAqgKByAAAHsA2FTrPZXKP47w5pox3ZAljcSRluWoAjDY30srMpxyDVDx3LyCWPQ0UyLgh9JCl1Ohgykhl2z57birVUBxq0kSX0mJDICipMi41EKWKSICQCV1MCvMgjG4wcXXdN6teVY96Gjp8vCdTPZCcD4bKizd4WTvQvOTvW1hCryB/I+HC9NPIZxWHZexMMk8ZCLpEG0YIU5VyZMNvrY5z+KNzXXL2hhGFAlLscLH3MqszYJ0jvFUA4B5kcq38KtnXXJLjvJWDMAchQAFRAeuFA36knzryMmTJq3ONctdtfs20x03Xj3193Twr+XS/9rF/5pqsVVzs/wCO5nlXdFSOHPm6NI74PXGtRt1z5GrHXudFExgrEvPzzvJKGvrKSJ2uLUZLHM0GQBNyy6E+9nAGx2Dcm6MJDh1/HOgkiOVORgghlI2ZHU7q4OxU7g10Gq01j6ZOWtHlhjyBNcRNpEunI0RrjDuORl5AbAsR4dMzpTCG7c37StEIwDDFcFGf7qXupMqh5EIMhj90cc1NTfYQS+gv3Kxs3pM20pYLjVvuqsc/JUZ234ClrDarHJMUWbSqO4KqO5l5AAb+v1muzsjEG4c4a3a5HpUvuamMH3/PMjKu3trkz7p9U/ov/wChsfzk37qunh63ev3aO1VMHJieQt6sBkAx8tQHoEf9TTfnLL/7Fb7O20F2h4ZJBIIpNEjvbMNWk4XEczNufVUEnz7jV7LPIWmkk77vJVRAWxEVJGnu+QUKBkkbg56ipTs5OqIHl2C8UhLYBbB9B6AAk7+qoGKWNtJCmaRyJGbYtq5M8jMdiDkY57EAbVYez1usg0NnS3FYgcMyn+RZ2ZSCPkNQr5e11eOKdLGtfTx+E/xS64kyq9pAYY3LlVQRd6Tgd206SgLGjHUSFJceHODnEd9kLPpUGrGr0Y5xyz3gzj1ZqU41acViVI7aRpUXWFZe6EvId0J2mOlkByGZfEduvOL+yFn0qDVjV6Mc45Z7wZx6s1Zi+N4tvC4dhP5utPyEf6oqdqC7CfzdafkI/wBUVO1wKUpQKUpQUvt9wOeVobiEd53SupiBAJDlDrTJALDSMg8xyO2DUr3hd3DGJp4dETMq/CAuuo4BkQbKCSBsWxnfFfYCK0XtlHLG0UqhkcYZT1H++tG3p+vzYIitfG9vkEUUkkiQwrqkkLaQW0gaV1FmO+FA9XUedd38F7oyLFOqRJqXVN3ilcAhsRA4YyEgYyBjnvgA/QeE9mLW2cyQx4fGnUzu5AOCQC5OAcDOOeB5VXe21oDdQtMqyQujRRqwDBJfFI5ZW2OpEwG6aSPjVKlOUxCzrfbGWYtNfh14ar/jV1LLN6NOqJDIUQBEdZCqqW7x2ydOolTp04xzrfP2jvXIMccUKqASsh7wyHqAyEaFx1wTk8tt+K2gdpFtrVY10pqZmHgiTJVcIuNRJDYUEDwnfz2XEM0EixXGhu8VikkasqsVxqRkYtpbByPEQQDyxitvpYYtFJ8vmfX6iazkiPd/pJ8ev/SOFCYrpSdIDIDvpilkjEuT9z3bNv5b1MGqXZAxTQW6O7xyuVa2Yh07lgwfShHgRSQeeANuoFWePs/PGNEF0Qg96s0YmKjook1KzAfhZPrrLavpzqXoYskZaxaHbSuT7U3v31D/AIU/va0cHnlJnSZlZopigZU0ZHdxOMrk7+Mj5K5Ep6dV/ZRzIY5VDocbHPMbggjdWB3BG4qLPZlDs09yyfcGXG3kXAEmP71TlKjalbfFG3YtMeJarW2SNFjjUKigBVUYAA6ACttKVNxovvgpPxH/AFTVW4J2+SO2gVrachIIwSphOyoNwuvJ5Zxzq033wUn4j/qmqBwuwsPR4mltr8juYy5EshQ+AajoWXJXmdIHLpVWS8V1uV+CMc75xM/j+0p9kDjtrcR2wt54pD32rCOpIHcy7lRuOY+evOx3FLRbR4ZrtYH9IlO0yRvjVtz3wa9+yNdQvBai1eEnvhp0lSAvcy42U5Axj9FUzRN5xfQf66trXlVRM6l9H9O4f/Wrf42Ot1nxfh8b6/tmH2I0yXcbLv5ivmWibzi+g/7VNE3nF9B/2q76TnNbe1EVjLL6Ra3lisjDEqvMiiTByr6lyQwy3MHORyxXRwmPhyWzxS39sZXl77vI51Xu5AiojRnVnwqoG/PfIwcVRkeQkqGhJHTS/Tn8bfmK2aJvOL6D/XXPRhbPUX4Rjmey99juKQW4k9I4hatq0AKLvvd1Da5NUhypfI8A2GnrmortvxOCe7jaCWOULAQTG6sAe8GxKnY1WdE3nF9B/wBqgSbzi+i/7Vdrj4qpvt9e7CfzdafkI/1RU7UD2E/m60/IR/qip6qUylKUClKUClKUCqB2rDR3jTTJM8YjUxMkcsix++EoIjBCtsG1EZwcZ2xV/rXKmQRyyCM+VSpfjbavLji9ZrKgW1xJFKLm3CSB4wjoW0h0BLIyOAQCupuYwQ3MVneXU1zKkkqCNIgwjjDByWbAZ3YAAHGQFGeZJPLHlh2cvkCW4ESLGMGfJcMANsReFg5PPJwN8E7Vpn4TeSH0Z4D8IgeZSqxNGHUsV8RfxR5GjB3yM43rbzwzbn9Xnen1EU9P/Hx/DfwS5K38ZiKuLiMpIAQdCQiR1kUjprcIR11r5b/QK4bDhNvCS0MMUbMACUjVSQOQJUbgV3VjyX52m2noYcfp0iuyqtwr4a9/7r/49vVpqnBriGe5xZ3EqyT61eNrbBBhhXlJKrA5U9KjXytTdKivtlcf1fd/Ss/39Ptlcf1fd/Ss/wB/U9wilaVFfbK4/q+7+lZ/v6fbK4/q+7+lZ/v6bgd198FJ+I/6pqH4H2TSS0gLz3OHt4sqJFUYaNcgFVDAY22OfXW65v7lkZRw+73Vh76z6gj+nqwcCt2jtoI3GGSGNWHPBVFBGR6waryVrbz3SrMx4QfarsmksCrapFHLEytH4QobClSjMBkAqTvvg451Sz2b4h96P8ksH7dfX68qVbzXw5MRL5D/AAcv/vR/zkH7dcHFLW5tygmt3XWTp8cJzpAJ5P5EV9tNfMe09nxG5umk9Dl7uMGOIB7fdc5aQ5kGGYgbdAB1JqdckzPdyawp6yONPuUpCa9Cl48J3rBpNI1fGYAnPl0qX4dwq8mjWWK2dkbOD3kA5Eg7F88wa3faC/8AvKb6dt+9q0/Y+ivYGeCe2kSBi0iOzQnQxxqTCOTpJywPmW9VStfUe7KMRvyrP8HL/wC9H/OQft1lH2X4gx0i30Z+NJJFpX1kIxY48gN6+uUxUPVslxhx8F4eLeCKBTkRRqmT10qBn5eddtKVWkUpSgUpSgUpSgUpSgUpXhoPaVDydordVuWLnFqcS+FsjwhhpHx8g4GM5O3Ou+2vEcKVYeJQwGd8EAg49lB00qPvOLxRvGjNvLIYxgjCssckp1nPhGmN/lxW9bxdRXfZQ2og6cMSAA3InY7ezzoOmlajcJgHUuDyORg55YPWtM1+izRwE+ORJHUYO6xGMOc9N5E+f1UHXStffLuNQyBk7jYeZ8q8FwmAdS4PI5GDvjY9d9qDbSuae9RVLZ1YKghPEfEQBsN8b59lbUmUnAYZHTIyP9mg2UrCOZW96wPsIP8AlWdApSlApSlApSlApSlApSlApSlApSlApSlArw17Sgpx7MStNrYoEklladeZdVlaS1+UE5IPma47fs1ea7cyGNe5WIa0ZQQq2xjcHwapG7xmIJYLpxtkb32lBS7Xsy5WzSSCBRbyhpcEOJgLa4i1kFcltcit4iTu25I30fwRmKLGwjKr6MNJO2iG+eYrjHLuiqgcunKr3Sgod72RlLHSFMWq6AiVkUBZ2jYMuuN1BGlxgAEa9j0MzxKwnFxazwosghguImDy6DmU2xU6tJ1fBNnlzqx0oKMOzVyGmcBTI3pBR2eMq3fnOh1MWo4Hh8TMvuanBHhG3g3ZaRZo3mVCkctxIqlg5UyLAEIARVzqSQ7AYLDnzq6UoKFZdjpY4LeNRErLawxzFTjXJHNA+onHiwFlwTv4vXS57ISCKTSyRSO3ES0yZ1BLp5miOVAZiNSEjpp25Cr7SgqHYkBp7mVIooo2S3QdycoWTvS2ltChsBkGQPIZyCBb6UoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoP/9k=",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <section id="projects" ref={ref} className="doodle-projects">
        <div className="projects-doodles">
          <div className="doodle lightbulb">💡</div>
          <div className="doodle star">⭐</div>
        </div>

        <div className="projects-container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="projects-title">
              Stuff I Built
              <span className="emoji">
                <DoodleBuilder />
              </span>
            </h2>
            <p className="projects-subtitle">
              (and some stuff I'm still building... and some I gave up on)
            </p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0, rotate: project.rotate }}
                animate={
                  isVisible ? { y: 0, opacity: 1, rotate: project.rotate } : {}
                }
                transition={{
                  delay: 0.1 + index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                className="project-card"
              >
                <motion.div
                  className="polaroid"
                  whileHover={{ rotate: 0, y: -8 }}
                >
                  <div className="project-image">
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} project thumbnail`}
                      loading="lazy"
                    />
                  </div>

                  <div className="project-info">
                    <h3
                      style={{
                        color:
                          theme !== "dark" ? "#000000" : "var(--paper-lines)",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        color:
                          theme !== "dark" ? "#000000" : "var(--paper-lines)",
                      }}
                    >
                      {project.description}
                    </p>
                    <div
                      className="tags"
                      style={{
                        color:
                          theme !== "dark" ? "#000000" : "var(--paper-lines)",
                      }}
                    >
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="tape" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={isVisible ? { scale: 1, rotate: 1 } : {}}
            transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
            className="projects-cta"
          >
            <div className="cta-box">
              <h3 className="cta-title">Want to see more?</h3>
              <p className="cta-text">
                Check out my GitHub for all the unfinished side projects!
              </p>
              <motion.a
                href="#contact"
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Collaborate
                <span className="arrow">→</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
