import ResponsiveRenderer from "@/layouts/ResponsiveRenderer";
import { useState } from "react";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA5WlhPdI7xWukc9QjnxZ4kYn-r8hDgy2w",
//   authDomain: "portfolio-xaviourg.firebaseapp.com",
//   projectId: "portfolio-xaviourg",
//   storageBucket: "portfolio-xaviourg.appspot.com",
//   messagingSenderId: "619065439685",
//   appId: "1:619065439685:web:da16a628b3e2e22c80c7ac",
//   measurementId: "G-E1NKFLC7JW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ResponsiveRenderer/>
    </main>
  )
}
