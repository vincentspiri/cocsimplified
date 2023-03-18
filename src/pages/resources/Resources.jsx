import { Link } from "react-router-dom";

import townhallimg from '../../images/resources/town-hall/th15.webp';
import goldmineimg from '../../images/resources/gold-mine/mine15.webp';
import goldstorageimg from '../../images/resources/gold-storage/gold16.webp';
import elixercollectorimg from '../../images/resources/elixer-collector/elixer15.webp';
import elixerstorageimg from '../../images/resources/elixer-storage/elixer16.webp';
import darkelixerdrillimg from '../../images/resources/dark-elixer-drill/dark9.webp';
import darkelixerstorageimg from '../../images/resources/dark-elixer-storage/dark10.webp';
import clancastleimg from '../../images/resources/clan-castle/clan11.webp';
import Card from "../../components/Card";

export default function Resources() {
    return (
        <div className="h-screen grid place-items-center grid-flow-row grid-cols-2 gap-5 xl:grid-cols-8 lg:grid-cols-4 lg:p-5 md:grid-cols-4 py-12">
            <Link to="/resources/town-hall">
                <Card image={townhallimg}/>
            </Link>
            <Link to="/resources/gold-mine">
                <Card image={goldmineimg}/>
            </Link>
            <Link to="/resources/gold-storage">
                <Card image={goldstorageimg}/>
            </Link>
            <Link to="/resources/elixer-collector">
                <Card image={elixercollectorimg}/>
            </Link>
            <Link to="/resources/elixer-storage">
                <Card image={elixerstorageimg}/>
            </Link>
            <Link to="/resources/dark-elixer-drill">
                <Card image={darkelixerdrillimg}/>
            </Link>
            <Link to="/resources/dark-elixer-storage">
                <Card image={darkelixerstorageimg}/>
            </Link>
            <Link to="/resources/clan-castle">
                <Card image={clancastleimg}/>
            </Link>
        </div>
    )
}