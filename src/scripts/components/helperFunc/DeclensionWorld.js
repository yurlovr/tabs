export default function DeclensionWorld(tabsLength) {
  let number = tabsLength % 10;
  let number2 = tabsLength % 100;

  if (number2 > 10 && number2 <= 19) {
    return "закладок";
  }

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
