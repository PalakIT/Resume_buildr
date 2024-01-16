function addNewWEField() {
    console.log("Adding");

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("row", 3);
    newNode.setAttribute('placeholder', 'Enter here');


    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}
function addNewAQField() {
    console.log("Adding");

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("row", 3);
    newNode.setAttribute('placeholder', 'Enter here');


    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    // aqOb.insertBefore(newNode,aqAddButtonOb);


}

// Genertaing CV
function generateCV() {
    let namefield = document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = namefield;

    document.getElementById("nameT2").innerHTML = namefield;
    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressfield").value;

    document.getElementById("linkedT").innerHTML = document.getElementById("linkedinfield").value;
    document.getElementById("gitT").innerHTML = document.getElementById("gitfiled").value;

    // Objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectivefield").value;


    // work Experiance
    let wes = document.getElementsByClassName("weField");

    let str = ""
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("workexperianceT").innerHTML = str
      

}

