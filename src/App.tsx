import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Certifications from "./pages/Certifications";
import TeachStack from "./pages/TeachStack";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/techstack" element={<TeachStack />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
