import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GoodsContainer from "./components/GoodsContainer/GoodsContainer";
import Actions from "./components/Actions/Actions";
import Rules from "./components/Rules/Rules";

function App() {
  return (
    <div className="wrap">
      <Header />
      <GoodsContainer />

      <Rules />
      <Actions />


      <Footer />
    </div>
  );
}

export default App;
