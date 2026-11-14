import { Route, Routes } from "react-router"
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"




function App() {

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-orange-100 selection:text-[#E65100]">
      <Navbar />
     <div className="flex-1">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
     </div>
      <Footer />
    </div>
  )
}

export default App
