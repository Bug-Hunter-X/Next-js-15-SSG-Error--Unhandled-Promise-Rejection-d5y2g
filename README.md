# Next.js 15 SSG Error: Unhandled Promise Rejection

This repository demonstrates a common error encountered in Next.js 15 applications when using Static Site Generation (SSG) with API routes. The error occurs because an asynchronous operation (fetching data from an API route) is not handled properly within a page component using `getStaticProps` or `getStaticPaths`.

## Bug

The `pages/about.js` attempts to fetch data from an API route using `await fetch('/api/data')`. In an SSG context, this causes a runtime error due to the asynchronous nature of the fetch request. This is because SSG occurs at build time, and the `await` keyword is not handled appropriately within the SSG execution environment, leading to an unhandled Promise rejection. 

## Solution

The solution is to use `getStaticProps` to handle the API call and pass the necessary data as props to the page component. This ensures the API call happens during the build process rather than at runtime. 