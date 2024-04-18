import StyleDictionary from "style-dictionary";

const myStyleDictionary = StyleDictionary.extend({
  source: ["tokens/**/*.json"],
  platforms: {
    json: {
      transforms: ["name/cti/kebab"],
      files: [{ format: "json", destination: "./tokens/colors.json" }],
    },
    javascript: {
      files: [{ format: "javascript/object", destination: "./tokens/colors.js" }],
    },
  },
});

interface OriginalFigmaColor {
  type: "color";
  value: string;
  blendMode: string;
  extensions: Record<string, any>;
  filePath: string;
  isSource: boolean;
}

interface ColorFromDict extends OriginalFigmaColor {
  original: OriginalFigmaColor;
  name: string;
  attributes: Record<string, any>;
  path: string[];
}
type KeyStyleFromDict = Record<string, ColorFromDict>;
type RangeMapFromDict = Record<string, KeyStyleFromDict>;

type OutputColor = Record<string, string>;
type OutputDict = Record<string, OutputColor>;

// Colors can either be at the top level, or they can be nested
type InputDict = Record<string, KeyStyleFromDict | RangeMapFromDict>;

type FigmaVarDict = {
  "rounded corners": Object;
  colours: Object;
  colors: InputDict;
  spacing: Object;
};

const dictFromJS = myStyleDictionary.exportPlatform("javascript") as unknown as FigmaVarDict;
const figmaVarColors = dictFromJS.colors;
const colorMap = {};
export const customColourMap = parseColors(figmaVarColors, colorMap, "");

function parseColors(dict: InputDict, colorMap: OutputDict, prefix: string) {
  for (const key in dict) {
    const element = dict[key];

    // Base is special, it has no colour ranges
    if (key === "base") {
      for (const baseColor in element) {
        const nestedBase = element[baseColor] as ColorFromDict;
        colorMap[baseColor] = { DEFAULT: trimAlphaHex(nestedBase.value) };
      }
    } else {
      const firstElementKey = Object.keys(element)[0];

      // Confirm element is KeyStyleDict
      if (typeof element[firstElementKey].type === "string") {
        const typedElement = element as KeyStyleFromDict;
        for (const colour in typedElement) {
          const insideColour = typedElement[colour];
          if (!colorMap[prefix + key]) {
            colorMap[prefix + key] = {};
          }
          // Also add DEFAULT value at 500
          if (colour === "500") {
            colorMap[prefix + key]["DEFAULT"] = trimAlphaHex(insideColour.value);
          }
          colorMap[prefix + key][colour] = trimAlphaHex(insideColour.value);
        }
      } else {
        prefix = prefix + `${key}-`;
        // Type assertion to allow recursive call
        return parseColors(element as InputDict, colorMap, prefix);
      }
    }
  }
  return colorMap;
}

function trimAlphaHex(colourVal: string) {
  return colourVal.substring(0, 7);
}
