import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white rounded-md">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
