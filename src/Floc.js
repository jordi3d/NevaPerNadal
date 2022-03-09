import logo from "./logo.svg";
import "./Floc.css";

export default function Floc({ flake }) {
  function incrementa(quantitatY, quantitatX, Interval) {
    let floc = document.getElementsByName("Flake-logo");
    let top = parseFloat(floc.style.top);
    let left = parseFloat(floc.style.left);
    floc.style.top = top + quantitatY + "%";
    floc.style.left = left + quantitatX + "%";
    if (top + quantitatY >= 98) {
      floc.style.top = "98%";
      clearInterval(Interval);
    }
  }
  function caidita() {
    //fer servir un useEffect com en el rellotge
    var MyTimer = setInterval(() => {
      incrementa(0.55, 0.2 * Math.random(), MyTimer);
    }, 40);
  }
  return (
    <div>
      <p>
        Vt:{flake.vt} W:{flake.wind} S:{flake.size} Rini:{flake.rinicial} Rfin:
        {flake.rfinal}
      </p>
      <div className="Flake-header">
        {() => caidita()}
        <img src={logo} className="Flake-logo" alt="logo" width="20" />
      </div>
    </div>
  );
}
