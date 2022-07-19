import { GlobalStyle } from "./styles/global";
// import Login from "./pages/login";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// import { ToastColor } from "./styles/container";

function App() {
  return (
    <>
      <GlobalStyle />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes />
    </>
  );
}

export default App;
