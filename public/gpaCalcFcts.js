/**
 * Created by perfe017 on 1/31/16.
 */

function allCredits(){

    var incr = new Array(3);
    var allCredits = 0;
    incr[0] = document.GPACalcForm.CR1.value;
    incr[1] = document.GPACalcForm.CR2.value;
    incr[2] = document.GPACalcForm.CR3.value;

    for(var x = 0; x < 3; x++ ){

        if(allCredits == 0){
            alert("Error - You did not enter any credit values! GPA = N/A");
            return 0;
        }

    allCredits = allCredits + incr[x];

    }

    alert("Total crdits are" +allCredits);
    return allCredits;

}
/*
function grdPts(vars){
 var ingr = new Array(3);
    var grdPts = 0;

    if(grdPts == 0){
        alert("Error - Please use standard college grades into the form of 'A' 'A-' 'B+' 'B' 'B-' 'C+' 'C' 'C-' 'D+' 'D' 'F'.");
        return 0;
    }
    return grdPts;

}

function gpa(vars){
    var gpa = grdPts()/allCredits();
    alert("GPA = " + eval(gpa));
    //return gpa;

}
