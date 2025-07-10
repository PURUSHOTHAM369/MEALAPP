import App from "./App";
import UserContextProvier from "./context/userContext"; // Only if you're using it
import { Provider } from "react-redux";
import { store } from "./store/store";

const Layout = () => {
  return (
    <Provider store={store}>
      <UserContextProvier> {/* Optional: only include if needed */}
        <App />
      </UserContextProvier>
    </Provider>
  );
};

export default Layout;
