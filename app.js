var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const { useState, useEffect, useRef, useMemo, useCallback } = React;
const C = {
  bg: "#15171B",
  sheet: "#1A1C20",
  surface: "#1E2126",
  surface2: "#262A31",
  border: "#2E323A",
  text: "#ECEEF1",
  dim: "#8B919B",
  accent: "#FF5A36",
  accentDark: "#151719",
  accent2: "#C9FF3D",
  danger: "#FF6B6B",
  dangerBorder: "#7A2A2A",
  setDone: "#22301F"
};
const rgba = (hex, a) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`;
};
const HEAD_FONT = "Oswald, sans-serif";
function Icon({ name, size = 16, style, className }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  const wrap = (children) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", style, className }, children);
  switch (name) {
    case "home":
      return wrap(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", __spreadProps(__spreadValues({}, p), { d: "M4 11 L12 4 L20 11" })), /* @__PURE__ */ React.createElement("path", __spreadProps(__spreadValues({}, p), { d: "M6 10 V20 H18 V10" }))));
    case "dumbbell":
      return wrap(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", { x: "2", y: "9", width: "3.5", height: "6", rx: "1", fill: "currentColor", stroke: "none" }), /* @__PURE__ */ React.createElement("rect", { x: "18.5", y: "9", width: "3.5", height: "6", rx: "1", fill: "currentColor", stroke: "none" }), /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "7", y1: "12", x2: "17", y2: "12", strokeWidth: "3" }))));
    case "trending-up":
      return wrap(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("polyline", __spreadProps(__spreadValues({}, p), { points: "3,17 9,11 13,15 21,5" })), /* @__PURE__ */ React.createElement("polyline", __spreadProps(__spreadValues({}, p), { points: "15,5 21,5 21,11" }))));
    case "play":
      return wrap(/* @__PURE__ */ React.createElement("polygon", { points: "7,4 20,12 7,20", fill: "currentColor", stroke: "none" }));
    case "check":
      return wrap(/* @__PURE__ */ React.createElement("polyline", __spreadProps(__spreadValues({}, p), { points: "4,12 9,17 20,6" })));
    case "x":
      return wrap(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "5", y1: "5", x2: "19", y2: "19" })), /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "19", y1: "5", x2: "5", y2: "19" }))));
    case "plus":
      return wrap(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "12", y1: "4", x2: "12", y2: "20" })), /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "4", y1: "12", x2: "20", y2: "12" }))));
    case "minus":
      return wrap(/* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "4", y1: "12", x2: "20", y2: "12" })));
    case "chevron-left":
      return wrap(/* @__PURE__ */ React.createElement("polyline", __spreadProps(__spreadValues({}, p), { points: "15,6 9,12 15,18" })));
    case "chevron-right":
      return wrap(/* @__PURE__ */ React.createElement("polyline", __spreadProps(__spreadValues({}, p), { points: "9,6 15,12 9,18" })));
    case "chevron-up":
      return wrap(/* @__PURE__ */ React.createElement("polyline", __spreadProps(__spreadValues({}, p), { points: "6,15 12,9 18,15" })));
    case "chevron-down":
      return wrap(/* @__PURE__ */ React.createElement("polyline", __spreadProps(__spreadValues({}, p), { points: "6,9 12,15 18,9" })));
    case "settings":
      return wrap(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", __spreadProps(__spreadValues({}, p), { cx: "12", cy: "12", r: "7.5" })), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "3", fill: "currentColor", stroke: "none" }), /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "12", y1: "1.5", x2: "12", y2: "3.5" })), /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "12", y1: "20.5", x2: "12", y2: "22.5" })), /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "1.5", y1: "12", x2: "3.5", y2: "12" })), /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "20.5", y1: "12", x2: "22.5", y2: "12" }))));
    case "download":
      return wrap(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "12", y1: "3", x2: "12", y2: "15" })), /* @__PURE__ */ React.createElement("polyline", __spreadProps(__spreadValues({}, p), { points: "7,10 12,15 17,10" })), /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "5", y1: "20", x2: "19", y2: "20" }))));
    case "upload":
      return wrap(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "12", y1: "15", x2: "12", y2: "3" })), /* @__PURE__ */ React.createElement("polyline", __spreadProps(__spreadValues({}, p), { points: "7,8 12,3 17,8" })), /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "5", y1: "20", x2: "19", y2: "20" }))));
    case "trash":
      return wrap(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "4", y1: "7", x2: "20", y2: "7" })), /* @__PURE__ */ React.createElement("path", __spreadProps(__spreadValues({}, p), { d: "M6 7 L7 21 H17 L18 7" })), /* @__PURE__ */ React.createElement("path", __spreadProps(__spreadValues({}, p), { d: "M9 7 V4 H15 V7" })), /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "10", y1: "11", x2: "10", y2: "17" })), /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "14", y1: "11", x2: "14", y2: "17" }))));
    case "clock":
      return wrap(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", __spreadProps(__spreadValues({}, p), { cx: "12", cy: "12", r: "8.5" })), /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "12", y1: "12", x2: "12", y2: "7" })), /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "12", y1: "12", x2: "16", y2: "14" }))));
    case "trophy":
      return wrap(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", __spreadProps(__spreadValues({}, p), { d: "M7 4 H17 V9 C17 12.3 14.8 14.5 12 14.5 C9.2 14.5 7 12.3 7 9 Z" })), /* @__PURE__ */ React.createElement("path", __spreadProps(__spreadValues({}, p), { d: "M7 6 C4 6 4 10 7.5 10" })), /* @__PURE__ */ React.createElement("path", __spreadProps(__spreadValues({}, p), { d: "M17 6 C20 6 20 10 16.5 10" })), /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "12", y1: "14.5", x2: "12", y2: "18" })), /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "8", y1: "21", x2: "16", y2: "21" })), /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "9", y1: "18", x2: "15", y2: "18" }))));
    case "edit":
      return wrap(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", __spreadProps(__spreadValues({}, p), { d: "M16 4 L20 8 L8 20 H4 V16 Z" }))));
    case "arrow-left":
      return wrap(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("line", __spreadProps(__spreadValues({}, p), { x1: "20", y1: "12", x2: "5", y2: "12" })), /* @__PURE__ */ React.createElement("polyline", __spreadProps(__spreadValues({}, p), { points: "10,6 4,12 10,18" }))));
    case "circle-check":
      return wrap(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", __spreadProps(__spreadValues({}, p), { cx: "12", cy: "12", r: "8.5" })), /* @__PURE__ */ React.createElement("polyline", __spreadProps(__spreadValues({}, p), { points: "8,12.5 11,15.5 16,9.5" }))));
    default:
      return wrap(/* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "3", fill: "currentColor", stroke: "none" }));
  }
}
function MiniLineChart({ data, dataKey, color }) {
  const w = 320, h = 180, padL = 34, padR = 12, padT = 14, padB = 24;
  if (!data.length) {
    return /* @__PURE__ */ React.createElement("div", { style: { color: C.dim, fontSize: 13, textAlign: "center", padding: "60px 0" } }, "No data yet");
  }
  const values = data.map((d) => d[dataKey]);
  const min = Math.min(...values), max = Math.max(...values);
  const range = max - min || 1;
  const innerW = w - padL - padR, innerH = h - padT - padB;
  const stepX = data.length > 1 ? innerW / (data.length - 1) : 0;
  const pt = (d, i) => {
    const x = padL + i * stepX;
    const y = padT + innerH - (d[dataKey] - min) / range * innerH;
    return [x, y];
  };
  const points = data.map(pt);
  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
  const gridYs = [0, 0.5, 1].map((f) => padT + innerH * f);
  const gridLabels = [max, (max + min) / 2, min].map((v) => Math.round(v * 10) / 10);
  const xLabelEvery = Math.max(1, Math.ceil(data.length / 4));
  return /* @__PURE__ */ React.createElement("svg", { viewBox: `0 0 ${w} ${h}`, style: { width: "100%", height: h } }, gridYs.map((y, i) => /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement("line", { x1: padL, x2: w - padR, y1: y, y2: y, stroke: C.border, strokeDasharray: "3 3" }), /* @__PURE__ */ React.createElement("text", { x: 2, y: y + 3, fontSize: "9", fill: C.dim }, gridLabels[i]))), /* @__PURE__ */ React.createElement("path", { d: pathD, fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), points.map(([x, y], i) => /* @__PURE__ */ React.createElement("circle", { key: i, cx: x, cy: y, r: "3", fill: color })), data.map((d, i) => i % xLabelEvery === 0 && /* @__PURE__ */ React.createElement("text", { key: i, x: padL + i * stepX, y: h - 6, fontSize: "9", fill: C.dim, textAnchor: "middle" }, d.date)));
}
const KG_PER_LB = 0.45359237;
const toKg = (v, unit) => unit === "lb" ? v * KG_PER_LB : v;
const fromKg = (v, unit) => unit === "lb" ? v / KG_PER_LB : v;
const round1 = (v) => Math.round(v * 10) / 10;
const fmtWeight = (kg, unit) => {
  if (kg == null || Number.isNaN(kg)) return "-";
  return round1(fromKg(kg, unit)).toString();
};
const epley1RM = (weightKg, reps) => reps <= 1 ? weightKg : weightKg * (1 + reps / 30);
const uid = () => Math.random().toString(36).slice(2) + Date.now().toString(36);
const todayISO = () => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
const startOfWeek = (d) => {
  const dt = new Date(d);
  const day = (dt.getDay() + 6) % 7;
  dt.setHours(0, 0, 0, 0);
  dt.setDate(dt.getDate() - day);
  return dt;
};
const sameDay = (a, b) => a.toDateString() === b.toDateString();
function computeWeeklyPRs(sessions, weekStart) {
  const sorted = [...sessions].sort((a, b) => new Date(a.endedAt) - new Date(b.endedAt));
  const bestSoFar = /* @__PURE__ */ new Map();
  let count = 0;
  for (const s of sorted) {
    const inWeek = new Date(s.endedAt) >= weekStart;
    for (const e of s.exercises) {
      const completed = e.sets.filter((x) => x.completed);
      if (!completed.length) continue;
      const maxW = Math.max(...completed.map((x) => x.weight));
      const prevBest = bestSoFar.get(e.exerciseId) || 0;
      if (maxW > prevBest) {
        if (inWeek) count += 1;
        bestSoFar.set(e.exerciseId, maxW);
      }
    }
  }
  return count;
}
const MUSCLE_GROUPS = ["Chest", "Back", "Legs", "Shoulders", "Arms", "Core", "Full Body", "Cardio"];
const DEFAULT_EXERCISES = [
  ["Barbell Bench Press", "Chest"],
  ["Incline Barbell Bench Press", "Chest"],
  ["Incline Dumbbell Press", "Chest"],
  ["Flat Dumbbell Press", "Chest"],
  ["Decline Bench Press", "Chest"],
  ["Push-up", "Chest"],
  ["Dumbbell Fly", "Chest"],
  ["Cable Fly", "Chest"],
  ["Chest Dip", "Chest"],
  ["Machine Chest Press", "Chest"],
  ["Pec Deck Machine", "Chest"],
  ["Incline Cable Fly", "Chest"],
  ["Smith Machine Bench Press", "Chest"],
  ["Landmine Press", "Chest"],
  ["Svend Press", "Chest"],
  ["Wide Push-up", "Chest"],
  ["Deadlift", "Back"],
  ["Sumo Deadlift", "Back"],
  ["Pull-up", "Back"],
  ["Chin-up", "Back"],
  ["Lat Pulldown", "Back"],
  ["Barbell Row", "Back"],
  ["Pendlay Row", "Back"],
  ["Seated Cable Row", "Back"],
  ["T-Bar Row", "Back"],
  ["Single-Arm Dumbbell Row", "Back"],
  ["Face Pull", "Back"],
  ["Back Extension", "Back"],
  ["Wide-Grip Pulldown", "Back"],
  ["Straight-Arm Pulldown", "Back"],
  ["Meadows Row", "Back"],
  ["Renegade Row", "Back"],
  ["Good Morning", "Back"],
  ["Rack Pull", "Back"],
  ["Inverted Row", "Back"],
  ["Back Squat", "Legs"],
  ["Front Squat", "Legs"],
  ["Goblet Squat", "Legs"],
  ["Romanian Deadlift", "Legs"],
  ["Leg Press", "Legs"],
  ["Leg Extension", "Legs"],
  ["Leg Curl", "Legs"],
  ["Walking Lunge", "Legs"],
  ["Bulgarian Split Squat", "Legs"],
  ["Hip Thrust", "Legs"],
  ["Calf Raise", "Legs"],
  ["Hack Squat", "Legs"],
  ["Sumo Squat", "Legs"],
  ["Overhead Press", "Shoulders"],
  ["Arnold Press", "Shoulders"],
  ["Dumbbell Shoulder Press", "Shoulders"],
  ["Lateral Raise", "Shoulders"],
  ["Front Raise", "Shoulders"],
  ["Rear Delt Fly", "Shoulders"],
  ["Upright Row", "Shoulders"],
  ["Barbell Shrug", "Shoulders"],
  ["Cable Lateral Raise", "Shoulders"],
  ["Seated Dumbbell Press", "Shoulders"],
  ["Cuban Press", "Shoulders"],
  ["Push Press", "Shoulders"],
  ["Machine Shoulder Press", "Shoulders"],
  ["Reverse Pec Deck Fly", "Shoulders"],
  ["Barbell Curl", "Arms"],
  ["Dumbbell Curl", "Arms"],
  ["Hammer Curl", "Arms"],
  ["Preacher Curl", "Arms"],
  ["Cable Curl", "Arms"],
  ["Tricep Pushdown", "Arms"],
  ["Skull Crusher", "Arms"],
  ["Close-Grip Bench Press", "Arms"],
  ["Overhead Tricep Extension", "Arms"],
  ["Tricep Dip", "Arms"],
  ["Concentration Curl", "Arms"],
  ["Zottman Curl", "Arms"],
  ["EZ-Bar Curl", "Arms"],
  ["Reverse Curl", "Arms"],
  ["Cable Overhead Tricep Extension", "Arms"],
  ["Diamond Push-up", "Arms"],
  ["Plank", "Core"],
  ["Hanging Leg Raise", "Core"],
  ["Cable Crunch", "Core"],
  ["Russian Twist", "Core"],
  ["Sit-up", "Core"],
  ["Bicycle Crunch", "Core"],
  ["Ab Wheel Rollout", "Core"],
  ["Mountain Climbers", "Core"],
  ["Side Plank", "Core"],
  ["V-Up", "Core"],
  ["Dead Bug", "Core"],
  ["Flutter Kicks", "Core"],
  ["Woodchopper", "Core"],
  ["Toe Touch", "Core"],
  ["Clean and Press", "Full Body"],
  ["Kettlebell Swing", "Full Body"],
  ["Burpee", "Full Body"],
  ["Thruster", "Full Body"],
  ["Farmer's Carry", "Full Body"],
  ["Turkish Get-Up", "Full Body"],
  ["Treadmill Run", "Cardio"],
  ["Rowing Machine", "Cardio"],
  ["Jump Rope", "Cardio"],
  ["Stationary Bike", "Cardio"],
  ["Elliptical", "Cardio"],
  ["Stair Climber", "Cardio"],
  ["Box Jump", "Cardio"],
  ["Assault Bike", "Cardio"],
  ["Sled Push", "Cardio"],
  ["Battle Ropes", "Cardio"],
  ["Swimming", "Cardio"],
  ["Outdoor Cycling", "Cardio"],
  ["Incline Treadmill Walk", "Cardio"]
];
const REST_PRESETS = [30, 60, 90, 120, 180];
const STORAGE_KEYS = {
  settings: "gym_settings",
  exercises: "gym_exercises",
  routines: "gym_routines",
  sessions: "gym_sessions",
  active: "gym_active_session",
  rotation: "gym_rotation_index"
};
const LS_PREFIX = "ironlog:";
async function loadKey(key, fallback) {
  try {
    const raw = localStorage.getItem(LS_PREFIX + key);
    if (raw == null) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    return fallback;
  }
}
async function saveKey(key, value) {
  try {
    localStorage.setItem(LS_PREFIX + key, JSON.stringify(value));
  } catch (e) {
    console.error("save failed", key, e);
  }
}
async function deleteKey(key) {
  try {
    localStorage.removeItem(LS_PREFIX + key);
  } catch (e) {
  }
}
const Screen = ({ children }) => /* @__PURE__ */ React.createElement("div", { className: "min-h-full", style: { padding: "24px 20px 112px" } }, children);
const SectionLabel = ({ children }) => /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, letterSpacing: "0.04em", color: C.dim, marginBottom: 8 } }, children);
const Card = ({ children, className = "", onClick, style }) => /* @__PURE__ */ React.createElement(
  "div",
  {
    onClick,
    className: `rounded-2xl ${onClick ? "cursor-pointer active:scale-[0.98] transition-transform" : ""} ${className}`,
    style: __spreadValues({ backgroundColor: C.surface, border: `1px solid ${C.border}`, padding: 16 }, style)
  },
  children
);
const BTN_VARIANTS = {
  primary: { backgroundColor: C.accent, color: C.accentDark, fontWeight: 600, border: "none" },
  ghost: { backgroundColor: "transparent", color: C.text, border: `1px solid ${C.border}` },
  subtle: { backgroundColor: C.surface2, color: C.text, border: "none" },
  lime: { backgroundColor: C.accent2, color: C.accentDark, fontWeight: 600, border: "none" },
  danger: { backgroundColor: "transparent", color: C.danger, border: `1px solid ${C.dangerBorder}` }
};
const Btn = ({ children, onClick, variant = "primary", className = "", disabled, type = "button", style }) => /* @__PURE__ */ React.createElement(
  "button",
  {
    type,
    disabled,
    onClick,
    className: `rounded-xl active:scale-[0.97] transition-transform ${className}`,
    style: __spreadValues(__spreadProps(__spreadValues({}, BTN_VARIANTS[variant]), {
      padding: "12px 16px",
      fontSize: 15,
      lineHeight: 1,
      opacity: disabled ? 0.4 : 1,
      cursor: disabled ? "not-allowed" : "pointer"
    }), style)
  },
  children
);
const Stepper = ({ value, onChange, step = 1, min = 0, max = 999, suffix, label }) => {
  const val = value === "" || value == null ? 0 : value;
  const clamp = (n) => Math.min(max, Math.max(min, round1(n)));
  const dec = () => onChange(clamp(val - step));
  const inc = () => onChange(clamp(val + step));
  return /* @__PURE__ */ React.createElement("div", { style: { width: 108 } }, label && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: C.dim, marginBottom: 4 } }, label), /* @__PURE__ */ React.createElement("div", { className: "flex items-center overflow-hidden rounded-lg", style: { backgroundColor: C.surface2, border: `1px solid ${C.border}` } }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: dec, className: "flex items-center justify-center shrink-0 active:scale-90 transition-transform", style: { width: 32, height: 36, color: C.text, background: "none", border: "none" } }, /* @__PURE__ */ React.createElement(Icon, { name: "minus", size: 13 })), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "number",
      inputMode: "decimal",
      value: val,
      onChange: (e) => onChange(e.target.value === "" ? 0 : clamp(Number(e.target.value))),
      className: "w-full min-w-0 outline-none",
      style: { background: "transparent", color: C.text, fontSize: 14, border: "none", textAlign: "center" }
    }
  ), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: inc, className: "flex items-center justify-center shrink-0 active:scale-90 transition-transform", style: { width: 32, height: 36, color: C.text, background: "none", border: "none" } }, /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 13 }))), suffix && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: C.dim, textAlign: "center", marginTop: 4 } }, suffix));
};
const Empty = ({ iconName, title, sub }) => /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center text-center", style: { padding: "56px 0", color: C.dim } }, /* @__PURE__ */ React.createElement(Icon, { name: iconName, size: 30, style: { marginBottom: 12, opacity: 0.6 } }), /* @__PURE__ */ React.createElement("div", { style: { color: C.text, fontSize: 15, fontWeight: 500, marginBottom: 4 } }, title), sub && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, maxWidth: 240 } }, sub));
const TextInput = (props) => /* @__PURE__ */ React.createElement(
  "input",
  __spreadProps(__spreadValues({}, props), {
    className: `w-full rounded-xl outline-none ${props.className || ""}`,
    style: __spreadValues({ backgroundColor: C.surface, border: `1px solid ${C.border}`, color: C.text, fontSize: 15, padding: "12px 16px" }, props.style)
  })
);
const Select = (props) => /* @__PURE__ */ React.createElement(
  "select",
  __spreadProps(__spreadValues({}, props), {
    className: `w-full rounded-xl outline-none ${props.className || ""}`,
    style: __spreadValues({ backgroundColor: C.surface, border: `1px solid ${C.border}`, color: C.text, fontSize: 15, padding: "12px 16px" }, props.style)
  })
);
function Home({ routines, sessions, exercises, rotationIndex, activeSession, unit, name, onStartRoutine, onResume, onGoWorkouts }) {
  const nextRoutine = routines.length ? routines[rotationIndex % routines.length] : null;
  const afterRoutine = routines.length > 1 ? routines[(rotationIndex + 1) % routines.length] : null;
  const greeting = useMemo(() => {
    const h = (/* @__PURE__ */ new Date()).getHours();
    if (h < 12) return "GOOD MORNING";
    if (h < 18) return "GOOD AFTERNOON";
    return "GOOD EVENING";
  }, []);
  const greetingLine = name ? `${greeting}, ${name.toUpperCase()}` : greeting;
  const muscleGroupsFor = (routine) => {
    var _a;
    if (!routine) return [];
    if ((_a = routine.targetMuscleGroups) == null ? void 0 : _a.length) return routine.targetMuscleGroups;
    const groups = [];
    routine.exercises.forEach((it) => {
      const ex = exercises.find((e) => e.id === it.exerciseId);
      if (ex && !groups.includes(ex.muscleGroup)) groups.push(ex.muscleGroup);
    });
    return groups;
  };
  const weekStats = useMemo(() => {
    const wkStart = startOfWeek(/* @__PURE__ */ new Date());
    const weekSessions = sessions.filter((s) => new Date(s.endedAt) >= wkStart);
    const volumeKg = weekSessions.reduce(
      (a, s) => a + s.exercises.reduce((b, e) => b + e.sets.filter((x) => x.completed).reduce((c, x) => c + x.weight * x.reps, 0), 0),
      0
    );
    return { count: weekSessions.length, volume: Math.round(fromKg(volumeKg, unit)), prs: computeWeeklyPRs(sessions, wkStart) };
  }, [sessions, unit]);
  return /* @__PURE__ */ React.createElement(Screen, null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, letterSpacing: "0.15em", color: C.dim, marginBottom: 20 } }, greetingLine), activeSession ? /* @__PURE__ */ React.createElement(Card, { style: { marginBottom: 20, borderColor: rgba(C.accent, 0.5) } }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: C.accent, fontWeight: 500, marginBottom: 4 } }, "IN PROGRESS"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 17, color: C.text, fontWeight: 500 } }, activeSession.routineName)), /* @__PURE__ */ React.createElement(Btn, { variant: "primary", onClick: onResume }, "Resume"))) : /* @__PURE__ */ React.createElement(Card, { style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement(SectionLabel, null, "Today's Workout"), nextRoutine ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 26, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.02em", color: C.text, lineHeight: 1.2, marginBottom: 6, fontFamily: HEAD_FONT } }, nextRoutine.name), muscleGroupsFor(nextRoutine).length > 0 && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: C.dim, marginBottom: 2 } }, muscleGroupsFor(nextRoutine).join(" \u2022 ")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: C.dim, marginBottom: 16 } }, nextRoutine.exercises.length, " Exercise", nextRoutine.exercises.length !== 1 ? "s" : ""), /* @__PURE__ */ React.createElement(Btn, { variant: "primary", className: "w-full flex items-center justify-center gap-2", style: { textTransform: "uppercase", letterSpacing: "0.04em" }, onClick: () => onStartRoutine(nextRoutine) }, /* @__PURE__ */ React.createElement(Icon, { name: "play", size: 16 }), " Start Workout")) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, color: C.text, marginBottom: 12 } }, "No routines yet"), /* @__PURE__ */ React.createElement(Btn, { variant: "subtle", className: "w-full", onClick: onGoWorkouts }, "Create a routine"))), /* @__PURE__ */ React.createElement(SectionLabel, null, "This Week"), /* @__PURE__ */ React.createElement(Card, { style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-2 text-center" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, color: C.text, fontWeight: 600 } }, weekStats.count), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: C.dim } }, "Workout", weekStats.count !== 1 ? "s" : "")), /* @__PURE__ */ React.createElement("div", { style: { borderLeft: `1px solid ${C.border}`, borderRight: `1px solid ${C.border}` } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, color: C.text, fontWeight: 600 } }, weekStats.volume.toLocaleString()), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: C.dim } }, unit, " Volume")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, color: C.text, fontWeight: 600 } }, weekStats.prs), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: C.dim } }, "PR", weekStats.prs !== 1 ? "s" : "")))), afterRoutine && /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between", style: { padding: "0 4px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: C.dim } }, "Next Planned"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: C.text, fontWeight: 500 } }, afterRoutine.name)));
}
function WorkoutsList({ routines, exercises, onCreate, onEdit, onDelete, onStart }) {
  const exById = (id) => exercises.find((e) => e.id === id);
  return /* @__PURE__ */ React.createElement(Screen, null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between", style: { marginBottom: 24 } }, /* @__PURE__ */ React.createElement("h1", { style: { fontSize: 24, fontWeight: 600, color: C.text, fontFamily: HEAD_FONT } }, "Routines"), /* @__PURE__ */ React.createElement(Btn, { variant: "lime", onClick: onCreate, className: "flex items-center gap-1", style: { padding: "8px 14px" } }, /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 16 }), " New")), routines.length === 0 && /* @__PURE__ */ React.createElement(Empty, { iconName: "dumbbell", title: "No routines yet", sub: "Build a routine with your exercises, sets and target weights." }), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-3" }, routines.map((r) => {
    var _a;
    const groups = ((_a = r.targetMuscleGroups) == null ? void 0 : _a.length) ? r.targetMuscleGroups : [...new Set(r.exercises.map((it) => {
      var _a2;
      return (_a2 = exById(it.exerciseId)) == null ? void 0 : _a2.muscleGroup;
    }).filter(Boolean))];
    return /* @__PURE__ */ React.createElement(Card, { key: r.id }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between", style: { marginBottom: 4 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.02em", color: C.text, fontFamily: HEAD_FONT } }, r.name), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 shrink-0", style: { marginLeft: 8 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => onEdit(r), className: "rounded-lg", style: { padding: 8, backgroundColor: C.surface2, color: C.text, border: "none" } }, /* @__PURE__ */ React.createElement(Icon, { name: "edit", size: 14 })), /* @__PURE__ */ React.createElement("button", { onClick: () => onDelete(r), className: "rounded-lg", style: { padding: 8, backgroundColor: C.surface2, color: C.danger, border: "none" } }, /* @__PURE__ */ React.createElement(Icon, { name: "trash", size: 14 })))), groups.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: C.dim, marginBottom: 12 } }, groups.join(" \u2022 ")), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col", style: { marginBottom: 12 } }, r.exercises.map((it, i) => {
      const ex = exById(it.exerciseId);
      return /* @__PURE__ */ React.createElement("div", { key: it.id, className: "flex items-center justify-between", style: { padding: "6px 0", borderTop: i > 0 ? `1px solid ${C.border}` : "none" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, color: C.text } }, (ex == null ? void 0 : ex.name) || "Unknown"), /* @__PURE__ */ React.createElement("span", { className: "shrink-0", style: { fontSize: 13, color: C.dim, marginLeft: 12 } }, it.targetSets, " \xD7 ", it.targetReps, it.targetWeight ? ` @ ${it.targetWeight}` : ""));
    })), /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", className: "w-full flex items-center justify-center gap-2", onClick: () => onStart(r) }, /* @__PURE__ */ React.createElement(Icon, { name: "play", size: 14 }), " Start"));
  })));
}
function RoutineEditor({ routine, exercises, unit, onSave, onCancel, onAddCustomExercise }) {
  const [name, setName] = useState((routine == null ? void 0 : routine.name) || "");
  const [targetGroups, setTargetGroups] = useState((routine == null ? void 0 : routine.targetMuscleGroups) || []);
  const [items, setItems] = useState((routine == null ? void 0 : routine.exercises) ? [...routine.exercises] : []);
  const [picking, setPicking] = useState(false);
  const [customName, setCustomName] = useState("");
  const [customGroup, setCustomGroup] = useState(MUSCLE_GROUPS[0]);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const toggleGroup = (g) => setTargetGroups((prev) => prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]);
  const move = (idx, dir) => {
    const next = [...items];
    const j = idx + dir;
    if (j < 0 || j >= next.length) return;
    [next[idx], next[j]] = [next[j], next[idx]];
    setItems(next);
  };
  const update = (idx, patch) => {
    const next = [...items];
    next[idx] = __spreadValues(__spreadValues({}, next[idx]), patch);
    setItems(next);
  };
  const remove = (idx) => setItems(items.filter((_, i) => i !== idx));
  const addExercise = (ex) => {
    setItems([...items, { id: uid(), exerciseId: ex.id, targetSets: 3, targetReps: 10, targetWeight: null, restSec: 90 }]);
    setPicking(false);
  };
  const exById = (id) => exercises.find((e) => e.id === id);
  return /* @__PURE__ */ React.createElement(Screen, null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3", style: { marginBottom: 24 } }, /* @__PURE__ */ React.createElement("button", { onClick: onCancel, style: { padding: 8, marginLeft: -8, color: C.text, background: "none", border: "none" } }, /* @__PURE__ */ React.createElement(Icon, { name: "arrow-left", size: 20 })), /* @__PURE__ */ React.createElement("h1", { style: { fontSize: 20, fontWeight: 600, color: C.text, fontFamily: HEAD_FONT } }, routine ? "Edit Routine" : "New Routine")), /* @__PURE__ */ React.createElement(TextInput, { value: name, onChange: (e) => setName(e.target.value), placeholder: "Routine name (e.g. Push Day)", style: { marginBottom: 16 } }), /* @__PURE__ */ React.createElement(SectionLabel, null, "Target muscle groups"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 flex-wrap", style: { marginBottom: 24 } }, MUSCLE_GROUPS.map((g) => {
    const active = targetGroups.includes(g);
    return /* @__PURE__ */ React.createElement("button", { key: g, onClick: () => toggleGroup(g), className: "rounded-full", style: { padding: "6px 12px", fontSize: 12, border: `1px solid ${active ? C.accent : C.border}`, backgroundColor: active ? C.accent : "transparent", color: active ? C.accentDark : C.dim } }, g);
  })), /* @__PURE__ */ React.createElement(SectionLabel, null, "Exercises"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-3", style: { marginBottom: 16 } }, items.map((it, idx) => {
    var _a;
    const ex = exById(it.exerciseId);
    return /* @__PURE__ */ React.createElement(Card, { key: it.id }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between", style: { marginBottom: 12 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, color: C.text, fontWeight: 500 } }, (ex == null ? void 0 : ex.name) || "Unknown"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: C.dim } }, ex == null ? void 0 : ex.muscleGroup)), /* @__PURE__ */ React.createElement("div", { className: "flex gap-1" }, /* @__PURE__ */ React.createElement("button", { onClick: () => move(idx, -1), disabled: idx === 0, className: "rounded-lg", style: { padding: 6, backgroundColor: C.surface2, color: C.text, border: "none", opacity: idx === 0 ? 0.3 : 1 } }, /* @__PURE__ */ React.createElement(Icon, { name: "chevron-up", size: 14 })), /* @__PURE__ */ React.createElement("button", { onClick: () => move(idx, 1), disabled: idx === items.length - 1, className: "rounded-lg", style: { padding: 6, backgroundColor: C.surface2, color: C.text, border: "none", opacity: idx === items.length - 1 ? 0.3 : 1 } }, /* @__PURE__ */ React.createElement(Icon, { name: "chevron-down", size: 14 })), /* @__PURE__ */ React.createElement("button", { onClick: () => remove(idx), className: "rounded-lg", style: { padding: 6, backgroundColor: C.surface2, color: C.danger, border: "none" } }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 14 })))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 flex-wrap" }, /* @__PURE__ */ React.createElement(Stepper, { label: "Sets", value: it.targetSets, min: 1, max: 20, onChange: (v) => update(idx, { targetSets: v }) }), /* @__PURE__ */ React.createElement(Stepper, { label: "Reps", value: it.targetReps, min: 1, max: 100, onChange: (v) => update(idx, { targetReps: v }) }), /* @__PURE__ */ React.createElement(Stepper, { label: "Weight (optional)", value: (_a = it.targetWeight) != null ? _a : 0, step: unit === "lb" ? 5 : 2.5, max: 2e3, suffix: unit, onChange: (v) => update(idx, { targetWeight: v === 0 ? null : v }) }), /* @__PURE__ */ React.createElement("div", { style: { width: 110 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: C.dim, marginBottom: 4 } }, "Rest"), /* @__PURE__ */ React.createElement(Select, { value: it.restSec, onChange: (e) => update(idx, { restSec: Number(e.target.value) }), style: { padding: "9px 8px", fontSize: 13 } }, REST_PRESETS.map((s) => /* @__PURE__ */ React.createElement("option", { key: s, value: s }, s, "s"))))));
  })), /* @__PURE__ */ React.createElement(Btn, { variant: "subtle", className: "w-full flex items-center justify-center gap-2", style: { marginBottom: 32 }, onClick: () => setPicking(true) }, /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 16 }), " Add Exercise"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3" }, /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", className: "flex-1", onClick: onCancel }, "Cancel"), /* @__PURE__ */ React.createElement(Btn, { variant: "primary", className: "flex-1", disabled: !name.trim() || items.length === 0, onClick: () => onSave({ id: (routine == null ? void 0 : routine.id) || uid(), name: name.trim(), targetMuscleGroups: targetGroups, exercises: items }) }, "Save Routine")), picking && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 flex items-end", style: { backgroundColor: "rgba(0,0,0,0.65)", zIndex: 30 }, onClick: () => setPicking(false) }, /* @__PURE__ */ React.createElement("div", { className: "w-full overflow-y-auto", style: { backgroundColor: C.sheet, borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 20, maxHeight: "75vh" }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 4, backgroundColor: C.border, borderRadius: 999, margin: "0 auto 16px" } }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, color: C.text, fontWeight: 500, marginBottom: 16 } }, "Add Exercise"), !showCustomForm ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Btn, { variant: "subtle", className: "w-full flex items-center justify-center gap-2", style: { marginBottom: 12 }, onClick: () => setShowCustomForm(true) }, /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 14 }), " Create custom exercise"), MUSCLE_GROUPS.map((g) => {
    const inGroup = exercises.filter((e) => e.muscleGroup === g);
    if (!inGroup.length) return null;
    return /* @__PURE__ */ React.createElement("div", { key: g, style: { marginBottom: 16 } }, /* @__PURE__ */ React.createElement(SectionLabel, null, g), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1" }, inGroup.map((e) => /* @__PURE__ */ React.createElement("button", { key: e.id, onClick: () => addExercise(e), className: "text-left rounded-lg", style: { padding: "10px 12px", backgroundColor: C.surface, color: C.text, fontSize: 14, border: "none" } }, e.name, e.isCustom && /* @__PURE__ */ React.createElement("span", { style: { color: C.dim, fontSize: 11 } }, " \xB7 custom")))));
  })) : /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-3" }, /* @__PURE__ */ React.createElement(TextInput, { value: customName, onChange: (e) => setCustomName(e.target.value), placeholder: "Exercise name" }), /* @__PURE__ */ React.createElement(Select, { value: customGroup, onChange: (e) => setCustomGroup(e.target.value) }, MUSCLE_GROUPS.map((g) => /* @__PURE__ */ React.createElement("option", { key: g, value: g }, g))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3" }, /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", className: "flex-1", onClick: () => setShowCustomForm(false) }, "Back"), /* @__PURE__ */ React.createElement(Btn, { variant: "primary", className: "flex-1", disabled: !customName.trim(), onClick: () => {
    const ex = onAddCustomExercise(customName.trim(), customGroup);
    setCustomName("");
    setShowCustomForm(false);
    addExercise(ex);
  } }, "Add"))))));
}
function RestTimer({ initialSec, onClose }) {
  const [total, setTotal] = useState(initialSec);
  const [remaining, setRemaining] = useState(initialSec);
  const [running, setRunning] = useState(true);
  useEffect(() => {
    if (!running || remaining <= 0) return;
    const t = setTimeout(() => setRemaining((r) => r - 1), 1e3);
    return () => clearTimeout(t);
  }, [remaining, running]);
  const pct = total > 0 ? remaining / total * 100 : 0;
  const mm = Math.floor(remaining / 60);
  const ss = String(remaining % 60).padStart(2, "0");
  return /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 flex flex-col items-center justify-center", style: { backgroundColor: rgba("#0F1114", 0.97), zIndex: 40, padding: "0 24px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: C.dim, letterSpacing: "0.04em", marginBottom: 24 } }, "REST"), /* @__PURE__ */ React.createElement("div", { className: "relative", style: { width: 224, height: 224, marginBottom: 32 } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 100 100", style: { width: "100%", height: "100%", transform: "rotate(-90deg)" } }, /* @__PURE__ */ React.createElement("circle", { cx: "50", cy: "50", r: "44", fill: "none", stroke: C.surface2, strokeWidth: "6" }), /* @__PURE__ */ React.createElement(
    "circle",
    {
      cx: "50",
      cy: "50",
      r: "44",
      fill: "none",
      stroke: C.accent,
      strokeWidth: "6",
      strokeDasharray: `${2 * Math.PI * 44}`,
      strokeDashoffset: `${2 * Math.PI * 44 * (1 - pct / 100)}`,
      strokeLinecap: "round",
      style: { transition: "stroke-dashoffset 1s linear" }
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 flex items-center justify-center" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 44, fontWeight: 600, color: C.text, fontFamily: HEAD_FONT } }, mm, ":", ss))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 flex-wrap justify-center", style: { marginBottom: 32 } }, REST_PRESETS.map((s) => {
    const active = s === total;
    return /* @__PURE__ */ React.createElement("button", { key: s, onClick: () => {
      setTotal(s);
      setRemaining(s);
      setRunning(true);
    }, className: "rounded-lg", style: { padding: "8px 12px", fontSize: 13, border: `1px solid ${active ? C.accent : C.border}`, backgroundColor: active ? C.accent : "transparent", color: active ? C.accentDark : C.text } }, s, "s");
  })), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3 w-full", style: { maxWidth: 320 } }, /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", className: "flex-1", onClick: () => setRunning((r) => !r) }, running ? "Pause" : "Resume"), /* @__PURE__ */ React.createElement(Btn, { variant: "primary", className: "flex-1", onClick: onClose }, "Skip Rest")));
}
function ActiveWorkout({ session, setSession, exercises, sessions, unit, onFinish, onExitToBackground }) {
  const [idx, setIdx] = useState(0);
  const [restSec, setRestSec] = useState(null);
  const exList = session.exercises;
  const cur = exList[idx];
  const exMeta = exercises.find((e) => e.id === cur.exerciseId);
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setElapsed(Math.floor((Date.now() - new Date(session.startedAt).getTime()) / 1e3)), 1e3);
    return () => clearInterval(t);
  }, [session.startedAt]);
  const prevPerformance = useMemo(() => {
    for (let i = sessions.length - 1; i >= 0; i--) {
      const found = sessions[i].exercises.find((e) => e.exerciseId === cur.exerciseId);
      if (found && found.sets.some((s) => s.completed)) return found;
    }
    return null;
  }, [sessions, cur.exerciseId]);
  const suggestion = useMemo(() => {
    if (!prevPerformance) return null;
    const completed = prevPerformance.sets.filter((s) => s.completed);
    if (!completed.length) return null;
    const target = cur.targetReps;
    const hitAll = completed.length >= (cur.targetSets || 1) && completed.every((s) => s.reps >= target);
    const bestW = Math.max(...completed.map((s) => s.weight));
    const inc = unit === "lb" ? 2.5 * KG_PER_LB : 2.5;
    if (hitAll) return { text: `Try ${fmtWeight(bestW, unit)} + ${round1(inc)}${unit} today \u2014 you hit all sets last time.` };
    return { text: `Repeat ${fmtWeight(bestW, unit)}${unit} and aim for ${target} reps.` };
  }, [prevPerformance, cur, unit]);
  const updateSets = (sets) => setSession(__spreadProps(__spreadValues({}, session), { exercises: exList.map((e, i) => i === idx ? __spreadProps(__spreadValues({}, e), { sets }) : e) }));
  const setRow = (si, patch) => {
    const sets = [...cur.sets];
    sets[si] = __spreadValues(__spreadValues({}, sets[si]), patch);
    updateSets(sets);
  };
  const completeSet = (si) => {
    const wasCompleted = cur.sets[si].completed;
    setRow(si, { completed: !wasCompleted });
    if (!wasCompleted) setRestSec(cur.restSec || 90);
  };
  const addSet = () => {
    var _a, _b;
    const last = cur.sets[cur.sets.length - 1];
    updateSets([...cur.sets, { weight: (_a = last == null ? void 0 : last.weight) != null ? _a : 0, reps: (_b = last == null ? void 0 : last.reps) != null ? _b : cur.targetReps, completed: false }]);
  };
  const removeSet = (si) => updateSets(cur.sets.filter((_, i) => i !== si));
  const totalSets = exList.reduce((a, e) => a + e.sets.length, 0);
  const doneSets = exList.reduce((a, e) => a + e.sets.filter((s) => s.completed).length, 0);
  return /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 flex flex-col", style: { backgroundColor: C.bg, zIndex: 20 } }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between", style: { padding: "24px 20px 12px" } }, /* @__PURE__ */ React.createElement("button", { onClick: onExitToBackground, style: { padding: 8, marginLeft: -8, color: C.text, background: "none", border: "none" } }, /* @__PURE__ */ React.createElement(Icon, { name: "chevron-down", size: 22 })), /* @__PURE__ */ React.createElement("div", { className: "text-center" }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: C.dim } }, session.routineName), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, color: C.text, fontWeight: 500, fontFamily: HEAD_FONT } }, String(Math.floor(elapsed / 60)).padStart(2, "0"), ":", String(elapsed % 60).padStart(2, "0"))), /* @__PURE__ */ React.createElement("button", { onClick: () => onFinish(session), style: { fontSize: 13, color: C.accent, fontWeight: 500, padding: "0 8px", background: "none", border: "none" } }, "Finish")), /* @__PURE__ */ React.createElement("div", { className: "rounded-full overflow-hidden", style: { height: 4, backgroundColor: C.surface2, margin: "0 20px 8px" } }, /* @__PURE__ */ React.createElement("div", { style: { height: "100%", backgroundColor: C.accent2, width: `${totalSets ? doneSets / totalSets * 100 : 0}%` } })), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between", style: { padding: "8px 20px" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setIdx((i) => Math.max(0, i - 1)), disabled: idx === 0, style: { padding: 8, color: C.text, background: "none", border: "none", opacity: idx === 0 ? 0.3 : 1 } }, /* @__PURE__ */ React.createElement(Icon, { name: "chevron-left", size: 20 })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: C.dim } }, idx + 1, " / ", exList.length), /* @__PURE__ */ React.createElement("button", { onClick: () => setIdx((i) => Math.min(exList.length - 1, i + 1)), disabled: idx === exList.length - 1, style: { padding: 8, color: C.text, background: "none", border: "none", opacity: idx === exList.length - 1 ? 0.3 : 1 } }, /* @__PURE__ */ React.createElement(Icon, { name: "chevron-right", size: 20 }))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-y-auto", style: { padding: "0 20px 24px" } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 16 } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: 24, color: C.text, fontWeight: 600, fontFamily: HEAD_FONT } }, exMeta == null ? void 0 : exMeta.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: C.dim } }, exMeta == null ? void 0 : exMeta.muscleGroup, " \xB7 Target ", cur.targetSets, "\xD7", cur.targetReps, " \xB7 Rest ", cur.restSec, "s")), prevPerformance && /* @__PURE__ */ React.createElement(Card, { style: { marginBottom: 12 } }, /* @__PURE__ */ React.createElement(SectionLabel, null, "Previous performance"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 flex-wrap" }, prevPerformance.sets.filter((s) => s.completed).map((s, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "rounded-md", style: { fontSize: 12, padding: "4px 8px", backgroundColor: C.surface2, color: C.text } }, fmtWeight(s.weight, unit), unit, " \xD7 ", s.reps)))), suggestion && /* @__PURE__ */ React.createElement(Card, { style: { marginBottom: 16, borderColor: rgba(C.accent2, 0.4) } }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start gap-2" }, /* @__PURE__ */ React.createElement(Icon, { name: "trending-up", size: 15, className: "shrink-0", style: { color: C.accent2, marginTop: 2 } }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: C.text } }, suggestion.text))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-2", style: { fontSize: 11, color: C.dim, padding: "0 8px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 32 } }, "Set"), /* @__PURE__ */ React.createElement("div", { className: "flex-1 text-center" }, "Weight (", unit, ")"), /* @__PURE__ */ React.createElement("div", { className: "flex-1 text-center" }, "Reps"), /* @__PURE__ */ React.createElement("div", { style: { width: 36 } })), cur.sets.map((s, si) => /* @__PURE__ */ React.createElement("div", { key: si, className: "flex items-center gap-2 rounded-xl", style: { padding: "8px 8px", backgroundColor: s.completed ? C.setDone : C.surface, border: `1px solid ${C.border}` } }, /* @__PURE__ */ React.createElement("div", { style: { width: 32, textAlign: "center", fontSize: 13, color: C.dim } }, si + 1), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "number",
      inputMode: "decimal",
      value: round1(fromKg(s.weight, unit)),
      onChange: (e) => setRow(si, { weight: toKg(Number(e.target.value || 0), unit) }),
      className: "flex-1 rounded-lg outline-none",
      style: { padding: "8px 0", textAlign: "center", fontSize: 15, backgroundColor: C.surface2, color: C.text, border: "none" }
    }
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "number",
      inputMode: "numeric",
      value: s.reps,
      onChange: (e) => setRow(si, { reps: Number(e.target.value || 0) }),
      className: "flex-1 rounded-lg outline-none",
      style: { padding: "8px 0", textAlign: "center", fontSize: 15, backgroundColor: C.surface2, color: C.text, border: "none" }
    }
  ), /* @__PURE__ */ React.createElement("button", { onClick: () => completeSet(si), className: "rounded-lg flex items-center justify-center", style: { width: 36, height: 36, backgroundColor: s.completed ? C.accent2 : C.surface2, color: s.completed ? C.accentDark : C.dim, border: "none" } }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 16 }))))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3", style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement(Btn, { variant: "subtle", className: "flex-1 flex items-center justify-center gap-1", onClick: addSet }, /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 14 }), " Add Set"), cur.sets.length > 1 && /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", className: "flex-1", onClick: () => removeSet(cur.sets.length - 1) }, "Remove Set")), /* @__PURE__ */ React.createElement("button", { onClick: () => setRestSec(cur.restSec || 90), className: "w-full flex items-center justify-center gap-1", style: { marginTop: 16, textAlign: "center", fontSize: 13, color: C.dim, padding: "8px 0", background: "none", border: "none" } }, /* @__PURE__ */ React.createElement(Icon, { name: "clock", size: 13 }), " Start rest timer manually")), restSec != null && /* @__PURE__ */ React.createElement(RestTimer, { initialSec: restSec, onClose: () => setRestSec(null) }));
}
function Progress({ sessions, exercises, unit }) {
  const exerciseIdsWithHistory = useMemo(() => {
    const ids = /* @__PURE__ */ new Set();
    sessions.forEach((s) => s.exercises.forEach((e) => {
      if (e.sets.some((x) => x.completed)) ids.add(e.exerciseId);
    }));
    return [...ids];
  }, [sessions]);
  const [selectedId, setSelectedId] = useState(exerciseIdsWithHistory[0] || null);
  useEffect(() => {
    if (!selectedId && exerciseIdsWithHistory.length) setSelectedId(exerciseIdsWithHistory[0]);
  }, [exerciseIdsWithHistory, selectedId]);
  const [metric, setMetric] = useState("weight");
  const [monthOffset, setMonthOffset] = useState(0);
  const exName = (id) => {
    var _a;
    return ((_a = exercises.find((e) => e.id === id)) == null ? void 0 : _a.name) || "Exercise";
  };
  const chartData = useMemo(() => {
    if (!selectedId) return [];
    const rows = [];
    sessions.forEach((s) => {
      const found = s.exercises.find((e) => e.exerciseId === selectedId);
      if (!found) return;
      const completed = found.sets.filter((x) => x.completed);
      if (!completed.length) return;
      const maxWeight = Math.max(...completed.map((x) => x.weight));
      const volume = completed.reduce((a, x) => a + x.weight * x.reps, 0);
      const maxReps = Math.max(...completed.map((x) => x.reps));
      rows.push({
        date: new Date(s.endedAt).toLocaleDateString(void 0, { month: "short", day: "numeric" }),
        weight: round1(fromKg(maxWeight, unit)),
        volume: round1(fromKg(volume, unit)),
        reps: maxReps
      });
    });
    return rows;
  }, [sessions, selectedId, unit]);
  const prs = useMemo(() => {
    if (!selectedId) return { bestWeight: 0, bestVolume: 0, bestReps: 0, best1rm: 0 };
    let bestWeight = 0, bestVolume = 0, bestReps = 0, best1rm = 0;
    sessions.forEach((s) => {
      const found = s.exercises.find((e) => e.exerciseId === selectedId);
      if (!found) return;
      const completed = found.sets.filter((x) => x.completed);
      if (!completed.length) return;
      const vol = completed.reduce((a, x) => a + x.weight * x.reps, 0);
      if (vol > bestVolume) bestVolume = vol;
      completed.forEach((x) => {
        if (x.weight > bestWeight) bestWeight = x.weight;
        if (x.reps > bestReps) bestReps = x.reps;
        const e1 = epley1RM(x.weight, x.reps);
        if (e1 > best1rm) best1rm = e1;
      });
    });
    return { bestWeight, bestVolume, bestReps, best1rm };
  }, [sessions, selectedId]);
  const stats = useMemo(() => {
    const total = sessions.length;
    let streak = 0;
    let cursor = startOfWeek(/* @__PURE__ */ new Date());
    while (true) {
      const weekEnd = new Date(cursor);
      weekEnd.setDate(weekEnd.getDate() + 7);
      const hasSession = sessions.some((s) => {
        const d = new Date(s.endedAt);
        return d >= cursor && d < weekEnd;
      });
      if (!hasSession) break;
      streak += 1;
      cursor.setDate(cursor.getDate() - 7);
    }
    const last4wkStart = /* @__PURE__ */ new Date();
    last4wkStart.setDate(last4wkStart.getDate() - 28);
    const last4 = sessions.filter((s) => new Date(s.endedAt) >= last4wkStart).length;
    return { total, streak, avgPerWeek: round1(last4 / 4) };
  }, [sessions]);
  const calMonth = useMemo(() => {
    const d = /* @__PURE__ */ new Date();
    d.setMonth(d.getMonth() + monthOffset);
    return d;
  }, [monthOffset]);
  const calDays = useMemo(() => {
    const year = calMonth.getFullYear(), month = calMonth.getMonth();
    const first = new Date(year, month, 1);
    const startPad = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < startPad; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
    return cells;
  }, [calMonth]);
  const sessionsByDay = useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    sessions.forEach((s) => {
      const d = new Date(s.endedAt);
      map.set(d.toDateString(), (map.get(d.toDateString()) || 0) + 1);
    });
    return map;
  }, [sessions]);
  return /* @__PURE__ */ React.createElement(Screen, null, /* @__PURE__ */ React.createElement("h1", { style: { fontSize: 24, fontWeight: 600, color: C.text, fontFamily: HEAD_FONT, marginBottom: 24 } }, "Progress"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-2", style: { marginBottom: 24 } }, /* @__PURE__ */ React.createElement(Card, { className: "text-center", style: { padding: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 20, color: C.text, fontWeight: 600 } }, stats.total), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: C.dim } }, "workouts")), /* @__PURE__ */ React.createElement(Card, { className: "text-center", style: { padding: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 20, color: C.text, fontWeight: 600 } }, stats.streak), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: C.dim } }, "week streak")), /* @__PURE__ */ React.createElement(Card, { className: "text-center", style: { padding: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 20, color: C.text, fontWeight: 600 } }, stats.avgPerWeek), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: C.dim } }, "avg / week"))), exerciseIdsWithHistory.length === 0 ? /* @__PURE__ */ React.createElement(Empty, { iconName: "trending-up", title: "No history yet", sub: "Finish a workout to start seeing progress, PRs and charts here." }) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(SectionLabel, null, "Exercise"), /* @__PURE__ */ React.createElement(Select, { value: selectedId || "", onChange: (e) => setSelectedId(e.target.value), style: { marginBottom: 16 } }, exerciseIdsWithHistory.map((id) => /* @__PURE__ */ React.createElement("option", { key: id, value: id }, exName(id)))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-2", style: { marginBottom: 16 } }, /* @__PURE__ */ React.createElement(Card, { style: { padding: 12 } }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1", style: { fontSize: 10, color: C.dim, marginBottom: 4 } }, /* @__PURE__ */ React.createElement(Icon, { name: "trophy", size: 11 }), " Best weight"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, color: C.text, fontWeight: 600 } }, fmtWeight(prs.bestWeight, unit), " ", unit)), /* @__PURE__ */ React.createElement(Card, { style: { padding: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: C.dim, marginBottom: 4 } }, "Est. 1RM"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, color: C.text, fontWeight: 600 } }, fmtWeight(prs.best1rm, unit), " ", unit)), /* @__PURE__ */ React.createElement(Card, { style: { padding: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: C.dim, marginBottom: 4 } }, "Best reps"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, color: C.text, fontWeight: 600 } }, prs.bestReps))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2", style: { marginBottom: 12 } }, [["weight", "Weight"], ["volume", "Volume"], ["reps", "Reps"]].map(([k, label]) => {
    const active = metric === k;
    return /* @__PURE__ */ React.createElement("button", { key: k, onClick: () => setMetric(k), className: "rounded-lg", style: { padding: "6px 12px", fontSize: 12, border: "none", backgroundColor: active ? C.accent : C.surface2, color: active ? C.accentDark : C.dim } }, label);
  })), /* @__PURE__ */ React.createElement(Card, { style: { marginBottom: 24, padding: 12 } }, /* @__PURE__ */ React.createElement(MiniLineChart, { data: chartData, dataKey: metric, color: C.accent }))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between", style: { marginBottom: 8 } }, /* @__PURE__ */ React.createElement(SectionLabel, null, "Calendar"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setMonthOffset((m) => m - 1), style: { color: C.dim, background: "none", border: "none" } }, /* @__PURE__ */ React.createElement(Icon, { name: "chevron-left", size: 16 })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: C.text, width: 96, textAlign: "center" } }, calMonth.toLocaleDateString(void 0, { month: "long", year: "numeric" })), /* @__PURE__ */ React.createElement("button", { onClick: () => setMonthOffset((m) => m + 1), disabled: monthOffset >= 0, style: { color: C.dim, background: "none", border: "none", opacity: monthOffset >= 0 ? 0.3 : 1 } }, /* @__PURE__ */ React.createElement(Icon, { name: "chevron-right", size: 16 })))), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-7 gap-1 text-center", style: { fontSize: 10, color: C.dim, marginBottom: 8 } }, ["M", "T", "W", "T", "F", "S", "S"].map((d, i) => /* @__PURE__ */ React.createElement("div", { key: i }, d))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-7 gap-1" }, calDays.map((d, i) => {
    const has = d && sessionsByDay.get(d.toDateString());
    const isToday = d && sameDay(d, /* @__PURE__ */ new Date());
    return /* @__PURE__ */ React.createElement("div", { key: i, className: "aspect-square flex items-center justify-center" }, d && /* @__PURE__ */ React.createElement("div", { className: "w-full h-full rounded-lg flex items-center justify-center", style: { fontSize: 11, backgroundColor: has ? C.accent2 : "transparent", color: has ? C.accentDark : C.dim, fontWeight: has ? 500 : 400, border: isToday && !has ? `1px solid ${C.accent}` : "none" } }, d.getDate()));
  }))));
}
function SettingsModal({ settings, onChangeUnit, onChangeName, onExport, onImport, onReset, onClose }) {
  const fileRef = useRef(null);
  const [nameDraft, setNameDraft] = useState(settings.name || "");
  return /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 flex items-end", style: { backgroundColor: "rgba(0,0,0,0.65)", zIndex: 30 }, onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "w-full overflow-y-auto", style: { backgroundColor: C.sheet, borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 20, maxHeight: "85vh" }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 4, backgroundColor: C.border, borderRadius: 999, margin: "0 auto 20px" } }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, color: C.text, fontWeight: 500, marginBottom: 20 } }, "Settings"), /* @__PURE__ */ React.createElement(SectionLabel, null, "Your name"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 24 } }, /* @__PURE__ */ React.createElement(TextInput, { value: nameDraft, onChange: (e) => setNameDraft(e.target.value), onBlur: () => onChangeName(nameDraft.trim()), placeholder: "e.g. Alex" })), /* @__PURE__ */ React.createElement(SectionLabel, null, "Units"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2", style: { marginBottom: 24 } }, ["kg", "lb"].map((u) => {
    const active = settings.unit === u;
    return /* @__PURE__ */ React.createElement("button", { key: u, onClick: () => onChangeUnit(u), className: "flex-1 rounded-xl", style: { padding: "10px 0", fontSize: 14, border: "none", backgroundColor: active ? C.accent : C.surface2, color: active ? C.accentDark : C.text, fontWeight: active ? 500 : 400 } }, u === "kg" ? "Kilograms" : "Pounds");
  })), /* @__PURE__ */ React.createElement(SectionLabel, null, "Backup"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-3", style: { marginBottom: 24 } }, /* @__PURE__ */ React.createElement(Btn, { variant: "subtle", className: "w-full flex items-center justify-center gap-2", onClick: onExport }, /* @__PURE__ */ React.createElement(Icon, { name: "download", size: 15 }), " Export data (JSON)"), /* @__PURE__ */ React.createElement(Btn, { variant: "subtle", className: "w-full flex items-center justify-center gap-2", onClick: () => {
    var _a;
    return (_a = fileRef.current) == null ? void 0 : _a.click();
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "upload", size: 15 }), " Import data"), /* @__PURE__ */ React.createElement("input", { ref: fileRef, type: "file", accept: "application/json", style: { display: "none" }, onChange: (e) => {
    var _a;
    const f = (_a = e.target.files) == null ? void 0 : _a[0];
    if (f) onImport(f);
    e.target.value = "";
  } })), /* @__PURE__ */ React.createElement(SectionLabel, null, "Danger zone"), /* @__PURE__ */ React.createElement(Btn, { variant: "danger", className: "w-full flex items-center justify-center gap-2", onClick: onReset }, /* @__PURE__ */ React.createElement(Icon, { name: "trash", size: 15 }), " Reset all data"), /* @__PURE__ */ React.createElement("div", { className: "text-center", style: { fontSize: 11, color: C.dim, marginTop: 24 } }, "All data stays on this device. No account, no sync.")));
}
function App() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState("home");
  const [settings, setSettings] = useState({ unit: "kg", name: "" });
  const [exercises, setExercises] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [rotationIndex, setRotationIndex] = useState(0);
  const [activeSession, setActiveSession] = useState(null);
  const [showActiveWorkout, setShowActiveWorkout] = useState(false);
  const [editingRoutine, setEditingRoutine] = useState(void 0);
  const [confirmDeleteRoutine, setConfirmDeleteRoutine] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [toast, setToast] = useState(null);
  useEffect(() => {
    (async () => {
      const [s, ex, rt, ss, act, rot] = await Promise.all([
        loadKey(STORAGE_KEYS.settings, { unit: "kg", name: "" }),
        loadKey(STORAGE_KEYS.exercises, null),
        loadKey(STORAGE_KEYS.routines, []),
        loadKey(STORAGE_KEYS.sessions, []),
        loadKey(STORAGE_KEYS.active, null),
        loadKey(STORAGE_KEYS.rotation, 0)
      ]);
      setSettings(s);
      const defaultsList = DEFAULT_EXERCISES.map(([n, muscleGroup]) => ({ id: uid(), name: n, muscleGroup, isCustom: false }));
      let exList;
      if (!ex || !ex.length) {
        exList = defaultsList;
      } else {
        const existingNames = new Set(ex.map((e) => e.name.trim().toLowerCase()));
        const missing = defaultsList.filter((d) => !existingNames.has(d.name.trim().toLowerCase()));
        exList = missing.length ? [...ex, ...missing] : ex;
      }
      setExercises(exList);
      if (exList !== ex) saveKey(STORAGE_KEYS.exercises, exList);
      setRoutines(rt);
      setSessions(ss);
      setActiveSession(act);
      setRotationIndex(rot);
      setLoaded(true);
    })();
  }, []);
  const flashToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };
  const addCustomExercise = (name, muscleGroup) => {
    const ex = { id: uid(), name, muscleGroup, isCustom: true };
    const next = [...exercises, ex];
    setExercises(next);
    saveKey(STORAGE_KEYS.exercises, next);
    return ex;
  };
  const saveRoutine = (routine) => {
    const exists = routines.some((r) => r.id === routine.id);
    const next = exists ? routines.map((r) => r.id === routine.id ? routine : r) : [...routines, routine];
    setRoutines(next);
    saveKey(STORAGE_KEYS.routines, next);
    setEditingRoutine(void 0);
    flashToast("Routine saved");
  };
  const deleteRoutine = (routine) => {
    const idxOfDeleted = routines.findIndex((r) => r.id === routine.id);
    const next = routines.filter((r) => r.id !== routine.id);
    setRoutines(next);
    saveKey(STORAGE_KEYS.routines, next);
    let newRot = rotationIndex;
    if (next.length === 0) newRot = 0;
    else if (idxOfDeleted <= rotationIndex) newRot = ((rotationIndex - 1) % next.length + next.length) % next.length;
    setRotationIndex(newRot);
    saveKey(STORAGE_KEYS.rotation, newRot);
    setConfirmDeleteRoutine(null);
  };
  const startRoutine = (routine) => {
    const session = {
      id: uid(),
      routineId: routine.id,
      routineName: routine.name,
      startedAt: (/* @__PURE__ */ new Date()).toISOString(),
      endedAt: null,
      exercises: routine.exercises.map((it) => ({
        exerciseId: it.exerciseId,
        targetSets: it.targetSets,
        targetReps: it.targetReps,
        restSec: it.restSec,
        sets: Array.from({ length: Math.max(1, it.targetSets || 1) }, () => ({ weight: toKg(it.targetWeight || 0, settings.unit), reps: it.targetReps || 0, completed: false }))
      }))
    };
    setActiveSession(session);
    saveKey(STORAGE_KEYS.active, session);
    setShowActiveWorkout(true);
  };
  const persistActiveSession = useCallback((s) => {
    setActiveSession(s);
    saveKey(STORAGE_KEYS.active, s);
  }, []);
  const finishWorkout = (session) => {
    const finished = __spreadProps(__spreadValues({}, session), { endedAt: (/* @__PURE__ */ new Date()).toISOString() });
    const nextSessions = [...sessions, finished];
    setSessions(nextSessions);
    saveKey(STORAGE_KEYS.sessions, nextSessions);
    setActiveSession(null);
    deleteKey(STORAGE_KEYS.active);
    setShowActiveWorkout(false);
    if (routines.length) {
      const finishedIdx = routines.findIndex((r) => r.id === session.routineId);
      const newRot = finishedIdx >= 0 ? (finishedIdx + 1) % routines.length : rotationIndex;
      setRotationIndex(newRot);
      saveKey(STORAGE_KEYS.rotation, newRot);
    }
    flashToast("Workout saved");
  };
  const changeUnit = (unit) => {
    const next = __spreadProps(__spreadValues({}, settings), { unit });
    setSettings(next);
    saveKey(STORAGE_KEYS.settings, next);
  };
  const changeName = (name) => {
    const next = __spreadProps(__spreadValues({}, settings), { name });
    setSettings(next);
    saveKey(STORAGE_KEYS.settings, next);
  };
  const exportData = async () => {
    const payload = { exportedAt: (/* @__PURE__ */ new Date()).toISOString(), settings, exercises, routines, sessions, rotationIndex };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `iron-log-backup-${todayISO()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    flashToast("Exported");
  };
  const importData = async (file) => {
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (data.settings) {
        setSettings(data.settings);
        await saveKey(STORAGE_KEYS.settings, data.settings);
      }
      if (data.exercises) {
        setExercises(data.exercises);
        await saveKey(STORAGE_KEYS.exercises, data.exercises);
      }
      if (data.routines) {
        setRoutines(data.routines);
        await saveKey(STORAGE_KEYS.routines, data.routines);
      }
      if (data.sessions) {
        setSessions(data.sessions);
        await saveKey(STORAGE_KEYS.sessions, data.sessions);
      }
      if (typeof data.rotationIndex === "number") {
        setRotationIndex(data.rotationIndex);
        await saveKey(STORAGE_KEYS.rotation, data.rotationIndex);
      }
      flashToast("Import complete");
      setShowSettings(false);
    } catch (e) {
      flashToast("Import failed \u2014 invalid file");
    }
  };
  const resetAll = async () => {
    await Promise.all(Object.values(STORAGE_KEYS).map((k) => deleteKey(k)));
    setSettings({ unit: "kg", name: "" });
    const exList = DEFAULT_EXERCISES.map(([n, muscleGroup]) => ({ id: uid(), name: n, muscleGroup, isCustom: false }));
    setExercises(exList);
    saveKey(STORAGE_KEYS.exercises, exList);
    setRoutines([]);
    setSessions([]);
    setActiveSession(null);
    setRotationIndex(0);
    setShowSettings(false);
    flashToast("All data reset");
  };
  if (!loaded) {
    return /* @__PURE__ */ React.createElement("div", { className: "w-full h-full flex items-center justify-center", style: { minHeight: 600, backgroundColor: C.bg } }, /* @__PURE__ */ React.createElement(Icon, { name: "dumbbell", size: 28, style: { color: C.accent } }));
  }
  return /* @__PURE__ */ React.createElement("div", { className: "gt-root w-full relative", style: { minHeight: "100vh", backgroundColor: C.bg, fontFamily: "Inter, sans-serif" } }, tab === "home" && /* @__PURE__ */ React.createElement(Home, { routines, sessions, exercises, rotationIndex, activeSession, unit: settings.unit, name: settings.name, onStartRoutine: startRoutine, onResume: () => setShowActiveWorkout(true), onGoWorkouts: () => setTab("workouts") }), tab === "workouts" && editingRoutine === void 0 && /* @__PURE__ */ React.createElement(WorkoutsList, { routines, exercises, onCreate: () => setEditingRoutine(null), onEdit: (r) => setEditingRoutine(r), onDelete: (r) => setConfirmDeleteRoutine(r), onStart: startRoutine }), tab === "workouts" && editingRoutine !== void 0 && /* @__PURE__ */ React.createElement(RoutineEditor, { routine: editingRoutine, exercises, unit: settings.unit, onSave: saveRoutine, onCancel: () => setEditingRoutine(void 0), onAddCustomExercise: addCustomExercise }), tab === "progress" && /* @__PURE__ */ React.createElement(Progress, { sessions, exercises, unit: settings.unit }), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowSettings(true), className: "fixed rounded-full", style: { top: 24, right: 20, zIndex: 10, padding: 8, backgroundColor: C.surface, border: `1px solid ${C.border}`, color: C.text } }, /* @__PURE__ */ React.createElement(Icon, { name: "settings", size: 16 })), /* @__PURE__ */ React.createElement("div", { className: "fixed bottom-0 left-0 right-0 flex justify-around", style: { backgroundColor: C.sheet, borderTop: `1px solid ${C.border}`, padding: "12px 0", zIndex: 10 } }, [["home", "home", "Home"], ["workouts", "dumbbell", "Workouts"], ["progress", "trending-up", "Progress"]].map(([key, iconName, label]) => /* @__PURE__ */ React.createElement("button", { key, onClick: () => {
    setTab(key);
    setEditingRoutine(void 0);
  }, className: "flex flex-col items-center gap-1", style: { padding: "0 16px", color: tab === key ? C.accent : C.dim, background: "none", border: "none" } }, /* @__PURE__ */ React.createElement(Icon, { name: iconName, size: 20 }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11 } }, label)))), showActiveWorkout && activeSession && /* @__PURE__ */ React.createElement(ActiveWorkout, { session: activeSession, setSession: persistActiveSession, exercises, sessions, unit: settings.unit, onFinish: finishWorkout, onExitToBackground: () => setShowActiveWorkout(false) }), showSettings && /* @__PURE__ */ React.createElement(SettingsModal, { settings, onChangeUnit: changeUnit, onChangeName: changeName, onExport: exportData, onImport: importData, onReset: () => {
    setShowSettings(false);
    setConfirmDeleteRoutine({ __reset: true });
  }, onClose: () => setShowSettings(false) }), confirmDeleteRoutine && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 flex items-center justify-center", style: { backgroundColor: "rgba(0,0,0,0.7)", zIndex: 40, padding: "0 24px" }, onClick: () => setConfirmDeleteRoutine(null) }, /* @__PURE__ */ React.createElement("div", { className: "w-full rounded-2xl", style: { backgroundColor: C.surface, border: `1px solid ${C.border}`, padding: 20, maxWidth: 320 }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, color: C.text, fontWeight: 500, marginBottom: 8 } }, confirmDeleteRoutine.__reset ? "Reset all data?" : "Delete routine?"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: C.dim, marginBottom: 20 } }, confirmDeleteRoutine.__reset ? "This permanently erases every routine, session, PR and setting on this device. This can't be undone." : `"${confirmDeleteRoutine.name}" and its exercise plan will be removed. Past sessions stay in your history.`), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3" }, /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", className: "flex-1", onClick: () => setConfirmDeleteRoutine(null) }, "Cancel"), /* @__PURE__ */ React.createElement(Btn, { variant: "danger", className: "flex-1", style: { borderColor: C.accent }, onClick: () => confirmDeleteRoutine.__reset ? resetAll() : deleteRoutine(confirmDeleteRoutine) }, confirmDeleteRoutine.__reset ? "Reset" : "Delete")))), toast && /* @__PURE__ */ React.createElement("div", { className: "fixed flex items-center gap-2 rounded-full", style: { bottom: 96, left: "50%", transform: "translateX(-50%)", backgroundColor: C.surface2, color: C.text, fontSize: 13, padding: "8px 16px", zIndex: 50, border: `1px solid ${C.border}` } }, /* @__PURE__ */ React.createElement(Icon, { name: "circle-check", size: 14, style: { color: C.accent2 } }), " ", toast));
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
