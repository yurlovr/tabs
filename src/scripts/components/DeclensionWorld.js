export default function DeclensionWorld(tabsLength) {
  let number = tabsLength % 10;
  if (number === 1) {
    return "закладка";
  }
  if (number > 1 && number < 5) {
    return "закладки";
  }
  if (number >= 5 || number === 0) {
    return "закладок";
  }
}
