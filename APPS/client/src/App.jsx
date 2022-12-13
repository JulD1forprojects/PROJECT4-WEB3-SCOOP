import AppRouter from "./Config/Router";
import { UseAppContextProvider } from "./context/UseAppContext"; // importing context
import "./App.css";

function App() {
  // wrapping the while app in context
  return (
    <UseAppContextProvider>
      <AppRouter />
    </UseAppContextProvider>
  );
}

export default App;
