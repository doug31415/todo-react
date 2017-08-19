import { addTodo, generateId, findById, toggleTodo, updateTodo } from "./todo.helpers";


test( 'addTodo should update the array', () = > {

  const startTodos = [
    { id: 1 },
    { id: 3 },
    { id: 3 }
  ];
const item = { id: 4 };

const expected = [
  { id: 1 },
  { id: 3 },
  { id: 3 },
  { id: 4 }
];

const actual = addTodo( startTodos, item );

expect( actual ).toEqual( expected );

} )

test( 'addTodo should not mutate the array', () = > {
  const startTodos = [
    { id: 1 },
    { id: 3 },
    { id: 4 }
  ];

const item = { id: 4 };

const actual = addTodo( startTodos, item );

expect( actual ).not.toBe( startTodos );

} )

//
// test( 'it should generate the next highest id', () = > {
//   const startTodos = [
//     { id: 0 },
//     { id: -553 },
//     { id: 12 }
//   ];
//
// const actual = generateId( startTodos );
//
// expect( actual ).toBe( 13 );
// } )
// ;
//
// test( 'it should find a todo by id', () = > {
//   const startTodos = [
//     { id: 1 },
//     { id: 3 },
//     { id: 4 }
//   ];
//
// const expected = { id: 4 };
//
// const actual = findById( 4, startTodos );
//
// expect( actual ).toEqual( expected );
// } )
// ;
//
// test( 'it should return a new todo with the opposite isComplete state', () = > {
//   const startTodo = { id: 1, label: 'one', isComplete: false };
// const expected = { id: 1, label: 'one', isComplete: true };
// const actual   = toggleTodo( startTodo );
//
// expect( expected ).toEqual( actual );
// expect( expected ).not.toBe( startTodo )
// } )
// ;
//
// test( 'it should update a todo without mutating the array', () = > {
//   const startTodos = [
//     { id: 0, label: 'one', isComplete: false },
//     { id: 1, label: 'two', isComplete: true },
//     { id: 12, label: '12', isComplete: true },
//     { id: 13, label: '13', isComplete: true },
//     { id: 14, label: '14', isComplete: true },
//     { id: 15, label: '15', isComplete: true },
//     { id: 16, label: '16', isComplete: true },
//     { id: 2, label: 'three', isComplete: false }
//   ];
//
// const updatedTodo = { id: 1, label: 'two be', isComplete: false };
//
// const expected = [
//   { id: 0, label: 'one', isComplete: false },
//   { id: 1, label: 'two be', isComplete: false },
//   { id: 12, label: '12', isComplete: true },
//   { id: 13, label: '13', isComplete: true },
//   { id: 14, label: '14', isComplete: true },
//   { id: 15, label: '15', isComplete: true },
//   { id: 16, label: '16', isComplete: true },
//   { id: 2, label: 'three', isComplete: false }
// ];
//
// const result = updateTodo( startTodos, updatedTodo );
//
// expect( expected ).toEqual( result );
// expect( result ).not.toBe( startTodos );
//
//
// const updatedTodo2 = { id: 15, label: 'sweet 15', isComplete: false };
//
// const expected2 = [
//   { id: 0, label: 'one', isComplete: false },
//   { id: 1, label: 'two be', isComplete: false },
//   { id: 12, label: '12', isComplete: true },
//   { id: 13, label: '13', isComplete: true },
//   { id: 14, label: '14', isComplete: true },
//   { id: 15, label: 'sweet 15', isComplete: false },
//   { id: 16, label: '16', isComplete: true },
//   { id: 2, label: 'three', isComplete: false }
// ];
//
// const result2 = updateTodo( result, updatedTodo2 );
//
// expect( expected2 ).toEqual( result2 );
// expect( result2 ).not.toBe( expected2 );
// } )
;