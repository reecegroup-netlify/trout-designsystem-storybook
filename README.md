This is our Trout Design system implemented using Storybook.

## Getting Started

Install and run storybook.

```bash
fnm use #or nvm
npm install
npm run start
```

## Design Tokens

We use Amazon's `style-dictionary` to ingest tokens from a JSON file (only colours at this stage — we use the spacing and rounded corners from native Tailwind). The process to extract this JSON:

1. Run the _Design Tokens_ plugin in the Figma file and Export to file.
2. Select Figma Variables.
3. Drop the downloaded file into /tokens subdirectory.

The repo already contains a colour file which should be removed for a more up-to-date version.

This allows you to use the colour names outlined in the Figma in component code.
