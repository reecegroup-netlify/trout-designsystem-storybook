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

type StyleDictionaryColor = {
  type: "color";
  value: string;
  blendMode: string;
  extensions: Record<string, any>;
  filePath: string;
  isSource: boolean;
  original: {
    type: "color";
    value: string;
    blendMode: "normal";
    extensions: Record<string, any>;
  };
  name: string;
  attributes: Record<string, any>;
  path: string[];
};

// Define type for nested color dictionary
type NestedStyleDictionaryColor = Record<string, StyleDictionaryColor>;

// Colors can either be at the top level, or they can be nested
type ColorDictionary = Record<
  string,
  Record<string, StyleDictionaryColor | NestedStyleDictionaryColor>
>;

type FigmaVarDict = {
  "rounded corners": Object;
  colours: Object;
  colors: ColorDictionary;
  spacing: Object;
};

const dictFromJS = myStyleDictionary.exportPlatform("javascript") as unknown as FigmaVarDict;
const figmaVarColors = dictFromJS.colors;
const colorMap = {};
parseColors(figmaVarColors, colorMap, "");

function parseColors(dict, colorMap, prefix) {
  for (const key in dict) {
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      const element = dict[key];
      const firstElementKey = Object.keys(element)[0];
      const firstNestedElement = element[firstElementKey];

      // If it is not nested
      if (firstNestedElement.type) {
        colorMap[prefix + key] = element;
      } else {
        prefix = prefix + `${key}-`;
        return parseColors(element, colorMap, prefix);
      }
    }
  }
  return colorMap;
}

console.log(colorMap);
