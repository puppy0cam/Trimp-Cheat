// ==UserScript==
// @name         Trimp Cheat Tool
// @namespace    http://puppy0cam.guppygalaxy.com/
// @version      0.1.3
// @description  allows you to cheat in trimps
// @author       puppy0cam
// @match        http://trimps.github.io/*
// @grant        none
// @include      http://trimps.github.io/*
// @updateURL    http://puppy0cam.guppygalaxy.com/Trimp-Cheat/Trimps.user.js
// @downloadURL  http://puppy0cam.guppygalaxy.com/Trimp-Cheat/Trimps.user.js
// @run-at       document-end
// ==/UserScript==
/* jshint -W097 */
if (window.game != undefined) {
    window.fill = function (type, base) {
        if (!base) {
            if (game.heirlooms.Shield.storageSize.currentBonus > 0) {
                game.resources[type].owned = ((game.resources[type].max * (game.portal.Packrat.level * game.portal.Packrat.modifier)) * game.heirlooms.Shield.storageSize.currentBonus) + game.resources[type].max;
            } else {
                game.resources[type].owned = ((game.resources[type].max * (game.portal.Packrat.level * game.portal.Packrat.modifier)) + game.resources[type].max);
            }
        } else {
            if (game.heirlooms.Shield.storageSize.currentBonus > 0) {
                game.resources[type].owned = ((game.resources[base].max * (game.portal.Packrat.level * game.portal.Packrat.modifier)) + game.resources[base].max * game.heirlooms.Shield.storageSize.currentBonus);
            } else {
                game.resources[type].owned = ((game.resources[base].max * (game.portal.Packrat.level * game.portal.Packrat.modifier)) + game.resources[base].max);
            }
        }
    };
    window.mapResource = function () {
        createMap(1 + game.stats.zonesCleared.value, "puppy0cam Caves", "Depths", 2.6, 25, 0.75, false, "puppy0cam Caves");
    };
    window.ruinTheFun = function () {
        fill('food');
        fill('wood');
        fill('metal');
        fill('fragments', 'food');
        fill('science', 'food');
        fill('gems', 'food');
        fill('helium', 'food');
        game.resources.trimps.owned = game.resources.trimps.realMax();
    };
    window.buyStuff = function (thing) {
        buyBuilding(thing);
        ruinTheFun();
    };
    window.heirloomFinding = function () {
        game.heirlooms.rarityBreakpoints[8] = 200;
        game.heirlooms.rarities[9] = [];
        game.heirlooms.rarities[9][0] = -1;
        game.heirlooms.rarities[9][1] = -1;
        game.heirlooms.rarities[9][2] = -1;
        game.heirlooms.rarities[9][3] = -1;
        game.heirlooms.rarities[9][4] = 6000;
        game.heirlooms.rarities[9][5] = 3000;
        game.heirlooms.rarities[9][6] = 1000;
    };
    window.sellHeirloom = function () {
        if (game.global.heirloomsExtra[0] === undefined) {
            message("ALERT: you do not have an heirloom to sell!", "Notices");
        } else {
            selectHeirloom(game.global.heirloomsExtra.length - 1, 'heirloomsExtra', this);
            recycleHeirloom(true);
        }
    };
    window.extraHeirlooms.innerHTML = extraHeirlooms.innerHTML + '<div id="sellHeirlooms" class="noselect heirloomBtnActive heirBtn" onclick="sellHeirloom()">Sell one</div>';
    window.battleBtnsColumn.innerHTML = battleBtnsColumn.innerHTML + '<div id="newMap" class="btn fightBtn btn-success" onclick="mapResource()">New Map</div>';
} else {
    console.log("error: game has not been defined, resorting to script injection.");
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
	addItem("script", "function sellHeirloom(){if(game.global.heirloomsExtra[0]==undefined){message('ALERT: you do not have an heirloom to sell!','Notices');}else{selectHeirloom(game.global.heirloomsExtra.length-1,'heirloomsExtra',this);recycleHeirloom(true);}}");
	extraHeirlooms.innerHTML = extraHeirlooms.innerHTML + '<div id="sellHeirlooms" class="noselect heirloomBtnActive heirBtn" onclick="sellHeirloom()">Sell one</div>';
	battleBtnsColumn.innerHTML = battleBtnsColumn.innerHTML + '<div id="newMap" class="btn fightBtn btn-success" onclick="mapResource()">New Map</div>';
}
