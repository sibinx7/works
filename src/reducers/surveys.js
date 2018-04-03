let surveyInformations,lastIndex;

let localStorageSurvey = localStorage.getItem('survey_information');

if(localStorageSurvey!==null){
  surveyInformations = JSON.parse(localStorageSurvey);
}else{
  surveyInformations = [];
}
try{
  lastIndex = surveyInformations[surveyInformations.length - 1]['id'] || 0;
}catch(e){
  lastIndex = 0;
}


export const survey_index = (state=lastIndex, action) => {
  switch (action.type){
    case 'INCREMENT':
      return state;
    default:
      return state;
  }
};


function updateLocalStorage(survey){
  localStorage.setItem('survey_information', JSON.stringify(survey));
}

export const surveys = (state= surveyInformations, action) => {
  switch (action.type){
    case 'ADD':
      let newSurvey =  [...state, action.item];
      updateLocalStorage(newSurvey);
      return newSurvey;
    case 'REMOVE':
      const remainSurvey  = state.slice(1, action.index);
      updateLocalStorage(remainSurvey);
      return remainSurvey
    case 'UPDATE':
      console.log(state);
      state[action.id] = action.item;
      updateLocalStorage(state);
      return state;
    default:
      return state;
  }
};








