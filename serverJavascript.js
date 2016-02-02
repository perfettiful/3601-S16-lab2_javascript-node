// Javascript for the SERVER side.

/*exports.stringLength = function(str){
    return str.length;
};*/


exports.calcPetAge = function(int){
    return int*7;
};

exports.gpaCalc = function(crd1, crd2, crd3, grd1, grd2, grd3){
    var c1 = parseInt(crd1);
    var c2 = parseInt(crd2);
    var c3 = parseInt(crd3);

    var totalCreds = (c1 + c2 + c3);
    var grdPts = ((c1 * grd1) + (c2 * grd2) + (c3 * grd3));

    var gpa = (grdPts / totalCreds).toFixed(2);

    return gpa;
};
