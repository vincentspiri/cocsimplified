import { Link } from 'react-router-dom';

import bombimg from '../../images/defenses/traps/bomb/bomb11.webp';
import springtrapimg from '../../images/defenses/traps/spring-trap/trap5.webp';
import giantbombimg from '../../images/defenses/traps/giant-bomb/giant-bomb8.webp';
import airbombimg from '../../images/defenses/traps/air-bomb/bomb9.webp';
import seekingairmineimg from '../../images/defenses/traps/seeking-air-mine/bomb4.webp';
import skeletontrapimg from '../../images/defenses/traps/skeleton-trap/skeleton4.webp';
import tornadotrapimg from '../../images/defenses/traps/tornado-trap/tornado3.webp';
import Card from '../../components/Card';

export default function Traps() {
    return (
        <div className="h-screen grid place-items-center grid-flow-row grid-cols-2 gap-5 xl:grid-cols-7 xl:p-32 lg:grid-cols-4 lg:p-5 md:grid-cols-4 py-12">
            <Link to="/defenses/traps/bomb">
                <Card image={bombimg} />
            </Link>
            <Link to="/defenses/traps/spring-trap">
                <Card image={springtrapimg}/>
            </Link>
            <Link to="/defenses/traps/giant-bomb">
                <Card image={giantbombimg}/>
            </Link>
            <Link to="/defenses/traps/air-bomb">
                <Card image={airbombimg}/>
            </Link>
            <Link to="/defenses/traps/seeking-air-mine">
                <Card image={seekingairmineimg}/>
            </Link>
            <Link to="/defenses/traps/skeleton-trap">
                <Card image={skeletontrapimg}/>
            </Link>
            <Link to="/defenses/traps/tornado-trap">
                <Card image={tornadotrapimg}/>
            </Link>
        </div>
    )
}