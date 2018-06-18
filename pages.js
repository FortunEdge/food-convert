//HTML Snippets

const ing_opt = '<div class="ing_cont"><button onclick="deleteIng(this)" class="exit">X</button><input onblur="save('+ "'ing'" +')" onClick="this.setSelectionRange(0, this.value.length)" type="text" value="Ingredient"><div><input onblur="save('+ "'ing'" +')"  onkeypress="checkNum(event)" onClick="this.value = '+ NaN +'" type="number" value="0" class="ing"><select onblur="save('+ "'ing'" +')" class="ing"></select></div></div>';

const temp_opt = '<div class="ing_cont"><button onclick="deleteTemp(this)" class="exit">X</button><input onblur="save('+"'tempdir'"+')" onClick="this.setSelectionRange(0, this.value.length)" type="text" value="Direction"><div><input onblur="save('+"'tempdir'"+')" onClick="this.value = ' + NaN + '" type="number" value="0" class="temp"><select onblur="save('+"'tempdir'"+')" class="temp"><option value="C">&#176;C</option><option value="F">&#176;F</option></select></div></div>';

const aboutapp = '<h2 class="about_text">Food Convert</h2><p class="about_text">Version 1.1</p><p class="about_text">Copyright (c) 2018 Aric Cox</p><p class="about_text">Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.</p><p class="about_text">The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p><p class="about_text">THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. </p><a class="download_but" href="https://github.com/FortunEdge/food-convert" target="_blank"><button class="download_but">Source Code on Github</button></a><div class="bottom_spacer"></div><button onclick="changeMenu(menuhome, ' + "'Options'" + ')" class="optback_but">Back</button>';

const menuhome = '<button onclick="changeMenu(aboutapp, ' + "'About'" + ')" class="round top">About</button><a class="button" href="help.html" target="_blank"><button class="round">Help</button></a>';

const tableIng = '<tr><td class="ing_title"></td><td class="ing_amount"></td><td class="ing_unit"></td></tr>';

//Pages

const Welcome1 = '<image class="fullwidth" src="Images/Welcome1.png"></image><button onclick="changePage(Ingredients, '+"'Ingredients'"+')" class="round">Create New Recipe</button>';

const Welcome2 = '<image class="fullwidth" src="Images/Welcome2.png"></image><button onclick="changePage(editRec, '+"'Edit'"+')" class="round">Pick Up Where You Left Off</button><button onclick="changePage(NIngredients, '+"'Ingredients'"+')" class="round">Create New Recipe</button>';

const Ingredients = '<div id="ing_cont"><div class="ing_cont"><button onclick="deleteIng(this)" class="exit">X</button><input onblur="save('+"'ing'"+')" onClick="this.setSelectionRange(0, this.value.length)" type="text" value="Ingredient"><div><input onblur="save('+"'ing'"+')" onkeypress="checkNum(event)" onClick="this.value = '+"''"+'" type="number" value="0" class="ing"><select onblur="save('+"'ing'"+')" class="ing"></select></div></div></div><button onclick="addIng(this)" class="add_ing"><img src="Images/Plus.png"></button><div class="bottom_spacer"></div><ul id="opt_but_cont"><li class="opt_but one"><button onclick="welcome()"><image class="opt_but" src="Images/Left.png"></image></button></li><li class="opt_but two"><button onclick="changePage(TempDir, '+"'Temperatures'"+')"><image class="opt_but" src="Images/Check.png"></image></button></li><li class="opt_but three hide"><button></button></li></ul>';

