import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-wrap justify-center items-center flex-grow bg-gray-100 px-10 md:flex-nowrap">
        {/* <LeftSide /> */}
        {/* <Visualization /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
