import { Provider } from "react-redux";
import Body from "./Components/Body";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
};
export default App;
