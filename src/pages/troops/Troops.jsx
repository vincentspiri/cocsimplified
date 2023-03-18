import { Link } from 'react-router-dom';

import barbarianimg from '../../images/troops/elixer-troops/barbarian.webp';
import minionimg from '../../images/troops/dark-elixer-troops/minion.webp';
import lassiimg from '../../images/troops/pets/lassi.webp';
import barbariankingimg from '../../images/troops/heroes/barbarian-king.webp';
import lightningspellimg from '../../images/troops/elixer-spells/lightning.webp';
import poisonspellimg from '../../images/troops/dark-elixer-spells/poison.webp';
import wallwreckerimg from '../../images/troops/siege-machines/wall-wrecker.webp';
import superbarbarianimg from '../../images/troops/super-troops/barbarian.webp';
import Card from '../../components/Card';

export default function Troops() {
    return (
        <div className="h-screen grid place-items-center grid-flow-row grid-cols-2 gap-5 xl:grid-cols-4 xl:p-32 lg:grid-cols-4 lg:p-5 md:grid-cols-4 py-12">
            <Link to="/troops/elixer-troops">
                <Card image={barbarianimg} />
            </Link>
            <Link to="/troops/dark-elixer-troops">
                <Card image={minionimg} />
            </Link>
            <Link to="/troops/pets">
                <Card image={lassiimg} />
            </Link>
            <Link to="/troops/heroes">
                <Card image={barbariankingimg} />
            </Link>
            <Link to="/troops/elixer-spells">
                <Card image={lightningspellimg} />
            </Link>
            <Link to="/troops/dark-elixer-spells">
                <Card image={poisonspellimg} />
            </Link>
            <Link to="/troops/siege-machines">
                <Card image={wallwreckerimg} />
            </Link>
            <Link to="/troops/super-troops">
                <Card image={superbarbarianimg} />
            </Link>
        </div>
    )
}