/** @type {import('next').NextConfig} */
const nextConfig = {
   // output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './dist', // Changes the build output directory to `./dist/`.

   // pageExtensions: ['js', 'jsx', 'mdx'],

    pages: {
      // Replace 'customPagesFolder' with the name of your custom folder
      // You can add multiple folders if needed
    'appPages': {
        // Optionally, you can specify any additional configuration for this folder
        // For example, if you want to use a different layout for pages in this folder
        // layout: 'special-layout'
      }}
  }
   
  export default nextConfig