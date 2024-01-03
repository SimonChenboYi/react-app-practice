import ListGroup from "./components/ListGroup";

function App() {
  let items = ["London", "Brimingham", "Manchester", "York", "Edingburgh"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
