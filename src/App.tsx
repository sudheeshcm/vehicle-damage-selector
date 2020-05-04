import React, { useState } from "react";
import Grid, { GridSpacing } from "@material-ui/core/Grid";

import CarTopView from "./carTopView";
import "./App.css";

import { INITIAL_DAMAGES, DAMAGE_TYPES, SEVERITY } from "./constants";
import DamageSelector from "./damageSelector";
import classes from "*.module.css";

function App() {
  const [damages, setDamages] = useState(INITIAL_DAMAGES);

  return (
    <div className="App">
      <div className="App-wrapper">
        <p>
          Car damages: <code>top view</code>
        </p>

        <Grid container xs={12} spacing={4} className="Grid-container">
          <Grid item xs={7} justify="center">
            <CarTopView damages={damages} />
          </Grid>
          <Grid item xs={5} justify="center">
            <DamageSelector
              damage={damages.frontBonnet}
              setDamage={() => null}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
