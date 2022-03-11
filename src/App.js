import "./App.css";
import Floc from "./Floc";

function App() {
  const wd = 1000;
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
      ini: 15,
      wind: wd,
      temps: "9.10s",
      delay: "3.80s",
      diametre: 23,
    },
    {
      vt: "800px",
      ini: 549,
      wind: wd,
      temps: "5.90s",
      delay: "9.60s",
      diametre: 27,
    },
    {
      vt: "800px",
      ini: 766,
      wind: wd,
      temps: "6.50s",
      delay: "11.20s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 1530,
      wind: wd,
      temps: "8.20s",
      delay: "8.50s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 1722,
      wind: wd,
      temps: "11.00s",
      delay: "4.30s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 1224,
      wind: wd,
      temps: "5.60s",
      delay: "12.10s",
      diametre: 29,
    },

    {
      vt: "800px",
      ini: 560,
      wind: wd,
      temps: "6.10s",
      delay: "6.80s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 1140,
      wind: wd,
      temps: "13.00s",
      delay: "12.30s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 291,
      wind: wd,
      temps: "12.80s",
      delay: "14.50s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 1326,
      wind: wd,
      temps: "8.40s",
      delay: "13.10s",
      diametre: 24,
    },

    {
      vt: "800px",
      ini: 13,
      wind: wd,
      temps: "12.00s",
      delay: "9.50s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 807,
      wind: wd,
      temps: "7.10s",
      delay: "10.30s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 1878,
      wind: wd,
      temps: "10.60s",
      delay: "8.90s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 491,
      wind: wd,
      temps: "7.30s",
      delay: "10.70s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 52,
      wind: wd,
      temps: "10.90s",
      delay: "14.40s",
      diametre: 15,
    },

    {
      vt: "800px",
      ini: 1049,
      wind: wd,
      temps: "6.30s",
      delay: "0.10s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 581,
      wind: wd,
      temps: "12.00s",
      delay: "7.30s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 91,
      wind: wd,
      temps: "8.70s",
      delay: "14.80s",
      diametre: 19,
    },

    {
      vt: "800px",
      ini: 551,
      wind: wd,
      temps: "12.20s",
      delay: "13.80s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 551,
      wind: wd,
      temps: "7.20s",
      delay: "8.50s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 1759,
      wind: wd,
      temps: "7.20s",
      delay: "14.30s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 796,
      wind: wd,
      temps: "13.40s",
      delay: "14.90s",
      diametre: 15,
    },

    {
      vt: "800px",
      ini: 881,
      wind: wd,
      temps: "6.60s",
      delay: "8.70s",
      diametre: 25,
    },

    {
      vt: "800px",
      ini: 397,
      wind: wd,
      temps: "7.90s",
      delay: "11.50s",
      diametre: 27,
    },

    {
      vt: "800px",
      ini: 813,
      wind: wd,
      temps: "8.40s",
      delay: "3.00s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 1979,
      wind: wd,
      temps: "13.10s",
      delay: "2.90s",
      diametre: 33,
    },

    {
      vt: "800px",
      ini: 539,
      wind: wd,
      temps: "7.10s",
      delay: "8.70s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 881,
      wind: wd,
      temps: "6.70s",
      delay: "2.60s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 1405,
      wind: wd,
      temps: "8.50s",
      delay: "7.60s",
      diametre: 26,
    },

    {
      vt: "800px",
      ini: 704,
      wind: wd,
      temps: "6.60s",
      delay: "13.40s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 264,
      wind: wd,
      temps: "7.30s",
      delay: "11.40s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 9,
      wind: wd,
      temps: "6.80s",
      delay: "5.20s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 346,
      wind: wd,
      temps: "6.40s",
      delay: "13.00s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 1650,
      wind: wd,
      temps: "6.80s",
      delay: "12.10s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 1142,
      wind: wd,
      temps: "8.00s",
      delay: "12.50s",
      diametre: 35,
    },

    {
      vt: "800px",
      ini: 1306,
      wind: wd,
      temps: "11.60s",
      delay: "7.60s",
      diametre: 27,
    },

    {
      vt: "800px",
      ini: 911,
      wind: wd,
      temps: "6.80s",
      delay: "15.00s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 1835,
      wind: wd,
      temps: "9.60s",
      delay: "2.30s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 1679,
      wind: wd,
      temps: "8.90s",
      delay: "1.80s",
      diametre: 20,
    },

    {
      vt: "800px",
      ini: 1059,
      wind: wd,
      temps: "12.40s",
      delay: "1.10s",
      diametre: 39,
    },

    {
      vt: "800px",
      ini: 805,
      wind: wd,
      temps: "9.40s",
      delay: "7.50s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 521,
      wind: wd,
      temps: "5.80s",
      delay: "4.40s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 1349,
      wind: wd,
      temps: "9.40s",
      delay: "3.90s",
      diametre: 12,
    },

    {
      vt: "800px",
      ini: 1596,
      wind: wd,
      temps: "11.80s",
      delay: "14.70s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 1530,
      wind: wd,
      temps: "10.60s",
      delay: "7.10s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 1158,
      wind: wd,
      temps: "10.70s",
      delay: "2.90s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 1599,
      wind: wd,
      temps: "7.90s",
      delay: "4.40s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 1730,
      wind: wd,
      temps: "8.50s",
      delay: "5.40s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 403,
      wind: wd,
      temps: "13.30s",
      delay: "14.10s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 725,
      wind: wd,
      temps: "11.70s",
      delay: "2.40s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 1805,
      wind: wd,
      temps: "5.60s",
      delay: "9.90s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 1981,
      wind: wd,
      temps: "8.80s",
      delay: "1.90s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 955,
      wind: wd,
      temps: "8.00s",
      delay: "13.10s",
      diametre: 24,
    },

    {
      vt: "800px",
      ini: 365,
      wind: wd,
      temps: "5.80s",
      delay: "10.80s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 177,
      wind: wd,
      temps: "9.90s",
      delay: "13.30s",
      diametre: 16,
    },

    {
      vt: "800px",
      ini: 693,
      wind: wd,
      temps: "7.70s",
      delay: "4.00s",
      diametre: 24,
    },

    {
      vt: "800px",
      ini: 1954,
      wind: wd,
      temps: "13.00s",
      delay: "9.30s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 1639,
      wind: wd,
      temps: "6.00s",
      delay: "7.20s",
      diametre: 19,
    },

    {
      vt: "800px",
      ini: 94,
      wind: wd,
      temps: "7.10s",
      delay: "2.30s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 1664,
      wind: wd,
      temps: "11.00s",
      delay: "2.80s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 1809,
      wind: wd,
      temps: "10.90s",
      delay: "1.20s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 1308,
      wind: wd,
      temps: "9.60s",
      delay: "5.40s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 874,
      wind: wd,
      temps: "6.80s",
      delay: "13.30s",
      diametre: 16,
    },

    {
      vt: "800px",
      ini: 407,
      wind: wd,
      temps: "12.20s",
      delay: "2.80s",
      diametre: 30,
    },

    {
      vt: "800px",
      ini: 1576,
      wind: wd,
      temps: "12.30s",
      delay: "14.40s",
      diametre: 35,
    },

    {
      vt: "800px",
      ini: 1981,
      wind: wd,
      temps: "10.70s",
      delay: "10.00s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 462,
      wind: wd,
      temps: "12.20s",
      delay: "1.50s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 657,
      wind: wd,
      temps: "8.20s",
      delay: "0.20s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 324,
      wind: wd,
      temps: "6.00s",
      delay: "12.50s",
      diametre: 27,
    },

    {
      vt: "800px",
      ini: 510,
      wind: wd,
      temps: "6.40s",
      delay: "10.60s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 31,
      wind: wd,
      temps: "7.20s",
      delay: "2.70s",
      diametre: 35,
    },

    {
      vt: "800px",
      ini: 1242,
      wind: wd,
      temps: "11.50s",
      delay: "1.60s",
      diametre: 29,
    },

    {
      vt: "800px",
      ini: 1099,
      wind: wd,
      temps: "6.60s",
      delay: "14.50s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 489,
      wind: wd,
      temps: "10.80s",
      delay: "0.30s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 990,
      wind: wd,
      temps: "9.20s",
      delay: "4.20s",
      diametre: 29,
    },

    {
      vt: "800px",
      ini: 1938,
      wind: wd,
      temps: "10.10s",
      delay: "12.50s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 220,
      wind: wd,
      temps: "11.10s",
      delay: "1.20s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 1742,
      wind: wd,
      temps: "5.90s",
      delay: "6.30s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 1387,
      wind: wd,
      temps: "11.70s",
      delay: "8.50s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 1420,
      wind: wd,
      temps: "6.20s",
      delay: "0.20s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 1164,
      wind: wd,
      temps: "8.10s",
      delay: "6.90s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 149,
      wind: wd,
      temps: "8.30s",
      delay: "6.20s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 1208,
      wind: wd,
      temps: "5.50s",
      delay: "13.40s",
      diametre: 20,
    },

    {
      vt: "800px",
      ini: 930,
      wind: wd,
      temps: "7.90s",
      delay: "5.70s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 770,
      wind: wd,
      temps: "6.40s",
      delay: "3.20s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 1679,
      wind: wd,
      temps: "7.80s",
      delay: "10.40s",
      diametre: 16,
    },

    {
      vt: "800px",
      ini: 546,
      wind: wd,
      temps: "9.40s",
      delay: "12.10s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 1776,
      wind: wd,
      temps: "12.90s",
      delay: "12.80s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 12,
      wind: wd,
      temps: "5.60s",
      delay: "6.80s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 1016,
      wind: wd,
      temps: "10.00s",
      delay: "11.30s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 1158,
      wind: wd,
      temps: "8.50s",
      delay: "11.80s",
      diametre: 13,
    },

    {
      vt: "800px",
      ini: 1291,
      wind: wd,
      temps: "7.60s",
      delay: "12.00s",
      diametre: 35,
    },

    {
      vt: "800px",
      ini: 73,
      wind: wd,
      temps: "10.60s",
      delay: "11.40s",
      diametre: 33,
    },

    {
      vt: "800px",
      ini: 1615,
      wind: wd,
      temps: "6.10s",
      delay: "12.30s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 381,
      wind: wd,
      temps: "7.00s",
      delay: "3.40s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 340,
      wind: wd,
      temps: "6.90s",
      delay: "8.60s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 978,
      wind: wd,
      temps: "13.30s",
      delay: "3.40s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 588,
      wind: wd,
      temps: "10.20s",
      delay: "10.10s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 903,
      wind: wd,
      temps: "8.70s",
      delay: "8.10s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 37,
      wind: wd,
      temps: "11.20s",
      delay: "0.30s",
      diametre: 29,
    },

    {
      vt: "800px",
      ini: 512,
      wind: wd,
      temps: "8.80s",
      delay: "13.80s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 256,
      wind: wd,
      temps: "7.10s",
      delay: "1.50s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 394,
      wind: wd,
      temps: "7.90s",
      delay: "5.30s",
      diametre: 25,
    },

    {
      vt: "800px",
      ini: 1739,
      wind: wd,
      temps: "6.00s",
      delay: "12.50s",
      diametre: 33,
    },

    {
      vt: "800px",
      ini: 1674,
      wind: wd,
      temps: "6.30s",
      delay: "7.90s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 760,
      wind: wd,
      temps: "11.70s",
      delay: "13.50s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 1473,
      wind: wd,
      temps: "10.10s",
      delay: "11.50s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 979,
      wind: wd,
      temps: "12.40s",
      delay: "12.90s",
      diametre: 29,
    },

    {
      vt: "800px",
      ini: 1411,
      wind: wd,
      temps: "8.00s",
      delay: "8.60s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 582,
      wind: wd,
      temps: "6.60s",
      delay: "12.40s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 1012,
      wind: wd,
      temps: "6.80s",
      delay: "0.80s",
      diametre: 27,
    },

    {
      vt: "800px",
      ini: 421,
      wind: wd,
      temps: "12.70s",
      delay: "11.20s",
      diametre: 39,
    },

    {
      vt: "800px",
      ini: 1866,
      wind: wd,
      temps: "10.00s",
      delay: "6.90s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 346,
      wind: wd,
      temps: "9.70s",
      delay: "13.20s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 267,
      wind: wd,
      temps: "8.00s",
      delay: "4.00s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 1478,
      wind: wd,
      temps: "13.20s",
      delay: "8.40s",
      diametre: 33,
    },

    {
      vt: "800px",
      ini: 1890,
      wind: wd,
      temps: "9.20s",
      delay: "2.50s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 1778,
      wind: wd,
      temps: "12.90s",
      delay: "10.50s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 1832,
      wind: wd,
      temps: "6.90s",
      delay: "11.20s",
      diametre: 16,
    },

    {
      vt: "800px",
      ini: 696,
      wind: wd,
      temps: "8.60s",
      delay: "3.70s",
      diametre: 42,
    },

    {
      vt: "800px",
      ini: 1055,
      wind: wd,
      temps: "11.30s",
      delay: "7.50s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 169,
      wind: wd,
      temps: "5.70s",
      delay: "2.10s",
      diametre: 15,
    },

    {
      vt: "800px",
      ini: 1897,
      wind: wd,
      temps: "13.50s",
      delay: "5.80s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 1526,
      wind: wd,
      temps: "7.00s",
      delay: "1.50s",
      diametre: 25,
    },

    {
      vt: "800px",
      ini: 913,
      wind: wd,
      temps: "11.20s",
      delay: "0.30s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 1235,
      wind: wd,
      temps: "13.40s",
      delay: "2.80s",
      diametre: 13,
    },

    {
      vt: "800px",
      ini: 815,
      wind: wd,
      temps: "13.30s",
      delay: "2.20s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 601,
      wind: wd,
      temps: "7.90s",
      delay: "8.20s",
      diametre: 35,
    },

    {
      vt: "800px",
      ini: 742,
      wind: wd,
      temps: "8.50s",
      delay: "3.30s",
      diametre: 15,
    },

    {
      vt: "800px",
      ini: 1722,
      wind: wd,
      temps: "8.20s",
      delay: "12.10s",
      diametre: 13,
    },

    {
      vt: "800px",
      ini: 1469,
      wind: wd,
      temps: "8.50s",
      delay: "3.80s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 140,
      wind: wd,
      temps: "5.60s",
      delay: "14.00s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 1526,
      wind: wd,
      temps: "10.80s",
      delay: "7.80s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 1626,
      wind: wd,
      temps: "10.20s",
      delay: "6.10s",
      diametre: 30,
    },

    {
      vt: "800px",
      ini: 1418,
      wind: wd,
      temps: "7.30s",
      delay: "0.20s",
      diametre: 39,
    },

    {
      vt: "800px",
      ini: 582,
      wind: wd,
      temps: "11.20s",
      delay: "2.90s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 396,
      wind: wd,
      temps: "10.30s",
      delay: "1.60s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 406,
      wind: wd,
      temps: "8.40s",
      delay: "14.10s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 1326,
      wind: wd,
      temps: "13.20s",
      delay: "3.20s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 86,
      wind: wd,
      temps: "9.70s",
      delay: "7.40s",
      diametre: 16,
    },

    {
      vt: "800px",
      ini: 301,
      wind: wd,
      temps: "10.40s",
      delay: "11.40s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 42,
      wind: wd,
      temps: "8.10s",
      delay: "14.50s",
      diametre: 27,
    },

    {
      vt: "800px",
      ini: 674,
      wind: wd,
      temps: "10.50s",
      delay: "7.00s",
      diametre: 39,
    },

    {
      vt: "800px",
      ini: 1998,
      wind: wd,
      temps: "9.20s",
      delay: "3.70s",
      diametre: 39,
    },

    {
      vt: "800px",
      ini: 117,
      wind: wd,
      temps: "13.20s",
      delay: "1.80s",
      diametre: 29,
    },

    {
      vt: "800px",
      ini: 324,
      wind: wd,
      temps: "13.40s",
      delay: "0.30s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 219,
      wind: wd,
      temps: "10.90s",
      delay: "1.50s",
      diametre: 24,
    },

    {
      vt: "800px",
      ini: 1915,
      wind: wd,
      temps: "6.90s",
      delay: "1.90s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 969,
      wind: wd,
      temps: "6.40s",
      delay: "1.30s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 211,
      wind: wd,
      temps: "7.20s",
      delay: "3.80s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 1224,
      wind: wd,
      temps: "8.80s",
      delay: "4.80s",
      diametre: 12,
    },

    {
      vt: "800px",
      ini: 449,
      wind: wd,
      temps: "8.30s",
      delay: "14.80s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 987,
      wind: wd,
      temps: "9.70s",
      delay: "4.90s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 1663,
      wind: wd,
      temps: "6.70s",
      delay: "2.40s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 1933,
      wind: wd,
      temps: "9.20s",
      delay: "12.00s",
      diametre: 20,
    },

    {
      vt: "800px",
      ini: 324,
      wind: wd,
      temps: "9.40s",
      delay: "11.70s",
      diametre: 39,
    },

    {
      vt: "800px",
      ini: 1245,
      wind: wd,
      temps: "8.70s",
      delay: "0.10s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 778,
      wind: wd,
      temps: "11.70s",
      delay: "11.10s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 284,
      wind: wd,
      temps: "6.60s",
      delay: "14.40s",
      diametre: 30,
    },

    {
      vt: "800px",
      ini: 912,
      wind: wd,
      temps: "9.30s",
      delay: "12.40s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 127,
      wind: wd,
      temps: "13.10s",
      delay: "4.00s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 1630,
      wind: wd,
      temps: "7.30s",
      delay: "9.00s",
      diametre: 30,
    },

    {
      vt: "800px",
      ini: 359,
      wind: wd,
      temps: "7.50s",
      delay: "8.20s",
      diametre: 27,
    },

    {
      vt: "800px",
      ini: 1832,
      wind: wd,
      temps: "7.10s",
      delay: "2.20s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 1857,
      wind: wd,
      temps: "9.50s",
      delay: "1.10s",
      diametre: 35,
    },

    {
      vt: "800px",
      ini: 657,
      wind: wd,
      temps: "11.90s",
      delay: "10.60s",
      diametre: 19,
    },

    {
      vt: "800px",
      ini: 561,
      wind: wd,
      temps: "13.40s",
      delay: "3.80s",
      diametre: 24,
    },

    {
      vt: "800px",
      ini: 1716,
      wind: wd,
      temps: "7.50s",
      delay: "10.40s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 1442,
      wind: wd,
      temps: "9.60s",
      delay: "6.50s",
      diametre: 19,
    },

    {
      vt: "800px",
      ini: 1971,
      wind: wd,
      temps: "6.80s",
      delay: "12.60s",
      diametre: 30,
    },

    {
      vt: "800px",
      ini: 5,
      wind: wd,
      temps: "11.60s",
      delay: "8.40s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 784,
      wind: wd,
      temps: "7.90s",
      delay: "8.40s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 763,
      wind: wd,
      temps: "6.80s",
      delay: "1.90s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 460,
      wind: wd,
      temps: "6.20s",
      delay: "14.60s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 120,
      wind: wd,
      temps: "7.20s",
      delay: "14.80s",
      diametre: 13,
    },

    {
      vt: "800px",
      ini: 319,
      wind: wd,
      temps: "11.10s",
      delay: "9.50s",
      diametre: 27,
    },

    {
      vt: "800px",
      ini: 1063,
      wind: wd,
      temps: "7.50s",
      delay: "6.50s",
      diametre: 30,
    },

    {
      vt: "800px",
      ini: 50,
      wind: wd,
      temps: "13.20s",
      delay: "1.20s",
      diametre: 35,
    },

    {
      vt: "800px",
      ini: 957,
      wind: wd,
      temps: "11.60s",
      delay: "6.50s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 671,
      wind: wd,
      temps: "10.30s",
      delay: "4.20s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 1567,
      wind: wd,
      temps: "8.70s",
      delay: "7.40s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 986,
      wind: wd,
      temps: "11.40s",
      delay: "1.90s",
      diametre: 40,
    },

    {
      vt: "800px",
      ini: 187,
      wind: wd,
      temps: "7.80s",
      delay: "5.30s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 1917,
      wind: wd,
      temps: "8.30s",
      delay: "13.90s",
      diametre: 27,
    },

    {
      vt: "800px",
      ini: 485,
      wind: wd,
      temps: "13.20s",
      delay: "4.70s",
      diametre: 20,
    },

    {
      vt: "800px",
      ini: 508,
      wind: wd,
      temps: "5.70s",
      delay: "4.60s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 1287,
      wind: wd,
      temps: "6.60s",
      delay: "12.50s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 1767,
      wind: wd,
      temps: "6.90s",
      delay: "9.90s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 1129,
      wind: wd,
      temps: "5.60s",
      delay: "8.20s",
      diametre: 42,
    },

    {
      vt: "800px",
      ini: 1788,
      wind: wd,
      temps: "10.60s",
      delay: "9.80s",
      diametre: 39,
    },

    {
      vt: "800px",
      ini: 1905,
      wind: wd,
      temps: "6.20s",
      delay: "14.40s",
      diametre: 16,
    },

    {
      vt: "800px",
      ini: 1869,
      wind: wd,
      temps: "8.20s",
      delay: "4.80s",
      diametre: 29,
    },

    {
      vt: "800px",
      ini: 400,
      wind: wd,
      temps: "8.70s",
      delay: "7.90s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 485,
      wind: wd,
      temps: "11.40s",
      delay: "10.00s",
      diametre: 24,
    },

    {
      vt: "800px",
      ini: 1899,
      wind: wd,
      temps: "8.60s",
      delay: "14.10s",
      diametre: 15,
    },

    {
      vt: "800px",
      ini: 94,
      wind: wd,
      temps: "7.40s",
      delay: "8.50s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 1372,
      wind: wd,
      temps: "10.60s",
      delay: "3.20s",
      diametre: 30,
    },

    {
      vt: "800px",
      ini: 806,
      wind: wd,
      temps: "8.20s",
      delay: "9.00s",
      diametre: 30,
    },

    {
      vt: "800px",
      ini: 1030,
      wind: wd,
      temps: "11.50s",
      delay: "13.30s",
      diametre: 26,
    },

    {
      vt: "800px",
      ini: 945,
      wind: wd,
      temps: "7.40s",
      delay: "13.60s",
      diametre: 33,
    },

    {
      vt: "800px",
      ini: 226,
      wind: wd,
      temps: "7.40s",
      delay: "0.80s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 1415,
      wind: wd,
      temps: "12.80s",
      delay: "7.50s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 826,
      wind: wd,
      temps: "13.30s",
      delay: "3.70s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 699,
      wind: wd,
      temps: "5.90s",
      delay: "11.40s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 278,
      wind: wd,
      temps: "11.20s",
      delay: "12.90s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 75,
      wind: wd,
      temps: "6.80s",
      delay: "2.70s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 1576,
      wind: wd,
      temps: "10.70s",
      delay: "4.10s",
      diametre: 31,
    },

    {
      vt: "800px",
      ini: 388,
      wind: wd,
      temps: "6.10s",
      delay: "0.10s",
      diametre: 27,
    },

    {
      vt: "800px",
      ini: 328,
      wind: wd,
      temps: "7.70s",
      delay: "3.50s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 389,
      wind: wd,
      temps: "9.80s",
      delay: "10.00s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 1976,
      wind: wd,
      temps: "5.80s",
      delay: "0.70s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 260,
      wind: wd,
      temps: "6.40s",
      delay: "8.00s",
      diametre: 16,
    },

    {
      vt: "800px",
      ini: 1091,
      wind: wd,
      temps: "6.20s",
      delay: "2.20s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 496,
      wind: wd,
      temps: "11.40s",
      delay: "13.20s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 1403,
      wind: wd,
      temps: "6.00s",
      delay: "13.60s",
      diametre: 28,
    },

    {
      vt: "800px",
      ini: 1806,
      wind: wd,
      temps: "5.70s",
      delay: "11.30s",
      diametre: 20,
    },

    {
      vt: "800px",
      ini: 1940,
      wind: wd,
      temps: "9.00s",
      delay: "10.60s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 98,
      wind: wd,
      temps: "8.60s",
      delay: "8.00s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 1311,
      wind: wd,
      temps: "5.90s",
      delay: "4.60s",
      diametre: 27,
    },

    {
      vt: "800px",
      ini: 5,
      wind: wd,
      temps: "9.60s",
      delay: "3.50s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 706,
      wind: wd,
      temps: "9.30s",
      delay: "3.10s",
      diametre: 17,
    },

    {
      vt: "800px",
      ini: 686,
      wind: wd,
      temps: "11.30s",
      delay: "7.70s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 750,
      wind: wd,
      temps: "12.00s",
      delay: "6.60s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 873,
      wind: wd,
      temps: "7.30s",
      delay: "10.50s",
      diametre: 24,
    },

    {
      vt: "800px",
      ini: 1778,
      wind: wd,
      temps: "13.30s",
      delay: "0.10s",
      diametre: 30,
    },

    {
      vt: "800px",
      ini: 328,
      wind: wd,
      temps: "12.30s",
      delay: "3.40s",
      diametre: 26,
    },

    {
      vt: "800px",
      ini: 1484,
      wind: wd,
      temps: "11.70s",
      delay: "3.60s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 1955,
      wind: wd,
      temps: "9.30s",
      delay: "2.50s",
      diametre: 34,
    },

    {
      vt: "800px",
      ini: 251,
      wind: wd,
      temps: "10.10s",
      delay: "12.10s",
      diametre: 26,
    },

    {
      vt: "800px",
      ini: 890,
      wind: wd,
      temps: "13.30s",
      delay: "11.00s",
      diametre: 41,
    },

    {
      vt: "800px",
      ini: 718,
      wind: wd,
      temps: "11.30s",
      delay: "7.60s",
      diametre: 29,
    },

    {
      vt: "800px",
      ini: 1862,
      wind: wd,
      temps: "9.20s",
      delay: "0.60s",
      diametre: 32,
    },

    {
      vt: "800px",
      ini: 348,
      wind: wd,
      temps: "8.90s",
      delay: "5.80s",
      diametre: 18,
    },

    {
      vt: "800px",
      ini: 47,
      wind: wd,
      temps: "10.70s",
      delay: "8.40s",
      diametre: 19,
    },

    {
      vt: "800px",
      ini: 1913,
      wind: wd,
      temps: "6.70s",
      delay: "3.50s",
      diametre: 13,
    },

    {
      vt: "800px",
      ini: 1486,
      wind: wd,
      temps: "5.70s",
      delay: "3.90s",
      diametre: 36,
    },

    {
      vt: "800px",
      ini: 877,
      wind: wd,
      temps: "5.90s",
      delay: "13.40s",
      diametre: 20,
    },

    {
      vt: "800px",
      ini: 970,
      wind: wd,
      temps: "12.90s",
      delay: "8.50s",
      diametre: 39,
    },

    {
      vt: "800px",
      ini: 690,
      wind: wd,
      temps: "6.30s",
      delay: "7.60s",
      diametre: 13,
    },

    {
      vt: "800px",
      ini: 1990,
      wind: wd,
      temps: "12.50s",
      delay: "14.40s",
      diametre: 23,
    },

    {
      vt: "800px",
      ini: 953,
      wind: wd,
      temps: "12.80s",
      delay: "3.20s",
      diametre: 37,
    },

    {
      vt: "800px",
      ini: 1042,
      wind: wd,
      temps: "12.80s",
      delay: "3.90s",
      diametre: 38,
    },

    {
      vt: "800px",
      ini: 1307,
      wind: wd,
      temps: "9.50s",
      delay: "7.50s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 1212,
      wind: wd,
      temps: "6.10s",
      delay: "2.70s",
      diametre: 21,
    },

    {
      vt: "800px",
      ini: 1731,
      wind: wd,
      temps: "6.40s",
      delay: "0.50s",
      diametre: 25,
    },

    {
      vt: "800px",
      ini: 1463,
      wind: wd,
      temps: "8.30s",
      delay: "5.80s",
      diametre: 30,
    },

    {
      vt: "800px",
      ini: 1706,
      wind: wd,
      temps: "12.00s",
      delay: "5.30s",
      diametre: 24,
    },

    {
      vt: "800px",
      ini: 583,
      wind: wd,
      temps: "8.60s",
      delay: "8.50s",
      diametre: 14,
    },

    {
      vt: "800px",
      ini: 393,
      wind: wd,
      temps: "6.00s",
      delay: "8.90s",
      diametre: 22,
    },

    {
      vt: "800px",
      ini: 142,
      wind: wd,
      temps: "12.80s",
      delay: "12.20s",
      diametre: 35,
    },
  ];

  return (
    <div className="App">
      <div id="Flake-header">
        <p>{flake.length}flocs</p>
        {flake.map((n, id) => (
          <Floc id={id} flake={n} />
        ))}
      </div>
    </div>
  );
}

export default App;
