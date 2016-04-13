// ==UserScript==
// @name         Trimps
// @namespace    http://puppy0cam.guppygalaxy.com/
// @version      0.1.1
// @description  allows you to use the following Functions: ruinTheFun(); buyStuff("Barn,Shed,Forge");
// @author       puppy0cam
// @match        http://trimps.github.io/*
// @grant        none
// @include      http://trimps.github.io/*
// ==/UserScript==
/* jshint -W097 */
;

function addItem(type, content) {
    var addTag = document.createElement(type); //declares variable in preperation of inserting into page, also determines what type of element it will be.
    var addContent = document.createTextNode(content); //declares data to be inserted into element
    addTag.appendChild(addContent); //inserts data into the inside of the element ready to be put onto the page
    var getFooter = document.getElementById("footer"); //finds the footer of the page, where it will put the newly created element
    document.body.insertBefore(addTag, getFooter); //places new element into webpage footer.
}
addItem("script", "function fill(type,base){if(!base){if(game.heirlooms.Shield.storageSize.currentBonus>0){game.resources[type].owned=((game.resources[type].max*(game.portal.Packrat.level*game.portal.Packrat.modifier))*game.heirlooms.Shield.storageSize.currentBonus)+game.resources[type].max;}else{game.resources[type].owned=((game.resources[type].max*(game.portal.Packrat.level*game.portal.Packrat.modifier))+game.resources[type].max);};}else{if(game.heirlooms.Shield.storageSize.currentBonus>0){game.resources[type].owned=((game.resources[base].max*(game.portal.Packrat.level*game.portal.Packrat.modifier))+game.resources[base].max*game.heirlooms.Shield.storageSize.currentBonus);}else{game.resources[type].owned=((game.resources[base].max*(game.portal.Packrat.level*game.portal.Packrat.modifier))+game.resources[base].max);}}}");
addItem("script", "function MapResource(){createMap(1+game.stats.zonesCleared.value,'puppy0cam Caves','Depths',2.6,25,0.75,false,'puppy0cam Caves');}");
addItem("script", "function ruinTheFun(){fill('food');fill('wood');fill('metal');fill('fragments','food');fill('science','food');fill('gems','food');fill('helium','food');game.resources.trimps.owned=game.resources.trimps.realMax();}");
addItem("script", "function buyStuff(thing){buyBuilding(thing);ruinTheFun();}");
addItem("script", "function heirloomFinding(){game.heirlooms.rarityBreakpoints[8]=200;game.heirlooms.rarities[9]=[];game.heirlooms.rarities[9][0]=-1;game.heirlooms.rarities[9][1]=-1;game.heirlooms.rarities[9][2]=-1;game.heirlooms.rarities[9][3]=-1;game.heirlooms.rarities[9][4]=6000;game.heirlooms.rarities[9][5]=3000;game.heirlooms.rarities[9][6]=1000;}");
addItem("script", "function sellHeirloom(){selectHeirloom(game.global.heirloomsExtra.length-1,'heirloomsExtra',this);recycleHeirloom(true);}");
extraHeirlooms.innerHTML = extraHeirlooms.innerHTML + '<div id="sellHeirlooms" class="noselect heirloomBtnActive heirBtn" onclick="sellHeirloom()">Sell one</div>'
