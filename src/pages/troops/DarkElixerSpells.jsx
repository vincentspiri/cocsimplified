import { Link } from "react-router-dom";

import poisonimg from '../../images/troops/dark-elixer-spells/poison.webp';
import earthquakeimg from '../../images/troops/dark-elixer-spells/earth-quake.webp';
import hasteimg from '../../images/troops/dark-elixer-spells/haste.webp';
import skeletonimg from '../../images/troops/dark-elixer-spells/skeleton.webp';
import batimg from '../../images/troops/dark-elixer-spells/bat.webp';
import Card from "../../components/Card";
import HomeButton from "../../components/HomeButton";

export default function DarkElixerSpells() {
    return (
        <div className="h-screen grid place-items-center grid-flow-row grid-cols-2 gap-5 xl:grid-cols-5 xl:p-32 lg:grid-cols-5 lg:p-5 md:grid-cols-5 py-28">
            <HomeButton/>
            <Link to="/troops/dark-elixer-spells/poison-spell">
                <Card image={poisonimg}/>
            </Link>
            <Link to="/troops/dark-elixer-spells/earth-quake-spell">
                <Card image={earthquakeimg}/>
            </Link>
            <Link to="/troops/dark-elixer-spells/haste-spell">
                <Card image={hasteimg}/>
            </Link>
            <Link to="/troops/dark-elixer-spells/skeleton-spell">
                <Card image={skeletonimg}/>
            </Link>
            <Link to="/troops/dark-elixer-spells/bat-spell">
                <Card image={batimg}/>
            </Link>
        </div>
    )
}