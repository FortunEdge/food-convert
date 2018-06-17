var recipeIng, recipeServ, recipeTemp, recipeInst, recipeAmnt, recipeNam, multBy;
var unitList = ["Grams", "Grams - Fine Powder", "Grams - Granular", "Grams - Grains", "Grams - Liquid Solids", "Liters", "Milliliters", "Centimeters", "Millimeters", "Ounces", "Pounds", "Teaspoons", "Tablespoons", "Cups", "Quarts", "Pints", "Gallons"];
var iospdfwarn = "IOS Users: Sorry! Due to technical weirdness you won't be able to save the PDF from standalone mode. If you continue, I suggest you take a screenshot by pressing the HOME and POWER buttons at the same time. Click OK to continue anyway or CANCEL to go back.";

$(document).ready(function() {
    chieght();
    syncStorage();
    welcome();
});

function chieght() {
    let h = $('body').height();
    document.getElementById('page_cont').style.height = h-60 + "px";
}

function checkNum(evt) {
    if (evt.which < 46 || evt.which == 47 || evt.which > 57)
    {
        evt.preventDefault();
    }
}

//////////////////////////////////////////////
//Saving/////////////////////////////////////
////////////////////////////////////////////

function loadStorage(inam) {
    if(inam == 'recipeing' || inam == 'recipetemp') {
        var string = localStorage.getItem(inam);
        if(string != null) {
            return string.split(',');
        }
        else {return 'undefined'}
    }
    else {
        return localStorage.getItem(inam);
    }
}

function syncStorage() {
    if(recipeIng == undefined) {
        if(loadStorage('recipeing') != 'undefined') {
            recipeIng = loadStorage('recipeing');
        }
        if(loadStorage('recipetemp') != 'undefined') {
            recipeTemp = loadStorage('recipetemp');
        }
        if(loadStorage('recipeamnt') != 'undefined') {
            recipeAmnt = eval(loadStorage('recipeamnt'));
        }
        if(loadStorage('recipeinst') != 'undefined') {
            recipeInst = loadStorage('recipeinst');
        }
        if(loadStorage('recipename') != 'undefined') {
            recipeNam = loadStorage('recipename');
        }
        if(loadStorage('recipeserv') != 'undefined') {
            recipeServ = eval(loadStorage('recipeserv'));
        }
    }
}

function setStorage(inam, item) {
    localStorage.setItem(inam, item);
}

function save(type) {
    let ar = new Array();
    if (type == "ing") {
        let containers = $('div.ing_cont');
        let l = containers.length;
        for (i=0; i<l; i++) {
            let a = $(containers[i]).children('input').val();
            let b = $(containers[i]).children('div').children('input').val();
            let c = $(containers[i]).children('div').children('select').val();
            ar[i] = a;
            ar[l+i] = b;
            ar[eval(l*2)+i] = c;
        }
        recipeIng = ar;
        setStorage('recipeing', ar);
    }
    else if (type == 'tempdir') {
        let containers = $('div.ing_cont');
        let l = containers.length;
        for (i=0; i<l; i++) {
            let a = $(containers[i]).children('input').val();
            let b = $(containers[i]).children('div').children('input').val();
            let c = $(containers[i]).children('div').children('select').val();
            ar[i] = a;
            ar[l+i] = b;
            ar[eval(l*2)+i] = c;
        }
        recipeTemp = ar;
        setStorage('recipetemp', ar);
    }
    else if (type == 'pcs') {
        recipeAmnt = $('input.impnum').val();
        if(recipeAmnt >= 9999) {
            recipeAmnt = 9999;
        }
        setStorage('recipeamnt', recipeAmnt);
    }
    else if (type == 'dirs') {
        recipeInst = $('textarea.directions').val();
        setStorage('recipeinst', recipeInst);
    }
    else if (type == 'name') {
        recipeNam = $('input.name').val();
        setStorage('recipename', recipeNam);
    }
    else if (type == 'serv') {
        recipeServ = $('input.impnum').val();
        if(recipeServ >= 9999) {
            recipeServ = 9999;
        }
        setStorage('recipeserv', recipeServ);
    }
}

