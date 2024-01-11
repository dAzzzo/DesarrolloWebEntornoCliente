/*
function escapeHTML(text){
    var replacements = [["&", "&amp;"],["\"","&quot;"],["<","&It;"],[">","&gt;"]];
    forEach(replacements, function(replace){
        text = text.replace(replace[0], replace[1]);
    });
    return text;
}
*/
function escapeHTML(text) {
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
  