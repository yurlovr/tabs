export default function TegsForStorage(newTegs, arrayFormStorage) {

// массив уникальных тегов//
  let commonArray = Array.from(new Set(arrayFormStorage.map(item => item.name.toLowerCase()).concat(newTegs.map(i=>i.toLowerCase()))));

// массив новых тегов, которых нет в массиве из localStorage

  let newElement = diff(commonArray, arrayFormStorage.map(i => i.name.toLowerCase()));

// получили новый массив объектов тегов для localStorage  с уникальными значениями
  newElement.forEach(item => {
    let object = {};
    object.name = item;
    object.color = color();
    arrayFormStorage.push(object);
  });
  return arrayFormStorage;
}

function color() {
  return "#" + Math.random().toString(16).slice(3, 9);
}

function diff(arr1, arr2) {
  return arr1.filter(i => arr2.indexOf(i) < 0)
    .concat(arr2.filter(i => arr1.indexOf(i) < 0));
}


// ~ ` ! @ # $ % ^ & * ( ) = +