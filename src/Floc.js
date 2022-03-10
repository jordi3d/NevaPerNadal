import logo from "./logo.svg";
import "./Floc.css";
import styled, { keyframes } from "styled-components";

export default function Floc({ flake }) {
  const caiguda = keyframes`
      from {     
            transform: translate(${flake.ini}%,-3%);  
      }
      to {
            transform: translate(${flake.ini + flake.wind}%,${flake.vt}); 
      }
        `;
  const Floquet = styled.div`
    animation: ${caiguda} forwards ${flake.temps} ${flake.delay} linear;
  `;
  return (
    <div>
      <Floquet>
        <img src={logo} alt="logo" width={flake.diametre} />
      </Floquet>
    </div>
  );
}