//Localstorage.recipeing 
//Localstorage.recipeserv
//Localstorage.recipetemp
//Localstorage.recipeinst
//Localstorage.recipeamnt
//Localstorage.recipename

function clearStorage(val) {
    if (val == "all") {
        localStorage.removeItem('recipeing');
        localStorage.removeItem('recipeserv');
        localStorage.removeItem('recipetemp');
        localStorage.removeItem('recipeinst');
        localStorage.removeItem('recipeamnt');
        localStorage.removeItem('recipename');
    }
    else {
        localStorage.removeItem(val);
    }
}

////////////////////////////////////////////
//Page Handling////////////////////////////
//////////////////////////////////////////

function changePage(pagename, title) {
    if(pagename == NIngredients && confirm('Are you sure you whish to proceed? Any currently saved recipe will be deleted. This action CANNOT be reversed.')) {
        $('#page_cont').fadeOut(500, function() {
            $('#page_cont').html(pagename);
            $('#page_cont').fadeIn(500);
            loadDropDowns();
            loadContent(pagename);
        });
        changeTitle(title);
    }
    else if($('div.title_top').html() == 'Ingredients' && recipeIng == undefined) {
        alert('You need to add at least one ingredient to create a recipe.')
    }
    else if(pagename != NIngredients) {
        $('#page_cont').fadeOut(500, function() {
            $('#page_cont').html(pagename);
            $('#page_cont').fadeIn(500);
            loadDropDowns();
            loadContent(pagename);
        });
        changeTitle(title);
    }
}

function changeTitle(title) {
    if(title == "none") {
        $('div.title_top').html("");
    }
    else {
        $('div.title_top').html(title);
    }
}

function home() {
    welcome();
}

function Menu(el) {
    $('div#body').toggleClass('showmenu');
    $('div#bodyo').toggleClass('showmenu');
    $('ul#opt_but_cont').toggleClass('menuopen');
    $(el).blur();
}

function changeMenu(pagename, title) {
    $('#page_conto').fadeOut(500, function() {
        $('#page_conto').html(pagename);
        $('#page_conto').fadeIn(500);
    });
    changemTitle(title);
}

function changemTitle(title) {
    if(title == "none") {
        $('div.title_topo').html("");
    }
    else {
        $('div.title_topo').html(title);
    }
}

function welcome() {
    //if(loadStorage('recipeIng') != undefined || recipeIng != undefined)
    if(recipeIng != undefined) {
        changePage(Welcome2, 'Welcome');
    }
    else {
        changePage(Welcome1, 'Welcome');
    }
}

function loadContent(page) {
    if(page == Ingredients) {
        if(recipeIng != undefined) {
            let l = recipeIng.length / 3;
            for(let i=1; i<l; i++) {
                $('div#ing_cont').append(ing_opt);
                loadDropDowns();
            }
            let containers = $('div.ing_cont');
            for(let i=0; i<l; i++) {
                let a = $(containers[i]).children('input');
                let b = $(containers[i]).children('div').children('input');
                let c = $(containers[i]).children('div').children('select');
                a.val(recipeIng[i]);
                b.val(recipeIng[i + l]);
                c.val(recipeIng[i + eval(2*l)]);
            }
        }
    }
    else if(page == NIngredients) {
        recipeAmnt = undefined;
        recipeIng = undefined;
        recipeInst = undefined;
        recipeNam = undefined;
        recipeServ = undefined;
        recipeTemp = undefined;
        clearStorage('all');
    }
    else if(page == TempDir) {
        if(recipeTemp != undefined) {
            let l = recipeTemp.length / 3;
            for(let i=1; i<l; i++) {
                $('div#ing_cont').append(temp_opt);
            }
            let containers = $('div.ing_cont');
            for(let i=0; i<l; i++) {
                let a = $(containers[i]).children('input');
                let b = $(containers[i]).children('div').children('input');
                let c = $(containers[i]).children('div').children('select');
                a.val(recipeTemp[i]);
                b.val(recipeTemp[i + l]);
                c.val(recipeTemp[i + eval(2*l)]);
            }
        }
    }
    else if(page == nameRec) {
        if(recipeNam != undefined) {
            $('input.name').val(recipeNam);
        }
    }
    else if(page == dirRec) {
        if(recipeInst != undefined) {
            $('textarea.directions').val(recipeInst);
        }
    }
    else if(page == servRec) {
        if(recipeServ != undefined) {
            $('input.impnum').val(recipeServ);
        }
    }
    else if(page == madeRec) {
        if(recipeAmnt != undefined) {
            $('input.impnum').val(recipeAmnt);
        }
    }
    else if(page == recipeOV) {
        recipeLoadAll();
    }
}

