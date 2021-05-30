export const reducer = (state,action)=>
{
  if(action.type === 'ADD_ITEM'){
    const newPeople = [...state.people , action.payLoad]
    return {
      ...state,
      people:newPeople,
      isModalOpen:true,
      modalContent:'item added',
    }
  } 
  if(action.type === 'NO_VALUE'){
    return {
      ...state,
      isModalOpen:true,
      modalContent:'pleas enter value'
    }
  }
  if(action.type === 'CLOSE_MODAL' ){
    return {
      ...state,
      isModalOpen:false
    }
  }
  if(action.type === 'REMOVE_ITEM'){
    const newPeoples = state.people.filter((person)=>person.id !== action.payLoad);
    return {
      ...state,
      people:newPeoples,
      isModalOpen:true,
      modalContent:'item removed',
    }
  }
  throw new Error('no matching action type') 
};