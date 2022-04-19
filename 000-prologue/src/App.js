import React from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import News from "./pages/News";
import news from "./NewsThread";

function App() {
  return (
    <div className="">
      <Header />
      {news.map((newsItem) => 
    <News key={newsItem.key} title={newsItem.title} content={newsItem.content} />
)}
      <Footer />
    </div>
  );
}

export default App;