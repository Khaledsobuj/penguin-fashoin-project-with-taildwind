/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",          // যদি আপনার HTML ফাইলগুলো মেইন ফোল্ডারে থাকে
    "./src/**/*.{html,js}" // অথবা যদি src ফোল্ডারের ভেতরে থাকে
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}