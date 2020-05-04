import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";

import CarTopView from "./carTopView";
import "./App.css";

import { INITIAL_DAMAGES, SEVERITY } from "./constants";
import DamageSelector from "./damageSelector";
import { IDamages, IDamage } from "./types";

function App() {
  const [damages, setDamages] = useState<IDamages>(INITIAL_DAMAGES);
  const [selectedPart, setSelectedPart] = useState<string>("");

  const onPartClick = (part: string) => {
    setSelectedPart(part);
    const updatedDamage = { ...damages[part] };
    const sIndex = SEVERITY.indexOf(updatedDamage.severity);
    updatedDamage.severity = SEVERITY[(sIndex + 1) % SEVERITY.length];
    const updatedDamages = { ...damages, [part]: updatedDamage };
    setDamages(updatedDamages);
  };

  const setDamage = (damage: IDamage) => {
    const updatedDamages = { ...damages, [selectedPart]: { ...damage } };
    setDamages(updatedDamages);
  };

  return (
    <div className="App">
      <div className="App-wrapper">
        <p className="App-title">Vehicle damages</p>

        <Grid container justify="center" spacing={4} className="Grid-container">
          <Grid item xs={selectedPart ? 5 : 11} className="Grid-car">
            <CarTopView damages={damages} onPartClick={onPartClick} />
          </Grid>
          <Grid
            item
            xs={selectedPart ? 5 : 1}
            className={clsx("Grid-damage", selectedPart && "visible")}
          >
            {selectedPart && (
              <DamageSelector
                selectedPart={selectedPart}
                damage={damages[selectedPart]}
                setDamage={setDamage}
              />
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
