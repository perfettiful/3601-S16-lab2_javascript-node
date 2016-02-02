// Our javascript for the CLIENT side.
// This will run on the browser.

/**
 * Takes no arguments, and creates a javascript alert in the client's browser.
 */
var sendAlert = function(){
    alert("THIS IS AN ALERT!");
};

/**
 * Used for getting the length of a string. For example only, you won't likely need to use something like this...
 * DIFFERENT FROM THE stringLength function in the server side javascript!!!
 *
 * @param str  - the string to have its length returned
 * @returns {*}  - an integer, the length of the string
 */
var testStringLength = function(str){
    return str.length;
};


/**
 * Takes no arguments, returns the string "kittens"
 *
 * @returns {string}  - returns "kittens"
 */
var returnKittens = function(){
    return "kittens";
};

var returnPuppies = function(){
    return "puppies";
};

var infoAlert = function() {
    alert("This GPA calculator was produced by Jung & Nate, January 2015");
};

var gpaCalc = function(crd1, crd2, crd3, grd1, grd2, grd3){
    var c1 = parseInt(crd1);
    var c2 = parseInt(crd2);
    var c3 = parseInt(crd3);
    var g1 = parseInt(grd1);
    var g2 = parseInt(grd2);
    var g3 = parseInt(grd3);

    var totalCreds = (c1 + c2 + c3);
    var grdPts = ((c1 * g1) + (c2 * g2) + (c3 * g3));

    var gpa = parseInt((grdPts / totalCreds).toFixed(2));
    return gpa;

};
