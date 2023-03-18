import { Link } from 'react-router-dom';

import cannonimg from '../../images/defenses/cannon/cannon21.webp';
import archertowerimg from '../../images/defenses/archer-tower/archer-tower21.webp';
import mortarimg from '../../images/defenses/mortar/mortar15.webp';
import airdefenseimg from '../../images/defenses/air-defense/air-defense13.webp';
import wizardtowerimg from '../../images/defenses/wizard-tower/wizard-tower15.webp';
import airsweeperimg from '../../images/defenses/air-sweeper/air-sweeper7.webp';
import hiddenteslaimg from '../../images/defenses/hidden-tesla/tesla13.webp';
import bombtowerimg from '../../images/defenses/bomb-tower/bomb-tower10.webp';
import xbowimg from '../../images/defenses/x-bow/x-bow10.webp';
import infernotowerimg from '../../images/defenses/inferno-tower/inferno19.webp';
import eagleartilleryimg from '../../images/defenses/eagle-artillery/eagle5.webp';
import scattershotimg from '../../images/defenses/scattershot/scattershot3.webp';
import builderhutimg from '../../images/defenses/builder-hut/builder4.webp';
import spelltowerimg from '../../images/defenses/spell-tower/spell3.webp';
import monolithimg from '../../images/defenses/monolith/monolith2.webp';
import townhallimg from '../../images/defenses/town-hall/th45.webp';
import wallsimg from '../../images/defenses/walls/walls16.webp';
import trapsimg from '../../images/defenses/traps/giant-bomb/giant-bomb8.webp';
import Card from '../../components/Card';



export default function Defenses() {
    return(
            <div className="h-screen grid place-items-center grid-flow-row grid-cols-2 gap-5 lg:grid-flow-row lg:grid-cols-6 lg:p-32 md:grid-flow-row md:grid-cols-3 py-12">
                <Link to="/defenses/cannon">
                    <Card image={cannonimg}/>
                </Link>
                <Link to="/defenses/archer-tower">
                    <Card image={archertowerimg}/>
                </Link>
                <Link to="/defenses/mortar">
                    <Card image={mortarimg}/>
                </Link>
                <Link to="/defenses/air-defense">
                    <Card image={airdefenseimg}/>
                </Link>
                <Link to="/defenses/wizard-tower">
                    <Card image={wizardtowerimg}/>
                </Link>
                <Link to="/defenses/air-sweeper">
                    <Card image={airsweeperimg}/>
                </Link>
                <Link to="/defenses/hidden-tesla">
                    <Card image={hiddenteslaimg}/>
                </Link>
                <Link to="/defenses/bomb-tower">
                    <Card image={bombtowerimg}/>
                </Link>
                <Link to="/defenses/x-bow">
                    <Card image={xbowimg}/>
                </Link>
                <Link to="/defenses/inferno-tower">
                    <Card image={infernotowerimg}/>
                </Link>
                <Link to="/defenses/eagle-artillery">
                    <Card image={eagleartilleryimg}/>
                </Link>
                <Link to="/defenses/scattershot">
                    <Card image={scattershotimg}/>
                </Link>
                <Link to="/defenses/builder-hut">
                    <Card image={builderhutimg}/>
                </Link>
                <Link to="/defenses/spell-tower">
                    <Card image={spelltowerimg}/>
                </Link>
                <Link to="/defenses/monolith">
                    <Card image={monolithimg}/>
                </Link>
                <Link to="/defenses/town-hall">
                    <Card image={townhallimg}/>
                </Link>
                <Link to="/defenses/walls">
                    <Card image={wallsimg}/>
                </Link>
                <Link to="/defenses/traps">
                    <Card image={trapsimg}/>
                </Link>
            </div>
    )
}