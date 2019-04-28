export default function SetData(id, data) {
    try {
        const stringData = JSON.stringify(data);
        localStorage.setItem(id, stringData);
        return true;
    } catch (error) {
        return false;
    }
}