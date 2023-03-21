import { Link } from "react-router-dom";

import barbarianimg from '../../images/troops/super-troops/barbarian.webp';
import archerimg from '../../images/troops/super-troops/archer.webp';
import giantimg from '../../images/troops/super-troops/giant.webp';
import goblinimg from '../../images/troops/super-troops/goblin.webp';
import wallbreakerimg from '../../images/troops/super-troops/wall-breaker.webp';
import balloonimg from '../../images/troops/super-troops/balloon.webp';
import wizardimg from '../../images/troops/super-troops/wizard.webp';
import dragonimg from '../../images/troops/super-troops/dragon.webp';
import infernodragonimg from '../../images/troops/super-troops/inferno-dragon.webp';
import minerimg from '../../images/troops/super-troops/super-miner.webp';
import minionimg from '../../images/troops/super-troops/minion.webp';
import valkimg from '../../images/troops/super-troops/valkyrie.webp';
import witchimg from '../../images/troops/super-troops/witch.webp';
import icehoundimg from '../../images/troops/super-troops/ice-hound.webp';
import bowlerimg from '../../images/troops/super-troops/bowler.webp';
import Card from "../../components/Card";
import HomeButton from "../../components/HomeButton";

export default function SuperTroops() {
    return (
        <div className="h-screen grid place-items-center grid-flow-row grid-cols-2 gap-5 xl:grid-cols-5 xl:p-32 lg:grid-cols-5 lg:p-5 md:grid-cols-3 py-28">
            <HomeButton/>
            <Link to="/troops/super-troops/super-barbarian">
                <Card image={barbarianimg}/>
            </Link>
            <Link to="/troops/super-troops/super-archer">
                <Card image={archerimg}/>
            </Link>
            <Link to="/troops/super-troops/super-giant">
                <Card image={giantimg}/>
            </Link>
            <Link to="/troops/super-troops/sneaky-goblin">
                <Card image={goblinimg}/>
            </Link>
            <Link to="/troops/super-troops/super-wall-breaker">
                <Card image={wallbreakerimg}/>
            </Link>
            <Link to="/troops/super-troops/rocket-balloon">
                <Card image={balloonimg}/>
            </Link>
            <Link to="/troops/super-troops/super-wizard">
                <Card image={wizardimg}/>
            </Link>
            <Link to="/troops/super-troops/super-dragon">
                <Card image={dragonimg}/>
            </Link>
            <Link to="/troops/super-troops/inferno-dragon">
                <Card image={infernodragonimg}/>
            </Link>
            <Link to="/troops/super-troops/super-miner">
                <Card image={minerimg}/>
            </Link>
            <Link to="/troops/super-troops/super-minion">
                <Card image={minionimg}/>
            </Link>
            <Link to="/troops/super-troops/super-valkyrie">
                <Card image={valkimg}/>
            </Link>
            <Link to="/troops/super-troops/super-witch">
                <Card image={witchimg}/>
            </Link>
            <Link to="/troops/super-troops/ice-hound">
                <Card image={icehoundimg}/>
            </Link>
            <Link to="/troops/super-troops/super-bowler">
                <Card image={bowlerimg}/>
            </Link>
        </div>
    )
}