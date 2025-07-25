import { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import Home from "./Views/Home";
import Quiz from "./Views/Quiz";
import History from "./Views/History";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="h-[15vh] flex flex-col justify-center items-center bg-blue-800 p-9 border border-b-sky-400 border-b-5">
          <div className="text-white text-3xl font-bold mb-4">DoYouKnow?</div>
          <div className="flex justify-center gap-10 text-white">
            <div className="bg-sky-400 px-2 rounded-sm">
              <Link to={"/"}>Accueil</Link>
            </div>
            {/* <div className="bg-sky-400 px-2 rounded-sm">
              <Link to={"/history"}>Historique</Link>
            </div> */}
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
