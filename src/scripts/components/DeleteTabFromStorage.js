import SetData from "../data/SetData";
import {tabsId} from "../MainPage";

export default function DeleteTabFromStorage(arrayTabs, deleteItemId, callback) {
    arrayTabs.splice(arrayTabs.indexOf(arrayTabs.find(item => item.id === deleteItemId)),1);
    if(callback) {
        SetData(tabsId, arrayTabs);
        callback()
    } else {
        return arrayTabs;
    }
};