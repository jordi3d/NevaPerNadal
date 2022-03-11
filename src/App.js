import "./App.css";
import Floc from "./Floc";
import { useState } from "react";

function App() {
  const [wd, setWd] = useState(-10);
  const flake = [
    {
      vt: 100,
      ini: 0,
      wind: wd,
      temps: "8s",
      delay: "0.1s",
      diametre: 30,
    },
    {
      vt: 100,
      ini: 8,
      wind: wd,
      temps: "8.5s",
      delay: "0s",
      diametre: 14,
    },
    {
      vt: 100,
      ini: 96,
      wind: wd,
      temps: "11.10s",
      delay: "8.10s",
      diametre: 12,
    },
    {
      vt: "800px",
      ini: 2710,
      wind: wd,
      temps: "6.50s",
      delay: "6.70s",
      diametre: 14,
    },
    {
      vt: "800px",
      ini: 1181,
      wind: wd,
      temps: "11.90s",
      delay: "10.20s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 3731,
      wind: wd,
      temps: "6.30s",
      delay: "13.40s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 3360,
      wind: wd,
      temps: "7.50s",
      delay: "7.10s",
      diametre: 16,
    },

    {
      vt: "800px",
      ini: 100,
      wind: wd,
      temps: "12.70s",
      delay: "9.90s",
      diametre: 26,
    },

    {
      vt: "800px",
      ini: 2757,
      wind: wd,
      temps: "6.70s",
      delay: "12.00s",
      diametre: 25,
    },

    {
      vt: "800px",
      ini: 3483,
      wind: wd,
      temps: "13.10s",
      delay: "3.60s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 39,
      wind: wd,
      temps: "11.20s",
      delay: "5.40s",
      diametre: 13,
    },

    {
      vt: "800px",
      ini: 3215,
      wind: wd,
      temps: "8.60s",
      delay: "5.60s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 1384,
      wind: wd,
      temps: "11.00s",
      delay: "2.70s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 2820,
      wind: wd,
      temps: "12.00s",
      delay: "9.30s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 3803,
      wind: wd,
      temps: "7.80s",
      delay: "12.80s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 521,
      wind: wd,
      temps: "8.40s",
      delay: "10.30s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 936,
      wind: wd,
      temps: "6.20s",
      delay: "13.80s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 1854,
      wind: wd,
      temps: "8.00s",
      delay: "4.70s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 492,
      wind: wd,
      temps: "12.90s",
      delay: "7.60s",
      diametre: 16,
    },

    {
      vt: "800px",
      ini: 2993,
      wind: wd,
      temps: "9.30s",
      delay: "6.40s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 3907,
      wind: wd,
      temps: "8.40s",
      delay: "7.50s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 3199,
      wind: wd,
      temps: "9.40s",
      delay: "11.10s",
      diametre: 27,
    },

    {
      vt: "800px",
      ini: 1921,
      wind: wd,
      temps: "5.70s",
      delay: "3.50s",
      diametre: 24,
    },

    {
      vt: "800px",
      ini: 1418,
      wind: wd,
      temps: "10.10s",
      delay: "1.90s",
      diametre: 30,
    },

    {
      vt: "800px",
      ini: 807,
      wind: wd,
      temps: "8.10s",
      delay: "3.20s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 3133,
      wind: wd,
      temps: "5.80s",
      delay: "14.60s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 2925,
      wind: wd,
      temps: "7.00s",
      delay: "5.90s",
      diametre: 20,
    },

    {
      vt: "800px",
      ini: 2116,
      wind: wd,
      temps: "6.00s",
      delay: "0.60s",
      diametre: 13,
    },

    {
      vt: "800px",
      ini: 1603,
      wind: wd,
      temps: "9.90s",
      delay: "3.70s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 2238,
      wind: wd,
      temps: "10.50s",
      delay: "4.00s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 1601,
      wind: wd,
      temps: "11.50s",
      delay: "13.30s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 3653,
      wind: wd,
      temps: "8.70s",
      delay: "14.50s",
      diametre: 15,
    },

    {
      vt: "800px",
      ini: 3205,
      wind: wd,
      temps: "10.10s",
      delay: "14.40s",
      diametre: 20,
    },

    {
      vt: "800px",
      ini: 2111,
      wind: wd,
      temps: "12.90s",
      delay: "11.40s",
      diametre: 13,
    },

    {
      vt: "800px",
      ini: 3203,
      wind: wd,
      temps: "6.20s",
      delay: "10.00s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 3177,
      wind: wd,
      temps: "7.90s",
      delay: "9.70s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 3033,
      wind: wd,
      temps: "12.30s",
      delay: "9.40s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 2109,
      wind: wd,
      temps: "5.80s",
      delay: "0.70s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 3345,
      wind: wd,
      temps: "6.70s",
      delay: "5.00s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 1178,
      wind: wd,
      temps: "12.70s",
      delay: "11.50s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 1255,
      wind: wd,
      temps: "6.70s",
      delay: "6.90s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 1178,
      wind: wd,
      temps: "12.10s",
      delay: "3.00s",
      diametre: 30,
    },

    {
      vt: "800px",
      ini: 3559,
      wind: wd,
      temps: "9.30s",
      delay: "4.10s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 901,
      wind: wd,
      temps: "7.70s",
      delay: "2.70s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 2162,
      wind: wd,
      temps: "7.70s",
      delay: "13.90s",
      diametre: 20,
    },

    {
      vt: "800px",
      ini: 3339,
      wind: wd,
      temps: "11.10s",
      delay: "4.80s",
      diametre: 20,
    },

    {
      vt: "800px",
      ini: 2996,
      wind: wd,
      temps: "12.70s",
      delay: "5.30s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 388,
      wind: wd,
      temps: "11.40s",
      delay: "12.40s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 691,
      wind: wd,
      temps: "12.10s",
      delay: "15.00s",
      diametre: 25,
    },

    {
      vt: "800px",
      ini: 798,
      wind: wd,
      temps: "10.10s",
      delay: "14.90s",
      diametre: 26,
    },

    {
      vt: "800px",
      ini: 262,
      wind: wd,
      temps: "8.50s",
      delay: "11.20s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 3167,
      wind: wd,
      temps: "9.10s",
      delay: "14.00s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 84,
      wind: wd,
      temps: "8.20s",
      delay: "9.70s",
      diametre: 42,
    },

    {
      vt: "800px",
      ini: 708,
      wind: wd,
      temps: "7.80s",
      delay: "4.20s",
      diametre: 20,
    },

    {
      vt: "800px",
      ini: 3405,
      wind: wd,
      temps: "10.30s",
      delay: "5.10s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 1584,
      wind: wd,
      temps: "12.60s",
      delay: "13.10s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 2690,
      wind: wd,
      temps: "8.70s",
      delay: "4.40s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 1565,
      wind: wd,
      temps: "7.00s",
      delay: "9.60s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 2030,
      wind: wd,
      temps: "11.30s",
      delay: "3.70s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 2765,
      wind: wd,
      temps: "10.20s",
      delay: "4.10s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 3906,
      wind: wd,
      temps: "6.80s",
      delay: "7.60s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 1247,
      wind: wd,
      temps: "7.20s",
      delay: "5.00s",
      diametre: 16,
    },

    {
      vt: "800px",
      ini: 3562,
      wind: wd,
      temps: "12.40s",
      delay: "13.40s",
      diametre: 30,
    },

    {
      vt: "800px",
      ini: 3231,
      wind: wd,
      temps: "11.50s",
      delay: "13.10s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 3257,
      wind: wd,
      temps: "12.40s",
      delay: "9.20s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 2699,
      wind: wd,
      temps: "6.20s",
      delay: "12.20s",
      diametre: 24,
    },

    {
      vt: "800px",
      ini: 3654,
      wind: wd,
      temps: "10.80s",
      delay: "3.60s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 2145,
      wind: wd,
      temps: "6.20s",
      delay: "8.30s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 2623,
      wind: wd,
      temps: "11.40s",
      delay: "9.70s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 3245,
      wind: wd,
      temps: "5.80s",
      delay: "8.70s",
      diametre: 15,
    },

    {
      vt: "800px",
      ini: 721,
      wind: wd,
      temps: "11.10s",
      delay: "8.60s",
      diametre: 24,
    },

    {
      vt: "800px",
      ini: 3205,
      wind: wd,
      temps: "10.40s",
      delay: "1.90s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 1599,
      wind: wd,
      temps: "12.70s",
      delay: "1.70s",
      diametre: 19,
    },

    {
      vt: "800px",
      ini: 1558,
      wind: wd,
      temps: "10.30s",
      delay: "0.20s",
      diametre: 27,
    },

    {
      vt: "800px",
      ini: 631,
      wind: wd,
      temps: "13.30s",
      delay: "6.10s",
      diametre: 20,
    },

    {
      vt: "800px",
      ini: 3174,
      wind: wd,
      temps: "9.90s",
      delay: "5.20s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 0,
      wind: wd,
      temps: "10.20s",
      delay: "2.30s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 253,
      wind: wd,
      temps: "5.70s",
      delay: "9.80s",
      diametre: 30,
    },

    {
      vt: "800px",
      ini: 1529,
      wind: wd,
      temps: "6.70s",
      delay: "14.50s",
      diametre: 16,
    },

    {
      vt: "800px",
      ini: 1052,
      wind: wd,
      temps: "7.90s",
      delay: "9.10s",
      diametre: 42,
    },

    {
      vt: "800px",
      ini: 1507,
      wind: wd,
      temps: "9.60s",
      delay: "7.40s",
      diametre: 29,
    },

    {
      vt: "800px",
      ini: 2136,
      wind: wd,
      temps: "10.90s",
      delay: "7.20s",
      diametre: 13,
    },

    {
      vt: "800px",
      ini: 795,
      wind: wd,
      temps: "12.90s",
      delay: "12.30s",
      diametre: 39,
    },

    {
      vt: "800px",
      ini: 1889,
      wind: wd,
      temps: "9.70s",
      delay: "13.60s",
      diametre: 25,
    },

    {
      vt: "800px",
      ini: 449,
      wind: wd,
      temps: "9.40s",
      delay: "11.70s",
      diametre: 35,
    },

    {
      vt: "800px",
      ini: 2084,
      wind: wd,
      temps: "5.80s",
      delay: "10.00s",
      diametre: 26,
    },

    {
      vt: "800px",
      ini: 2158,
      wind: wd,
      temps: "6.90s",
      delay: "0.00s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 1239,
      wind: wd,
      temps: "6.40s",
      delay: "7.70s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 1733,
      wind: wd,
      temps: "6.00s",
      delay: "11.90s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 569,
      wind: wd,
      temps: "12.10s",
      delay: "4.30s",
      diametre: 25,
    },

    {
      vt: "800px",
      ini: 937,
      wind: wd,
      temps: "7.20s",
      delay: "5.60s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 253,
      wind: wd,
      temps: "9.80s",
      delay: "12.70s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 3907,
      wind: wd,
      temps: "10.40s",
      delay: "13.90s",
      diametre: 16,
    },

    {
      vt: "800px",
      ini: 823,
      wind: wd,
      temps: "10.10s",
      delay: "7.70s",
      diametre: 24,
    },

    {
      vt: "800px",
      ini: 1432,
      wind: wd,
      temps: "11.90s",
      delay: "6.90s",
      diametre: 24,
    },

    {
      vt: "800px",
      ini: 1411,
      wind: wd,
      temps: "12.90s",
      delay: "1.60s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 3369,
      wind: wd,
      temps: "8.30s",
      delay: "8.60s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 3640,
      wind: wd,
      temps: "8.80s",
      delay: "11.60s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 445,
      wind: wd,
      temps: "7.70s",
      delay: "6.90s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 2904,
      wind: wd,
      temps: "9.30s",
      delay: "1.60s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 1717,
      wind: wd,
      temps: "12.00s",
      delay: "13.00s",
      diametre: 19,
    },

    {
      vt: "800px",
      ini: 1826,
      wind: wd,
      temps: "7.30s",
      delay: "5.80s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 2956,
      wind: wd,
      temps: "9.30s",
      delay: "12.10s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 1642,
      wind: wd,
      temps: "11.00s",
      delay: "12.30s",
      diametre: 16,
    },

    {
      vt: "800px",
      ini: 2230,
      wind: wd,
      temps: "6.90s",
      delay: "3.30s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 281,
      wind: wd,
      temps: "6.40s",
      delay: "2.50s",
      diametre: 29,
    },

    {
      vt: "800px",
      ini: 3925,
      wind: wd,
      temps: "11.40s",
      delay: "13.10s",
      diametre: 39,
    },

    {
      vt: "800px",
      ini: 2915,
      wind: wd,
      temps: "13.40s",
      delay: "2.50s",
      diametre: 35,
    },

    {
      vt: "800px",
      ini: 1506,
      wind: wd,
      temps: "7.10s",
      delay: "3.80s",
      diametre: 13,
    },

    {
      vt: "800px",
      ini: 3728,
      wind: wd,
      temps: "6.90s",
      delay: "7.90s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 2246,
      wind: wd,
      temps: "11.20s",
      delay: "3.30s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 2689,
      wind: wd,
      temps: "5.70s",
      delay: "8.00s",
      diametre: 39,
    },

    {
      vt: "800px",
      ini: 2225,
      wind: wd,
      temps: "13.10s",
      delay: "8.60s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 2079,
      wind: wd,
      temps: "10.30s",
      delay: "7.40s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 833,
      wind: wd,
      temps: "7.40s",
      delay: "14.90s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 544,
      wind: wd,
      temps: "8.70s",
      delay: "7.20s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 1064,
      wind: wd,
      temps: "5.50s",
      delay: "12.80s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 3443,
      wind: wd,
      temps: "6.20s",
      delay: "3.90s",
      diametre: 15,
    },

    {
      vt: "800px",
      ini: 2855,
      wind: wd,
      temps: "5.60s",
      delay: "13.40s",
      diametre: 19,
    },

    {
      vt: "800px",
      ini: 1249,
      wind: wd,
      temps: "6.90s",
      delay: "3.10s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 1744,
      wind: wd,
      temps: "10.90s",
      delay: "12.20s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 776,
      wind: wd,
      temps: "10.00s",
      delay: "10.20s",
      diametre: 15,
    },

    {
      vt: "800px",
      ini: 2103,
      wind: wd,
      temps: "8.60s",
      delay: "3.30s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 2987,
      wind: wd,
      temps: "10.90s",
      delay: "3.00s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 3223,
      wind: wd,
      temps: "10.00s",
      delay: "7.70s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 2168,
      wind: wd,
      temps: "7.50s",
      delay: "3.60s",
      diametre: 15,
    },

    {
      vt: "800px",
      ini: 1505,
      wind: wd,
      temps: "12.90s",
      delay: "8.80s",
      diametre: 12,
    },

    {
      vt: "800px",
      ini: 2209,
      wind: wd,
      temps: "6.80s",
      delay: "10.00s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 1031,
      wind: wd,
      temps: "6.70s",
      delay: "7.80s",
      diametre: 27,
    },

    {
      vt: "800px",
      ini: 2777,
      wind: wd,
      temps: "13.10s",
      delay: "15.00s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 1777,
      wind: wd,
      temps: "5.90s",
      delay: "9.40s",
      diametre: 30,
    },

    {
      vt: "800px",
      ini: 1137,
      wind: wd,
      temps: "11.50s",
      delay: "1.60s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 3736,
      wind: wd,
      temps: "11.40s",
      delay: "6.10s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 392,
      wind: wd,
      temps: "12.40s",
      delay: "14.90s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 2215,
      wind: wd,
      temps: "9.40s",
      delay: "6.20s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 3903,
      wind: wd,
      temps: "7.10s",
      delay: "10.60s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 2566,
      wind: wd,
      temps: "8.70s",
      delay: "1.20s",
      diametre: 26,
    },

    {
      vt: "800px",
      ini: 653,
      wind: wd,
      temps: "8.70s",
      delay: "9.90s",
      diametre: 26,
    },

    {
      vt: "800px",
      ini: 3632,
      wind: wd,
      temps: "12.20s",
      delay: "13.30s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 3332,
      wind: wd,
      temps: "5.80s",
      delay: "12.70s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 156,
      wind: wd,
      temps: "8.60s",
      delay: "7.80s",
      diametre: 33,
    },

    {
      vt: "800px",
      ini: 1894,
      wind: wd,
      temps: "10.90s",
      delay: "10.00s",
      diametre: 13,
    },

    {
      vt: "800px",
      ini: 3429,
      wind: wd,
      temps: "12.40s",
      delay: "13.70s",
      diametre: 25,
    },

    {
      vt: "800px",
      ini: 363,
      wind: wd,
      temps: "8.50s",
      delay: "6.40s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 445,
      wind: wd,
      temps: "8.60s",
      delay: "4.10s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 1644,
      wind: wd,
      temps: "13.30s",
      delay: "11.20s",
      diametre: 26,
    },

    {
      vt: "800px",
      ini: 813,
      wind: wd,
      temps: "12.70s",
      delay: "6.90s",
      diametre: 26,
    },

    {
      vt: "800px",
      ini: 2113,
      wind: wd,
      temps: "7.40s",
      delay: "5.30s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 1713,
      wind: wd,
      temps: "7.90s",
      delay: "5.90s",
      diametre: 15,
    },

    {
      vt: "800px",
      ini: 2751,
      wind: wd,
      temps: "12.20s",
      delay: "0.50s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 2147,
      wind: wd,
      temps: "6.70s",
      delay: "4.90s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 577,
      wind: wd,
      temps: "9.80s",
      delay: "11.70s",
      diametre: 27,
    },

    {
      vt: "800px",
      ini: 2754,
      wind: wd,
      temps: "13.00s",
      delay: "2.10s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 1162,
      wind: wd,
      temps: "6.90s",
      delay: "4.70s",
      diametre: 16,
    },

    {
      vt: "800px",
      ini: 455,
      wind: wd,
      temps: "12.70s",
      delay: "0.10s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 1975,
      wind: wd,
      temps: "8.80s",
      delay: "8.50s",
      diametre: 26,
    },

    {
      vt: "800px",
      ini: 195,
      wind: wd,
      temps: "6.70s",
      delay: "1.40s",
      diametre: 19,
    },

    {
      vt: "800px",
      ini: 1337,
      wind: wd,
      temps: "13.50s",
      delay: "11.90s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 3050,
      wind: wd,
      temps: "10.60s",
      delay: "2.10s",
      diametre: 20,
    },

    {
      vt: "800px",
      ini: 737,
      wind: wd,
      temps: "9.10s",
      delay: "6.50s",
      diametre: 29,
    },

    {
      vt: "800px",
      ini: 2953,
      wind: wd,
      temps: "13.00s",
      delay: "1.20s",
      diametre: 27,
    },

    {
      vt: "800px",
      ini: 1298,
      wind: wd,
      temps: "6.70s",
      delay: "12.30s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 1319,
      wind: wd,
      temps: "7.60s",
      delay: "0.70s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 125,
      wind: wd,
      temps: "6.90s",
      delay: "5.80s",
      diametre: 29,
    },

    {
      vt: "800px",
      ini: 1829,
      wind: wd,
      temps: "12.80s",
      delay: "6.80s",
      diametre: 33,
    },

    {
      vt: "800px",
      ini: 1218,
      wind: wd,
      temps: "8.20s",
      delay: "9.90s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 2882,
      wind: wd,
      temps: "6.00s",
      delay: "12.70s",
      diametre: 29,
    },

    {
      vt: "800px",
      ini: 916,
      wind: wd,
      temps: "6.80s",
      delay: "1.00s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 1019,
      wind: wd,
      temps: "12.70s",
      delay: "4.10s",
      diametre: 33,
    },

    {
      vt: "800px",
      ini: 3488,
      wind: wd,
      temps: "8.50s",
      delay: "4.30s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 1046,
      wind: wd,
      temps: "12.10s",
      delay: "12.10s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 2417,
      wind: wd,
      temps: "6.00s",
      delay: "12.30s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 3665,
      wind: wd,
      temps: "7.30s",
      delay: "12.30s",
      diametre: 19,
    },

    {
      vt: "800px",
      ini: 843,
      wind: wd,
      temps: "10.10s",
      delay: "2.30s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 3105,
      wind: wd,
      temps: "11.30s",
      delay: "4.30s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 2196,
      wind: wd,
      temps: "6.30s",
      delay: "11.30s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 250,
      wind: wd,
      temps: "12.80s",
      delay: "9.60s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 887,
      wind: wd,
      temps: "6.00s",
      delay: "5.20s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 3727,
      wind: wd,
      temps: "12.60s",
      delay: "7.90s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 349,
      wind: wd,
      temps: "5.80s",
      delay: "5.80s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 2210,
      wind: wd,
      temps: "10.00s",
      delay: "13.40s",
      diametre: 29,
    },

    {
      vt: "800px",
      ini: 3830,
      wind: wd,
      temps: "13.00s",
      delay: "11.70s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 2165,
      wind: wd,
      temps: "6.70s",
      delay: "8.50s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 237,
      wind: wd,
      temps: "10.20s",
      delay: "5.20s",
      diametre: 33,
    },

    {
      vt: "800px",
      ini: 1162,
      wind: wd,
      temps: "7.50s",
      delay: "3.40s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 3184,
      wind: wd,
      temps: "10.00s",
      delay: "2.70s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 3633,
      wind: wd,
      temps: "9.60s",
      delay: "3.90s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 64,
      wind: wd,
      temps: "7.50s",
      delay: "3.10s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 3568,
      wind: wd,
      temps: "6.00s",
      delay: "2.90s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 1550,
      wind: wd,
      temps: "11.90s",
      delay: "4.40s",
      diametre: 33,
    },

    {
      vt: "800px",
      ini: 1164,
      wind: wd,
      temps: "9.10s",
      delay: "5.00s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 2352,
      wind: wd,
      temps: "6.80s",
      delay: "2.20s",
      diametre: 25,
    },

    {
      vt: "800px",
      ini: 3811,
      wind: wd,
      temps: "12.70s",
      delay: "4.60s",
      diametre: 20,
    },

    {
      vt: "800px",
      ini: 3386,
      wind: wd,
      temps: "11.90s",
      delay: "9.90s",
      diametre: 30,
    },

    {
      vt: "800px",
      ini: 2050,
      wind: wd,
      temps: "11.50s",
      delay: "9.10s",
      diametre: 30,
    },

    {
      vt: "800px",
      ini: 3706,
      wind: wd,
      temps: "9.30s",
      delay: "0.10s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 283,
      wind: wd,
      temps: "9.40s",
      delay: "10.40s",
      diametre: 39,
    },

    {
      vt: "800px",
      ini: 3599,
      wind: wd,
      temps: "13.10s",
      delay: "9.20s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 3990,
      wind: wd,
      temps: "10.10s",
      delay: "6.60s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 204,
      wind: wd,
      temps: "6.80s",
      delay: "6.20s",
      diametre: 26,
    },

    {
      vt: "800px",
      ini: 117,
      wind: wd,
      temps: "7.50s",
      delay: "9.40s",
      diametre: 35,
    },

    {
      vt: "800px",
      ini: 3823,
      wind: wd,
      temps: "6.10s",
      delay: "3.60s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 3042,
      wind: wd,
      temps: "11.30s",
      delay: "12.10s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 778,
      wind: wd,
      temps: "7.50s",
      delay: "13.30s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 3139,
      wind: wd,
      temps: "7.60s",
      delay: "9.20s",
      diametre: 25,
    },

    {
      vt: "800px",
      ini: 1249,
      wind: wd,
      temps: "11.60s",
      delay: "7.70s",
      diametre: 19,
    },

    {
      vt: "800px",
      ini: 496,
      wind: wd,
      temps: "8.80s",
      delay: "10.40s",
      diametre: 35,
    },

    {
      vt: "800px",
      ini: 1952,
      wind: wd,
      temps: "12.30s",
      delay: "4.40s",
      diametre: 27,
    },

    {
      vt: "800px",
      ini: 684,
      wind: wd,
      temps: "11.10s",
      delay: "8.80s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 3854,
      wind: wd,
      temps: "11.10s",
      delay: "13.00s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 771,
      wind: wd,
      temps: "13.20s",
      delay: "11.00s",
      diametre: 19,
    },

    {
      vt: "800px",
      ini: 2287,
      wind: wd,
      temps: "9.30s",
      delay: "14.50s",
      diametre: 16,
    },

    {
      vt: "800px",
      ini: 1858,
      wind: wd,
      temps: "7.90s",
      delay: "7.10s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 2909,
      wind: wd,
      temps: "8.00s",
      delay: "12.60s",
      diametre: 25,
    },

    {
      vt: "800px",
      ini: 1455,
      wind: wd,
      temps: "8.00s",
      delay: "3.00s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 3900,
      wind: wd,
      temps: "10.10s",
      delay: "5.20s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 876,
      wind: wd,
      temps: "12.60s",
      delay: "3.70s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 2593,
      wind: wd,
      temps: "11.90s",
      delay: "9.80s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 1584,
      wind: wd,
      temps: "7.40s",
      delay: "11.90s",
      diametre: 26,
    },

    {
      vt: "800px",
      ini: 1412,
      wind: wd,
      temps: "7.60s",
      delay: "0.10s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 65,
      wind: wd,
      temps: "12.00s",
      delay: "1.80s",
      diametre: 12,
    },

    {
      vt: "800px",
      ini: 3611,
      wind: wd,
      temps: "13.00s",
      delay: "12.10s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 3281,
      wind: wd,
      temps: "9.90s",
      delay: "13.40s",
      diametre: 26,
    },

    {
      vt: "800px",
      ini: 3679,
      wind: wd,
      temps: "9.90s",
      delay: "5.40s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 165,
      wind: wd,
      temps: "5.80s",
      delay: "8.50s",
      diametre: 15,
    },

    {
      vt: "800px",
      ini: 2644,
      wind: wd,
      temps: "11.00s",
      delay: "14.30s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 2859,
      wind: wd,
      temps: "12.10s",
      delay: "2.20s",
      diametre: 12,
    },

    {
      vt: "800px",
      ini: 2683,
      wind: wd,
      temps: "11.20s",
      delay: "7.20s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 2515,
      wind: wd,
      temps: "7.60s",
      delay: "4.30s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 2506,
      wind: wd,
      temps: "11.30s",
      delay: "13.10s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 504,
      wind: wd,
      temps: "8.30s",
      delay: "9.30s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 925,
      wind: wd,
      temps: "10.10s",
      delay: "11.70s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 746,
      wind: wd,
      temps: "12.60s",
      delay: "5.50s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 862,
      wind: wd,
      temps: "9.60s",
      delay: "2.00s",
      diametre: 25,
    },

    {
      vt: "800px",
      ini: 2626,
      wind: wd,
      temps: "8.50s",
      delay: "12.70s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 1682,
      wind: wd,
      temps: "11.80s",
      delay: "7.80s",
      diametre: 12,
    },

    {
      vt: "800px",
      ini: 590,
      wind: wd,
      temps: "8.40s",
      delay: "2.20s",
      diametre: 20,
    },

    {
      vt: "800px",
      ini: 2374,
      wind: wd,
      temps: "8.10s",
      delay: "10.30s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 27,
      wind: wd,
      temps: "12.20s",
      delay: "6.80s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 3494,
      wind: wd,
      temps: "8.30s",
      delay: "5.30s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 3411,
      wind: wd,
      temps: "11.00s",
      delay: "9.10s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 119,
      wind: wd,
      temps: "9.50s",
      delay: "11.30s",
      diametre: 26,
    },

    {
      vt: "800px",
      ini: 1946,
      wind: wd,
      temps: "6.10s",
      delay: "5.20s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 1245,
      wind: wd,
      temps: "6.30s",
      delay: "5.90s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 2061,
      wind: wd,
      temps: "7.90s",
      delay: "5.20s",
      diametre: 15,
    },

    {
      vt: "800px",
      ini: 1155,
      wind: wd,
      temps: "11.60s",
      delay: "7.90s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 3137,
      wind: wd,
      temps: "8.90s",
      delay: "7.70s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 1173,
      wind: wd,
      temps: "11.90s",
      delay: "7.60s",
      diametre: 13,
    },

    {
      vt: "800px",
      ini: 2694,
      wind: wd,
      temps: "12.00s",
      delay: "5.10s",
      diametre: 39,
    },

    {
      vt: "800px",
      ini: 89,
      wind: wd,
      temps: "8.60s",
      delay: "8.30s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 2056,
      wind: wd,
      temps: "9.00s",
      delay: "13.50s",
      diametre: 25,
    },

    {
      vt: "800px",
      ini: 2201,
      wind: wd,
      temps: "13.30s",
      delay: "12.90s",
      diametre: 19,
    },

    {
      vt: "800px",
      ini: 3110,
      wind: wd,
      temps: "12.30s",
      delay: "1.40s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 1493,
      wind: wd,
      temps: "10.40s",
      delay: "14.10s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 1285,
      wind: wd,
      temps: "7.60s",
      delay: "0.50s",
      diametre: 24,
    },

    {
      vt: "800px",
      ini: 919,
      wind: wd,
      temps: "12.90s",
      delay: "12.80s",
      diametre: 33,
    },

    {
      vt: "800px",
      ini: 3280,
      wind: wd,
      temps: "9.60s",
      delay: "14.70s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 1055,
      wind: wd,
      temps: "9.30s",
      delay: "10.40s",
      diametre: 12,
    },

    {
      vt: "800px",
      ini: 2289,
      wind: wd,
      temps: "8.90s",
      delay: "4.40s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 2605,
      wind: wd,
      temps: "7.20s",
      delay: "14.90s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 624,
      wind: wd,
      temps: "12.10s",
      delay: "10.60s",
      diametre: 15,
    },

    {
      vt: "800px",
      ini: 293,
      wind: wd,
      temps: "6.10s",
      delay: "12.10s",
      diametre: 12,
    },

    {
      vt: "800px",
      ini: 3633,
      wind: wd,
      temps: "5.90s",
      delay: "14.50s",
      diametre: 15,
    },

    {
      vt: "800px",
      ini: 1610,
      wind: wd,
      temps: "11.50s",
      delay: "6.10s",
      diametre: 20,
    },

    {
      vt: "800px",
      ini: 3681,
      wind: wd,
      temps: "7.50s",
      delay: "4.80s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 2720,
      wind: wd,
      temps: "12.60s",
      delay: "13.50s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 745,
      wind: wd,
      temps: "7.10s",
      delay: "7.90s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 3503,
      wind: wd,
      temps: "7.50s",
      delay: "13.90s",
      diametre: 20,
    },

    {
      vt: "800px",
      ini: 2756,
      wind: wd,
      temps: "8.40s",
      delay: "2.70s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 296,
      wind: wd,
      temps: "9.70s",
      delay: "8.80s",
      diametre: 42,
    },

    {
      vt: "800px",
      ini: 2363,
      wind: wd,
      temps: "12.90s",
      delay: "11.70s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 2309,
      wind: wd,
      temps: "11.10s",
      delay: "0.50s",
      diametre: 27,
    },

    {
      vt: "800px",
      ini: 1174,
      wind: wd,
      temps: "5.70s",
      delay: "11.40s",
      diametre: 25,
    },

    {
      vt: "800px",
      ini: 44,
      wind: wd,
      temps: "9.00s",
      delay: "12.70s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 3741,
      wind: wd,
      temps: "7.10s",
      delay: "12.20s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 3206,
      wind: wd,
      temps: "5.70s",
      delay: "1.10s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 3740,
      wind: wd,
      temps: "10.50s",
      delay: "3.90s",
      diametre: 26,
    },

    {
      vt: "800px",
      ini: 1674,
      wind: wd,
      temps: "12.70s",
      delay: "0.70s",
      diametre: 24,
    },

    {
      vt: "800px",
      ini: 1758,
      wind: wd,
      temps: "11.60s",
      delay: "12.70s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 2050,
      wind: wd,
      temps: "6.50s",
      delay: "7.90s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 8,
      wind: wd,
      temps: "9.30s",
      delay: "5.00s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 2092,
      wind: wd,
      temps: "11.40s",
      delay: "6.20s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 2016,
      wind: wd,
      temps: "11.80s",
      delay: "7.30s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 2074,
      wind: wd,
      temps: "6.60s",
      delay: "3.70s",
      diametre: 33,
    },

    {
      vt: "800px",
      ini: 988,
      wind: wd,
      temps: "7.30s",
      delay: "7.60s",
      diametre: 35,
    },

    {
      vt: "800px",
      ini: 3633,
      wind: wd,
      temps: "9.50s",
      delay: "1.60s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 1041,
      wind: wd,
      temps: "9.20s",
      delay: "14.40s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 1132,
      wind: wd,
      temps: "7.70s",
      delay: "13.90s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 876,
      wind: wd,
      temps: "13.00s",
      delay: "14.60s",
      diametre: 38,
    },
  ];
  return (
    <div className="App">
      <div id="Flake-header">
        <p>
          {flake.length}&nbsp;Floquets de neu
          <br />
          Vent:&nbsp;{wd}Km/h
          <br />
          <button onClick={() => setWd(wd + 10)}>+10Km/h</button>
          <button onClick={() => setWd(wd - 10)}>-10Km/h</button>
        </p>
        {flake.map((n, id) => (
          <Floc id={id} flake={n} />
        ))}
      </div>
    </div>
  );
}

export default App;
