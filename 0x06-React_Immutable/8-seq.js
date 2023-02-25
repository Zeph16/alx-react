import { Seq } from 'immutable';

export default function printBestStudents(studObj) {
  const seqObj = Seq(studObj);
  const filtered = seqObj.filter((stud) => stud.score > 70);
  function capFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const jsObj = filtered.toJS();
  Object.keys(jsObj).map((key) => {
    jsObj[key].firstName = capFirstLetter(jsObj[key].firstName);
    jsObj[key].lastName = capFirstLetter(jsObj[key].lastName);
    return jsObj[key];
  });
  console.log(jsObj);
}
