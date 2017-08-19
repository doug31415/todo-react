import * as _ from 'lodash';

export const addTodo = ( list, todo ) => [...list, todo];

export const generateId = ( list ) => {
  const highest = list.reduce( ( currentHighestId, todo ) => {
    return Math.max( todo.id, currentHighestId );
  }, 0 );

  return highest + 1;
};

export const findById = ( id, list ) => {
  return _.find( list, { id: id } );
};

export const toggleTodo = ( todo ) => {
  return { ...todo, isComplete: !todo.isComplete };
};

export const updateTodo = ( list, todo ) => {
  const idx = _.findIndex( list, ( item ) => {
    return item.id === todo.id;
  } );

  const start = list.slice( 0, idx );
  const end   = list.slice( idx + 1 );
  return _.concat( start, [todo], end );
};