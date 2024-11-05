const { getFileValue, putTextInHashMap, arccosToPercent, getIdentityPercent} = require('./subFuncitonsForFiles');

let doc1;
let doc2;
let mapForDoc1 = new Map();
let mapForDoc2 = new Map();

(async () => {
  doc1 = await getFileValue("./doc1.txt");
  putTextInHashMap(doc1, mapForDoc1);
  doc2 = await getFileValue("./doc2.txt");
  putTextInHashMap(doc2, mapForDoc2);
  const results = await Promise.allSettled([...mapForDoc1.values()]);
  const results2 = await Promise.allSettled([...mapForDoc2.values()]);
  let result = await getIdentityPercent(results, results2);
  console.log(getIdentityPercent(result));
})();


