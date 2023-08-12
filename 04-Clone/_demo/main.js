const log = console.log;

log("object clone");

let todo = {
  task: "Do Hw",
  complete: false,
  due_date: "12-08-2023",
};

// // const newTodo = todo;
// // newTodo.complete = true;
// // log(todo.complete);

// //Clone

// const newTodo = {};
// //เอาต้นแบบมาloop แล้ว assign ทีละ key:value ให้ object  ใหม่

// for (let key in todo) {
//   //assign ทีละ key:value ให้ newTodo

//   newTodo[key] = todo[key];
// //   newTodo['task'] = todo['task'];
// //   newTodo['complete'] = todo['complete'];
// //   newTodo['due_date'] = todo["due_date"];

// }

// log(newTodo);

// newTodo.complete=true;
// log(newTodo.complete)
// log(todo.complete)

//2. Object.assign

const newTodo = {
  complete: true,
};

//MERGE/OVERIDE Direction:RIGHT => LEFT
Object.assign(newTodo, todo); //return address ของ destination (param 1)

const newTodos = Object.assign({}, todo);

log(newTodo);
