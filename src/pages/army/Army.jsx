import { Link } from 'react-router-dom';

import armycampimg from '../../images/army/army-camp/camp12.webp';
import barracksimg from '../../images/army/barracks/barracks16.webp';
import darkbarracksimg from '../../images/army/dark-barracks/dark9.webp';
import laboratoryimg from '../../images/army/laboratory/lab13.webp';
import spellfactoryimg from '../../images/army/spell-factory/spell7.webp';
import darkspellfactoryimg from '../../images/army/dark-spell-factory/dark5.webp';
import workshopimg from '../../images/army/workshop/workshop7.webp';
import pethouseimg from '../../images/army/pet-house/pet8.webp';
import Card from '../../components/Card';
import HomeButton from '../../components/HomeButton';

export default function Army() {
    return (
        <div className="h-screen grid place-items-center grid-flow-row grid-cols-2 gap-5 xl:grid-cols-8 xl:p-32 lg:grid-cols-4 lg:p-5 md:grid-cols-4 py-28">
            <HomeButton/>
            <Link to="/army/army-camp">
                <Card image={armycampimg} />
            </Link>
            <Link to="/army/barracks">
                <Card image={barracksimg} />
            </Link>
            <Link to="/army/dark-barracks">
                <Card image={darkbarracksimg} />
            </Link>
            <Link to="/army/laboratory">
                <Card image={laboratoryimg} />
            </Link>
            <Link to="/army/spell-factory">
                <Card image={spellfactoryimg} />
            </Link>
            <Link to="/army/dark-spell-factory">
                <Card image={darkspellfactoryimg} />
            </Link>
            <Link to="/army/workshop">
                <Card image={workshopimg} />
            </Link>
            <Link to="/army/pet-house">
                <Card image={pethouseimg} />
            </Link>
        </div>
    )
}