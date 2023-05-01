import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import Component from "./components/Component";
import { DataConextProvider } from "./context/DataContext";

function App() {
  return (
    <div className="flex md:flex-row sm:flex-col w-screen h-screen font-main">
      <DataConextProvider>
        <div className="md:h-screen md:w-1/3 sm:h-1/2 sm:w-screen md:bg-desktop sm:bg-mobile bg-cover">
          <CardFront />
          <CardBack />
        </div>
        <div className="flex items-center justify-center md:h-screen md:w-2/3 sm:h-2/3 sm:w-screen bg-swhite">
          <Component />
        </div>
      </DataConextProvider>
    </div>
  );
}

export default App;
