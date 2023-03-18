import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Defenses from './pages/defenses/Defenses';
import Resources from './pages/resources/Resources';
import Army from './pages/army/Army';
import Troops from './pages/troops/Troops';
import ElixerTroops from './pages/troops/ElixerTroops';
import DarkElixerTroops from './pages/troops/DarkElixerTroops';

import DefenseBuilding from './pages/DefenseBuilding';
import Traps from './pages/defenses/Traps';
import Pets from './pages/troops/Pets';
import Heroes from './pages/troops/Heroes';
import ElixerSpells from './pages/troops/ElixerSpells';
import DarkElixerSpells from './pages/troops/DarkElixerSpells';
import SiegeMachines from './pages/troops/SiegeMachines';
import SuperTroops from './pages/troops/SuperTroops';

function App() {
  const defenseJson = importAll(require.context('./json/defenses', false, /\.json$/));
  const resourceJson = importAll(require.context('./json/resources', false, /\.json$/));
  const armyJson = importAll(require.context('./json/army', false, /\.json$/));
  const troopJson = importAll(require.context('./json/troops', false, /\.json$/));

  function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  //Defenses
  const cannonimg = importAll(require.context('./images/defenses/cannon', false, /\.webp$/));
  const archertowerimg = importAll(require.context('./images/defenses/archer-tower', false, /\.webp$/));
  const mortarimg = importAll(require.context('./images/defenses/mortar', false, /\.webp$/));
  const airdefenseimg = importAll(require.context('./images/defenses/air-defense', false, /\.webp$/));
  const wizardtowerimg = importAll(require.context('./images/defenses/wizard-tower', false, /\.webp$/));
  const airsweeperimg = importAll(require.context('./images/defenses/air-sweeper', false, /\.webp$/));
  const hiddenteslaimg = importAll(require.context('./images/defenses/hidden-tesla', false, /\.webp$/));
  const bombtowerimg = importAll(require.context('./images/defenses/bomb-tower', false, /\.webp$/));
  const xbowimg = importAll(require.context('./images/defenses/x-bow', false, /\.webp$/));
  const infernotowerimg = importAll(require.context('./images/defenses/inferno-tower', false, /\.webp$/));
  const eagleartilleryimg = importAll(require.context('./images/defenses/eagle-artillery', false, /\.webp$/));
  const scattershotimg = importAll(require.context('./images/defenses/scattershot', false, /\.webp$/));
  const builderhutimg = importAll(require.context('./images/defenses/builder-hut', false, /\.webp$/));
  const spelltowerimg = importAll(require.context('./images/defenses/spell-tower', false, /\.webp$/));
  const monolithimg = importAll(require.context('./images/defenses/monolith', false, /\.webp$/));
  const townhallimg = importAll(require.context('./images/defenses/town-hall', false, /\.webp$/));
  const wallsimg = importAll(require.context('./images/defenses/walls', false, /\.webp$/));

  //Traps
  const bombimg = importAll(require.context('./images/defenses/traps/bomb', false, /\.webp$/));
  const springtrapimg = importAll(require.context('./images/defenses/traps/spring-trap', false, /\.webp$/));
  const giantbombimg = importAll(require.context('./images/defenses/traps/giant-bomb', false, /\.webp$/));
  const airbombimg = importAll(require.context('./images/defenses/traps/air-bomb', false, /\.webp$/));
  const seekingairmineimg = importAll(require.context('./images/defenses/traps/seeking-air-mine', false, /\.webp$/));
  const skeletontrapimg = importAll(require.context('./images/defenses/traps/skeleton-trap', false, /\.webp$/));
  const tornadotrapimg = importAll(require.context('./images/defenses/traps/tornado-trap', false, /\.webp$/));

  //Resources
  const townhallresourceimg = importAll(require.context('./images/resources/town-hall', false, /\.webp$/));
  const goldmineimg = importAll(require.context('./images/resources/gold-mine', false, /\.webp$/));
  const goldstorageimg = importAll(require.context('./images/resources/gold-storage', false, /\.webp$/));
  const elixercollectorimg = importAll(require.context('./images/resources/elixer-collector', false, /\.webp$/));
  const elixerstorageimg = importAll(require.context('./images/resources/elixer-storage', false, /\.webp$/));
  const darkelixerdrillimg = importAll(require.context('./images/resources/dark-elixer-drill', false, /\.webp$/));
  const darkelixerstorageimg = importAll(require.context('./images/resources/dark-elixer-storage', false, /\.webp$/));
  const clancastleimg = importAll(require.context('./images/resources/clan-castle', false, /\.webp$/));

  //Army
  const armycampimg = importAll(require.context('./images/army/army-camp', false, /\.webp$/));
  const barracksimg = importAll(require.context('./images/army/barracks', false, /\.webp$/));
  const darkbarracksimg = importAll(require.context('./images/army/dark-barracks', false, /\.webp$/));
  const laboratoryimg = importAll(require.context('./images/army/laboratory', false, /\.webp$/));
  const spellfactoryimg = importAll(require.context('./images/army/spell-factory', false, /\.webp$/));
  const darkspellfactoryimg = importAll(require.context('./images/army/dark-spell-factory', false, /\.webp$/));
  const workshopimg = importAll(require.context('./images/army/workshop', false, /\.webp$/));
  const pethouseimg = importAll(require.context('./images/army/pet-house', false, /\.webp$/));

  //Troops
  const elixertroopsimg = importAll(require.context('./images/troops/elixer-troops', false, /\.webp$/));
  const darkelixertroopsimg = importAll(require.context('./images/troops/dark-elixer-troops', false, /\.webp$/));
  const petsimg = importAll(require.context('./images/troops/pets', false, /\.webp$/));
  const heroesimg = importAll(require.context('./images/troops/heroes', false, /\.webp$/));
  const elixerspellimg = importAll(require.context('./images/troops/elixer-spells', false, /\.webp$/));
  const darkelixerspellimg = importAll(require.context('./images/troops/dark-elixer-spells', false, /\.webp$/));
  const siegemachineimg = importAll(require.context('./images/troops/siege-machines', false, /\.webp$/));
  const supertroopimg = importAll(require.context('./images/troops/super-troops', false, /\.webp$/));

  return (
    <div className='bg-gradient-to-br from-purple-600 to-purple-900 bg-fixed h-screen overflow-y-auto'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/defenses'>
          <Route index element={<Defenses />} />
          <Route path='cannon' element={<DefenseBuilding json={[defenseJson["cannon.json"]]} images={cannonimg} imageprefix="cannon" />} />
          <Route path='archer-tower' element={<DefenseBuilding json={[defenseJson["archer-tower.json"]]} images={archertowerimg} imageprefix="archer-tower" />} />
          <Route path='mortar' element={<DefenseBuilding json={[defenseJson["mortar.json"]]} images={mortarimg} imageprefix="mortar" />} />
          <Route path='air-defense' element={<DefenseBuilding json={[defenseJson["air-defense.json"]]} images={airdefenseimg} imageprefix="air-defense" />} />
          <Route path='wizard-tower' element={<DefenseBuilding json={[defenseJson["wizard-tower.json"]]} images={wizardtowerimg} imageprefix="wizard-tower" />} />
          <Route path='air-sweeper' element={<DefenseBuilding json={[defenseJson["air-sweeper.json"]]} images={airsweeperimg} imageprefix="air-sweeper" />} />
          <Route path='hidden-tesla' element={<DefenseBuilding json={[defenseJson["hidden-tesla.json"]]} images={hiddenteslaimg} imageprefix="tesla" />} />
          <Route path='bomb-tower' element={<DefenseBuilding json={[defenseJson["bomb-tower.json"]]} images={bombtowerimg} imageprefix="bomb-tower" />} />
          <Route path='x-bow' element={<DefenseBuilding json={[defenseJson["x-bow.json"]]} images={xbowimg} imageprefix="x-bow" />} />
          <Route path='inferno-tower' element={
            <DefenseBuilding
              json={[defenseJson["inferno-tower-single.json"], defenseJson["inferno-tower-multi.json"]]}
              images={infernotowerimg}
              imageprefix="inferno"
              pagenum={2} />}
          />
          <Route path='eagle-artillery' element={<DefenseBuilding json={[defenseJson["eagle-artillery.json"]]} images={eagleartilleryimg} imageprefix="eagle" />} />
          <Route path='scattershot' element={<DefenseBuilding json={[defenseJson["scattershot.json"]]} images={scattershotimg} imageprefix="scattershot" />} />
          <Route path='builder-hut' element={<DefenseBuilding json={[defenseJson["builder-hut.json"]]} images={builderhutimg} imageprefix="builder" />} />
          <Route path='spell-tower' element={<DefenseBuilding json={[defenseJson["spell-tower.json"]]} images={spelltowerimg} imageprefix="spell" />} />
          <Route path='monolith' element={<DefenseBuilding json={[defenseJson["monolith.json"]]} images={monolithimg} imageprefix="monolith" />} />
          <Route path='town-hall' element={
            <DefenseBuilding
              json={[defenseJson["town-hall12.json"], defenseJson["town-hall13.json"], defenseJson["town-hall14.json"], defenseJson["town-hall15.json"]]}
              images={townhallimg}
              imageprefix="th"
              pagenum={4} />}
          />
          <Route path='walls' element={<DefenseBuilding json={[defenseJson["walls.json"]]} images={wallsimg} imageprefix="walls" />} />
          <Route path='traps'>
            <Route index element={<Traps />} />
            <Route path='bomb' element={<DefenseBuilding json={[defenseJson["bomb.json"]]} images={bombimg} imageprefix="bomb" />} />
            <Route path='spring-trap' element={<DefenseBuilding json={[defenseJson["spring-trap.json"]]} images={springtrapimg} imageprefix="trap" />} />
            <Route path='giant-bomb' element={<DefenseBuilding json={[defenseJson["giant-bomb.json"]]} images={giantbombimg} imageprefix="giant-bomb" />} />
            <Route path='air-bomb' element={<DefenseBuilding json={[defenseJson["air-bomb.json"]]} images={airbombimg} imageprefix="bomb" />} />
            <Route path='seeking-air-mine' element={<DefenseBuilding json={[defenseJson["seeking-air-mine.json"]]} images={seekingairmineimg} imageprefix="bomb" />} />
            <Route path='skeleton-trap' element={<DefenseBuilding json={[defenseJson["skeleton-trap.json"]]} images={skeletontrapimg} imageprefix="skeleton" />} />
            <Route path='tornado-trap' element={<DefenseBuilding json={[defenseJson["tornado-trap.json"]]} images={tornadotrapimg} imageprefix="tornado" />} />
          </Route>
        </Route>
        <Route path='/resources'>
          <Route index element={<Resources />} />
          <Route path='town-hall' element={<DefenseBuilding json={[resourceJson["town-hall.json"]]} images={townhallresourceimg} imageprefix="th" />} />
          <Route path='gold-mine' element={<DefenseBuilding json={[resourceJson["gold-mine.json"]]} images={goldmineimg} imageprefix="mine" />} />
          <Route path='gold-storage' element={<DefenseBuilding json={[resourceJson["gold-storage.json"]]} images={goldstorageimg} imageprefix="gold" />} />
          <Route path='elixer-collector' element={<DefenseBuilding json={[resourceJson["gold-mine.json"]]} images={elixercollectorimg} imageprefix="elixer" />} />
          <Route path='elixer-storage' element={<DefenseBuilding json={[resourceJson["gold-storage.json"]]} images={elixerstorageimg} imageprefix="elixer" />} />
          <Route path='dark-elixer-drill' element={<DefenseBuilding json={[resourceJson["dark-elixer-drill.json"]]} images={darkelixerdrillimg} imageprefix="dark" />} />
          <Route path='dark-elixer-storage' element={<DefenseBuilding json={[resourceJson["dark-elixer-storage.json"]]} images={darkelixerstorageimg} imageprefix="dark" />} />
          <Route path='clan-castle' element={<DefenseBuilding json={[resourceJson["clan-castle.json"]]} images={clancastleimg} imageprefix="clan" />} />
        </Route>
        <Route path='/army'>
          <Route index element={<Army />} />
          <Route path="army-camp" element={<DefenseBuilding json={[armyJson["army-camp.json"]]} images={armycampimg} imageprefix="camp" />} />
          <Route path="barracks" element={<DefenseBuilding json={[armyJson["barracks.json"]]} images={barracksimg} imageprefix="barracks" />} />
          <Route path="dark-barracks" element={<DefenseBuilding json={[armyJson["dark-barracks.json"]]} images={darkbarracksimg} imageprefix="dark" />} />
          <Route path="laboratory" element={<DefenseBuilding json={[armyJson["laboratory.json"]]} images={laboratoryimg} imageprefix="lab" />} />
          <Route path="spell-factory" element={<DefenseBuilding json={[armyJson["spell-factory.json"]]} images={spellfactoryimg} imageprefix="spell" />} />
          <Route path="dark-spell-factory" element={<DefenseBuilding json={[armyJson["dark-spell-factory.json"]]} images={darkspellfactoryimg} imageprefix="dark" />} />
          <Route path="workshop" element={<DefenseBuilding json={[armyJson["workshop.json"]]} images={workshopimg} imageprefix="workshop" />} />
          <Route path="pet-house" element={<DefenseBuilding json={[armyJson["pet-house.json"]]} images={pethouseimg} imageprefix="pet" />} />
        </Route>
        <Route path='/troops'>
          <Route index element={<Troops />} />
          <Route path='elixer-troops'>
            <Route index element={<ElixerTroops />} />
            <Route path="barbarian" element={<DefenseBuilding json={[troopJson["barbarian.json"]]} image={elixertroopsimg['barbarian.webp']} />} />
            <Route path='archer' element={<DefenseBuilding json={[troopJson["archer.json"]]} image={elixertroopsimg['archer.webp']} />} />
            <Route path='giant' element={<DefenseBuilding json={[troopJson['giant.json']]} image={elixertroopsimg['giant.webp']} />} />
            <Route path='goblin' element={<DefenseBuilding json={[troopJson['goblin.json']]} image={elixertroopsimg['goblin.webp']} />} />
            <Route path='wall-breaker' element={<DefenseBuilding json={[troopJson['wall-breaker.json']]} image={elixertroopsimg['wall-breaker.webp']} />} />
            <Route path='balloon' element={<DefenseBuilding json={[troopJson['balloon.json']]} image={elixertroopsimg['balloon.webp']} />} />
            <Route path='wizard' element={<DefenseBuilding json={[troopJson['wizard.json']]} image={elixertroopsimg['wizard.webp']} />} />
            <Route path='healer' element={<DefenseBuilding json={[troopJson['healer.json']]} image={elixertroopsimg['healer.webp']} />} />
            <Route path='dragon' element={<DefenseBuilding json={[troopJson['dragon.json']]} image={elixertroopsimg['dragon.webp']} />} />
            <Route path='pekka' element={<DefenseBuilding json={[troopJson['pekka.json']]} image={elixertroopsimg['pekka.webp']} />} />
            <Route path='baby-dragon' element={<DefenseBuilding json={[troopJson['baby-dragon.json']]} image={elixertroopsimg['baby-dragon.webp']} />} />
            <Route path='miner' element={<DefenseBuilding json={[troopJson['miner.json']]} image={elixertroopsimg['miner.webp']} />} />
            <Route path='electro-dragon' element={<DefenseBuilding json={[troopJson['electro-dragon.json']]} image={elixertroopsimg['electro-dragon.webp']} />} />
            <Route path='yeti' element={<DefenseBuilding json={[troopJson['yeti.json']]} image={elixertroopsimg['yeti.webp']} />} />
            <Route path='dragon-rider' element={<DefenseBuilding json={[troopJson['dragon-rider.json']]} image={elixertroopsimg['dragon-rider.webp']} />} />
            <Route path='electro-titan' element={<DefenseBuilding json={[troopJson['electro-titan.json']]} image={elixertroopsimg['electro-titan.webp']} />} />
          </Route>
          <Route path='dark-elixer-troops'>
            <Route index element={<DarkElixerTroops />} />
            <Route path="minion" element={<DefenseBuilding json={[troopJson['minion.json']]} image={darkelixertroopsimg['minion.webp']} />} />
            <Route path='hog-rider' element={<DefenseBuilding json={[troopJson['hog-rider.json']]} image={darkelixertroopsimg['hog-rider.webp']} />} />
            <Route path='valkyrie' element={<DefenseBuilding json={[troopJson['valkyrie.json']]} image={darkelixertroopsimg['valkyrie.webp']} />} />
            <Route path='golem' element={<DefenseBuilding json={[troopJson['golem.json']]} image={darkelixertroopsimg['golem.webp']} />} />
            <Route path='witch' element={<DefenseBuilding json={[troopJson['witch.json']]} image={darkelixertroopsimg['witch.webp']} />} />
            <Route path='lava-hound' element={<DefenseBuilding json={[troopJson['lava-hound.json']]} image={darkelixertroopsimg['lava-hound.webp']} />} />
            <Route path='bowler' element={<DefenseBuilding json={[troopJson['bowler.json']]} image={darkelixertroopsimg['bowler.webp']} />} />
            <Route path='ice-golem' element={<DefenseBuilding json={[troopJson['ice-golem.json']]} image={darkelixertroopsimg['ice-golem.webp']} />} />
            <Route path='headhunter' element={<DefenseBuilding json={[troopJson['headhunter.json']]} image={darkelixertroopsimg['headhunter.webp']} />} />
          </Route>
          <Route path='pets'>
            <Route index element={<Pets />} />
            <Route path='lassi' element={<DefenseBuilding json={[troopJson['lassi.json']]} image={petsimg['lassi.webp']} />} />
            <Route path='electro-owl' element={<DefenseBuilding json={[troopJson['electro-owl.json']]} image={petsimg['electro-owl.webp']} />} />
            <Route path='mighty-yak' element={<DefenseBuilding json={[troopJson['mighty-yak.json']]} image={petsimg['mighty-yak.webp']} />} />
            <Route path='unicorn' element={<DefenseBuilding json={[troopJson['unicorn.json']]} image={petsimg['unicorn.webp']} />} />
            <Route path='frosty' element={<DefenseBuilding json={[troopJson['frosty.json']]} image={petsimg['frosty.webp']} />} />
            <Route path='diggy' element={<DefenseBuilding json={[troopJson['diggy.json']]} image={petsimg['diggy.webp']} />} />
            <Route path='poison-lizard' element={<DefenseBuilding json={[troopJson['poison-lizard.json']]} image={petsimg['poison-lizard.webp']} />} />
            <Route path='phoenix' element={<DefenseBuilding json={[troopJson['phoenix.json']]} image={petsimg['phoenix.webp']} />} />
          </Route>
          <Route path='heroes'>
            <Route index element={<Heroes />} />
            <Route path="barbarian-king" element={<DefenseBuilding json={[troopJson['barbarian-king.json']]} image={heroesimg['barbarian-king.webp']} />} />
            <Route path='archer-queen' element={<DefenseBuilding json={[troopJson['archer-queen.json']]} image={heroesimg['archer-queen.webp']} />} />
            <Route path='grand-warden' element={<DefenseBuilding json={[troopJson['grand-warden.json']]} image={heroesimg['grand-warden.webp']} />} />
            <Route path='royal-champion' element={<DefenseBuilding json={[troopJson['royal-champion.json']]} image={heroesimg['royal-champion.webp']} />} />
          </Route>
          <Route path='elixer-spells'>
            <Route index element={<ElixerSpells />} />
            <Route path='lightning-spell' element={<DefenseBuilding json={[troopJson['lightning-spell.json']]} image={elixerspellimg['lightning.webp']} />} />
            <Route path='healing-spell' element={<DefenseBuilding json={[troopJson['healing-spell.json']]} image={elixerspellimg['healing.webp']} />} />
            <Route path='rage-spell' element={<DefenseBuilding json={[troopJson['rage-spell.json']]} image={elixerspellimg['rage.webp']} />} />
            <Route path='jump-spell' element={<DefenseBuilding json={[troopJson['jump-spell.json']]} image={elixerspellimg['jump.webp']} />} />
            <Route path='freeze-spell' element={<DefenseBuilding json={[troopJson['freeze-spell.json']]} image={elixerspellimg['freeze.webp']} />} />
            <Route path='clone-spell' element={<DefenseBuilding json={[troopJson['clone-spell.json']]} image={elixerspellimg['clone.webp']} />} />
            <Route path='invisibility-spell' element={<DefenseBuilding json={[troopJson['invisibility-spell.json']]} image={elixerspellimg['invisibility.webp']} />} />
            <Route path='recall-spell' element={<DefenseBuilding json={[troopJson['recall-spell.json']]} image={elixerspellimg['recall.webp']} />} />
          </Route>
          <Route path='dark-elixer-spells'>
            <Route index element={<DarkElixerSpells />} />
            <Route path='poison-spell' element={<DefenseBuilding json={[troopJson['poison-spell.json']]} image={darkelixerspellimg['poison.webp']} />} />
            <Route path='earth-quake-spell' element={<DefenseBuilding json={[troopJson['earth-quake-spell.json']]} image={darkelixerspellimg['earth-quake.webp']} />} />
            <Route path='haste-spell' element={<DefenseBuilding json={[troopJson['haste-spell.json']]} image={darkelixerspellimg['haste.webp']} />} />
            <Route path='skeleton-spell' element={<DefenseBuilding json={[troopJson['skeleton-spell.json']]} image={darkelixerspellimg['skeleton.webp']} />} />
            <Route path='bat-spell' element={<DefenseBuilding json={[troopJson['bat-spell.json']]} image={darkelixerspellimg['bat.webp']} />} />
          </Route>
          <Route path='siege-machines'>
            <Route index element={<SiegeMachines/>}/>
            <Route path='wall-wrecker' element={<DefenseBuilding json={[troopJson['wall-wrecker.json']]} image={siegemachineimg['wall-wrecker.webp']}/>}/>
            <Route path='battle-blimp' element={<DefenseBuilding json={[troopJson['battle-blimp.json']]} image={siegemachineimg['battle-blimp.webp']}/>}/>
            <Route path='stone-slammer' element={<DefenseBuilding json={[troopJson['stone-slammer.json']]} image={siegemachineimg['stone-slammer.webp']}/>}/>
            <Route path='siege-barracks' element={<DefenseBuilding json={[troopJson['siege-barracks.json']]} image={siegemachineimg['siege-barracks.webp']}/>}/>
            <Route path='log-launcher' element={<DefenseBuilding json={[troopJson['log-launcher.json']]} image={siegemachineimg['log-launcher.webp']}/>}/>
            <Route path='flame-flinger' element={<DefenseBuilding json={[troopJson['flame-flinger.json']]} image={siegemachineimg['flame-flinger.webp']}/>}/>
            <Route path='battle-drill' element={<DefenseBuilding json={[troopJson['battle-drill.json']]} image={siegemachineimg['battle-drill.webp']}/>}/>
          </Route>
          <Route path='super-troops'>
            <Route index element={<SuperTroops/>}/>
            <Route path='super-barbarian' element={<DefenseBuilding json={[troopJson['super-barbarian.json']]} image={supertroopimg['barbarian.webp']}/>}/>
            <Route path='super-archer' element={<DefenseBuilding json={[troopJson['super-archer.json']]} image={supertroopimg['archer.webp']}/>}/>
            <Route path='super-giant' element={<DefenseBuilding json={[troopJson['super-giant.json']]} image={supertroopimg['giant.webp']}/>}/>
            <Route path='sneaky-goblin' element={<DefenseBuilding json={[troopJson['sneaky-goblin.json']]} image={supertroopimg['goblin.webp']}/>}/>
            <Route path='super-wall-breaker' element={<DefenseBuilding json={[troopJson['super-wall-breaker.json']]} image={supertroopimg['wall-breaker.webp']}/>}/>
            <Route path='rocket-balloon' element={<DefenseBuilding json={[troopJson['rocket-balloon.json']]} image={supertroopimg['balloon.webp']}/>}/>
            <Route path='super-wizard' element={<DefenseBuilding json={[troopJson['super-wizard.json']]} image={supertroopimg['wizard.webp']}/>}/>
            <Route path='super-dragon' element={<DefenseBuilding json={[troopJson['super-dragon.json']]} image={supertroopimg['dragon.webp']}/>}/>
            <Route path='inferno-dragon' element={<DefenseBuilding json={[troopJson['inferno-dragon.json']]} image={supertroopimg['inferno-dragon.webp']}/>}/>
            <Route path='super-miner' element={<DefenseBuilding json={[troopJson['super-miner.json']]} image={supertroopimg['super-miner.webp']}/>}/>
            <Route path='super-minion' element={<DefenseBuilding json={[troopJson['super-minion.json']]} image={supertroopimg['minion.webp']}/>}/>
            <Route path='super-valkyrie' element={<DefenseBuilding json={[troopJson['super-valkyrie.json']]} image={supertroopimg['valkyrie.webp']}/>}/>
            <Route path='super-witch' element={<DefenseBuilding json={[troopJson['super-witch.json']]} image={supertroopimg['witch.webp']}/>}/>
            <Route path='ice-hound' element={<DefenseBuilding json={[troopJson['ice-hound.json']]} image={supertroopimg['ice-hound.webp']}/>}/>
            <Route path='super-bowler' element={<DefenseBuilding json={[troopJson['super-bowler.json']]} image={supertroopimg['bowler.webp']}/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