const NIngredients = '<div id="ing_cont"><div class="ing_cont"><button onclick="deleteIng(this)" class="exit">X</button><input onblur="save('+"'ing'"+')" onClick="this.setSelectionRange(0, this.value.length)" type="text" value="Ingredient"><div><input onblur="save('+"'ing'"+')" onClick="this.value = '+"''"+'" type="number" value="0" class="ing"><select onblur="save('+"'ing'"+')" class="ing"></select></div></div></div><button onclick="addIng(this)" class="add_ing"><img src="Images/Plus.png"></button><div class="bottom_spacer"></div><ul id="opt_but_cont"><li class="opt_but one"><button onclick="welcome()"><image class="opt_but" src="Images/Left.png"></image></button></li><li class="opt_but two"><button onclick="changePage(TempDir, '+"'Temperatures'"+')"><image class="opt_but" src="Images/Check.png"></image></button></li><li class="opt_but three hide"><button></button></li> </ul>';

const TempDir = '<div id="ing_cont"><div class="ing_cont"><button onclick="deleteTemp(this)" class="exit">X</button><input onblur="save('+"'tempdir'"+')" onClick="this.setSelectionRange(0, this.value.length)" type="text" value="Preheat Oven To"><div><input onblur="save('+"'tempdir'"+')" onClick="this.value = '+"''"+'" type="number" value="0" class="temp"><select onblur="save('+"'tempdir'"+')" class="temp"><option value="C">&#176;C</option><option value="F">&#176;F</option></select></div></div></div><button onclick="addTemp(this)" class="add_ing"><img src="Images/Plus.png"></button><div class="bottom_spacer"></div><ul id="opt_but_cont"><li class="opt_but one"><button onclick="changePage(Ingredients, '+"'Ingredients'"+')"><image class="opt_but" src="Images/Left.png"></image></button></li><li class="opt_but two"><button onclick="changePage(AddMore, '+"'More Info'"+')"><image class="opt_but" src="Images/Check.png"></image></button></li><li class="opt_but three hide"><button></button></li></ul>';

const AddMore = '<button onclick="changePage(nameRec, '+"'Name'"+')" class="round sideL top">Name Your Recipe</button><button onclick="changePage(dirRec, '+"'Directions'"+')" class="round sideR top">Add Directions</button><button onclick="changePage(servRec, '+"'People Served'"+')" class="round sideL">Add Amount Served</button><button onclick="changePage(madeRec, '+"'Pieces Made'"+')" class="round sideR">Add Amount Made</button><button onclick="changePage(recipeOV, '+"'Your Recipe'"+')" class="round">Finish</button><div class="bottom_spacer"></div><ul id="opt_but_cont"><li class="opt_but one"><button onclick="changePage(TempDir, '+"'Temperatures'"+')"><image class="opt_but" src="Images/Left.png"></image></button></li><li class="opt_but two hide"><button></button></li><li class="opt_but three hide"><button></button></li></ul>';

const editRec = '<button onclick="changePage(Ingredients, '+"'Ingredients'"+')" class="round top sideL">Ingredients</button><button onclick="changePage(TempDir, '+"'Temperatures'"+')" class="round top">Temperatures</button><button onclick="changePage(AddMore, '+"'More Info'"+')" class="round">Other Info.</button><ul id="opt_but_cont"><li class="opt_but one"><button onclick="changePage(welcome())"><image class="opt_but" src="Images/Left.png"></image></button></li><li class="opt_but two hide"><button></button></li><li class="opt_but three"><button onclick="changePage(recipeOV, '+"'Your Recipe'"+')"><image class="opt_but" src="Images/Right.png"></button></li></ul>';

const nameRec = '<input onblur="save('+"'name'"+')" class="name" type="text" placeholder="Name your recipe"> <ul id="opt_but_cont"> <li class="opt_but one"><button onclick="changePage(AddMore, '+"'More Info'"+')"><image class="opt_but" src="Images/Left.png"></image></button></li> <li class="opt_but two"><button onclick="changePage(dirRec, '+"'Directions'"+')"><image class="opt_but" src="Images/Check.png"></image></button></li> <li class="opt_but three hide"><button></button></li> </ul>';

