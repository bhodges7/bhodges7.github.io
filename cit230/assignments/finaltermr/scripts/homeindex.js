var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
//Get rid of https: and add ' when uploading to github.
//pass ZIP code for springfeld and Greenville
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var towns = request.response;
    showTowns(towns);
}



function showTowns(jsonObj) {
    var town = jsonObj['towns'];

    for (var i = 0; i < town.length; i++) {
        if (i ===2) { continue; }
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        myPara1.className += "para";
        var myPara2 = document.createElement('p');
        myPara2.className += "para";
        var myPara3 = document.createElement('p');
        myPara3.className += "para";
        var myPara4 = document.createElement('p');
        myPara4.className += "para";
        var myPara5 = document.createElement('p');
        myPara5.className += "para";
        var myList = document.createElement('ul');
        myList.className += "myListo";

        myH2.textContent = town[i].name;
        var myImg = document.createElement('img');
        myImg.className += "images";
        if (town[i].name === 'Franklin') {
            myImg.src ="images/franklin.jpg";
        } else if (town[i].name === 'Greenville') {
            myImg.src = "images/greenville.jpg";
        } else {
            myImg.src = "images/springfield.jpg";
        }
        myPara1.textContent = 'Motto: ' + town[i].motto;
        myPara2.textContent = 'Year Founded: ' + town[i].yearFounded;
        myPara3.textContent = 'Population: '+ town[i].currentPopulation;
        myPara4.textContent = 'Average Rain: ' + town[i].averageRainfall ;
        myPara5.textContent = 'Events:';
        var Events = town[i].events;
        for (var j = 0; j < Events.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = "- " + Events[j];
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myImg);
        section.appendChild(myArticle);
    }
}
