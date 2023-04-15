import CardFront from "./components/CardFront";

function App() {
  return (
    <div className="flex md:flex-row sm:flex-col w-screen h-screen font-main">
      <div className="md:h-screen md:w-1/3 sm:h-1/3 sm:w-screen md:bg-desktop sm:bg-mobile bg-cover">
        <CardFront />
      </div>
      <div className="md:h-screen md:w-2/3 sm:h-2/3 sm:w-screen bg-swhite"></div>
    </div>
  );
}

export default App;
