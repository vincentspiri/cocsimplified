import { Link } from "react-router-dom";

import barbariankingimg from '../../images/troops/heroes/barbarian-king.webp';
import archerqueenimg from '../../images/troops/heroes/archer-queen.webp';
import grandwardenimg from '../../images/troops/heroes/grand-warden.webp';
import royalchampionimg from '../../images/troops/heroes/royal-champion.webp';
import Card from "../../components/Card";
import HomeButton from "../../components/HomeButton";

export default function Heroes() {
    return (
        <div className="h-screen flex justify-center items-center gap-12 flex-wrap py-12">
            <HomeButton/>
            <Link to="/troops/heroes/barbarian-king">
                <Card image={barbariankingimg}/>
            </Link>
            <Link to="/troops/heroes/archer-queen">
                <Card image={archerqueenimg}/>
            </Link>
            <Link to="/troops/heroes/grand-warden">
                <Card image={grandwardenimg}/>
            </Link>
            <Link to="/troops/heroes/royal-champion">
                <Card image={royalchampionimg}/>
            </Link>
        </div>
    )
}