///////////////////////////////////////////
//Saving//////////////////////////////////
/////////////////////////////////////////

function genPDF() {
    if(window.navigator.standalone != true || confirm(iospdfwarn) == true) {    
        let doc = new jsPDF({
            unit: 'in',
            format: [11, 8.5]
        });
        let PDFCont = '';
        let l = recipeIng.length / 3;
        let lt = NaN;
        if(recipeTemp != undefined && recipeTemp != "") {
            lt = recipeTemp.length / 3;
        }
        if(recipeNam == undefined) {
            recipeNam = prompt('Please name your recipe:');   
        }
        doc.setFontSize(22);
        let wrap = doc.splitTextToSize(recipeNam, 6.5);
        doc.text(1,1, wrap);

        if(recipeAmnt != undefined) {
            PDFCont += 'MAKES: ' + recipeAmnt + '\n' + '\n';
        }

        if(recipeServ != undefined) {
            PDFCont += 'SERVES: ' + recipeServ + '\n' + '\n';
        }

        PDFCont += 'INGREDIENTS' + '\n';
        for(i=0; i<l; i++) {
            PDFCont += recipeIng[i + l] + ' ' + recipeIng[i + eval(2*l)] + ' ' + recipeIng[i] + '\n';
        }
        PDFCont += '\n';
        
        if(lt != NaN) {
            PDFCont += 'TEMPERATURES' + '\n';
            for(i=0; i<lt; i++) {
                PDFCont += recipeTemp[i] + ' ' + recipeTemp[i + lt] + ' ' + recipeTemp[i + eval(2*lt)] + '\n'
            }
            PDFCont += '\n';
        }
        
        if(recipeInst != undefined) {
            PDFCont += 'DIRECTIONS: \n';
            PDFCont += recipeInst;
        }
        doc.setFontSize(16);
        wrap = doc.splitTextToSize(PDFCont, 6.5);
        doc.text(1,1.5, wrap);
        doc.save(recipeNam + '.pdf');
        changePage(recipeOV, 'Your Recipe');
    }
}

function addBreaks(text) {
    let ar = text.split(' ');
    alert(ar);
    let returnthis = '';
    for(i=1; i<=ar.length; i++) {
        if(i/7 == Math.round(i/7)) {
            returnthis += ar[i-1] + ' \n';
        }
        else {
            returnthis += ar[i-1] + ' ';
            alert(ar[i-1]);
        }
    }
    alert(returnthis);
    return returnthis;
}

///////////////////////////////////////////
//Drop-Downs//////////////////////////////
/////////////////////////////////////////

function loadDropDowns() {
    if($('select.ing')) {
        let l = unitList.length;
        let html = '';
        for(i=0; i<l; i++) {
            html += '<option value="' + unitList[i] + '">' + unitList[i] + '</option>'
        }
        html += '<option value="Piece(s)">Piece(s)</option>'
        let drops = $('select.ing');
        for(i=0; i<drops.length; i++) {
            if(drops[i].value) {
                
            }
            else{drops[i].innerHTML = html;}
        }
    }
}

/////////////////////////////////
//Ingredients///////////////////
///////////////////////////////

function addIng(el) {
    $('div#ing_cont').append(ing_opt);
    loadDropDowns();
    $(el).blur();
}

function deleteIng(el) {
    $(el).parent().remove();
    save('ing');
}

/////////////////////////////////
//Temperatures//////////////////
///////////////////////////////

function addTemp(el) {
    $('div#ing_cont').append(temp_opt);
    $(el).blur();
}

