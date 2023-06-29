import tinycolor from "tinycolor2";

export function getComplementaryColor(color) {
  // Entferne das führende "#"
  const hex = color.slice(1);
  // Wandele die Hex-Farbe in RGB um
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  // Berechne die komplementäre Farbe
  const complementaryR = 255 - r;
  const complementaryG = 255 - g;
  const complementaryB = 255 - b;
  // Wandele die RGB-Farbe in Hex um
  const complementaryHex = `#${complementaryR
    .toString(16)
    .padStart(2, "0")}${complementaryG
    .toString(16)
    .padStart(2, "0")}${complementaryB.toString(16).padStart(2, "0")}`;
  return complementaryHex;
}

export function getSecondaryColor(color) {
  // Entferne das führende "#"
  const hex = color.slice(1);

  // Wandele die Hex-Farbe in RGB um
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Definiere den Verschiebungswert im Farbkreis (z.B. 180 Grad für eine gegenüberliegende Farbe)
  const shift = 180;

  // Konvertiere die RGB-Farbe in das HSL-Farbmodell
  const hsl = rgbToHsl(r, g, b);

  // Verschiebe den Hue-Wert um den angegebenen Wert im Farbkreis
  const shiftedHue = (hsl.h + shift) % 360;

  // Konvertiere die HSL-Farbe zurück in RGB
  const shiftedRgb = hslToRgb(shiftedHue, hsl.s, hsl.l);

  // Wandele die RGB-Farbe in Hex um
  const shiftedHex = `#${shiftedRgb.r
    .toString(16)
    .padStart(2, "0")}${shiftedRgb.g
    .toString(16)
    .padStart(2, "0")}${shiftedRgb.b.toString(16).padStart(2, "0")}`;

  return shiftedHex;
}

// Hilfsfunktionen für die Konvertierung von RGB zu HSL und umgekehrt

const rgbToHsl = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h, s, l;

  l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
};

const hslToRgb = (h, s, l) => {
  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
};

//   Lightencolorfunction

export function getLightenColor(color, amount) {
  // Konvertiere die gegebene Farbe in das HSL-Farbmodell
  const hsl = tinycolor(color).toHsl();

  // Erhöhe den Helligkeitswert um den gegebenen Betrag
  const newLightness = Math.min(hsl.l + amount, 1);

  // Erzeuge die heller erscheinende Farbe
  const newColor = tinycolor({ ...hsl, l: newLightness }).toHexString();

  return newColor;
}

// analogusColor

// Funktion, um einen analogen Farbwert zu berechnen
export function getAnalogousColor(color) {
  const angle = 30; // Winkel zwischen den analogen Farben (in Grad)

  // Konvertiere die gegebene Farbe in das HSL-Farbmodell
  const hsl = tinycolor(color).toHsl();

  // Berechne den analogen Farbwert
  const newHue = (hsl.h + angle) % 360;
  const newColor = tinycolor({ ...hsl, h: newHue }).toHexString();

  return newColor;
}
