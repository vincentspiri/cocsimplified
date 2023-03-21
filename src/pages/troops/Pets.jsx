import { Link } from "react-router-dom";

import lassiimg from '../../images/troops/pets/lassi.webp';
import electroowlimg from '../../images/troops/pets/electro-owl.webp';
import mightyyakimg from '../../images/troops/pets/mighty-yak.webp';
import unicornimg from '../../images/troops/pets/unicorn.webp';
import frostyimg from '../../images/troops/pets/frosty.webp';
import diggyimg from '../../images/troops/pets/diggy.webp';
import poisonlizardimg from '../../images/troops/pets/poison-lizard.webp';
import phoeniximg from '../../images/troops/pets/phoenix.webp';
import Card from "../../components/Card";
import HomeButton from "../../components/HomeButton";

export default function Pets() {
    return (
        <div className="h-screen grid place-items-center grid-flow-row grid-cols-2 gap-5 xl:grid-cols-4 xl:p-32 lg:grid-cols-4 lg:p-5 md:grid-cols-4 py-28">
            <HomeButton/>
            <Link to="/troops/pets/lassi">
                <Card image={lassiimg}/>
            </Link>
            <Link to="/troops/pets/electro-owl">
                <Card image={electroowlimg}/>
            </Link>
            <Link to="/troops/pets/mighty-yak">
                <Card image={mightyyakimg}/>
            </Link>
            <Link to="/troops/pets/unicorn">
                <Card image={unicornimg}/>
            </Link>
            <Link to="/troops/pets/frosty">
                <Card image={frostyimg}/>
            </Link>
            <Link to="/troops/pets/diggy">
                <Card image={diggyimg}/>
            </Link>
            <Link to="/troops/pets/poison-lizard">
                <Card image={poisonlizardimg}/>
            </Link>
            <Link to="/troops/pets/phoenix">
                <Card image={phoeniximg}/>
            </Link>
        </div>
    )
}