function deleteTemp(el) {
    $(el).parent().remove();
    save('tempdir');
}


//////////////////////////////////
//Recipe Overview////////////////
////////////////////////////////

function recipeLoadAll() {
    recipeLoadIng();
    recipeLoadTemp();
    recipeLoadName();
    recipeLoadDir();
    recipeLoadMade();
    recipeLoadServ();
}

function recipeLoadIng() {
    if(recipeIng != undefined) {
        let l = recipeIng.length / 3;
        for(let i=0; i<l; i++) {
            $('table#rec_ing').append(tableIng);
        }
        let containers = $('table#rec_ing').children('tr');
        for(let i=0; i<l; i++) {
            let a = $(containers[i]).children('td.ing_title');
            let b = $(containers[i]).children('td.ing_amount');
            let c = $(containers[i]).children('td.ing_unit');
            a.html(recipeIng[i]);
            b.html(recipeIng[i + l]);
            c.html(recipeIng[i + eval(2*l)]);
        }
    }
}

function recipeLoadTemp() {
    if(recipeTemp != undefined && recipeTemp != '') {
        let l = recipeTemp.length / 3;
        for(let i=0; i<l; i++) {
            $('table#rec_temp').append(tableIng);
        }
        let containers = $('table#rec_temp').children('tr');
        for(let i=0; i<l; i++) {
            let a = $(containers[i]).children('td.ing_title');
            let b = $(containers[i]).children('td.ing_amount');
            let c = $(containers[i]).children('td.ing_unit');
            a.html(recipeTemp[i]);
            b.html(recipeTemp[i + l]);
            c.html('&#176;' + recipeTemp[i + eval(2*l)]);
        }
    }
    else {
        $('table#rec_temp').hide();
        $('table#rec_temp').prev().hide();
    }
}

function recipeLoadName() {
    if(recipeNam != undefined) {
        changeTitle(recipeNam);
    }
}

function recipeLoadServ() {
    if(recipeServ != undefined && recipeServ != '') {
        $('div#serves_num').html(recipeServ);
    }
    else {
        $('div.rec_serves').hide();
    }
}

function recipeLoadMade() {
    if(recipeAmnt != undefined && recipeAmnt != '') {
        $('div#makes_num').html(recipeAmnt);
    }
    else {
        $('div.rec_makes').hide();
    }
}

function recipeLoadDir() {
    if(recipeInst != undefined && recipeInst != '') {
        $('textarea.rec_directions').html(recipeInst);
    }
    else {
        $('textarea.rec_directions').hide();
        $('textarea.rec_directions').prev().hide();
    }
}

///////////////////////////////
//Recipe Multiply/////////////
/////////////////////////////

function multRec() {
    let factor = $('input#multby').val();
    if(factor > 0 && factor != null && factor != NaN) {
        let l = recipeIng.length / 3;
        for(i=0; i<l; i++) {
            recipeIng[i + l] = recipeIng[i + l] * factor;
        }
        if(recipeNam == undefined) {
            recipeNam = 'Your Recipe (x'+factor+')';
        }
        else {
            recipeNam = recipeNam + ' (x'+factor+')';
        }
        if(recipeAmnt != undefined) {
            recipeAmnt = recipeAmnt * factor;
        }
        if(recipeServ != undefined) {
            recipeServ = recipeServ * factor;
        }
        changePage(recipeOV, 'Your Recipe');
    }
    else {
        alert("Oops! You're multiplying by zero or less :-(");
    }
}

//////////////////////////////
//Conversion/////////////////
////////////////////////////

