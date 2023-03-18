import { Link } from "react-router-dom";
import Card from "../components/Card";
import infernotower from '../images/defenses/inferno-tower/inferno19.webp';
import goldstorage from '../images/resources/gold-storage/gold16.webp';
import armycamp from '../images/army/army-camp/camp12.webp';
import barbarianimg from '../images/troops/elixer-troops/barbarian.webp';

export default function Home() {
    return (
        <div className="h-screen flex justify-center items-center gap-8 flex-wrap py-64">
            <Link to="/defenses">
                <Card image={infernotower} />
            </Link>
            <Link to="/resources">
                <Card image={goldstorage} />
            </Link>
            <Link to="/army">
                <Card image={armycamp} />
            </Link>
            <Link to="/troops">
                <Card image={barbarianimg} />
            </Link>
        </div>
    )
}