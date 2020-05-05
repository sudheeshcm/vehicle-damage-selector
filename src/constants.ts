import { IDamages, IGenericMap } from "./types";

export const DAMAGE_TYPES = [
  "Broken",
  "Missing",
  "Dent",
  "Scratch",
  "Dent-scratch",
  "Dislocation",
  "Shatter",
];

export const SEVERITY = ["NO_DAMAGE", "LOW", "MEDIUM", "HIGH"];

export const INITIAL_DAMAGES: IDamages = {
  frontBonnet: {
    severity: "NO_DAMAGE",
    damageType: "",
  },
  frontWindshield: {
    severity: "NO_DAMAGE",
    damageType: "",
  },
  rearWindshield: {
    severity: "NO_DAMAGE",
    damageType: "",
  },
  rightMirror: {
    severity: "NO_DAMAGE",
    damageType: "",
  },
  leftMirror: {
    severity: "NO_DAMAGE",
    damageType: "",
  },
  leftHeadlamp: {
    severity: "NO_DAMAGE",
    damageType: "",
  },
  rightHeadlamp: {
    severity: "NO_DAMAGE",
    damageType: "",
  },
  frontGrill: {
    severity: "NO_DAMAGE",
    damageType: "",
  },
  leftWindshield: {
    severity: "NO_DAMAGE",
    damageType: "",
  },
  rightWindshield: {
    severity: "NO_DAMAGE",
    damageType: "",
  },
  frontLeftTyre: {
    severity: "NO_DAMAGE",
    damageType: "",
  },
  frontRightTyre: {
    severity: "NO_DAMAGE",
    damageType: "",
  },
  rearLeftTyre: {
    severity: "NO_DAMAGE",
    damageType: "",
  },
  rearRightTyre: {
    severity: "NO_DAMAGE",
    damageType: "",
  },
};

export const PART_DAMAGE_COLORS: IGenericMap = {
  LOW: "#ffffc9",
  MEDIUM: "#ffdb99",
  HIGH: "#d9a8a8",
};

export const GRILL_DAMAGE_COLORS: IGenericMap = {
  LOW: "yellow",
  MEDIUM: "orange",
  HIGH: "red",
};

export const TYRE_DAMAGE_COLORS: IGenericMap = {
  LOW: "#88882e",
  MEDIUM: "#6a593b",
  HIGH: "#671919",
};

export const HEADLIGHT_DAMAGE_COLORS: IGenericMap = {
  LOW: "#9f9f04",
  MEDIUM: "#8a5d0b",
  HIGH: "#970d0d",
};

export const WINDSHIELD_DAMAGE_COLORS: IGenericMap = {
  LOW: "#a1a117",
  MEDIUM: "#a37a2f",
  HIGH: "#7c1d1d",
};
