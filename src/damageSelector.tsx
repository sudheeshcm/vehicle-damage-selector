import React, { useState, useEffect, ChangeEvent } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { toTitleCase, toReadableString } from "./utils";
import { IDamage } from "./types";
import { DAMAGE_TYPES, SEVERITY } from "./constants";

interface Props {
  selectedPart: string;
  damage: IDamage;
  setDamage: Function;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: { userSelect: "none" },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: "200px",
      "& label": { color: "white", userSelect: "none" },
      "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
    },
    select: { color: "white", userSelect: "none" },
    outlinedSelect: { borderColor: "white" },
    selectEmpty: { marginTop: theme.spacing(2) },
    fieldsWrapper: {
      display: "flex",
      flexDirection: "column",
      height: "300px",
      alignItems: "center",
    },
    button: { width: "100px", margin: "16px" },
  })
);

function DamageSelector({ selectedPart, damage, setDamage }: Props) {
  const classes = useStyles();

  const [curDamage, setCurDamage] = useState<IDamage>(damage);

  useEffect(() => {
    if (damage) {
      setCurDamage(damage);
    }
  }, [damage]);

  const handleTypeChange = (event: ChangeEvent<{ value: unknown }>) => {
    setDamage({
      ...curDamage,
      damageType: event.target.value as string,
    });
  };

  const handleSeverityChange = (event: ChangeEvent<{ value: unknown }>) => {
    setDamage({
      ...curDamage,
      severity: event.target.value as string,
    });
  };

  return (
    <div className="damage-selector__wrapper">
      <h5 className={classes.title}>
        Damage: {toReadableString(selectedPart)}
      </h5>
      <div className={classes.fieldsWrapper}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Damage type
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={curDamage.damageType}
            onChange={handleTypeChange}
            label="Damage type"
            classes={{ select: classes.select }}
          >
            {DAMAGE_TYPES.map((type: string) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Severity
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={curDamage.severity}
            onChange={handleSeverityChange}
            label="Severity"
            classes={{ select: classes.select }}
          >
            {SEVERITY.map((severity: string) => (
              <MenuItem key={severity} value={severity}>
                {toTitleCase(severity)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default DamageSelector;
