# Next.js Prefetch TXT Bug Reproduction

This repository demonstrates a bug where .txt files are unintentionally displayed in the browser when prefetch fails in Next.js.

## Issue Overview

This bug occurs in multiple scenarios in Next.js where navigation falls back to hard navigation:

1. **Link component with prefetch**: When using Next.js `Link` component with `prefetch={true}`, if prefetch fails and falls back to hard navigation
2. **Router methods**: When using `router.replace()` or `router.push()` programmatically

In all cases, instead of navigating to the intended page, the browser navigates to a `.txt` file and displays the RSC (React Server Component) payload code instead of the rendered page.

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

### Link Component with Prefetch

1. Run `npm run build && npm run start`
2. Open http://localhost:3000 in your browser
3. Open Chrome DevTools
4. Go to the Network tab
5. Click on "Normal Page Link (with prefetch)"
6. Block the request URL `http://localhost:3000/test-page.txt` in DevTools
7. Click the "Normal Page Link (with prefetch)" link again
8. Unexpectedly, the browser navigates to `/test-page.txt` instead of `/test-page`

### Router Methods (router.replace/router.push)

1. Run `npm run build && npm run start`
2. Open http://localhost:3000/router-replace-test in your browser
3. Open Chrome DevTools
4. Go to the Network tab
5. Block the request URL `http://localhost:3000/test-page.txt` in DevTools
6. Click the "Test router.replace('/test-page')" button
7. Unexpectedly, the browser navigates to `/test-page.txt` instead of `/test-page`

:memo: This issue occurs in production mode.

## Expected Behavior

- When clicking a link, should navigate to `/test-page` (the actual page)
- The content should display the normal page component

## Actual Behavior

- Instead of navigating to `/test-page`, it navigates to `/test-page.txt`
- The browser displays the RSC (React Server Component) payload code instead of the rendered page
- This happens when prefetch fails and falls back to hard navigation


## File Structure

- `/app/page.tsx` - Main page with test links
- `/app/test-page/page.tsx` - Normal page (works correctly)
- `/app/router-replace-test/` - Test page for router.replace() method
- `/app/replace-page/` - Test page with automatic router.replace() countdown
