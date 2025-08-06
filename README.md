# Next.js Prefetch TXT Bug Reproduction

This repository demonstrates a bug where .txt files are unintentionally displayed in the browser when prefetch fails in Next.js.

## Issue Overview

When using Next.js `Link` component with `prefetch={true}` to link to .txt files, if prefetch fails and falls back to hard navigation, the .txt file is displayed in the browser instead of being downloaded.

## Setup

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start production server
npm run start
```

## Reproduction Steps

1. Run `npm run build && npm run start`
2. Open http://localhost:3000 in your browser
3. Open Chrome DevTools
4. Go to the Network tab
5. Click on "Normal Page Link (with prefetch)"
6. Block the request URL `http://localhost:3000/test-page.txt` in DevTools
7. Click the "Normal Page Link (with prefetch)" link again

## Expected Behavior

- When clicking a link to a .txt file, the file should be downloaded

## Actual Behavior

- When using Link component with prefetch, the .txt file is displayed in the browser

## Comparison

- Using a normal `<a>` tag works as expected (file is downloaded)
- The issue occurs with the combination of Next.js Link component and prefetch feature

## File Structure

- `/app/page.tsx` - Main page with test links
- `/app/test-page/page.tsx` - Normal page (works correctly)
