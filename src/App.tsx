import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Certifications from "./pages/Certifications";
import TeachStack from "./pages/TeachStack";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationMenuDemo } from "./democomponents/NavigationMenuDemo";
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex justify-center mt-3">
          <NavigationMenuDemo />{" "}
        </div>

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
