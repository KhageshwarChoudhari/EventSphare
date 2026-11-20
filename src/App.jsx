import { Route, Routes, useLocation } from "react-router"
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import EventDetailsPage from "./pages/EventDetailsPage"
import FavoritesPage from "./pages/FavoritesPage"
import { Toaster } from "sonner"
import { useEffect } from "react"


function ScrollonTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({top: 0 , left: 0});
  }, [pathname]);
}




function App() {

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-orange-100 selection:text-[#E65100]">
      <ScrollonTop />
      <Navbar />
     <div className="flex-1">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage/>} />
        <Route path={`/events/:id`} element={<EventDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
     </div>
      <Footer />
       <Toaster
        richColors
        toastOptions={{
          style: {
            borderRadius: "1rem",
            border: "1px solid #EBE8DF",
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: "13px",
          },
        }}
      />
    </div>
  )
}

export default App
