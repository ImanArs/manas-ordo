import { Route, Routes } from "react-router-dom";
import { Footer } from "./widgets/footer";
import { Header } from "./widgets/header";
import { Sidebar } from "./widgets/sidebar";
import { HomePage } from "./screens/home";
import { Archaelog } from "./screens/archaelog";
import { Archive } from "./screens/archive";
import { Gallery } from "./screens/gallery";

function App() {
  return (
    <main className="">
      <Header />
      <div className="flex min-h-[100vh] h-full">
        <div className="hidden md:block md:mt-[66px]">
          <Sidebar type="white" />
        </div>

        <div className="w-full md:w-[calc(100%-200px)] ml-auto mt-[66px] p-[35px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archeology" element={<Archaelog />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
