DOING
	Adaptive window mobile first UI
		UI
			MAPPANEL => mw
			CONTROLPANEL => cp
				eventPanel
					handleBar --> what unit/builiding can do
					eventLog --> what going on
				statusPanel
					attrBar --> attr of cell/unit/res/building
					selectBar --> selected cell/unit/res/building
				upgradePanel
					levelUpBar --> upgrade unit/building
					previewBar --> preview of cell/unit/res/building
				minMap
TODO
	Scale: css (borders, sprites), cells (percent), font:
						Char: U - unit, R - resource, F - free;
	Classes: building
	MVC: make Game Ctrl, Game Factory, Game Directive
			Game Ctrl - include all Ctrl with Functions, Methods
			Game Factory - include all Factories
			Game Directive - game view
	Back-End: Lan-play, Online-play, save data in LocalStorage, Try to up server (node)
	Preproccesors & compilators: min, test, watch
	Graphic - ? PixelArt || ? ASC-II Art || ? Isometric || ? Canvas || ? 3d
	Cross-platform: Cross-Browser, mobile-first, graceful-degradation, Cross-graphic with one mechanic
	Interface: window map, window status, window log - unobtrusively

Handle:
	This is early alfa so functional is basic
	There is a MAP witch contains ARRAY of classExample - CELL.
	One click -> select map cell
	If cell free - log free cell, if unit selected -> move unit
	If cell busy, there are some options
		If it resource -> log it resource, it type and quantity
		If it unit -> more options
			If that unit had been selected before -> it deselected
			If that unit ally -> do nothing
			If that unit ENEMY -> attack it

Universal unit -> it could be a WORKER, WARRIOR, MONK, anybody
Every unit have some SKILL POINTS
This points PLAYER spend on ABILITIES
Also PLAYER can names shablon of ABILITIES he choose once, for easy re-use
There are ready TEMPLATE

Controller ierarchy
ui
	map => mapCtlr
	eventBar => exp from unit, res, map, player, builiding
		handleBar => unit => player
		eventLog => unit, res, map, player, building
	statusBar => unit, map, res
		attrBar => same
		selectBar => same
	minMap => ui

	minMap, eventBar, statusBar => pic


render in ui?

building
	id
	playerId
	coords[{x:bx, y:by}]
	type -> house, blacksmith, barraks, archery, armory, artelery, shipyard,
		house => make population
		blacksmith => make tools
			armory => armory
			weaponary => weapon
			civil => work tools

without unit builting not functional

CONVERT MARTIX INTO 1-DIMENTION ARRAY

CLASSIC (FORM 0)
00 01 02         0  1  2  3  4  5  6  7  8
10 11 12    ---> 00 01 02 10 11 12 20 21 22
20 21 22

i*width + j
[1, 0]
1*3 + 0 = 3
[2, 1]
2*3 + 1 = 7


CUSTOM (FROM 1)
11 12 13         1  2  3  4  5  6  7  8  9
21 22 23    ---> 11 12 13 21 22 23 31 32 33
31 32 33


(i-1)*width + j
[1, 3]
(1-1)*3 + 3 = 3
[3,1]
(3-1)*3 + 1 = 7

ALT UNIT KILL
bufferUnit 1 2 ... unitToKill unitToKill+1 ... lastUnit
unitToKill = unitToKill+1
unitToKill+1 = unitToKill+2
for (var i = unitToKill.unitId; i < lastUnit - 1; i++) {
  unit[i] = unit[i+1];
}

minMap
show all map, keys: f - free cell, r - resource, u - unit
for example now map look like this
u f f
f r f
f f u
mapSize : mapFactory.map.size