const dirRec = '<textarea onchange="save('+"'dirs'"+')" class="directions" onclick="this.innerHTML = '+"''"+'">Paste or type directions here.</textarea><ul id="opt_but_cont"><li class="opt_but one"><button onclick="changePage(AddMore, '+"'More Info'"+')"><image class="opt_but" src="Images/Left.png"></image></button></li><li class="opt_but two"><button onclick="changePage(servRec, '+"'People Served'"+')"><image class="opt_but" src="Images/Check.png"></image></button></li><li class="opt_but three hide"><button></button></li></ul>';

const madeRec = '<input onchange="save('+"'pcs'"+')" onblur="save('+"'pcs'"+')" class="impnum" type="number" placeholder="Number" onclick="this.value = '+"''"+'"><ul id="opt_but_cont"><li class="opt_but one"><button onclick="changePage(AddMore, '+"'More Info'"+')"><image class="opt_but" src="Images/Left.png"></image></button></li><li class="opt_but two"><button onclick="changePage(AddMore, '+"'More Info'"+')"><image class="opt_but" src="Images/Check.png"></image></button></li><li class="opt_but three hide"><button></button></li></ul>';

const servRec = '<input onchange="save('+"'serv'"+')" onblur="save('+"'serv'"+')" class="impnum" type="number" placeholder="Number" onclick="this.value = '+"''"+'"><ul id="opt_but_cont"><li class="opt_but one"><button onclick="changePage(AddMore, '+"'More Info'"+')"><image class="opt_but" src="Images/Left.png"></image></button></li><li class="opt_but two"><button onclick="changePage(madeRec, '+"'Pieces Made'"+')"><image class="opt_but" src="Images/Check.png"></image></button></li><li class="opt_but three hide"><button></button></li></ul>';

const recipeOV = '<div class="rec_cont"><div class="makeserve_cont"><div class="rec_makes">Makes<div id="makes_num"></div></div><div class="rec_serves">Serves<div id="serves_num"></div></div></div><div class="rec_title">Ingredients</div><table id="rec_ing" class="rec_ing"></table><div class="rec_title">Temperatures</div><table id="rec_temp" class="rec_ing"></table><div class="rec_title">Directions</div><textarea class="rec_directions" readonly="true"></textarea></div><ul id="opt_but_cont"><li class="opt_but one"><button onclick="changePage(AddMore, '+"'More Info'"+')"><image class="opt_but" src="Images/Left.png"></image></button></li><li class="opt_but two"><button onclick="changePage(Manipulate, '+"'Manipulate'"+')"><image class="opt_but" src="Images/Modify.png"></image></button></li><li class="opt_but three"><button onclick="changePage(Doc, '+"'Document'"+')"><image class="opt_but" src="Images/doc.png"></image></button></li></ul>';

const Manipulate = '<button onclick="conversionHandler()" class="round top">Convert</button><button onclick="changePage(Multiply, '+"'Multiply'"+')" class="round">Multiply</button><ul id="opt_but_cont"><li class="opt_but one"><button onclick="changePage(recipeOV, '+"'Your Recipe'"+')"><image class="opt_but" src="Images/Left.png"></image></button></li><li class="opt_but two hide"><button></button></li><li class="opt_but three hide"><button></button></li></ul>';

const Multiply = '<input id="multby" class="impnum" type="number" placeholder="1.5x" onclick="this.value = '+"''"+'"><ul id="opt_but_cont"><li class="opt_but one"><button onclick="changePage(recipeOV, '+"'Your Recipe'"+')"><image class="opt_but" src="Images/Left.png"></image></button></li><li class="opt_but two"><button onclick="multRec()"><image class="opt_but" src="Images/Check.png"></image></button></li><li class="opt_but three hide"><button></button></li></ul>';

const Doc = '<button onclick="changePage(editRec, '+"'Edit'"+')" class="round top">Edit</button><button onclick="genPDF()" class="round">Download</button><ul id="opt_but_cont"><li class="opt_but one"><button onclick="changePage(recipeOV, '+"'Your Recipe'"+')"><image class="opt_but" src="Images/Left.png"></image></button></li><li class="opt_but two hide"><button></button></li><li class="opt_but three hide"><button></button></li></ul>';
