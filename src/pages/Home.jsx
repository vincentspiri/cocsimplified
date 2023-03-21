import { Link } from "react-router-dom";
import Card from "../components/Card";
import buildingJson from "./buildings.json";
import { useState } from "react";

export default function Home() {
    const buildingImage = importImages(require.context('../images/top', false, /\.webp$/));
    const [searchBuilding, setSearchBuilding] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    function importImages(r) {
        let images = {};
        r.keys().map(item => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    function DefaultCards() {
        return (
            <div className="absolute w-screen h-full flex justify-center items-center gap-8 flex-wrap py-32">
                <Link to="/defenses">
                    <Card image={buildingImage['inferno-tower.webp']} />
                </Link>
                <Link to="/resources">
                    <Card image={buildingImage['gold-storage.webp']} />
                </Link>
                <Link to="/army">
                    <Card image={buildingImage['army-camp.webp']} />
                </Link>
                <Link to="/troops">
                    <Card image={buildingImage['barbarian.webp']} />
                </Link>
            </div>
        )
    }

    function SearchCards() {
        return (
            <div className="absolute w-screen h-full flex justify-center flex-wrap gap-8 py-32 mt-12 lg:mt-40 lg:px-40">
                {
                    searchBuilding.filter(element => element.search(searchTerm) > -1)
                        .map((e) => {
                            if (e === "miner") {
                                return (
                                <Link to="/troops/elixer-troops/miner">
                                    <Card image={buildingImage[`bottle.webp`]} />
                                </Link>)
                            }else{
                                return (
                                    <Link to={buildingJson[`${e}`]}>
                                        <Card image={buildingImage[`${e.replace(/\s/g, "-")}.webp`]} />
                                    </Link>
                                )
                            }
                        })
                }
            </div>
        )
    }

    function blurTimeout() {
        setTimeout(() => {
            setSearchBuilding([]);
        }, 150)
    }

    return (
        <div className="relative h-screen w-screen">
            <div className="absolute top-10 lg:top-40 z-10 flex justify-center w-screen">
                <form className="relative w-11/12 lg:w-1/4 h-10 flex items-center [padding-inline: 0.8rem]">
                    <input
                        placeholder="Search for building"
                        required=""
                        type="text"
                        onChange={(e) => {
                            setSearchTerm(e.target.value.toLowerCase());
                        }}
                        onFocus={() => {
                            setSearchBuilding(Object.keys(buildingJson));
                        }}
                        onBlur={() => {
                            blurTimeout();
                        }}
                        className="[transition: border-radius 0.5 ease] pl-4 bg-white w-full h-full rounded-3xl 
                        outline-none text-lg focus:drop-shadow-md origin-fifty"
                    />
                    <div className="border-none bg-none text-cyan-800 absolute right-4">
                        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </form>
            </div>
            {
                searchTerm.length > 0 ?
                    <SearchCards /> :
                    <DefaultCards />
            }
        </div>
    )
}