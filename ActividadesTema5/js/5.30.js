/*
function escapeHTML(text){
<<<<<<< HEAD
    var replacements = [["&", "&amp;"],["\"","&quot;"],["<","&It;"],[">","&gt;"]];
=======
    let replacements = [["&", "&amp;"],["\"","&quot;"],["<","&It;"],[">","&gt;"]];
>>>>>>> b13c3ad7f6a5ec558c1dd5c0b7e8cbff9aa902f5
    forEach(replacements, function(replace){
        text = text.replace(replace[0], replace[1]);
    });
    return text;
}
*/
function escapeHTML(text) {
<<<<<<< HEAD
    let replacements = [
      ["&", "&amp;"],
      ["\"", "&quot;"],
      ["<", "&lt;"],
      [">", "&gt;"]
    ];
  
    for (let i = 0; i < replacements.length; i++) {
      let regex = new RegExp(replacements[i][0], "g");
      text = text.replace(regex, replacements[i][1]);
    }
  
    return text;
  }
  
  console.log(escapeHTML("& --- \" --- < --- >"));
  
=======
  let replacements = [
    ["&", "&amp;"],
    ['"', "&quot;"],
    ["<", "&lt;"],
    [">", "&gt;"],
  ];

  for (let i = 0; i < replacements.length; i++) {
    let regex = new RegExp(replacements[i][0], "g");
    text = text.replace(regex, replacements[i][1]);
  }

  return text;
}

console.log('& --- " --- < --- >');
console.log(escapeHTML('& --- " --- < --- >'));
>>>>>>> b13c3ad7f6a5ec558c1dd5c0b7e8cbff9aa902f5
