export default function TegsForStorage(newTegs, arrayFormStorage, tegs) {
  // массив уникальных тегов//

  if(tegs){
    let commonArray =  Array.from(
        new Set(
            arrayFormStorage
                .map(item => item.toLowerCase())
                .concat(newTegs.map(i => i.toLowerCase()))
        )
    );
    if(commonArray[0] === "#") {
      return []
    } else {
      return commonArray;
    }
  }

  let commonArray = Array.from(
    new Set(
      arrayFormStorage
        .map(item => item.name.toLowerCase())
        .concat(newTegs.map(i => i.toLowerCase()))
    )
  );

  // массив новых тегов, которых нет в массиве из localStorage

  let newElement = diff(
    commonArray,
    arrayFormStorage.map(i => i.name.toLowerCase())
  );

  // получили новый массив объектов тегов для localStorage  с уникальными значениями

  newElement.forEach(item => {
    let object = {};
    object.name = item;
    object.color = colorTeg();
    arrayFormStorage.push(object);
  });

  let array = newTegsForTab(newTegs, arrayFormStorage );

  return {arrayFormStorage, array}
}

function newTegsForTab(newTegs, arrayFormStorage) {
  let array = newTegs.map(teg => {
    return Object.assign({},arrayFormStorage.find(elem => elem.name === teg.toLowerCase()))
  });

  array.map(item => {return (
   newTegs.forEach(teg=>{if(teg.toLowerCase() === item.name){return item.name = teg}})
  )});

 return array;
}

function colorTeg() {

  return (
    "#" +
    Math.random()
      .toString(16)
      .slice(3, 9)
  );
}

function diff(arr1, arr2) {
  return arr1
    .filter(i => arr2.indexOf(i) < 0)
    .concat(arr2.filter(i => arr1.indexOf(i) < 0));
}

