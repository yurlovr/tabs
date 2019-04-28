export default function ChangeTabFromStorage(arrayTabs, changeItemId) {
  return arrayTabs.filter(tab => tab.id === changeItemId)[0];
}
