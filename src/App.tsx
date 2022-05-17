import React from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Testlist from "./pages/testlist"
import Testruns from "./pages/testruns"
import Navbar from "./components/Navbar"

const App: React.FC = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Testlist />} />
      <Route path="/testruns" element={<Testruns />} />
    </Routes>
  </>
)

export default App
