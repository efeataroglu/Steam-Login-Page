import { ThemeProvider } from "styled-components";
import theme from "./components/styles/Theme";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/styles/Global";
import GeneralForm from "./components/GeneralForm/GeneralForm";
import PortalForm from "./components/PortalForm/PortalForm";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<GeneralForm />} />
          <Route path="/portal" element={<PortalForm />} />
        </Routes>
      </>
    </ThemeProvider>
  );
}
export default App;
