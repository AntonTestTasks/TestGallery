const ActionTypes = {// Типы action'ов для dispatcher'а
    setTitle:"SET-TITLE"
}

let initialState = {//Дефолтные данные state'а
    title:'Блог'
};
const navReducer = (state = initialState, action) => {
    switch (action.type) {//Switch для обработки типов Action Creator'a
        case ActionTypes.setTitle:
            switch (action.title) {//Обработка изменения названия документа в закладке страницы
                case 'blog':
                return {
                    ...state, title: 'Блог'
                }
                case 'search':
                return {
                    ...state, title: 'Поиск'
                }
                default:
                return state;
            }
        default:
        return state;
    }
}
//Action Creator страницы меню для 
export const SetTitleAC =(title)=> {//Обработки названия документа
    return {
        type: ActionTypes.setTitle,
        title:title
    }
}

export default navReducer;