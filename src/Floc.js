import logo from "./logo.svg";
import "./Floc.css";
import styled, { keyframes } from "styled-components";

export default function Floc({ flake }) {
  const caiguda = keyframes`
      0% {  
        opacity: 0;
        transform: translate(${flake.ini - 3}%,-100px) rotate(0deg);
      }
      3% {
        opacity: 1;
      }
      99% { 
        opacity: 1;
        transform: translate(${flake.ini - 3 + flake.wind * 100}%,${
    flake.vt
  }) rotate(360deg);
      }
      100% {
        opacity: 0;
      }
        `;
  const Floquet = styled.div`
    position: absolute;
    animation: ${caiguda} ${flake.temps} ${flake.delay} infinite backwards
      linear;
  `;
  return (
    <Floquet>
      <img src={logo} alt="logo" width={flake.diametre} />
    </Floquet>
  );
}
