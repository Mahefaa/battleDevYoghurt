//Battledev level 1 2020 by Mahefa Ny Anjara.
let find2Maxes=(survey)=>{ //a function to find the two  most "voted" properties in an object
    let first=``;
    let firstNum=0; //first's votes
    let second=``;
    let secondNum=0;
    for(let colors in survey){
        if(survey[colors]>firstNum){
            if(firstNum!=0){
                //top two takes firstNum's value before it changes
                secondNum=firstNum;
                second=first;
            }
            first=colors;
            firstNum=survey[colors];
        }
        if(second==0 && survey[colors]<=firstNum && survey[colors]>secondNum && colors!=first){
        //if top one never changes, we have to get the top two
            secondNum=survey[colors];
            second=colors;
        }
    }
    return `${first} ${second} `;
}

let mySurvey=(table)=>{
    //here datas are put in a table
    let colorSurvey={};
    for(let color of table){
        if(colorSurvey.hasOwnProperty(color)){ //we verify if the property color exists in our object
            colorSurvey[color]++;
        }
        else if(!colorSurvey.hasOwnProperty(color)){
            //Add a new property and init with 1.
            colorSurvey[color]=1;
        }
    }
    return`Here's the poll result: ${find2Maxes(colorSurvey)}`
}
let table=['red','red','red','green','green','green','green','red']
mySurvey(table);
