// если длина отсортированного массива не равна длине начального,
// то продолжаем поиск в отсортированном, иначе ищем в начально
// если value в инпуте = "", то ищем в начальном

export default function ArrayForSort (newTabs, constTabs , searchValue, tegValue) {
    if(!searchValue && searchValue !== undefined && !tegValue.length){
        return constTabs;
    }

    if(newTabs.length !== constTabs.length ){
        return newTabs;
    } else {
        return constTabs;
    }
}