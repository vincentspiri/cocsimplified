import { Link } from 'react-router-dom';

import barbarianimg from '../../images/troops/elixer-troops/barbarian.webp';
import archerimg from '../../images/troops/elixer-troops/archer.webp';
import giantimg from '../../images/troops/elixer-troops/giant.webp';
import goblinimg from '../../images/troops/elixer-troops/goblin.webp';
import wallbreakerimg from '../../images/troops/elixer-troops/wall-breaker.webp';
import balloonimg from '../../images/troops/elixer-troops/balloon.webp';
import wizardimg from '../../images/troops/elixer-troops/wizard.webp';
import healerimg from '../../images/troops/elixer-troops/healer.webp';
import dragonimg from '../../images/troops/elixer-troops/dragon.webp';
import pekkaimg from '../../images/troops/elixer-troops/pekka.webp';
import babydragonimg from '../../images/troops/elixer-troops/baby-dragon.webp';
import minerimg from '../../images/troops/elixer-troops/miner.webp';
import electrodragonimg from '../../images/troops/elixer-troops/electro-dragon.webp';
import yetiimg from '../../images/troops/elixer-troops/yeti.webp';
import dragonriderimg from '../../images/troops/elixer-troops/dragon-rider.webp';
import electrotitanimg from '../../images/troops/elixer-troops/electro-titan.webp';

import Card from '../../components/Card';

export default function ElixerTroops() {
    return (
        <div className="h-screen grid place-items-center grid-flow-row grid-cols-2 gap-5 xl:grid-cols-4 xl:px-32 lg:grid-cols-4 lg:p-5 md:grid-cols-4 py-12">
            <Link to="/troops/elixer-troops/barbarian">
                <Card image={barbarianimg}/>
            </Link>
            <Link to="/troops/elixer-troops/archer">
                <Card image={archerimg}/>
            </Link>
            <Link to="/troops/elixer-troops/giant">
                <Card image={giantimg}/>
            </Link>
            <Link to="/troops/elixer-troops/goblin">
                <Card image={goblinimg}/>
            </Link>
            <Link to="/troops/elixer-troops/wall-breaker">
                <Card image={wallbreakerimg}/>
            </Link>
            <Link to="/troops/elixer-troops/balloon">
                <Card image={balloonimg}/>
            </Link>
            <Link to="/troops/elixer-troops/wizard">
                <Card image={wizardimg}/>
            </Link>
            <Link to="/troops/elixer-troops/healer">
                <Card image={healerimg}/>
            </Link>
            <Link to="/troops/elixer-troops/dragon">
                <Card image={dragonimg}/>
            </Link>
            <Link to="/troops/elixer-troops/pekka">
                <Card image={pekkaimg}/>
            </Link>
            <Link to="/troops/elixer-troops/baby-dragon">
                <Card image={babydragonimg}/>
            </Link>
            <Link to="/troops/elixer-troops/miner">
                <Card image={minerimg}/>
            </Link>
            <Link to="/troops/elixer-troops/electro-dragon">
                <Card image={electrodragonimg}/>
            </Link>
            <Link to="/troops/elixer-troops/yeti">
                <Card image={yetiimg}/>
            </Link>
            <Link to="/troops/elixer-troops/dragon-rider">
                <Card image={dragonriderimg}/>
            </Link>
            <Link to="/troops/elixer-troops/electro-titan">
                <Card image={electrotitanimg}/>
            </Link>
        </div>
    )
}