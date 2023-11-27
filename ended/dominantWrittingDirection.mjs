import SCRIPTS from "./data_set/writingSystem.mjs";

// Return the script for a given code
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => from <= code && to > code)) {
      return script;
    }
  }
  return null;
}

// Count each scripts occurence content in the items
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    const script = groupName(item);
    const index = counts.findIndex((element) => element.name === script.name);
    if (index === -1) {
      counts.push({ script, count: 1 });
    } else {
      counts[index].count++;
    }
  }
  return counts;
}

// Return the dominent reading direction for a given string
function dominantDirection(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script : "none";
  }).filter((element) => element.script != "none");

  const maxCountScript = scripts.reduce((previous, current) =>
    previous > current ? previous.script : current.script
  );

  return maxCountScript.direction;
}

console.log(dominantDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));
