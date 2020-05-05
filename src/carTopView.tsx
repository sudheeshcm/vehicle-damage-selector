import React, { SVGProps } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import {
  withStyles,
  Theme,
  makeStyles,
  createStyles,
} from "@material-ui/core/styles";

import { IDamages } from "./types";
import {
  PART_DAMAGE_COLORS,
  WINDSHIELD_DAMAGE_COLORS,
  TYRE_DAMAGE_COLORS,
  GRILL_DAMAGE_COLORS,
  HEADLIGHT_DAMAGE_COLORS,
} from "./constants";

interface CarProps {
  damages: IDamages;
  onPartClick: Function;
}

const CAR_COLOR = "#d0d0d0";
const CAR_BORDER_COLOR = "#838383";
const HEADLAMP_COLOR = "#2e87cf";
const TIRE_COLOR = "black";
const GRILL_COLOR = "grey";

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    svgWrapper: {
      width: "100%",
      minWidth: "150px",
      maxWidth: "275px",
    },
    part: { cursor: "pointer" },
  })
);

function CarTopView(props: CarProps & SVGProps<SVGSVGElement>) {
  const styles = useStyles();
  const { damages, onPartClick } = props;

  const getDamageColor = (part: string): string => {
    const severity = damages[part].severity;
    if (severity === "NO_DAMAGE") {
      return "";
    }
    return PART_DAMAGE_COLORS[severity];
  };

  const getTireDamageColor = (part: string): string => {
    const severity = damages[part].severity;
    if (severity === "NO_DAMAGE") {
      return "";
    }
    return TYRE_DAMAGE_COLORS[severity];
  };

  const getWindshieldDamageColor = (part: string): string => {
    const severity = damages[part].severity;
    if (severity === "NO_DAMAGE") {
      return "";
    }
    return WINDSHIELD_DAMAGE_COLORS[severity];
  };

  const getGrillDamageColor = (part: string): string => {
    const severity = damages[part].severity;
    if (severity === "NO_DAMAGE") {
      return "";
    }
    return GRILL_DAMAGE_COLORS[severity];
  };

  const getHeadlightDamageColor = (part: string): string => {
    const severity = damages[part].severity;
    if (severity === "NO_DAMAGE") {
      return "";
    }
    return HEADLIGHT_DAMAGE_COLORS[severity];
  };

  return (
    <svg
      width={300}
      className={styles.svgWrapper}
      viewBox="0 0 358.85 789.36"
      {...props}
    >
      <defs>
        <radialGradient
          id="prefix__f"
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          cy={819.9}
          cx={378.79}
          gradientTransform="matrix(1.1693 0 0 .93776 -273.1 -147.55)"
          r={115.39}
        />
        <radialGradient
          id="prefix__e"
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          cy={598.63}
          cx={294.43}
          gradientTransform="matrix(1.5041 0 0 .74199 -264.04 -146.71)"
          r={91.234}
        />
        <radialGradient
          id="prefix__d"
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          cy={153.65}
          cx={897.24}
          gradientTransform="matrix(-.39086 0 0 3.6334 703.38 -167.47)"
          r={15.849}
        />
        <radialGradient
          id="prefix__c"
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          cy={153.65}
          cx={897.24}
          gradientTransform="matrix(.39086 0 0 3.6334 -343 -162.47)"
          r={15.849}
        />
        <radialGradient
          id="prefix__b"
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          cy={319.37}
          cx={657.76}
          gradientTransform="matrix(.65803 0 0 1.5197 -252.14 -111.82)"
          r={1269.3}
        />
        <linearGradient id="prefix__a">
          <stop stopColor={CAR_COLOR} offset={0} />
          <stop stopColor={CAR_BORDER_COLOR} offset={1} />
        </linearGradient>
      </defs>

      {/* Rear left tyre */}
      <LightTooltip title="Rear left tyre">
        <rect
          className={styles.part}
          onClick={() => onPartClick("rearLeftTyre")}
          fillRule="evenodd"
          rx={8.585}
          ry={8.585}
          height={78.696}
          width={27.775}
          y={623.04}
          x={14.287}
          fill={getTireDamageColor("rearLeftTyre") || TIRE_COLOR}
        />
      </LightTooltip>

      {/* Rear right tyre */}
      <LightTooltip title="Rear right tyre">
        <rect
          className={styles.part}
          onClick={() => onPartClick("rearRightTyre")}
          fillRule="evenodd"
          rx={8.585}
          ry={8.585}
          height={78.696}
          width={27.775}
          y={613.04}
          x={313.29}
          fill={getTireDamageColor("rearRightTyre") || TIRE_COLOR}
        />
      </LightTooltip>

      <g fill="#4a00ad">
        <path d="M206.034 66.93c5.473.321 11.137.388 16.567-.34 3.573-.712 11.473-3.767 7.655-8.677-5.245-5.042-14.531-4.269-21.161-3.703l-.514-5.994c9.13-.75 20.165-.992 26.841 6.329 5.981 9.521-3.376 16.399-12.025 18.017-5.782.733-11.564.349-17.362.688v-6.32z" />
        <path d="M206.034 35.31c5.473-.321 11.137-.388 16.567.34 3.573.712 11.473 3.767 7.655 8.677-5.245 5.042-14.531 4.269-21.161 3.703l-.514 5.994c9.13.75 20.165.992 26.841-6.329 5.981-9.521-3.376-16.399-12.025-18.017-5.782-.733-11.564-.349-17.362-.688v6.32zM184.68 49.039c2.065.197 4.188.112 6.257.123 1.752.005 7.632.902 8.723-.998.384-1.354-.27-2.904-1.408-3.66-2.758-1.418-6.481-.696-9.44-.554-3.62.174-8.53.573-9.637-3.832-.343-3.597 1.898-7.047 4.694-9.134 3.699-2.274 7.91-1.854 12.035-1.335 2.457.327 4.907.703 7.37.98l-.453 3.802c-2.47-.295-4.926-.704-7.393-1.03-3.017-.37-6.48-.93-9.242.676-1.59 1.123-3.123 3.193-3.135 5.222-.014 1.512 4.705.915 5.565.872 3.992-.213 8.332-.858 11.954 1.207 2.919 2.188 4.208 6.369 1.944 9.485-2.956 2.807-7.82 2.083-11.577 2.095-2.07.01-4.192-.076-6.256.121v-4.04zM181.463 52.974c-2.395-.242-4.875-.146-7.278-.159-4.534-.016-9.067.018-13.602.036-.908.005-1.818.012-2.726.038v-3.428c.908.028 1.818.034 2.726.04 4.535.017 9.068.051 13.602.035 2.403-.012 4.883.083 7.278-.159v3.597z" />
        <path d="M168.107 50.46c.185-1.319.092-2.71.101-4.034.013-2.644.014-5.287-.007-7.931-.014-1.751-.032-3.502-.037-5.253-.001-1.047.002-2.096.005-3.143h3.872c.002 1.047.006 2.096.003 3.143-.003 1.751-.022 3.502-.036 5.253a620.065 620.065 0 00-.008 7.93c.01 1.325-.084 2.716.103 4.036h-3.996zM153.19 52.26c.219-1.706.114-3.502.134-5.217.046-4.31.051-8.621.008-12.932a543.435 543.435 0 00-.066-4.234h3.275a597.778 597.778 0 00-.066 4.234c-.043 4.311-.037 8.622.008 12.932.021 1.715-.085 3.511.134 5.217h-3.427z" />
        <path d="M155.24 53.29c-1.41-.156-2.863-.074-4.28-.113-3.027-.138-5.689-1.021-6.086-4.411-.091-3.395 1.772-5.431 5.069-6.06 1.547-.195 3.059-.136 4.605.029l-.353 3.167c-1.221-.137-2.422-.2-3.645-.051-1.605.296-2.418.88-2.405 2.576.124 1.535 1.597 1.488 2.895 1.55 1.383.028 2.821.081 4.2-.073v3.386z" />
        <path d="M153.89 44.22c-1.223-.136-2.492-.072-3.72-.082-2.638-.021-5.597.184-7.788-1.535-1.853-1.96-1.215-4.372-.521-6.696.472-1.573.874-3.118.925-4.767.003-.322 0-.641-.008-.962l3.305-.084c.01.383.013.765.009 1.148-.062 1.931-.526 3.743-1.082 5.583-.252.844-.953 2.406-.486 3.29 1.116 1.268 4.173.813 5.646.801 1.228-.01 2.497.054 3.72-.082v3.386z" />
        <path
          fillRule="evenodd"
          d="M156.59 53.28h-2.353v-3.025h2.353zM117.26 41.35c0-6.958 5.196-12.606 11.598-12.606s11.597 5.648 11.597 12.606c0 6.959-5.195 12.606-11.597 12.606S117.26 48.309 117.26 41.35zm3.698.322c0-4.739 3.54-8.586 7.9-8.586 4.361 0 7.9 3.847 7.9 8.586 0 4.741-3.539 8.587-7.9 8.587-4.36 0-7.9-3.846-7.9-8.587z"
        />
      </g>

      {/* Front right tyre */}
      <LightTooltip title="Front right tyre">
        <rect
          className={styles.part}
          onClick={() => onPartClick("frontRightTyre")}
          fillRule="evenodd"
          rx={8.585}
          ry={8.585}
          height={78.696}
          width={27.775}
          y={98.038}
          x={318.79}
          fill={getTireDamageColor("frontRightTyre") || TIRE_COLOR}
        />
      </LightTooltip>

      {/* Front left tyre */}
      <LightTooltip title="Front left tyre">
        <rect
          className={styles.part}
          onClick={() => onPartClick("frontLeftTyre")}
          fillRule="evenodd"
          rx={8.585}
          ry={8.585}
          height={78.696}
          width={27.775}
          y={101.12}
          x={8.633}
          fill={getTireDamageColor("frontLeftTyre") || TIRE_COLOR}
        />
      </LightTooltip>

      <path
        d="M178.73 782.98c-113.07 2.362-130.4-17.92-147.11-21.261-16.705-38.776-19.877-365.73-9.855-392.46 7.493-60.54-4.936-70.565-8.687-143.53-7.14-85.213 9.815-37.829-4.439-124.48C30.297 11.033-10.497 9.196 177.159.619c172.21 2.401 147.96 10.415 169.61 100.63-14.254 86.652 2.701 39.268-4.439 124.48-3.751 72.961-16.18 82.986-8.687 143.53 10.022 26.727 6.85 353.68-9.855 392.46-26.153 15.153-95.459 21.261-145.07 21.261z"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        fill="url(#prefix__b)"
      />
      <path
        d="M41.537 281.88l21.534 82.442s0 154.58-3.076 157.15c-3.077 2.576-27.686 46.372-27.686 46.372s6.152-280.81 9.229-285.97z"
        fillRule="evenodd"
        fill="url(#prefix__c)"
      />
      <path
        d="M318.84 276.88l-21.534 82.442s0 154.58 3.076 157.15c3.077 2.576 27.686 46.372 27.686 46.372s-6.152-280.81-9.229-285.97z"
        fillRule="evenodd"
        fill="url(#prefix__d)"
      />
      {/* Front bonnet */}
      <LightTooltip title="Front bonnet">
        <path
          className={styles.part}
          onClick={() => onPartClick("frontBonnet")}
          d="M37.198 44.521c-11.667 18.667-10.816 196.22 7.851 210.22 18.03-14.851 122.48-28.646 142.34-27.364 20.288-1.492 99.694 8.055 124.09 22.697 6.577 2.13 19.727-205.55 1.059-219.55-58.34-16.344-252.01-16.344-275.34 13.99z"
          strokeOpacity={0.459}
          fillRule="evenodd"
          stroke="#000"
          fill={getDamageColor("frontBonnet") || CAR_COLOR}
        />
      </LightTooltip>

      {/* Front windshield */}
      <path
        d="M41.764 257.39s65.53-26.897 138.64-27.585c65.833-.64 95.565 9.623 135.61 25.019-4.853 48.756-9.708 94.943-21.843 110.34-111.64-28.23-118.92-28.23-230.56 0-2.43-15.39-24.273-105.21-21.846-107.77z"
        fillRule="evenodd"
        fill={getWindshieldDamageColor("frontWindshield") || "url(#prefix__e)"}
      />
      <LightTooltip title="Front windshield">
        <path
          className={styles.part}
          onClick={() => onPartClick("frontWindshield")}
          d="M45.51 260.2s63.783-24.762 134.95-25.395c64.078-.59 93.017 8.859 132 23.033-4.724 44.885-9.449 87.405-21.261 101.58-108.67-25.986-115.75-25.985-224.42.001-2.362-14.174-23.623-96.856-21.261-99.218z"
          fillRule="evenodd"
          fillOpacity={0.704}
          stroke="#000"
          strokeWidth="1pt"
        />
      </LightTooltip>

      {/* Rear windshield */}
      <path
        d="M75.697 531.43c-12.369 59.368-22.263 173.16-22.263 173.16 19.79 17.316 121.21 24.737 123.69 24.737 7.421 0 108.84-7.421 126.16-32.158 0-14.842-9.896-121.21-19.79-168.21-86.579 12.368-202.84 7.421-207.79 2.473z"
        fillRule="evenodd"
        fill={getWindshieldDamageColor("rearWindshield") || "url(#prefix__f)"}
      />
      <LightTooltip title="Rear windshield">
        <path
          className={styles.part}
          onClick={() => onPartClick("rearWindshield")}
          d="M80.945 536.59c-11.812 56.695-21.261 165.36-21.261 165.36 18.899 16.536 115.75 23.623 118.12 23.623 7.087 0 103.94-7.087 120.48-30.71 0-14.174-9.45-115.75-18.899-160.64-82.681 11.811-193.71 7.087-198.44 2.362z"
          fillRule="evenodd"
          fillOpacity={0.786}
          stroke="#000"
          strokeWidth="1pt"
        />
      </LightTooltip>

      {/* Right mirror */}
      <LightTooltip title="Right mirror">
        <path
          className={styles.part}
          onClick={() => onPartClick("rightMirror")}
          d="M321.9 279.09l28.348 2.362s14.174 14.174 4.725 21.261c-9.45 7.087-33.073-2.362-33.073-2.362V279.09z"
          strokeOpacity={0.553}
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
          fill={getDamageColor("rightMirror") || CAR_COLOR}
        />
      </LightTooltip>

      {/* Left mirror */}
      <LightTooltip title="Left mirror">
        <path
          className={styles.part}
          onClick={() => onPartClick("leftMirror")}
          d="M36.946 283.82l-28.348 2.362s-14.174 14.174-4.725 21.261c9.45 7.087 33.073-2.362 33.073-2.362V283.82z"
          strokeOpacity={0.547}
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
          fill={getDamageColor("leftMirror") || CAR_COLOR}
        />
      </LightTooltip>

      {/* Left headlamp */}
      <LightTooltip title="Left headlamp">
        <path
          className={styles.part}
          onClick={() => onPartClick("leftHeadlamp")}
          d="M52.582 17.025c-9.023 1.573-19.32 18.998-14.584 21.902 11.281-5.689 33.327-13.506 54.984-15.684 4.286-2.3 10.138-9.356 10.358-10.929-14.886-.847-40.915 2.775-50.758 4.711z"
          strokeOpacity={0.252}
          fillRule="evenodd"
          fillOpacity={0.566}
          stroke="#000"
          strokeWidth={1.443}
          fill={getHeadlightDamageColor("leftHeadlamp") || HEADLAMP_COLOR}
        />
      </LightTooltip>

      {/* Right headlamp */}
      <LightTooltip title="Right headlamp">
        <path
          className={styles.part}
          onClick={() => onPartClick("rightHeadlamp")}
          d="M298.7 12.115c9.023 1.573 19.32 14.633 14.584 17.537-11.28-5.689-33.327-7.505-54.984-9.684-4.285-2.3-10.134-10.992-10.36-12.565 14.888-.847 40.917 2.776 50.76 4.712z"
          strokeOpacity={0.252}
          fillRule="evenodd"
          fillOpacity={0.566}
          stroke="#000"
          strokeWidth={1.443}
          fill={getHeadlightDamageColor("rightHeadlamp") || HEADLAMP_COLOR}
        />
      </LightTooltip>

      {/* Front grill */}
      <path
        d="M112.29 10.38c37.098-6.547 99.837-6.002 126.57-2.729"
        strokeOpacity={0.371}
        stroke={getTireDamageColor("frontGrill") || GRILL_COLOR}
        strokeWidth={2}
        fill="none"
      />
      <LightTooltip title="Front grill">
        <path
          className={styles.part}
          onClick={() => onPartClick("frontGrill")}
          d="M112.29 13.108c37.098-6.547 99.837-6.002 126.57-2.729M112.29 16.381c37.098-6.547 99.837-6.002 126.57-2.729M112.29 20.2c37.098-6.001 98.2-4.911 124.39-3.275"
          strokeOpacity={0.371}
          stroke={getGrillDamageColor("frontGrill") || GRILL_COLOR}
          strokeWidth="2px"
          fill="none"
        />
      </LightTooltip>

      {/* Left windshield */}
      <LightTooltip title="Left windshield">
        <path
          className={styles.part}
          onClick={() => onPartClick("leftWindshield")}
          d="M43.148 295.63l16.536 75.595s0 141.74-2.362 144.1c-2.363 2.362-21.261 42.521-21.261 42.521s4.724-257.49 7.087-262.22z"
          fillRule="evenodd"
          fillOpacity={0.686}
          stroke="#000"
          strokeWidth="1pt"
          fill={getWindshieldDamageColor("leftWindshield")}
        />
      </LightTooltip>

      <path
        d="M36.35 310.53c-2.333 25.667-14.991 443.45 4.666 443.34 69.856 26.467 221.62 23.584 278.52-7 17.53-.071 6.999-417.68 4.666-443.34"
        stroke="#000"
        strokeWidth="1pt"
        fill="none"
      />

      {/* Right windshield */}
      <LightTooltip title="Right windshield">
        <path
          className={styles.part}
          onClick={() => onPartClick("rightWindshield")}
          d="M317.18 290.91l-16.536 75.595s0 141.74 2.362 144.1c2.363 2.362 21.261 42.521 21.261 42.521s-4.724-257.49-7.087-262.22z"
          fillRule="evenodd"
          fillOpacity={0.748}
          stroke="#000"
          strokeWidth="1pt"
          fill={getWindshieldDamageColor("rightWindshield")}
        />
      </LightTooltip>
    </svg>
  );
}

export default CarTopView;
