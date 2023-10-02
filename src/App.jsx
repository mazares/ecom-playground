import "./App.css";

import Header from "./components/Header";

import Navigation from "./components/Navigation";

import Content from "./components/Content";

import Footer from "./components/Footer";

export default function App(params) {
  return (
    <div className="app">
      <Header />

      <Navigation />

      <Content />

      <Footer />
    </div>
  );
}
