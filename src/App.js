import "./App.css";
import Floc from "./Floc";

function App() {
  const wd = 0;
  const flake = [
    {
      vt: "2500%",
      ini: 0,
      wind: wd,
      temps: "8s",
      delay: "0.1s",
      diametre: 30,
    },
    {
      vt: "2400%",
      ini: 8,
      wind: wd,
      temps: "9s",
      delay: "0s",
      diametre: 14,
    },
    {
      vt: "2160%",
      ini: 23,
      wind: wd,
      temps: "9s",
      delay: "1s",
      diametre: 14,
    },
    {
      vt: "2527%",
      ini: 52,
      wind: wd,
      temps: "9.40s",
      delay: "0.00s",
      diametre: 23,
    },

    {
      vt: "2522%",
      ini: 24,
      wind: wd,
      temps: "7.00s",
      delay: "0.10s",
      diametre: 27,
    },

    {
      vt: "2524%",
      ini: 17,
      wind: wd,
      temps: "7.20s",
      delay: "0.00s",
      diametre: 39,
    },

    {
      vt: "2547%",
      ini: 35,
      wind: wd,
      temps: "8.20s",
      delay: "0.10s",
      diametre: 22,
    },

    {
      vt: "2548%",
      ini: 5,
      wind: wd,
      temps: "8.50s",
      delay: "0.10s",
      diametre: 26,
    },

    {
      vt: "2544%",
      ini: 79,
      wind: wd,
      temps: "12.00s",
      delay: "0.00s",
      diametre: 34,
    },

    {
      vt: "2509%",
      ini: 57,
      wind: wd,
      temps: "12.60s",
      delay: "0.00s",
      diametre: 26,
    },

    {
      vt: "2504%",
      ini: 42,
      wind: wd,
      temps: "10.00s",
      delay: "0.00s",
      diametre: 14,
    },

    {
      vt: "2532%",
      ini: 52,
      wind: wd,
      temps: "6.80s",
      delay: "0.10s",
      diametre: 37,
    },

    {
      vt: "2545%",
      ini: 28,
      wind: wd,
      temps: "12.20s",
      delay: "0.10s",
      diametre: 27,
    },

    {
      vt: "2547%",
      ini: 27,
      wind: wd,
      temps: "7.80s",
      delay: "0.10s",
      diametre: 13,
    },

    {
      vt: "2525%",
      ini: 31,
      wind: wd,
      temps: "12.50s",
      delay: "0.10s",
      diametre: 14,
    },

    {
      vt: "2510%",
      ini: 46,
      wind: wd,
      temps: "13.20s",
      delay: "0.00s",
      diametre: 19,
    },

    {
      vt: "2508%",
      ini: 12,
      wind: wd,
      temps: "11.00s",
      delay: "0.00s",
      diametre: 40,
    },

    {
      vt: "2545%",
      ini: 83,
      wind: wd,
      temps: "6.50s",
      delay: "0.00s",
      diametre: 40,
    },

    {
      vt: "2534%",
      ini: 1,
      wind: wd,
      temps: "12.80s",
      delay: "0.00s",
      diametre: 28,
    },

    {
      vt: "2523%",
      ini: 56,
      wind: wd,
      temps: "10.50s",
      delay: "0.10s",
      diametre: 41,
    },

    {
      vt: "2511%",
      ini: 59,
      wind: wd,
      temps: "10.60s",
      delay: "0.00s",
      diametre: 35,
    },

    {
      vt: "2503%",
      ini: 12,
      wind: wd,
      temps: "8.50s",
      delay: "0.10s",
      diametre: 16,
    },

    {
      vt: "2538%",
      ini: 70,
      wind: wd,
      temps: "5.90s",
      delay: "0.00s",
      diametre: 19,
    },

    {
      vt: "2540%",
      ini: 58,
      wind: wd,
      temps: "6.70s",
      delay: "0.10s",
      diametre: 26,
    },

    {
      vt: "2528%",
      ini: 72,
      wind: wd,
      temps: "8.00s",
      delay: "0.00s",
      diametre: 29,
    },

    {
      vt: "2532%",
      ini: 64,
      wind: wd,
      temps: "8.60s",
      delay: "0.00s",
      diametre: 15,
    },

    {
      vt: "2500%",
      ini: 96,
      wind: wd,
      temps: "5.90s",
      delay: "0.00s",
      diametre: 28,
    },

    {
      vt: "2504%",
      ini: 46,
      wind: wd,
      temps: "7.60s",
      delay: "0.10s",
      diametre: 23,
    },

    {
      vt: "2544%",
      ini: 47,
      wind: wd,
      temps: "9.70s",
      delay: "0.10s",
      diametre: 22,
    },

    {
      vt: "2530%",
      ini: 39,
      wind: wd,
      temps: "12.40s",
      delay: "0.10s",
      diametre: 36,
    },

    {
      vt: "2514%",
      ini: 10,
      wind: wd,
      temps: "11.10s",
      delay: "0.00s",
      diametre: 35,
    },

    {
      vt: "2501%",
      ini: 78,
      wind: wd,
      temps: "12.50s",
      delay: "0.00s",
      diametre: 37,
    },

    {
      vt: "2535%",
      ini: 69,
      wind: wd,
      temps: "11.10s",
      delay: "0.00s",
      diametre: 14,
    },

    {
      vt: "2535%",
      ini: 53,
      wind: wd,
      temps: "11.90s",
      delay: "0.00s",
      diametre: 12,
    },

    {
      vt: "2504%",
      ini: 17,
      wind: wd,
      temps: "10.70s",
      delay: "0.10s",
      diametre: 15,
    },

    {
      vt: "2521%",
      ini: 95,
      wind: wd,
      temps: "8.80s",
      delay: "0.10s",
      diametre: 40,
    },

    {
      vt: "2526%",
      ini: 2,
      wind: wd,
      temps: "8.40s",
      delay: "0.10s",
      diametre: 31,
    },

    {
      vt: "2548%",
      ini: 34,
      wind: wd,
      temps: "6.70s",
      delay: "0.10s",
      diametre: 30,
    },

    {
      vt: "2510%",
      ini: 12,
      wind: wd,
      temps: "6.80s",
      delay: "0.00s",
      diametre: 27,
    },

    {
      vt: "2519%",
      ini: 90,
      wind: wd,
      temps: "12.70s",
      delay: "0.10s",
      diametre: 29,
    },

    {
      vt: "2504%",
      ini: 73,
      wind: wd,
      temps: "8.30s",
      delay: "0.10s",
      diametre: 33,
    },

    {
      vt: "2530%",
      ini: 32,
      wind: wd,
      temps: "10.00s",
      delay: "0.10s",
      diametre: 15,
    },

    {
      vt: "2548%",
      ini: 96,
      wind: wd,
      temps: "9.90s",
      delay: "0.00s",
      diametre: 18,
    },

    {
      vt: "2528%",
      ini: 10,
      wind: wd,
      temps: "9.10s",
      delay: "0.10s",
      diametre: 31,
    },

    {
      vt: "2517%",
      ini: 31,
      wind: wd,
      temps: "11.00s",
      delay: "0.10s",
      diametre: 29,
    },

    {
      vt: "2540%",
      ini: 41,
      wind: wd,
      temps: "11.20s",
      delay: "0.00s",
      diametre: 23,
    },

    {
      vt: "2526%",
      ini: 17,
      wind: wd,
      temps: "7.60s",
      delay: "0.10s",
      diametre: 37,
    },

    {
      vt: "2505%",
      ini: 10,
      wind: wd,
      temps: "11.00s",
      delay: "0.00s",
      diametre: 14,
    },

    {
      vt: "2522%",
      ini: 18,
      wind: wd,
      temps: "7.90s",
      delay: "0.00s",
      diametre: 21,
    },

    {
      vt: "2543%",
      ini: 72,
      wind: wd,
      temps: "13.10s",
      delay: "0.00s",
      diametre: 38,
    },

    {
      vt: "2549%",
      ini: 47,
      wind: wd,
      temps: "6.90s",
      delay: "0.00s",
      diametre: 26,
    },

    {
      vt: "2535%",
      ini: 3,
      wind: wd,
      temps: "12.70s",
      delay: "0.00s",
      diametre: 36,
    },

    {
      vt: "2533%",
      ini: 85,
      wind: wd,
      temps: "6.80s",
      delay: "0.00s",
      diametre: 36,
    },

    {
      vt: "2529%",
      ini: 23,
      wind: wd,
      temps: "8.80s",
      delay: "0.10s",
      diametre: 32,
    },

    {
      vt: "2544%",
      ini: 87,
      wind: wd,
      temps: "9.20s",
      delay: "0.10s",
      diametre: 31,
    },

    {
      vt: "2546%",
      ini: 70,
      wind: wd,
      temps: "7.40s",
      delay: "0.10s",
      diametre: 18,
    },

    {
      vt: "2500%",
      ini: 38,
      wind: wd,
      temps: "8.70s",
      delay: "0.10s",
      diametre: 31,
    },

    {
      vt: "2537%",
      ini: 24,
      wind: wd,
      temps: "10.00s",
      delay: "0.10s",
      diametre: 22,
    },

    {
      vt: "2531%",
      ini: 53,
      wind: wd,
      temps: "12.50s",
      delay: "0.10s",
      diametre: 16,
    },

    {
      vt: "2502%",
      ini: 24,
      wind: wd,
      temps: "7.40s",
      delay: "0.10s",
      diametre: 24,
    },

    {
      vt: "2512%",
      ini: 4,
      wind: wd,
      temps: "8.50s",
      delay: "0.10s",
      diametre: 42,
    },

    {
      vt: "2526%",
      ini: 77,
      wind: wd,
      temps: "5.70s",
      delay: "0.00s",
      diametre: 37,
    },

    {
      vt: "2534%",
      ini: 81,
      wind: wd,
      temps: "11.20s",
      delay: "0.00s",
      diametre: 13,
    },

    {
      vt: "2528%",
      ini: 42,
      wind: wd,
      temps: "7.40s",
      delay: "0.00s",
      diametre: 20,
    },

    {
      vt: "2509%",
      ini: 50,
      wind: wd,
      temps: "12.90s",
      delay: "0.10s",
      diametre: 38,
    },

    {
      vt: "2537%",
      ini: 94,
      wind: wd,
      temps: "7.40s",
      delay: "0.10s",
      diametre: 40,
    },

    {
      vt: "2500%",
      ini: 65,
      wind: wd,
      temps: "9.80s",
      delay: "0.00s",
      diametre: 22,
    },

    {
      vt: "2519%",
      ini: 15,
      wind: wd,
      temps: "11.80s",
      delay: "0.10s",
      diametre: 21,
    },

    {
      vt: "2540%",
      ini: 89,
      wind: wd,
      temps: "8.20s",
      delay: "0.00s",
      diametre: 21,
    },

    {
      vt: "2521%",
      ini: 10,
      wind: wd,
      temps: "5.60s",
      delay: "0.00s",
      diametre: 37,
    },

    {
      vt: "2526%",
      ini: 3,
      wind: wd,
      temps: "8.70s",
      delay: "0.00s",
      diametre: 42,
    },

    {
      vt: "2526%",
      ini: 62,
      wind: wd,
      temps: "13.40s",
      delay: "0.10s",
      diametre: 29,
    },

    {
      vt: "2516%",
      ini: 60,
      wind: wd,
      temps: "9.40s",
      delay: "0.10s",
      diametre: 25,
    },

    {
      vt: "2506%",
      ini: 44,
      wind: wd,
      temps: "7.80s",
      delay: "0.00s",
      diametre: 41,
    },

    {
      vt: "2544%",
      ini: 34,
      wind: wd,
      temps: "7.90s",
      delay: "0.10s",
      diametre: 22,
    },

    {
      vt: "2525%",
      ini: 35,
      wind: wd,
      temps: "6.90s",
      delay: "0.10s",
      diametre: 24,
    },

    {
      vt: "2517%",
      ini: 70,
      wind: wd,
      temps: "8.50s",
      delay: "0.10s",
      diametre: 33,
    },

    {
      vt: "2548%",
      ini: 7,
      wind: wd,
      temps: "9.30s",
      delay: "0.10s",
      diametre: 40,
    },

    {
      vt: "2546%",
      ini: 69,
      wind: wd,
      temps: "5.60s",
      delay: "0.10s",
      diametre: 17,
    },

    {
      vt: "2539%",
      ini: 92,
      wind: wd,
      temps: "11.60s",
      delay: "0.10s",
      diametre: 33,
    },

    {
      vt: "2542%",
      ini: 27,
      wind: wd,
      temps: "6.30s",
      delay: "0.00s",
      diametre: 22,
    },

    {
      vt: "2518%",
      ini: 86,
      wind: wd,
      temps: "8.50s",
      delay: "0.00s",
      diametre: 28,
    },

    {
      vt: "2517%",
      ini: 61,
      wind: wd,
      temps: "10.00s",
      delay: "0.00s",
      diametre: 21,
    },

    {
      vt: "2515%",
      ini: 8,
      wind: wd,
      temps: "12.40s",
      delay: "0.10s",
      diametre: 32,
    },

    {
      vt: "2524%",
      ini: 8,
      wind: wd,
      temps: "11.20s",
      delay: "0.10s",
      diametre: 39,
    },

    {
      vt: "2540%",
      ini: 73,
      wind: wd,
      temps: "8.60s",
      delay: "0.00s",
      diametre: 14,
    },

    {
      vt: "2531%",
      ini: 65,
      wind: wd,
      temps: "13.10s",
      delay: "0.00s",
      diametre: 27,
    },

    {
      vt: "2527%",
      ini: 80,
      wind: wd,
      temps: "5.60s",
      delay: "0.00s",
      diametre: 28,
    },

    {
      vt: "2521%",
      ini: 40,
      wind: wd,
      temps: "11.70s",
      delay: "0.10s",
      diametre: 34,
    },

    {
      vt: "2516%",
      ini: 95,
      wind: wd,
      temps: "10.40s",
      delay: "0.00s",
      diametre: 17,
    },

    {
      vt: "2503%",
      ini: 86,
      wind: wd,
      temps: "13.00s",
      delay: "0.00s",
      diametre: 12,
    },

    {
      vt: "2543%",
      ini: 24,
      wind: wd,
      temps: "8.40s",
      delay: "0.10s",
      diametre: 13,
    },

    {
      vt: "2539%",
      ini: 87,
      wind: wd,
      temps: "8.70s",
      delay: "0.10s",
      diametre: 32,
    },

    {
      vt: "2513%",
      ini: 71,
      wind: wd,
      temps: "13.20s",
      delay: "0.00s",
      diametre: 17,
    },

    {
      vt: "2542%",
      ini: 13,
      wind: wd,
      temps: "13.10s",
      delay: "0.00s",
      diametre: 38,
    },

    {
      vt: "2501%",
      ini: 65,
      wind: wd,
      temps: "12.30s",
      delay: "0.00s",
      diametre: 36,
    },

    {
      vt: "2528%",
      ini: 64,
      wind: wd,
      temps: "6.60s",
      delay: "0.10s",
      diametre: 37,
    },

    {
      vt: "2536%",
      ini: 10,
      wind: wd,
      temps: "9.10s",
      delay: "0.10s",
      diametre: 34,
    },

    {
      vt: "2505%",
      ini: 80,
      wind: wd,
      temps: "9.90s",
      delay: "0.10s",
      diametre: 17,
    },

    {
      vt: "2504%",
      ini: 84,
      wind: wd,
      temps: "9.10s",
      delay: "0.00s",
      diametre: 24,
    },

    {
      vt: "2507%",
      ini: 40,
      wind: wd,
      temps: "13.50s",
      delay: "0.10s",
      diametre: 40,
    },

    {
      vt: "2536%",
      ini: 16,
      wind: wd,
      temps: "8.50s",
      delay: "0.00s",
      diametre: 16,
    },

    {
      vt: "2520%",
      ini: 22,
      wind: wd,
      temps: "11.40s",
      delay: "0.10s",
      diametre: 34,
    },

    {
      vt: "2515%",
      ini: 72,
      wind: wd,
      temps: "8.90s",
      delay: "0.10s",
      diametre: 17,
    },

    {
      vt: "2513%",
      ini: 85,
      wind: wd,
      temps: "9.60s",
      delay: "0.10s",
      diametre: 17,
    },

    {
      vt: "2549%",
      ini: 67,
      wind: wd,
      temps: "11.40s",
      delay: "0.10s",
      diametre: 20,
    },

    {
      vt: "2521%",
      ini: 90,
      wind: wd,
      temps: "8.50s",
      delay: "0.00s",
      diametre: 22,
    },

    {
      vt: "2516%",
      ini: 90,
      wind: wd,
      temps: "6.20s",
      delay: "0.00s",
      diametre: 18,
    },

    {
      vt: "2543%",
      ini: 69,
      wind: wd,
      temps: "9.80s",
      delay: "0.00s",
      diametre: 28,
    },

    {
      vt: "2530%",
      ini: 84,
      wind: wd,
      temps: "9.80s",
      delay: "0.10s",
      diametre: 30,
    },

    {
      vt: "2531%",
      ini: 65,
      wind: wd,
      temps: "7.90s",
      delay: "0.00s",
      diametre: 33,
    },

    {
      vt: "2507%",
      ini: 52,
      wind: wd,
      temps: "11.00s",
      delay: "0.10s",
      diametre: 27,
    },

    {
      vt: "2500%",
      ini: 37,
      wind: wd,
      temps: "7.10s",
      delay: "0.10s",
      diametre: 22,
    },

    {
      vt: "2524%",
      ini: 12,
      wind: wd,
      temps: "9.30s",
      delay: "0.10s",
      diametre: 34,
    },

    {
      vt: "2546%",
      ini: 80,
      wind: wd,
      temps: "12.70s",
      delay: "0.00s",
      diametre: 36,
    },

    {
      vt: "2529%",
      ini: 69,
      wind: wd,
      temps: "8.00s",
      delay: "0.00s",
      diametre: 21,
    },

    {
      vt: "2505%",
      ini: 99,
      wind: wd,
      temps: "8.10s",
      delay: "0.10s",
      diametre: 19,
    },

    {
      vt: "2503%",
      ini: 69,
      wind: wd,
      temps: "7.80s",
      delay: "0.10s",
      diametre: 29,
    },

    {
      vt: "2502%",
      ini: 27,
      wind: wd,
      temps: "8.30s",
      delay: "0.00s",
      diametre: 15,
    },

    {
      vt: "2501%",
      ini: 22,
      wind: wd,
      temps: "12.70s",
      delay: "0.00s",
      diametre: 14,
    },

    {
      vt: "2544%",
      ini: 24,
      wind: wd,
      temps: "6.30s",
      delay: "0.00s",
      diametre: 37,
    },

    {
      vt: "2522%",
      ini: 44,
      wind: wd,
      temps: "12.50s",
      delay: "0.10s",
      diametre: 14,
    },

    {
      vt: "2547%",
      ini: 28,
      wind: wd,
      temps: "10.80s",
      delay: "0.10s",
      diametre: 13,
    },

    {
      vt: "2541%",
      ini: 62,
      wind: wd,
      temps: "12.00s",
      delay: "0.10s",
      diametre: 24,
    },

    {
      vt: "2548%",
      ini: 17,
      wind: wd,
      temps: "12.90s",
      delay: "0.00s",
      diametre: 37,
    },

    {
      vt: "2519%",
      ini: 49,
      wind: wd,
      temps: "10.50s",
      delay: "0.00s",
      diametre: 33,
    },

    {
      vt: "2511%",
      ini: 81,
      wind: wd,
      temps: "8.40s",
      delay: "0.10s",
      diametre: 29,
    },

    {
      vt: "2541%",
      ini: 42,
      wind: wd,
      temps: "10.10s",
      delay: "0.10s",
      diametre: 13,
    },

    {
      vt: "2501%",
      ini: 17,
      wind: wd,
      temps: "9.90s",
      delay: "0.00s",
      diametre: 27,
    },

    {
      vt: "2538%",
      ini: 46,
      wind: wd,
      temps: "6.00s",
      delay: "0.00s",
      diametre: 14,
    },

    {
      vt: "2539%",
      ini: 19,
      wind: wd,
      temps: "7.80s",
      delay: "0.00s",
      diametre: 40,
    },

    {
      vt: "2528%",
      ini: 34,
      wind: wd,
      temps: "10.40s",
      delay: "0.00s",
      diametre: 32,
    },

    {
      vt: "2536%",
      ini: 56,
      wind: wd,
      temps: "6.20s",
      delay: "0.00s",
      diametre: 24,
    },

    {
      vt: "2548%",
      ini: 16,
      wind: wd,
      temps: "8.00s",
      delay: "0.10s",
      diametre: 28,
    },

    {
      vt: "2502%",
      ini: 38,
      wind: wd,
      temps: "13.00s",
      delay: "0.10s",
      diametre: 27,
    },

    {
      vt: "2504%",
      ini: 89,
      wind: wd,
      temps: "7.60s",
      delay: "0.10s",
      diametre: 19,
    },

    {
      vt: "2505%",
      ini: 58,
      wind: wd,
      temps: "9.80s",
      delay: "0.10s",
      diametre: 16,
    },

    {
      vt: "2541%",
      ini: 39,
      wind: wd,
      temps: "6.30s",
      delay: "0.10s",
      diametre: 24,
    },

    {
      vt: "2512%",
      ini: 87,
      wind: wd,
      temps: "8.70s",
      delay: "0.10s",
      diametre: 33,
    },

    {
      vt: "2541%",
      ini: 44,
      wind: wd,
      temps: "7.80s",
      delay: "0.10s",
      diametre: 14,
    },

    {
      vt: "2547%",
      ini: 64,
      wind: wd,
      temps: "11.50s",
      delay: "0.00s",
      diametre: 24,
    },

    {
      vt: "2546%",
      ini: 98,
      wind: wd,
      temps: "9.80s",
      delay: "0.00s",
      diametre: 25,
    },

    {
      vt: "2505%",
      ini: 23,
      wind: wd,
      temps: "10.70s",
      delay: "0.00s",
      diametre: 28,
    },

    {
      vt: "2537%",
      ini: 74,
      wind: wd,
      temps: "10.60s",
      delay: "0.10s",
      diametre: 34,
    },

    {
      vt: "2518%",
      ini: 28,
      wind: wd,
      temps: "6.00s",
      delay: "0.00s",
      diametre: 28,
    },

    {
      vt: "2511%",
      ini: 24,
      wind: wd,
      temps: "10.10s",
      delay: "0.00s",
      diametre: 29,
    },

    {
      vt: "2514%",
      ini: 66,
      wind: wd,
      temps: "12.70s",
      delay: "0.10s",
      diametre: 28,
    },

    {
      vt: "2522%",
      ini: 49,
      wind: wd,
      temps: "8.10s",
      delay: "0.10s",
      diametre: 34,
    },

    {
      vt: "2536%",
      ini: 5,
      wind: wd,
      temps: "5.70s",
      delay: "0.10s",
      diametre: 21,
    },

    {
      vt: "2527%",
      ini: 53,
      wind: wd,
      temps: "5.70s",
      delay: "0.00s",
      diametre: 18,
    },

    {
      vt: "2544%",
      ini: 27,
      wind: wd,
      temps: "6.70s",
      delay: "0.00s",
      diametre: 42,
    },

    {
      vt: "2520%",
      ini: 56,
      wind: wd,
      temps: "9.20s",
      delay: "0.00s",
      diametre: 16,
    },

    {
      vt: "2524%",
      ini: 28,
      wind: wd,
      temps: "13.40s",
      delay: "0.10s",
      diametre: 38,
    },

    {
      vt: "2511%",
      ini: 55,
      wind: wd,
      temps: "10.00s",
      delay: "0.10s",
      diametre: 42,
    },

    {
      vt: "2544%",
      ini: 79,
      wind: wd,
      temps: "7.30s",
      delay: "0.10s",
      diametre: 13,
    },

    {
      vt: "2518%",
      ini: 67,
      wind: wd,
      temps: "5.80s",
      delay: "0.10s",
      diametre: 18,
    },

    {
      vt: "2532%",
      ini: 58,
      wind: wd,
      temps: "8.50s",
      delay: "0.10s",
      diametre: 38,
    },

    {
      vt: "2505%",
      ini: 58,
      wind: wd,
      temps: "6.30s",
      delay: "0.10s",
      diametre: 33,
    },

    {
      vt: "2542%",
      ini: 87,
      wind: wd,
      temps: "12.80s",
      delay: "0.00s",
      diametre: 25,
    },

    {
      vt: "2512%",
      ini: 97,
      wind: wd,
      temps: "12.40s",
      delay: "0.00s",
      diametre: 22,
    },

    {
      vt: "2547%",
      ini: 28,
      wind: wd,
      temps: "13.20s",
      delay: "0.00s",
      diametre: 23,
    },

    {
      vt: "2523%",
      ini: 87,
      wind: wd,
      temps: "7.80s",
      delay: "0.10s",
      diametre: 15,
    },

    {
      vt: "2542%",
      ini: 39,
      wind: wd,
      temps: "13.20s",
      delay: "0.00s",
      diametre: 18,
    },

    {
      vt: "2530%",
      ini: 60,
      wind: wd,
      temps: "11.00s",
      delay: "0.10s",
      diametre: 27,
    },

    {
      vt: "2547%",
      ini: 46,
      wind: wd,
      temps: "9.90s",
      delay: "0.00s",
      diametre: 36,
    },

    {
      vt: "2537%",
      ini: 63,
      wind: wd,
      temps: "7.70s",
      delay: "0.10s",
      diametre: 15,
    },

    {
      vt: "2505%",
      ini: 31,
      wind: wd,
      temps: "6.60s",
      delay: "0.10s",
      diametre: 38,
    },

    {
      vt: "2510%",
      ini: 15,
      wind: wd,
      temps: "10.00s",
      delay: "0.10s",
      diametre: 13,
    },

    {
      vt: "2526%",
      ini: 14,
      wind: wd,
      temps: "11.60s",
      delay: "0.10s",
      diametre: 24,
    },

    {
      vt: "2509%",
      ini: 67,
      wind: wd,
      temps: "12.50s",
      delay: "0.00s",
      diametre: 26,
    },

    {
      vt: "2542%",
      ini: 92,
      wind: wd,
      temps: "8.90s",
      delay: "0.00s",
      diametre: 25,
    },

    {
      vt: "2510%",
      ini: 88,
      wind: wd,
      temps: "5.60s",
      delay: "0.00s",
      diametre: 20,
    },

    {
      vt: "2528%",
      ini: 59,
      wind: wd,
      temps: "12.40s",
      delay: "0.00s",
      diametre: 28,
    },

    {
      vt: "2526%",
      ini: 45,
      wind: wd,
      temps: "11.10s",
      delay: "0.10s",
      diametre: 40,
    },

    {
      vt: "2518%",
      ini: 63,
      wind: wd,
      temps: "8.00s",
      delay: "0.00s",
      diametre: 21,
    },

    {
      vt: "2505%",
      ini: 74,
      wind: wd,
      temps: "8.00s",
      delay: "0.00s",
      diametre: 16,
    },

    {
      vt: "2500%",
      ini: 19,
      wind: wd,
      temps: "12.40s",
      delay: "0.10s",
      diametre: 13,
    },

    {
      vt: "2533%",
      ini: 99,
      wind: wd,
      temps: "5.50s",
      delay: "0.10s",
      diametre: 39,
    },

    {
      vt: "2521%",
      ini: 65,
      wind: wd,
      temps: "10.00s",
      delay: "0.10s",
      diametre: 38,
    },

    {
      vt: "2532%",
      ini: 84,
      wind: wd,
      temps: "6.20s",
      delay: "0.10s",
      diametre: 31,
    },

    {
      vt: "2508%",
      ini: 8,
      wind: wd,
      temps: "7.70s",
      delay: "0.10s",
      diametre: 36,
    },

    {
      vt: "2530%",
      ini: 21,
      wind: wd,
      temps: "7.50s",
      delay: "0.00s",
      diametre: 13,
    },

    {
      vt: "2515%",
      ini: 12,
      wind: wd,
      temps: "13.10s",
      delay: "0.00s",
      diametre: 41,
    },

    {
      vt: "2544%",
      ini: 76,
      wind: wd,
      temps: "7.50s",
      delay: "0.10s",
      diametre: 23,
    },

    {
      vt: "2507%",
      ini: 50,
      wind: wd,
      temps: "8.30s",
      delay: "0.00s",
      diametre: 26,
    },

    {
      vt: "2519%",
      ini: 37,
      wind: wd,
      temps: "11.10s",
      delay: "0.00s",
      diametre: 33,
    },

    {
      vt: "2513%",
      ini: 63,
      wind: wd,
      temps: "12.60s",
      delay: "0.10s",
      diametre: 37,
    },

    {
      vt: "2521%",
      ini: 93,
      wind: wd,
      temps: "9.90s",
      delay: "0.10s",
      diametre: 17,
    },

    {
      vt: "2502%",
      ini: 72,
      wind: wd,
      temps: "10.50s",
      delay: "0.10s",
      diametre: 30,
    },

    {
      vt: "2535%",
      ini: 73,
      wind: wd,
      temps: "9.00s",
      delay: "0.00s",
      diametre: 14,
    },

    {
      vt: "2507%",
      ini: 12,
      wind: wd,
      temps: "13.20s",
      delay: "0.10s",
      diametre: 31,
    },

    {
      vt: "2534%",
      ini: 93,
      wind: wd,
      temps: "10.50s",
      delay: "0.00s",
      diametre: 41,
    },

    {
      vt: "2540%",
      ini: 83,
      wind: wd,
      temps: "5.60s",
      delay: "0.10s",
      diametre: 27,
    },

    {
      vt: "2515%",
      ini: 73,
      wind: wd,
      temps: "11.90s",
      delay: "0.10s",
      diametre: 39,
    },

    {
      vt: "2517%",
      ini: 65,
      wind: wd,
      temps: "11.10s",
      delay: "0.10s",
      diametre: 35,
    },

    {
      vt: "2504%",
      ini: 37,
      wind: wd,
      temps: "6.40s",
      delay: "0.00s",
      diametre: 32,
    },

    {
      vt: "2512%",
      ini: 82,
      wind: wd,
      temps: "12.50s",
      delay: "0.10s",
      diametre: 22,
    },

    {
      vt: "2528%",
      ini: 20,
      wind: wd,
      temps: "12.40s",
      delay: "0.00s",
      diametre: 14,
    },

    {
      vt: "2535%",
      ini: 54,
      wind: wd,
      temps: "6.90s",
      delay: "0.00s",
      diametre: 13,
    },

    {
      vt: "2512%",
      ini: 93,
      wind: wd,
      temps: "8.00s",
      delay: "0.10s",
      diametre: 34,
    },

    {
      vt: "2520%",
      ini: 75,
      wind: wd,
      temps: "12.60s",
      delay: "0.00s",
      diametre: 34,
    },

    {
      vt: "2536%",
      ini: 42,
      wind: wd,
      temps: "11.40s",
      delay: "0.10s",
      diametre: 24,
    },

    {
      vt: "2522%",
      ini: 76,
      wind: wd,
      temps: "7.70s",
      delay: "0.10s",
      diametre: 37,
    },

    {
      vt: "2511%",
      ini: 41,
      wind: wd,
      temps: "9.70s",
      delay: "0.00s",
      diametre: 35,
    },

    {
      vt: "2519%",
      ini: 91,
      wind: wd,
      temps: "8.70s",
      delay: "0.00s",
      diametre: 28,
    },

    {
      vt: "2535%",
      ini: 4,
      wind: wd,
      temps: "10.60s",
      delay: "0.10s",
      diametre: 29,
    },

    {
      vt: "2537%",
      ini: 69,
      wind: wd,
      temps: "10.30s",
      delay: "0.10s",
      diametre: 13,
    },

    {
      vt: "2506%",
      ini: 13,
      wind: wd,
      temps: "11.60s",
      delay: "0.00s",
      diametre: 40,
    },

    {
      vt: "2523%",
      ini: 32,
      wind: wd,
      temps: "12.10s",
      delay: "0.10s",
      diametre: 27,
    },

    {
      vt: "2521%",
      ini: 18,
      wind: wd,
      temps: "5.60s",
      delay: "0.10s",
      diametre: 27,
    },

    {
      vt: "2523%",
      ini: 68,
      wind: wd,
      temps: "9.60s",
      delay: "0.10s",
      diametre: 31,
    },

    {
      vt: "2510%",
      ini: 87,
      wind: wd,
      temps: "11.90s",
      delay: "0.10s",
      diametre: 29,
    },

    {
      vt: "2532%",
      ini: 87,
      wind: wd,
      temps: "7.10s",
      delay: "0.10s",
      diametre: 22,
    },

    {
      vt: "2510%",
      ini: 28,
      wind: wd,
      temps: "7.70s",
      delay: "0.10s",
      diametre: 32,
    },

    {
      vt: "2537%",
      ini: 80,
      wind: wd,
      temps: "11.30s",
      delay: "0.00s",
      diametre: 35,
    },

    {
      vt: "2550%",
      ini: 24,
      wind: wd,
      temps: "10.60s",
      delay: "0.00s",
      diametre: 36,
    },

    {
      vt: "2523%",
      ini: 99,
      wind: wd,
      temps: "11.30s",
      delay: "0.00s",
      diametre: 41,
    },

    {
      vt: "2521%",
      ini: 38,
      wind: wd,
      temps: "12.20s",
      delay: "0.10s",
      diametre: 41,
    },

    {
      vt: "2505%",
      ini: 87,
      wind: wd,
      temps: "8.60s",
      delay: "0.00s",
      diametre: 12,
    },

    {
      vt: "2539%",
      ini: 26,
      wind: wd,
      temps: "12.00s",
      delay: "0.10s",
      diametre: 20,
    },

    {
      vt: "2526%",
      ini: 83,
      wind: wd,
      temps: "8.70s",
      delay: "0.00s",
      diametre: 27,
    },

    {
      vt: "2542%",
      ini: 5,
      wind: wd,
      temps: "9.80s",
      delay: "0.00s",
      diametre: 37,
    },

    {
      vt: "2539%",
      ini: 79,
      wind: wd,
      temps: "10.40s",
      delay: "0.00s",
      diametre: 16,
    },

    {
      vt: "2502%",
      ini: 37,
      wind: wd,
      temps: "5.70s",
      delay: "0.00s",
      diametre: 30,
    },

    {
      vt: "2548%",
      ini: 0,
      wind: wd,
      temps: "10.40s",
      delay: "0.00s",
      diametre: 33,
    },

    {
      vt: "2544%",
      ini: 9,
      wind: wd,
      temps: "10.20s",
      delay: "0.00s",
      diametre: 31,
    },

    {
      vt: "2523%",
      ini: 45,
      wind: wd,
      temps: "12.70s",
      delay: "0.00s",
      diametre: 19,
    },

    {
      vt: "2513%",
      ini: 24,
      wind: wd,
      temps: "7.50s",
      delay: "0.10s",
      diametre: 25,
    },

    {
      vt: "2546%",
      ini: 60,
      wind: wd,
      temps: "9.30s",
      delay: "0.10s",
      diametre: 14,
    },

    {
      vt: "2506%",
      ini: 62,
      wind: wd,
      temps: "11.70s",
      delay: "0.10s",
      diametre: 23,
    },

    {
      vt: "2505%",
      ini: 91,
      wind: wd,
      temps: "13.50s",
      delay: "0.10s",
      diametre: 31,
    },

    {
      vt: "2518%",
      ini: 12,
      wind: wd,
      temps: "7.50s",
      delay: "0.10s",
      diametre: 31,
    },

    {
      vt: "2539%",
      ini: 4,
      wind: wd,
      temps: "8.60s",
      delay: "0.10s",
      diametre: 23,
    },

    {
      vt: "2532%",
      ini: 44,
      wind: wd,
      temps: "8.60s",
      delay: "0.10s",
      diametre: 27,
    },

    {
      vt: "2543%",
      ini: 72,
      wind: wd,
      temps: "12.60s",
      delay: "0.10s",
      diametre: 26,
    },

    {
      vt: "2536%",
      ini: 61,
      wind: wd,
      temps: "13.00s",
      delay: "0.00s",
      diametre: 23,
    },

    {
      vt: "2535%",
      ini: 84,
      wind: wd,
      temps: "12.10s",
      delay: "0.00s",
      diametre: 27,
    },

    {
      vt: "2540%",
      ini: 47,
      wind: wd,
      temps: "7.40s",
      delay: "0.10s",
      diametre: 39,
    },

    {
      vt: "2537%",
      ini: 45,
      wind: wd,
      temps: "7.30s",
      delay: "0.10s",
      diametre: 35,
    },

    {
      vt: "2515%",
      ini: 1,
      wind: wd,
      temps: "7.50s",
      delay: "0.00s",
      diametre: 27,
    },

    {
      vt: "2529%",
      ini: 45,
      wind: wd,
      temps: "10.30s",
      delay: "0.10s",
      diametre: 17,
    },

    {
      vt: "2550%",
      ini: 84,
      wind: wd,
      temps: "9.80s",
      delay: "0.00s",
      diametre: 31,
    },

    {
      vt: "2528%",
      ini: 69,
      wind: wd,
      temps: "7.70s",
      delay: "0.10s",
      diametre: 14,
    },

    {
      vt: "2538%",
      ini: 64,
      wind: wd,
      temps: "8.80s",
      delay: "0.00s",
      diametre: 25,
    },

    {
      vt: "2537%",
      ini: 70,
      wind: wd,
      temps: "5.70s",
      delay: "0.00s",
      diametre: 24,
    },

    {
      vt: "2508%",
      ini: 97,
      wind: wd,
      temps: "12.20s",
      delay: "0.10s",
      diametre: 25,
    },

    {
      vt: "2539%",
      ini: 38,
      wind: wd,
      temps: "7.00s",
      delay: "0.10s",
      diametre: 16,
    },

    {
      vt: "2504%",
      ini: 92,
      wind: wd,
      temps: "11.00s",
      delay: "0.00s",
      diametre: 21,
    },

    {
      vt: "2529%",
      ini: 59,
      wind: wd,
      temps: "10.70s",
      delay: "0.10s",
      diametre: 15,
    },

    {
      vt: "2503%",
      ini: 50,
      wind: wd,
      temps: "5.60s",
      delay: "0.10s",
      diametre: 17,
    },

    {
      vt: "2547%",
      ini: 3,
      wind: wd,
      temps: "7.20s",
      delay: "0.00s",
      diametre: 33,
    },
    {
      vt: "2517%",
      ini: 35,
      wind: wd,
      temps: "10.00s",
      delay: "4.20s",
      diametre: 17,
    },

    {
      vt: "2517%",
      ini: 85,
      wind: wd,
      temps: "6.70s",
      delay: "1.20s",
      diametre: 27,
    },

    {
      vt: "2515%",
      ini: 48,
      wind: wd,
      temps: "7.80s",
      delay: "13.40s",
      diametre: 32,
    },

    {
      vt: "2535%",
      ini: 23,
      wind: wd,
      temps: "10.30s",
      delay: "5.40s",
      diametre: 40,
    },

    {
      vt: "2527%",
      ini: 59,
      wind: wd,
      temps: "7.40s",
      delay: "12.80s",
      diametre: 39,
    },

    {
      vt: "2548%",
      ini: 31,
      wind: wd,
      temps: "10.20s",
      delay: "0.40s",
      diametre: 41,
    },

    {
      vt: "2527%",
      ini: 49,
      wind: wd,
      temps: "8.20s",
      delay: "7.70s",
      diametre: 31,
    },

    {
      vt: "2511%",
      ini: 3,
      wind: wd,
      temps: "13.30s",
      delay: "9.90s",
      diametre: 35,
    },

    {
      vt: "2529%",
      ini: 36,
      wind: wd,
      temps: "7.20s",
      delay: "4.00s",
      diametre: 21,
    },

    {
      vt: "2539%",
      ini: 10,
      wind: wd,
      temps: "6.80s",
      delay: "0.50s",
      diametre: 37,
    },

    {
      vt: "2505%",
      ini: 14,
      wind: wd,
      temps: "8.80s",
      delay: "14.20s",
      diametre: 28,
    },

    {
      vt: "2548%",
      ini: 75,
      wind: wd,
      temps: "9.20s",
      delay: "13.10s",
      diametre: 22,
    },

    {
      vt: "2537%",
      ini: 3,
      wind: wd,
      temps: "9.00s",
      delay: "1.20s",
      diametre: 24,
    },

    {
      vt: "2511%",
      ini: 45,
      wind: wd,
      temps: "8.50s",
      delay: "11.20s",
      diametre: 40,
    },

    {
      vt: "2510%",
      ini: 32,
      wind: wd,
      temps: "11.40s",
      delay: "9.40s",
      diametre: 17,
    },

    {
      vt: "2508%",
      ini: 72,
      wind: wd,
      temps: "9.40s",
      delay: "0.20s",
      diametre: 40,
    },

    {
      vt: "2501%",
      ini: 81,
      wind: wd,
      temps: "8.40s",
      delay: "8.00s",
      diametre: 14,
    },

    {
      vt: "2506%",
      ini: 41,
      wind: wd,
      temps: "11.00s",
      delay: "4.20s",
      diametre: 32,
    },

    {
      vt: "2539%",
      ini: 27,
      wind: wd,
      temps: "8.90s",
      delay: "5.80s",
      diametre: 18,
    },

    {
      vt: "2512%",
      ini: 61,
      wind: wd,
      temps: "6.30s",
      delay: "11.10s",
      diametre: 37,
    },

    {
      vt: "2542%",
      ini: 82,
      wind: wd,
      temps: "9.20s",
      delay: "13.60s",
      diametre: 24,
    },

    {
      vt: "2520%",
      ini: 26,
      wind: wd,
      temps: "12.40s",
      delay: "3.60s",
      diametre: 16,
    },

    {
      vt: "2509%",
      ini: 87,
      wind: wd,
      temps: "8.60s",
      delay: "2.50s",
      diametre: 13,
    },

    {
      vt: "2513%",
      ini: 83,
      wind: wd,
      temps: "9.80s",
      delay: "2.70s",
      diametre: 30,
    },

    {
      vt: "2542%",
      ini: 16,
      wind: wd,
      temps: "9.90s",
      delay: "9.60s",
      diametre: 32,
    },

    {
      vt: "2518%",
      ini: 59,
      wind: wd,
      temps: "13.20s",
      delay: "6.00s",
      diametre: 39,
    },

    {
      vt: "2528%",
      ini: 23,
      wind: wd,
      temps: "6.50s",
      delay: "9.60s",
      diametre: 21,
    },

    {
      vt: "2509%",
      ini: 69,
      wind: wd,
      temps: "11.10s",
      delay: "10.60s",
      diametre: 30,
    },

    {
      vt: "2507%",
      ini: 67,
      wind: wd,
      temps: "13.30s",
      delay: "8.80s",
      diametre: 22,
    },

    {
      vt: "2510%",
      ini: 24,
      wind: wd,
      temps: "9.10s",
      delay: "10.90s",
      diametre: 15,
    },

    {
      vt: "2531%",
      ini: 16,
      wind: wd,
      temps: "9.90s",
      delay: "3.60s",
      diametre: 26,
    },

    {
      vt: "2539%",
      ini: 29,
      wind: wd,
      temps: "5.50s",
      delay: "3.50s",
      diametre: 42,
    },

    {
      vt: "2540%",
      ini: 92,
      wind: wd,
      temps: "8.90s",
      delay: "13.30s",
      diametre: 23,
    },

    {
      vt: "2510%",
      ini: 15,
      wind: wd,
      temps: "12.00s",
      delay: "1.40s",
      diametre: 30,
    },

    {
      vt: "2512%",
      ini: 51,
      wind: wd,
      temps: "11.50s",
      delay: "0.00s",
      diametre: 22,
    },

    {
      vt: "2514%",
      ini: 81,
      wind: wd,
      temps: "13.40s",
      delay: "7.80s",
      diametre: 26,
    },

    {
      vt: "2528%",
      ini: 57,
      wind: wd,
      temps: "10.00s",
      delay: "14.50s",
      diametre: 15,
    },

    {
      vt: "2510%",
      ini: 90,
      wind: wd,
      temps: "8.60s",
      delay: "4.10s",
      diametre: 16,
    },

    {
      vt: "2522%",
      ini: 29,
      wind: wd,
      temps: "11.70s",
      delay: "12.50s",
      diametre: 30,
    },

    {
      vt: "2533%",
      ini: 68,
      wind: wd,
      temps: "8.20s",
      delay: "14.70s",
      diametre: 13,
    },

    {
      vt: "2506%",
      ini: 12,
      wind: wd,
      temps: "7.50s",
      delay: "2.90s",
      diametre: 25,
    },

    {
      vt: "2530%",
      ini: 47,
      wind: wd,
      temps: "11.10s",
      delay: "10.50s",
      diametre: 22,
    },

    {
      vt: "2548%",
      ini: 2,
      wind: wd,
      temps: "7.90s",
      delay: "10.10s",
      diametre: 20,
    },

    {
      vt: "2533%",
      ini: 51,
      wind: wd,
      temps: "11.70s",
      delay: "7.20s",
      diametre: 16,
    },

    {
      vt: "2519%",
      ini: 74,
      wind: wd,
      temps: "10.60s",
      delay: "9.20s",
      diametre: 15,
    },

    {
      vt: "2534%",
      ini: 47,
      wind: wd,
      temps: "13.10s",
      delay: "6.70s",
      diametre: 34,
    },

    {
      vt: "2519%",
      ini: 83,
      wind: wd,
      temps: "8.70s",
      delay: "14.40s",
      diametre: 15,
    },

    {
      vt: "2521%",
      ini: 9,
      wind: wd,
      temps: "7.30s",
      delay: "10.10s",
      diametre: 32,
    },

    {
      vt: "2518%",
      ini: 65,
      wind: wd,
      temps: "12.50s",
      delay: "5.50s",
      diametre: 16,
    },

    {
      vt: "2530%",
      ini: 93,
      wind: wd,
      temps: "5.80s",
      delay: "14.80s",
      diametre: 31,
    },

    {
      vt: "2549%",
      ini: 25,
      wind: wd,
      temps: "6.50s",
      delay: "1.20s",
      diametre: 40,
    },

    {
      vt: "2548%",
      ini: 71,
      wind: wd,
      temps: "12.60s",
      delay: "4.50s",
      diametre: 29,
    },

    {
      vt: "2509%",
      ini: 26,
      wind: wd,
      temps: "10.30s",
      delay: "2.80s",
      diametre: 12,
    },

    {
      vt: "2528%",
      ini: 30,
      wind: wd,
      temps: "11.90s",
      delay: "3.20s",
      diametre: 22,
    },

    {
      vt: "2542%",
      ini: 66,
      wind: wd,
      temps: "7.60s",
      delay: "1.50s",
      diametre: 15,
    },

    {
      vt: "2507%",
      ini: 50,
      wind: wd,
      temps: "10.50s",
      delay: "15.00s",
      diametre: 20,
    },

    {
      vt: "2524%",
      ini: 11,
      wind: wd,
      temps: "6.10s",
      delay: "8.50s",
      diametre: 42,
    },

    {
      vt: "2532%",
      ini: 43,
      wind: wd,
      temps: "11.10s",
      delay: "2.50s",
      diametre: 30,
    },

    {
      vt: "2547%",
      ini: 84,
      wind: wd,
      temps: "11.70s",
      delay: "6.60s",
      diametre: 31,
    },

    {
      vt: "2527%",
      ini: 73,
      wind: wd,
      temps: "7.40s",
      delay: "2.50s",
      diametre: 12,
    },

    {
      vt: "2506%",
      ini: 9,
      wind: wd,
      temps: "7.00s",
      delay: "0.60s",
      diametre: 28,
    },

    {
      vt: "2540%",
      ini: 46,
      wind: wd,
      temps: "11.30s",
      delay: "1.30s",
      diametre: 18,
    },

    {
      vt: "2515%",
      ini: 10,
      wind: wd,
      temps: "10.30s",
      delay: "13.30s",
      diametre: 23,
    },

    {
      vt: "2542%",
      ini: 17,
      wind: wd,
      temps: "5.60s",
      delay: "3.80s",
      diametre: 15,
    },

    {
      vt: "2511%",
      ini: 78,
      wind: wd,
      temps: "13.50s",
      delay: "1.00s",
      diametre: 13,
    },

    {
      vt: "2537%",
      ini: 98,
      wind: wd,
      temps: "12.20s",
      delay: "2.40s",
      diametre: 26,
    },

    {
      vt: "2512%",
      ini: 99,
      wind: wd,
      temps: "5.70s",
      delay: "8.00s",
      diametre: 24,
    },

    {
      vt: "2500%",
      ini: 98,
      wind: wd,
      temps: "7.10s",
      delay: "1.70s",
      diametre: 15,
    },

    {
      vt: "2520%",
      ini: 70,
      wind: wd,
      temps: "6.80s",
      delay: "1.60s",
      diametre: 41,
    },

    {
      vt: "2536%",
      ini: 2,
      wind: wd,
      temps: "9.70s",
      delay: "8.10s",
      diametre: 34,
    },

    {
      vt: "2537%",
      ini: 51,
      wind: wd,
      temps: "8.20s",
      delay: "0.50s",
      diametre: 32,
    },

    {
      vt: "2503%",
      ini: 68,
      wind: wd,
      temps: "11.90s",
      delay: "12.50s",
      diametre: 13,
    },

    {
      vt: "2531%",
      ini: 90,
      wind: wd,
      temps: "13.20s",
      delay: "3.80s",
      diametre: 23,
    },

    {
      vt: "2513%",
      ini: 55,
      wind: wd,
      temps: "13.10s",
      delay: "2.10s",
      diametre: 13,
    },

    {
      vt: "2536%",
      ini: 28,
      wind: wd,
      temps: "7.50s",
      delay: "11.90s",
      diametre: 28,
    },

    {
      vt: "2538%",
      ini: 17,
      wind: wd,
      temps: "7.10s",
      delay: "8.70s",
      diametre: 36,
    },

    {
      vt: "2548%",
      ini: 6,
      wind: wd,
      temps: "6.80s",
      delay: "0.40s",
      diametre: 25,
    },

    {
      vt: "2545%",
      ini: 55,
      wind: wd,
      temps: "7.20s",
      delay: "9.70s",
      diametre: 13,
    },

    {
      vt: "2529%",
      ini: 17,
      wind: wd,
      temps: "9.10s",
      delay: "7.70s",
      diametre: 17,
    },

    {
      vt: "2532%",
      ini: 100,
      wind: wd,
      temps: "6.70s",
      delay: "13.90s",
      diametre: 26,
    },

    {
      vt: "2502%",
      ini: 15,
      wind: wd,
      temps: "9.30s",
      delay: "12.40s",
      diametre: 22,
    },

    {
      vt: "2538%",
      ini: 1,
      wind: wd,
      temps: "6.70s",
      delay: "4.50s",
      diametre: 28,
    },

    {
      vt: "2530%",
      ini: 36,
      wind: wd,
      temps: "13.30s",
      delay: "9.00s",
      diametre: 41,
    },

    {
      vt: "2504%",
      ini: 15,
      wind: wd,
      temps: "10.30s",
      delay: "3.60s",
      diametre: 20,
    },

    {
      vt: "2526%",
      ini: 32,
      wind: wd,
      temps: "12.50s",
      delay: "7.10s",
      diametre: 23,
    },

    {
      vt: "2508%",
      ini: 26,
      wind: wd,
      temps: "8.50s",
      delay: "14.50s",
      diametre: 34,
    },

    {
      vt: "2530%",
      ini: 70,
      wind: wd,
      temps: "11.30s",
      delay: "14.80s",
      diametre: 30,
    },

    {
      vt: "2539%",
      ini: 12,
      wind: wd,
      temps: "12.70s",
      delay: "7.40s",
      diametre: 19,
    },

    {
      vt: "2506%",
      ini: 48,
      wind: wd,
      temps: "9.50s",
      delay: "5.50s",
      diametre: 28,
    },

    {
      vt: "2506%",
      ini: 46,
      wind: wd,
      temps: "11.30s",
      delay: "13.10s",
      diametre: 17,
    },

    {
      vt: "2527%",
      ini: 1,
      wind: wd,
      temps: "11.50s",
      delay: "12.20s",
      diametre: 30,
    },

    {
      vt: "2511%",
      ini: 17,
      wind: wd,
      temps: "11.90s",
      delay: "2.00s",
      diametre: 34,
    },

    {
      vt: "2537%",
      ini: 80,
      wind: wd,
      temps: "8.80s",
      delay: "12.30s",
      diametre: 21,
    },

    {
      vt: "2539%",
      ini: 36,
      wind: wd,
      temps: "13.00s",
      delay: "10.70s",
      diametre: 16,
    },

    {
      vt: "2513%",
      ini: 60,
      wind: wd,
      temps: "11.30s",
      delay: "7.30s",
      diametre: 40,
    },

    {
      vt: "2523%",
      ini: 78,
      wind: wd,
      temps: "12.30s",
      delay: "6.80s",
      diametre: 39,
    },

    {
      vt: "2507%",
      ini: 5,
      wind: wd,
      temps: "13.20s",
      delay: "14.90s",
      diametre: 17,
    },

    {
      vt: "2544%",
      ini: 46,
      wind: wd,
      temps: "12.90s",
      delay: "6.00s",
      diametre: 37,
    },

    {
      vt: "2509%",
      ini: 9,
      wind: wd,
      temps: "6.90s",
      delay: "9.30s",
      diametre: 29,
    },

    {
      vt: "2549%",
      ini: 95,
      wind: wd,
      temps: "10.40s",
      delay: "14.30s",
      diametre: 15,
    },

    {
      vt: "2535%",
      ini: 65,
      wind: wd,
      temps: "13.20s",
      delay: "14.50s",
      diametre: 15,
    },

    {
      vt: "2502%",
      ini: 17,
      wind: wd,
      temps: "5.70s",
      delay: "2.30s",
      diametre: 29,
    },

    {
      vt: "2512%",
      ini: 47,
      wind: wd,
      temps: "12.90s",
      delay: "5.30s",
      diametre: 37,
    },

    {
      vt: "2545%",
      ini: 72,
      wind: wd,
      temps: "7.20s",
      delay: "2.70s",
      diametre: 42,
    },

    {
      vt: "2535%",
      ini: 60,
      wind: wd,
      temps: "9.60s",
      delay: "6.50s",
      diametre: 13,
    },

    {
      vt: "2500%",
      ini: 79,
      wind: wd,
      temps: "5.70s",
      delay: "4.10s",
      diametre: 36,
    },

    {
      vt: "2537%",
      ini: 85,
      wind: wd,
      temps: "7.50s",
      delay: "8.40s",
      diametre: 33,
    },

    {
      vt: "2512%",
      ini: 3,
      wind: wd,
      temps: "12.00s",
      delay: "9.80s",
      diametre: 26,
    },

    {
      vt: "2536%",
      ini: 88,
      wind: wd,
      temps: "10.70s",
      delay: "7.60s",
      diametre: 26,
    },

    {
      vt: "2548%",
      ini: 28,
      wind: wd,
      temps: "6.60s",
      delay: "3.60s",
      diametre: 15,
    },

    {
      vt: "2515%",
      ini: 36,
      wind: wd,
      temps: "7.50s",
      delay: "6.20s",
      diametre: 13,
    },

    {
      vt: "2522%",
      ini: 100,
      wind: wd,
      temps: "8.20s",
      delay: "2.80s",
      diametre: 30,
    },

    {
      vt: "2527%",
      ini: 89,
      wind: wd,
      temps: "10.00s",
      delay: "3.10s",
      diametre: 20,
    },

    {
      vt: "2530%",
      ini: 7,
      wind: wd,
      temps: "10.60s",
      delay: "7.50s",
      diametre: 31,
    },

    {
      vt: "2548%",
      ini: 18,
      wind: wd,
      temps: "13.20s",
      delay: "12.70s",
      diametre: 31,
    },

    {
      vt: "2501%",
      ini: 94,
      wind: wd,
      temps: "6.30s",
      delay: "4.60s",
      diametre: 40,
    },

    {
      vt: "2510%",
      ini: 3,
      wind: wd,
      temps: "11.30s",
      delay: "0.50s",
      diametre: 35,
    },

    {
      vt: "2516%",
      ini: 54,
      wind: wd,
      temps: "10.30s",
      delay: "8.10s",
      diametre: 28,
    },

    {
      vt: "2510%",
      ini: 69,
      wind: wd,
      temps: "11.20s",
      delay: "5.90s",
      diametre: 16,
    },

    {
      vt: "2528%",
      ini: 95,
      wind: wd,
      temps: "11.40s",
      delay: "1.50s",
      diametre: 39,
    },

    {
      vt: "2529%",
      ini: 56,
      wind: wd,
      temps: "9.80s",
      delay: "2.50s",
      diametre: 27,
    },

    {
      vt: "2508%",
      ini: 85,
      wind: wd,
      temps: "7.20s",
      delay: "10.80s",
      diametre: 36,
    },

    {
      vt: "2511%",
      ini: 12,
      wind: wd,
      temps: "6.50s",
      delay: "13.60s",
      diametre: 16,
    },

    {
      vt: "2532%",
      ini: 74,
      wind: wd,
      temps: "6.30s",
      delay: "2.10s",
      diametre: 33,
    },

    {
      vt: "2550%",
      ini: 17,
      wind: wd,
      temps: "13.00s",
      delay: "12.30s",
      diametre: 25,
    },

    {
      vt: "2546%",
      ini: 18,
      wind: wd,
      temps: "7.10s",
      delay: "5.20s",
      diametre: 33,
    },

    {
      vt: "2504%",
      ini: 32,
      wind: wd,
      temps: "8.90s",
      delay: "9.50s",
      diametre: 25,
    },

    {
      vt: "2513%",
      ini: 11,
      wind: wd,
      temps: "7.90s",
      delay: "12.90s",
      diametre: 17,
    },

    {
      vt: "2520%",
      ini: 10,
      wind: wd,
      temps: "8.80s",
      delay: "3.00s",
      diametre: 36,
    },

    {
      vt: "2548%",
      ini: 68,
      wind: wd,
      temps: "12.40s",
      delay: "7.40s",
      diametre: 34,
    },

    {
      vt: "2502%",
      ini: 38,
      wind: wd,
      temps: "8.80s",
      delay: "3.10s",
      diametre: 20,
    },

    {
      vt: "2509%",
      ini: 28,
      wind: wd,
      temps: "11.90s",
      delay: "14.00s",
      diametre: 31,
    },

    {
      vt: "2537%",
      ini: 62,
      wind: wd,
      temps: "6.60s",
      delay: "9.50s",
      diametre: 17,
    },

    {
      vt: "2506%",
      ini: 61,
      wind: wd,
      temps: "6.80s",
      delay: "1.60s",
      diametre: 39,
    },

    {
      vt: "2547%",
      ini: 32,
      wind: wd,
      temps: "11.30s",
      delay: "14.70s",
      diametre: 16,
    },

    {
      vt: "2533%",
      ini: 79,
      wind: wd,
      temps: "11.50s",
      delay: "3.10s",
      diametre: 27,
    },

    {
      vt: "2535%",
      ini: 23,
      wind: wd,
      temps: "8.90s",
      delay: "3.80s",
      diametre: 39,
    },

    {
      vt: "2528%",
      ini: 54,
      wind: wd,
      temps: "9.00s",
      delay: "12.30s",
      diametre: 27,
    },

    {
      vt: "2531%",
      ini: 15,
      wind: wd,
      temps: "11.30s",
      delay: "4.20s",
      diametre: 33,
    },

    {
      vt: "2509%",
      ini: 91,
      wind: wd,
      temps: "6.80s",
      delay: "8.40s",
      diametre: 22,
    },

    {
      vt: "2535%",
      ini: 92,
      wind: wd,
      temps: "7.40s",
      delay: "13.50s",
      diametre: 24,
    },

    {
      vt: "2526%",
      ini: 45,
      wind: wd,
      temps: "7.50s",
      delay: "0.90s",
      diametre: 38,
    },

    {
      vt: "2524%",
      ini: 77,
      wind: wd,
      temps: "11.20s",
      delay: "15.00s",
      diametre: 29,
    },

    {
      vt: "2533%",
      ini: 66,
      wind: wd,
      temps: "9.20s",
      delay: "5.30s",
      diametre: 20,
    },

    {
      vt: "2514%",
      ini: 33,
      wind: wd,
      temps: "6.70s",
      delay: "8.40s",
      diametre: 28,
    },

    {
      vt: "2544%",
      ini: 29,
      wind: wd,
      temps: "11.60s",
      delay: "13.50s",
      diametre: 38,
    },

    {
      vt: "2546%",
      ini: 83,
      wind: wd,
      temps: "11.70s",
      delay: "1.10s",
      diametre: 34,
    },

    {
      vt: "2527%",
      ini: 86,
      wind: wd,
      temps: "12.80s",
      delay: "12.40s",
      diametre: 27,
    },

    {
      vt: "2534%",
      ini: 60,
      wind: wd,
      temps: "7.90s",
      delay: "0.40s",
      diametre: 39,
    },

    {
      vt: "2501%",
      ini: 22,
      wind: wd,
      temps: "7.60s",
      delay: "2.20s",
      diametre: 35,
    },

    {
      vt: "2507%",
      ini: 25,
      wind: wd,
      temps: "12.90s",
      delay: "5.70s",
      diametre: 12,
    },

    {
      vt: "2512%",
      ini: 90,
      wind: wd,
      temps: "8.20s",
      delay: "15.00s",
      diametre: 14,
    },

    {
      vt: "2501%",
      ini: 36,
      wind: wd,
      temps: "11.70s",
      delay: "1.90s",
      diametre: 34,
    },

    {
      vt: "2509%",
      ini: 54,
      wind: wd,
      temps: "7.40s",
      delay: "2.90s",
      diametre: 17,
    },

    {
      vt: "2533%",
      ini: 13,
      wind: wd,
      temps: "12.70s",
      delay: "6.90s",
      diametre: 27,
    },

    {
      vt: "2538%",
      ini: 3,
      wind: wd,
      temps: "11.30s",
      delay: "9.00s",
      diametre: 36,
    },

    {
      vt: "2515%",
      ini: 11,
      wind: wd,
      temps: "13.30s",
      delay: "1.20s",
      diametre: 15,
    },

    {
      vt: "2506%",
      ini: 22,
      wind: wd,
      temps: "10.70s",
      delay: "2.20s",
      diametre: 33,
    },

    {
      vt: "2516%",
      ini: 40,
      wind: wd,
      temps: "7.50s",
      delay: "9.70s",
      diametre: 21,
    },

    {
      vt: "2529%",
      ini: 48,
      wind: wd,
      temps: "6.60s",
      delay: "7.40s",
      diametre: 28,
    },

    {
      vt: "2517%",
      ini: 81,
      wind: wd,
      temps: "9.70s",
      delay: "7.60s",
      diametre: 20,
    },

    {
      vt: "2524%",
      ini: 39,
      wind: wd,
      temps: "10.50s",
      delay: "9.80s",
      diametre: 21,
    },

    {
      vt: "2542%",
      ini: 5,
      wind: wd,
      temps: "6.40s",
      delay: "1.10s",
      diametre: 13,
    },

    {
      vt: "2521%",
      ini: 60,
      wind: wd,
      temps: "9.90s",
      delay: "1.40s",
      diametre: 41,
    },

    {
      vt: "2521%",
      ini: 63,
      wind: wd,
      temps: "6.10s",
      delay: "8.70s",
      diametre: 24,
    },

    {
      vt: "2515%",
      ini: 15,
      wind: wd,
      temps: "9.20s",
      delay: "1.10s",
      diametre: 22,
    },

    {
      vt: "2500%",
      ini: 21,
      wind: wd,
      temps: "7.10s",
      delay: "0.80s",
      diametre: 42,
    },

    {
      vt: "2536%",
      ini: 93,
      wind: wd,
      temps: "12.80s",
      delay: "4.80s",
      diametre: 29,
    },

    {
      vt: "2538%",
      ini: 10,
      wind: wd,
      temps: "9.90s",
      delay: "11.30s",
      diametre: 24,
    },

    {
      vt: "2512%",
      ini: 74,
      wind: wd,
      temps: "6.00s",
      delay: "4.20s",
      diametre: 36,
    },

    {
      vt: "2518%",
      ini: 21,
      wind: wd,
      temps: "9.50s",
      delay: "5.30s",
      diametre: 26,
    },

    {
      vt: "2538%",
      ini: 88,
      wind: wd,
      temps: "7.20s",
      delay: "7.40s",
      diametre: 29,
    },

    {
      vt: "2545%",
      ini: 3,
      wind: wd,
      temps: "9.70s",
      delay: "10.20s",
      diametre: 41,
    },

    {
      vt: "2547%",
      ini: 84,
      wind: wd,
      temps: "9.80s",
      delay: "12.70s",
      diametre: 39,
    },

    {
      vt: "2525%",
      ini: 34,
      wind: wd,
      temps: "7.90s",
      delay: "12.00s",
      diametre: 27,
    },

    {
      vt: "2521%",
      ini: 25,
      wind: wd,
      temps: "11.40s",
      delay: "12.20s",
      diametre: 29,
    },

    {
      vt: "2536%",
      ini: 5,
      wind: wd,
      temps: "12.40s",
      delay: "10.40s",
      diametre: 23,
    },

    {
      vt: "2511%",
      ini: 44,
      wind: wd,
      temps: "8.80s",
      delay: "13.20s",
      diametre: 37,
    },

    {
      vt: "2548%",
      ini: 12,
      wind: wd,
      temps: "11.50s",
      delay: "12.70s",
      diametre: 39,
    },

    {
      vt: "2538%",
      ini: 7,
      wind: wd,
      temps: "7.90s",
      delay: "11.50s",
      diametre: 42,
    },

    {
      vt: "2528%",
      ini: 62,
      wind: wd,
      temps: "9.40s",
      delay: "7.50s",
      diametre: 14,
    },

    {
      vt: "2511%",
      ini: 75,
      wind: wd,
      temps: "12.60s",
      delay: "2.60s",
      diametre: 24,
    },

    {
      vt: "2526%",
      ini: 11,
      wind: wd,
      temps: "12.20s",
      delay: "6.50s",
      diametre: 32,
    },

    {
      vt: "2507%",
      ini: 29,
      wind: wd,
      temps: "11.40s",
      delay: "1.60s",
      diametre: 40,
    },

    {
      vt: "2538%",
      ini: 80,
      wind: wd,
      temps: "10.30s",
      delay: "6.20s",
      diametre: 20,
    },

    {
      vt: "2529%",
      ini: 92,
      wind: wd,
      temps: "11.60s",
      delay: "1.30s",
      diametre: 19,
    },

    {
      vt: "2518%",
      ini: 76,
      wind: wd,
      temps: "13.30s",
      delay: "11.70s",
      diametre: 31,
    },

    {
      vt: "2511%",
      ini: 26,
      wind: wd,
      temps: "7.70s",
      delay: "11.50s",
      diametre: 41,
    },

    {
      vt: "2522%",
      ini: 18,
      wind: wd,
      temps: "11.60s",
      delay: "11.60s",
      diametre: 23,
    },

    {
      vt: "2520%",
      ini: 62,
      wind: wd,
      temps: "8.60s",
      delay: "10.40s",
      diametre: 20,
    },

    {
      vt: "2522%",
      ini: 63,
      wind: wd,
      temps: "12.00s",
      delay: "8.10s",
      diametre: 25,
    },

    {
      vt: "2522%",
      ini: 28,
      wind: wd,
      temps: "7.80s",
      delay: "5.30s",
      diametre: 27,
    },

    {
      vt: "2539%",
      ini: 76,
      wind: wd,
      temps: "10.30s",
      delay: "14.70s",
      diametre: 35,
    },

    {
      vt: "2515%",
      ini: 76,
      wind: wd,
      temps: "7.70s",
      delay: "9.90s",
      diametre: 36,
    },

    {
      vt: "2536%",
      ini: 11,
      wind: wd,
      temps: "12.20s",
      delay: "12.60s",
      diametre: 41,
    },

    {
      vt: "2517%",
      ini: 31,
      wind: wd,
      temps: "11.90s",
      delay: "8.40s",
      diametre: 20,
    },

    {
      vt: "2513%",
      ini: 68,
      wind: wd,
      temps: "8.60s",
      delay: "10.10s",
      diametre: 38,
    },

    {
      vt: "2517%",
      ini: 82,
      wind: wd,
      temps: "11.30s",
      delay: "6.00s",
      diametre: 41,
    },

    {
      vt: "2540%",
      ini: 52,
      wind: wd,
      temps: "6.40s",
      delay: "10.20s",
      diametre: 36,
    },

    {
      vt: "2525%",
      ini: 92,
      wind: wd,
      temps: "9.50s",
      delay: "2.80s",
      diametre: 28,
    },

    {
      vt: "2535%",
      ini: 5,
      wind: wd,
      temps: "6.50s",
      delay: "7.20s",
      diametre: 22,
    },

    {
      vt: "2542%",
      ini: 68,
      wind: wd,
      temps: "6.90s",
      delay: "14.70s",
      diametre: 21,
    },

    {
      vt: "2511%",
      ini: 99,
      wind: wd,
      temps: "12.10s",
      delay: "3.70s",
      diametre: 22,
    },

    {
      vt: "2513%",
      ini: 97,
      wind: wd,
      temps: "8.60s",
      delay: "0.50s",
      diametre: 20,
    },

    {
      vt: "2506%",
      ini: 33,
      wind: wd,
      temps: "10.30s",
      delay: "14.60s",
      diametre: 17,
    },

    {
      vt: "2513%",
      ini: 86,
      wind: wd,
      temps: "9.60s",
      delay: "4.10s",
      diametre: 26,
    },

    {
      vt: "2509%",
      ini: 79,
      wind: wd,
      temps: "13.40s",
      delay: "8.60s",
      diametre: 37,
    },

    {
      vt: "2548%",
      ini: 48,
      wind: wd,
      temps: "13.30s",
      delay: "6.40s",
      diametre: 24,
    },

    {
      vt: "2517%",
      ini: 98,
      wind: wd,
      temps: "12.60s",
      delay: "3.10s",
      diametre: 12,
    },

    {
      vt: "2546%",
      ini: 51,
      wind: wd,
      temps: "6.30s",
      delay: "12.70s",
      diametre: 33,
    },

    {
      vt: "2503%",
      ini: 81,
      wind: wd,
      temps: "12.50s",
      delay: "1.10s",
      diametre: 17,
    },

    {
      vt: "2505%",
      ini: 90,
      wind: wd,
      temps: "7.10s",
      delay: "10.30s",
      diametre: 21,
    },

    {
      vt: "2526%",
      ini: 33,
      wind: wd,
      temps: "12.70s",
      delay: "5.90s",
      diametre: 38,
    },

    {
      vt: "2537%",
      ini: 68,
      wind: wd,
      temps: "11.80s",
      delay: "2.60s",
      diametre: 21,
    },

    {
      vt: "2511%",
      ini: 38,
      wind: wd,
      temps: "11.50s",
      delay: "7.50s",
      diametre: 20,
    },

    {
      vt: "2550%",
      ini: 54,
      wind: wd,
      temps: "11.70s",
      delay: "0.90s",
      diametre: 40,
    },

    {
      vt: "2522%",
      ini: 96,
      wind: wd,
      temps: "7.90s",
      delay: "3.00s",
      diametre: 36,
    },

    {
      vt: "2540%",
      ini: 59,
      wind: wd,
      temps: "10.40s",
      delay: "7.30s",
      diametre: 24,
    },

    {
      vt: "2531%",
      ini: 74,
      wind: wd,
      temps: "7.00s",
      delay: "11.30s",
      diametre: 35,
    },

    {
      vt: "2510%",
      ini: 97,
      wind: wd,
      temps: "7.70s",
      delay: "11.50s",
      diametre: 13,
    },

    {
      vt: "2528%",
      ini: 89,
      wind: wd,
      temps: "9.50s",
      delay: "3.20s",
      diametre: 30,
    },

    {
      vt: "2501%",
      ini: 3,
      wind: wd,
      temps: "10.30s",
      delay: "0.00s",
      diametre: 25,
    },

    {
      vt: "2542%",
      ini: 73,
      wind: wd,
      temps: "11.50s",
      delay: "0.50s",
      diametre: 37,
    },

    {
      vt: "2532%",
      ini: 70,
      wind: wd,
      temps: "10.90s",
      delay: "6.40s",
      diametre: 23,
    },

    {
      vt: "2502%",
      ini: 51,
      wind: wd,
      temps: "5.70s",
      delay: "14.60s",
      diametre: 33,
    },

    {
      vt: "2527%",
      ini: 6,
      wind: wd,
      temps: "5.70s",
      delay: "12.30s",
      diametre: 30,
    },

    {
      vt: "2540%",
      ini: 64,
      wind: wd,
      temps: "7.70s",
      delay: "14.10s",
      diametre: 22,
    },

    {
      vt: "2522%",
      ini: 33,
      wind: wd,
      temps: "11.40s",
      delay: "8.70s",
      diametre: 35,
    },

    {
      vt: "2522%",
      ini: 1,
      wind: wd,
      temps: "13.10s",
      delay: "2.60s",
      diametre: 19,
    },

    {
      vt: "2520%",
      ini: 60,
      wind: wd,
      temps: "5.50s",
      delay: "1.70s",
      diametre: 16,
    },

    {
      vt: "2543%",
      ini: 9,
      wind: wd,
      temps: "9.70s",
      delay: "13.60s",
      diametre: 21,
    },

    {
      vt: "2517%",
      ini: 99,
      wind: wd,
      temps: "10.60s",
      delay: "10.30s",
      diametre: 41,
    },

    {
      vt: "2509%",
      ini: 69,
      wind: wd,
      temps: "11.30s",
      delay: "7.40s",
      diametre: 23,
    },

    {
      vt: "2534%",
      ini: 67,
      wind: wd,
      temps: "8.90s",
      delay: "0.50s",
      diametre: 23,
    },

    {
      vt: "2538%",
      ini: 54,
      wind: wd,
      temps: "8.30s",
      delay: "7.90s",
      diametre: 34,
    },

    {
      vt: "2501%",
      ini: 89,
      wind: wd,
      temps: "9.80s",
      delay: "1.40s",
      diametre: 28,
    },

    {
      vt: "2506%",
      ini: 50,
      wind: wd,
      temps: "5.70s",
      delay: "8.10s",
      diametre: 24,
    },

    {
      vt: "2506%",
      ini: 31,
      wind: wd,
      temps: "7.20s",
      delay: "13.90s",
      diametre: 22,
    },

    {
      vt: "2539%",
      ini: 87,
      wind: wd,
      temps: "8.00s",
      delay: "3.80s",
      diametre: 23,
    },

    {
      vt: "2540%",
      ini: 20,
      wind: wd,
      temps: "9.70s",
      delay: "8.40s",
      diametre: 26,
    },

    {
      vt: "2529%",
      ini: 58,
      wind: wd,
      temps: "6.00s",
      delay: "6.60s",
      diametre: 17,
    },

    {
      vt: "2508%",
      ini: 48,
      wind: wd,
      temps: "13.40s",
      delay: "4.20s",
      diametre: 19,
    },

    {
      vt: "2540%",
      ini: 85,
      wind: wd,
      temps: "12.30s",
      delay: "14.60s",
      diametre: 20,
    },

    {
      vt: "2520%",
      ini: 54,
      wind: wd,
      temps: "7.50s",
      delay: "11.30s",
      diametre: 21,
    },

    {
      vt: "2522%",
      ini: 77,
      wind: wd,
      temps: "12.40s",
      delay: "7.90s",
      diametre: 28,
    },

    {
      vt: "2517%",
      ini: 36,
      wind: wd,
      temps: "5.50s",
      delay: "13.10s",
      diametre: 15,
    },

    {
      vt: "2536%",
      ini: 70,
      wind: wd,
      temps: "11.30s",
      delay: "14.90s",
      diametre: 42,
    },

    {
      vt: "2501%",
      ini: 90,
      wind: wd,
      temps: "6.40s",
      delay: "3.80s",
      diametre: 39,
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
