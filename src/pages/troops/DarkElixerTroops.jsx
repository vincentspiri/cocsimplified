import { Link } from 'react-router-dom';

import minionimg from '../../images/troops/dark-elixer-troops/minion.webp';
import hogriderimg from '../../images/troops/dark-elixer-troops/hog-rider.webp';
import valkyrieimg from '../../images/troops/dark-elixer-troops/valkyrie.webp';
import golemimg from '../../images/troops/dark-elixer-troops/golem.webp';
import witchimg from '../../images/troops/dark-elixer-troops/witch.webp';
import lavahoundimg from '../../images/troops/dark-elixer-troops/lava-hound.webp';
import bowlerimg from '../../images/troops/dark-elixer-troops/bowler.webp';
import icegolemimg from '../../images/troops/dark-elixer-troops/ice-golem.webp';
import headhunterimg from '../../images/troops/dark-elixer-troops/headhunter.webp';
import Card from '../../components/Card';
import HomeButton from '../../components/HomeButton';

export default function DarkElixerTroops() {
    return (
        <div className="h-screen grid place-items-center grid-flow-row grid-cols-2 gap-5 xl:grid-cols-3 xl:p-32 lg:grid-cols-3 lg:p-5 md:grid-cols-3 py-28">
            <HomeButton/>
            <Link to="/troops/dark-elixer-troops/minion">
                <Card image={minionimg}/>
            </Link>
            <Link to="/troops/dark-elixer-troops/hog-rider">
                <Card image={hogriderimg}/>
            </Link>
            <Link to="/troops/dark-elixer-troops/valkyrie">
                <Card image={valkyrieimg}/>
            </Link>
            <Link to="/troops/dark-elixer-troops/golem">
                <Card image={golemimg}/>
            </Link>
            <Link to="/troops/dark-elixer-troops/witch">
                <Card image={witchimg}/>
            </Link>
            <Link to="/troops/dark-elixer-troops/lava-hound">
                <Card image={lavahoundimg}/>
            </Link>
            <Link to="/troops/dark-elixer-troops/bowler">
                <Card image={bowlerimg}/>
            </Link>
            <Link to="/troops/dark-elixer-troops/ice-golem">
                <Card image={icegolemimg}/>
            </Link>
            <Link to="/troops/dark-elixer-troops/headhunter">
                <Card image={headhunterimg}/>
            </Link>
        </div>
    )
}