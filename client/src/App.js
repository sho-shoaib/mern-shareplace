import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Homepage from "./components/pages/Homepage";
import Userspage from "./components/pages/Userspage";
import Profilepage from "./components/pages/Profilepage";

var xsBreak = null;

function App() {
  const defTheme = useTheme();
  xsBreak = useMediaQuery(defTheme.breakpoints.down("xs"));

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/users' element={<Userspage />} />
          <Route path='/profile' element={<Profilepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
export { xsBreak };
