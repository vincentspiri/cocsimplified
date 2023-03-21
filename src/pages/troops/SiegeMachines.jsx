import { Link } from "react-router-dom";

import wallwreckerimg from '../../images/troops/siege-machines/wall-wrecker.webp';
import battleblimpimg from '../../images/troops/siege-machines/battle-blimp.webp';
import stoneslammerimg from '../../images/troops/siege-machines/stone-slammer.webp';
import siegebarracksimg from '../../images/troops/siege-machines/siege-barracks.webp';
import loglauncherimg from '../../images/troops/siege-machines/log-launcher.webp';
import flakeflingerimg from '../../images/troops/siege-machines/flame-flinger.webp';
import battledrillimg from '../../images/troops/siege-machines/battle-drill.webp';
import Card from "../../components/Card";
import HomeButton from "../../components/HomeButton";

export default function SiegeMachines() {
    return (
        <div className="h-screen grid place-items-center grid-flow-row grid-cols-2 gap-5 xl:grid-cols-7 xl:p-32 lg:grid-cols-4 lg:p-5 md:grid-cols-4 py-28">
            <HomeButton/>
            <Link to="/troops/siege-machines/wall-wrecker">
                <Card image={wallwreckerimg}/>
            </Link>
            <Link to="/troops/siege-machines/battle-blimp">
                <Card image={battleblimpimg}/>
            </Link>
            <Link to="/troops/siege-machines/stone-slammer">
                <Card image={stoneslammerimg}/>
            </Link>
            <Link to="/troops/siege-machines/siege-barracks">
                <Card image={siegebarracksimg}/>
            </Link>
            <Link to="/troops/siege-machines/log-launcher">
                <Card image={loglauncherimg}/>
            </Link>
            <Link to="/troops/siege-machines/flame-flinger">
                <Card image={flakeflingerimg}/>
            </Link>
            <Link to="/troops/siege-machines/battle-drill">
                <Card image={battledrillimg}/>
            </Link>
        </div>
    )
}