function conversionHandler() {
    let l = recipeIng.length / 3;
    let lt;
    if(recipeTemp != undefined && recipeTemp != "") {
        lt = recipeTemp.length / 3;
    }
    if(calcRatio()) {
        for(i=0; i<l; i++) {
            if(isitmetric(recipeIng[i + eval(2*l)])) {
                let conv = smartconvert(recipeIng[i + eval(2*l)], recipeIng[i+l]);
                recipeIng[i + eval(2*l)] = conv[1];
                recipeIng[i+l] = conv[0];
            }
        }
	    if(lt != undefined) {
            for(i=0; i<lt; i++) {
                if(recipeTemp[i + eval(2*lt)] == 'C') {
                    recipeTemp[i + eval(2*lt)] = 'F';
                    recipeTemp[i+lt] = Math.round(eval(recipeTemp[i+lt] * 1.8) + 32); 
                }
            }
        }
    }
    else {
        for(i=0; i<l; i++) {
            if(isitmetric(recipeIng[i + eval(2*l)]) == false) {
                let conv = smartconvert(recipeIng[i + eval(2*l)], recipeIng[i+l]);
                recipeIng[i + eval(2*l)] = conv[1];
                recipeIng[i+l] = conv[0];
            }
        }
        if(lt != undefined) {
            for(i=0; i<lt; i++) {
                if(recipeTemp[i + eval(2*lt)] == 'F') {
                    recipeTemp[i + eval(2*lt)] = 'C';
                    recipeTemp[i+lt] = Math.round(eval(recipeTemp[i+lt] - 32) / 1.8); 
                }
            }
        }
    }
    changePage(recipeOV, 'Your Recipe');
}

function calcRatio() {
    //Returns true if >= 50% metric units
    let l = recipeIng.length / 3;
    let US = 0;
    let metric = 0;
    for(i=0; i<l; i++) {
        if(isitmetric(recipeIng[i + eval(2*l)])) {
            metric++;
        }
        else {
            US++;
        }
    }
    let ratio = metric/US;
    if(ratio >= 1) {
        return true;
    }
    else if(ratio < 1) {
        return false;
    }
}

function isitmetric(unitin) {
    switch (unitin) {
        // Begin Grams //
        case "Grams":
            return true;
            break;
        case "Grams - Fine Powder":
            return true;
            break;
        case "Grams - Granular":
            return true;
            break;
        case "Grams - Grains":
            return true;
            break;
        case "Grams - Liquid Solids":
            return true;
            break;
        // End Grams ... Begin Liters //
        case "Liters":
            return true;
            break;
        // End Liters ... Begin Milliliters //
        case "Milliliters":
            return true;
            break;
        // End Milliliters ... Begin Centimeters //
        case "Centimeters":
            return true;
            break;
        // End Centimeters ... Begin Millimeters //
        case "Millimeters":
            return true;
            break;
        // End Millimeters ... Begin US Conversions ... Begin Ounces //
        case "Ounces":
            return false;
            break;
        // End Ounces ... Begin Pounds //
        case "Pounds":
            return false;
            break;
        // End Pounds ... Begin Teaspoons //
        case "Teaspoons":
            return false;
            break;
        // End Teaspoons ... Begin Tablespoons //
        case "Tablespoons":
            return false;
            break;
        // End Tablespoons ... Begin Cups //
        case "Cups":
            return false;
            break;
        // End Cups ... Begin Quarts //
        case "Quarts":
            return false;
            break;
        // End Quarts ... Begin Pints //
        case "Pints":
            return false;
            break;
        // End Pints ... Begin Gallons //
        case "Gallons":
            return false;
            break;
        // End Gallons //
    }
}

