import { Link } from "react-router-dom";

import lightningimg from '../../images/troops/elixer-spells/lightning.webp';
import healingimg from '../../images/troops/elixer-spells/healing.webp';
import rageimg from '../../images/troops/elixer-spells/rage.webp';
import jumpimg from '../../images/troops/elixer-spells/jump.webp';
import freezeimg from '../../images/troops/elixer-spells/freeze.webp';
import cloneimg from '../../images/troops/elixer-spells/clone.webp';
import invisimg from '../../images/troops/elixer-spells/invisibility.webp';
import recallimg from '../../images/troops/elixer-spells/recall.webp';
import Card from "../../components/Card";
import HomeButton from "../../components/HomeButton";

export default function ElixerSpells() {
    return (
        <div className="h-screen grid place-items-center grid-flow-row grid-cols-2 gap-5 xl:grid-cols-4 xl:p-32 lg:grid-cols-4 lg:p-5 md:grid-cols-4 py-28">
            <HomeButton/>
            <Link to="/troops/elixer-spells/lightning-spell">
                <Card image={lightningimg}/>
            </Link>
            <Link to="/troops/elixer-spells/healing-spell">
                <Card image={healingimg}/>
            </Link>
            <Link to="/troops/elixer-spells/rage-spell">
                <Card image={rageimg}/>
            </Link>
            <Link to="/troops/elixer-spells/jump-spell">
                <Card image={jumpimg}/>
            </Link>
            <Link to="/troops/elixer-spells/freeze-spell">
                <Card image={freezeimg}/>
            </Link>
            <Link to="/troops/elixer-spells/clone-spell">
                <Card image={cloneimg}/>
            </Link>
            <Link to="/troops/elixer-spells/invisibility-spell">
                <Card image={invisimg}/>
            </Link>
            <Link to="/troops/elixer-spells/recall-spell">
                <Card image={recallimg}/>
            </Link>
        </div>
    )
}