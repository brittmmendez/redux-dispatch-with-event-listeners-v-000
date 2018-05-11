let state;

function changeState(state = { count: 0 }, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
    case 'DECREASE_COUNT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function dispatch(action){
  state = changeState(state, action);
  render();
}

function render(){
  let container = document.getElementById('container');
  container.textContent = state.count;
}

let buttonIncrease = document.getElementById('buttonIncrease');
buttonIncrease.addEventListener('click', function() {
  dispatch({ type: 'INCREASE_COUNT' });
});

let buttonDecrease = document.getElementById('buttonDecrease');
buttonDecrease.addEventListener('click', function() {
  dispatch({ type: 'DECREASE_COUNT' });
});
