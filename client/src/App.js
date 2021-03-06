import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Homepage from "./components/pages/Homepage";
import Userspage from "./components/pages/Userspage";
import Profilepage from "./components/pages/Profilepage";
import Postpage from "./components/pages/Postpage";
import Userpage from "./components/pages/Userpage";
import Createpage from "./components/pages/Createpage";
import AppProvider from "./utils/context";

var xsBreak = null;

function App() {
  const defTheme = useTheme();
  xsBreak = useMediaQuery(defTheme.breakpoints.down("xs"));

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/users' element={<Userspage />} />
            <Route path='/profile' element={<Profilepage />} />
            <Route path='/posts/:id' element={<Postpage />} />
            <Route path='/users/:id' element={<Userpage />} />
            <Route path='/create' element={<Createpage />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
export { xsBreak };
