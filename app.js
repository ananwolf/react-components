// TODO
var GroceryList = (props) => {

  var onGroceryListItemClick = (event) => {
    console.log('I got clicked');
  };

  return (
    <ul>
      <li onClick={onGroceryListItemClick}>{props.groceries[0]}</li>
      <li>{props.groceries[0]}</li>
      <li>{props.groceries[1]}</li>
    </ul>
  );
};

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceries={['Eggs', 'Veggies']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));