function smartconvert(unitIn, num) {
    var conversion;
    var unitOut;
    switch (unitIn) {
        // Begin Grams //
        case "Grams":
            if (num < 453.59) {
                conversion = Math.round((num / 28.35) * 100) / 100;
                unitOut = "Ounces";
            }
            else if (num >= 453.59) {
                conversion = Math.round((num / 453.59) * 100) / 100;
                unitOut = "Pounds";
            }
            break;
        case "Grams - Fine Powder":
            if (num < 8) {
                conversion = Math.round((num / 140) * 480) / 10;
                unitOut = "Teaspoons";
            }    
            else if (num < 35 && num >= 8) {
                conversion = Math.round((num / 140) * 160) / 10;
                unitOut = "Tablespoons";
            }
            else if (num >= 35) {
                conversion = Math.round((num / 140) * 100) / 100;
                unitOut = "Cups";
            }
            break;
        case "Grams - Granular":
            if (num < 11) {
                conversion = Math.round((num / 190) * 480) / 10;
                unitOut = "Teaspoons";
            }
            else if (num >= 11 && num < 48) {
                conversion = Math.round((num / 190) * 160) / 10;
                unitOut = "Tablespoons";
            }
            else if (num >= 48) {
                conversion = Math.round((num / 190) * 100) / 100;
                unitOut = "Cups";
            }
            break;
        case "Grams - Grains":
            if ( num < 9) {
                conversion = Math.round((num / 150) * 480) / 10;
                unitOut = "Teaspoons";
            }
            else if (num >= 9 && num < 38) {
                conversion = Math.round((num / 150) * 160) / 10;
                unitOut = "Tablespoons";
            }
            else if (num >= 38) {
                conversion = Math.round((num / 150) * 100) / 100;
                unitOut = "Cups";
            }
            break;
        case "Grams - Liquid Solids":
            if (num < 12) {
                conversion = Math.round((num / 200) * 480) / 10;
                unitOut = "Teaspoons";
            }
            else if (num >= 12 && num < 50) {
                conversion = Math.round((num / 200) * 160) / 10;
                unitOut = "Tablespoons";
            }
            else if (num >= 50) {
                conversion = Math.round((num / 200) * 100) / 100;
                unitOut = "Cups";
            }
            break;
        // End Grams ... Begin Liters //
        case "Liters":
            conversion = Math.round((num / 0.24) * 100) / 100;
            unitOut = "Cups";
            break;
        // End Liters ... Begin Milliliters //
        case "Milliliters":
            if (num < 15) {
                conversion = Math.round((num / 4.93) * 100) / 100;
                unitOut = "Teaspoons";
            }
            else if (num >= 15 && num < 60) {
                conversion = Math.round((num / 14.79) * 100) / 100;
                unitOut = "Tablespoons";
            }
            else if (num >= 60) {
                conversion = Math.round((num / 240) * 100) / 100;
                unitOut = "Cups";
            }
            break;
        // End Milliliters ... Begin Centimeters //
        case "Centimeters":
            conversion = Math.round((num / 2.54) * 100) / 100;
            unitOut = "Inches";
            break;
        // End Centimeters ... Begin Millimeters //
        case "Millimeters":
            conversion = Math.round((num / 25.4) * 100) / 100;
            unitOut = "Inches";
            break;
        // End Millimeters ... Begin US Conversions ... Begin Ounces //
        case "Ounces":
            conversion = Math.round((num * 28.35) * 100) / 100;
            unitOut = "Grams";
            break;
        // End Ounces ... Begin Pounds //
        case "Pounds":
            conversion = Math.round((num * 453.59) * 100) / 100;
            unitOut = "Grams";
            break;
        // End Pounds ... Begin Teaspoons //
        case "Teaspoons":
            conversion = Math.round((num * 4.92) * 100) / 100;
            unitOut = "Milliliters";
            break;
        // End Teaspoons ... Begin Tablespoons //
        case "Tablespoons":
            conversion = Math.round((num * 14.78) * 100) / 100;
            unitOut = "Milliliters";
            break;
        // End Tablespoons ... Begin Cups //
        case "Cups":
            if (num < 4) {   
                conversion = Math.round((num * 240) * 100) / 100;
                unitOut = "Milliliters";
            }
            else if (num >= 4) {
                conversion = Math.round((num * 0.24) * 100) / 100;
                unitOut = "Liters";
            }
            break;
        // End Cups ... Begin Quarts //
        case "Quarts":
            conversion = Math.round((num * 0.95) * 100) / 100;
            unitOut = "Liters";
            break;
        // End Quarts ... Begin Pints //
        case "Pints":
            if (num < 2) {
                conversion = Math.round((num * 473) * 100) / 100;
                unitOut = "Milliliters";
            }
            else if (num >= 2) {
                conversion = Math.round((num * 0.47) * 100) / 100;
                unitOut = "Liters";
            }
            break;
        // End Pints ... Begin Gallons //
        case "Gallons":
            conversion = Math.round((num * 3.79) * 100) / 100;
            unitOut = "Liters";
            break;
        // End Gallons //
    }
    var returnthis = [conversion, unitOut];
    return returnthis;
}