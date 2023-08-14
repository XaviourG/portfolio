import { useState } from "react";
import PortfolioBody from "./portfolioBody";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5WlhPdI7xWukc9QjnxZ4kYn-r8hDgy2w",
  authDomain: "portfolio-xaviourg.firebaseapp.com",
  projectId: "portfolio-xaviourg",
  storageBucket: "portfolio-xaviourg.appspot.com",
  messagingSenderId: "619065439685",
  appId: "1:619065439685:web:da16a628b3e2e22c80c7ac",
  measurementId: "G-E1NKFLC7JW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { Kanit } from "next/font/google";

const mainFont = Kanit({
  weight: ['100', '400', '700'],
  subsets: ["latin"],
  variable: "--font-main"
})

export default function Home() {
  return (
    <main className={`${mainFont.variable} flex min-h-screen flex-col items-center bg-gradient-to-bl from-BACKGROUND_START via-BACKGROUND to-BACKGROUND_END`}>
      <PortfolioBody/>
    </main>
  )
}
