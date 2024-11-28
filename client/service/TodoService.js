export class TodoService {
  static state = [];

  static initializedState(state) {
    this.state = state;
  }

  static AddTodoItem(id, value, checked) {
    this.state.push({ id, value, checked });
    console.log(...this.state);
  }

  static DeleteTodoItem(id) {
    this.state = this.state.filter((target) => target.id !== id);
  }

  static CheckTodoItem(id, checked) {
    const t = this.state.find((target) => target.id === id);
    t.checked = checked;
  }

  static UpdateTodoItem(id, value) {
    const t = this.state.find((target) => target.id === id);
    t.value = value;
  }
}
