# Nuxt SWR/ISR test

## Basic idea and structure

This project is used to test SWR and ISR rendering in Nuxt.
The website has three SWR pages (`page-1`, `page-2`, `page-3`). Those pages each fetch a current timestamp from an API durring SSR and then display that timestamp and the difference between to the current time. In theory each of those pages has a lifespan of 10 seconds, after which the page should be revalidated and the timestamp should be updated again.

## Getting started

Install dependencies:

```bash
npm install
```

Build the app:

```bash
npm run build
```

Run the app:

```bash
npm run preview
```
