const ActionTypes = {// Типы action'ов для dispatcher'а
    writeSearchText: "WRITE-SEARCH-TEXT",
    setSearchedPosts:"SET-SEARCHED-POSTS",
    setIsPaginateFromSearch:"SET-IS-PAGINATE-FROM-SEARCH",
    paginationFromSearch:"PAGINATION-FROM-SEARCH",
    setSearchedText:"SET-SEARCHED-TEXT"
}

let initialState = {//Дефолтные данные state'а
    searchedPosts:[],
    textWritten:'',
    currentPage:1,
    pageSize:3,
    isPaginate:true,
    searchedText:''
};
const searchReducer = (state = initialState, action) => {
    switch (action.type) {//Switch для обработки типов Action Creator'a
        case ActionTypes.writeSearchText://Обработка написания текста в форме поиска
        return {
            ...state,
            textWritten: action.text
        };
        case ActionTypes.paginationFromSearch://Обработка пагинации записей
            switch (action.paginationType) {
                case 'next':
                    return {
                        ...state, currentPage: state.currentPage + 1
                    };
                case 'previous':
                    return state.currentPage > 1 ? {
                        ...state,
                        currentPage: state.currentPage - 1
                    } : state;
                default:
                    return state;
            }
        case ActionTypes.setIsPaginateFromSearch://Обработка условия isPaginate для оптимизации навигации по сайту
            return action.isPaginate === false ? {
                ...state,
                isPaginate: true
            } : {
                ...state,
                isPaginate: false
            };
        case ActionTypes.setSearchedPosts://Обработка массива с найденными записями
            return {
                ...state,
                searchedPosts: action.searchedPosts
            };
        case ActionTypes.setSearchedText://Обработка текста, отправленого поисковиком 
            return {...state,searchedText:action.searchedText}
        default:
        return state;
    }
}
//Action Creator страницы поиска для 
export const WriteTextAC =(text)=> {//Написание текста
    return {
        type: ActionTypes.writeSearchText,
        text:text
    }
}
export const SetSearchedPostsAC =(searchedPosts)=> {//Добавления найденных записей
    return {
        type: ActionTypes.setSearchedPosts,
        searchedPosts:searchedPosts
    }
}
export const SetSearchedTextAC =(searchedText)=> {//Добавления найденного текста
    return {
        type: ActionTypes.setSearchedText,
        searchedText:searchedText
    }
}
export const PaginationAC=(paginationType)=>{//Пагинации
    return{
        type:ActionTypes.paginationFromSearch,
        paginationType:paginationType
    }
}
export const SetIsPaginateAC=(isPaginate)=>{//Условия для навигации по сайту
    return{
        type:ActionTypes.setIsPaginateFromSearch,
        isPaginate:isPaginate
    }
}
export default searchReducer;