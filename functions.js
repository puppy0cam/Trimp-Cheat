function fill(type, base) {
    if (!base) {
        if (game.heirlooms.Shield.storageSize.currentBonus > 0) {
            game.resources[type].owned = ((game.resources[type].max * (game.portal.Packrat.level * game.portal.Packrat.modifier)) * game.heirlooms.Shield.storageSize.currentBonus) + game.resources[type].max;
        } else {
            game.resources[type].owned = ((game.resources[type].max * (game.portal.Packrat.level * game.portal.Packrat.modifier)) + game.resources[type].max);
        };
    } else {    
		if (game.heirlooms.Shield.storageSize.currentBonus > 0) {
            game.resources[type].owned = ((game.resources[base].max * (game.portal.Packrat.level * game.portal.Packrat.modifier)) + game.resources[base].max * game.heirlooms.Shield.storageSize.currentBonus);
        } else {
            game.resources[type].owned = ((game.resources[base].max * (game.portal.Packrat.level * game.portal.Packrat.modifier)) + game.resources[base].max);
        }
    }
}
function MapResource() {
    createMap(1 + game.stats.zonesCleared.value, "puppy0cam Caves", "Depths", 2.6, 25, 0.75, false, "puppy0cam Caves");
}
function ruinTheFun() {
    fill('food');
    fill('wood');
    fill('metal');
    fill('fragments', 'food');
    fill('science', 'food');
    fill('gems', 'food');
    fill('helium', 'food');
    game.resources.trimps.owned = game.resources.trimps.realMax();
}
function buyStuff(thing) {
    buyBuilding(thing);
    ruinTheFun();
}
function heirloomFinding() {
    game.heirlooms.rarityBreakpoints[8] = 200;
    game.heirlooms.rarities[9] = [];
    game.heirlooms.rarities[9][0] = -1;
    game.heirlooms.rarities[9][1] = -1;
    game.heirlooms.rarities[9][2] = -1;
    game.heirlooms.rarities[9][3] = -1;
    game.heirlooms.rarities[9][4] = 6000;
    game.heirlooms.rarities[9][5] = 3000;
    game.heirlooms.rarities[9][6] = 1000;
}