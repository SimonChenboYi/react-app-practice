import ListGroup from "./components/ListGroup";

function App() {
  let items = ["London", "Brimingham", "Manchester", "York", "Edingburgh"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
