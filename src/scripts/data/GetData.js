
export default function getData(id) {
    try {
        let dataString = localStorage.getItem(id);
        return JSON.parse(dataString);
    } catch (error) {
        return false;
    }
}
