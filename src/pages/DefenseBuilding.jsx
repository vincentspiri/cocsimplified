import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function DefenseBuilding({ json, images, image = undefined, imageprefix, pagenum = 1 }) {
    const [page, setPage] = useState(1);
    let pageJson = json[page - 1];
    const [level, setLevel] = useState(pageJson.length);
    return (
        <div className='bg-gradient-to-br from-purple-600 to-purple-900 bg-fixed h-screen py-6 overflow-x-hidden'>
            <Link to='/'>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-16 h-16 text-5xl bg-gradient-to-br from-yellow-300 to-yellow-500 text-gray-800 rounded-lg p-2 ml-6 animate-card-enter'
                >
                    <AiOutlineHome />
                </motion.div>
            </Link>
            <div className="w-screen text-center">
                <div className='flex justify-center items-center gap-6 xl:gap-10 my-12'>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='outline-none text-4xl w-14 h-14 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-xl grid place-items-center animate-card-enter'
                        onClick={() => {
                            if (level > 1) {
                                setLevel(level - 1);
                            }
                        }}
                    ><HiMinusSm /></motion.button>
                    <motion.div
                        className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl w-32 h-32 xl:w-72 xl:h-72 grid place-items-center animate-card-enter'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img
                            src={
                                pagenum > 1 ?
                                    images[`${imageprefix + page + level}.webp`] :
                                    image === undefined ?
                                        images[`${imageprefix + level}.webp`] :
                                        image}
                            className='cursor-pointer w-full rounded-3xl p-2'
                            onClick={() => {
                                if (page < pagenum) {
                                    setPage(page + 1);
                                } else {
                                    setPage(1);
                                }
                            }}
                        />
                    </motion.div>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='outline-none text-4xl w-14 h-14 bg-gradient-to-tr from-orange-500 to-orange-600 rounded-xl grid place-items-center animate-card-enter'
                        onClick={() => {
                            if (level < pageJson.length) {
                                setLevel(level + 1);
                            }
                        }}
                    ><HiPlusSm /></motion.button>
                </div>
                <div className='w-screen flex justify-center items-center gap-3 flex-wrap'>
                    {Object.keys(pageJson[1]).map(element => {
                        return (
                            <div className='w-24 h-40 flex-col'>
                                <div className=' my-2 w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl grid place-items-center text-white text-3xl animate-card-enter'>
                                    {element === "Unlocks" ?
                                        pageJson[level - 1][element].toString().toLowerCase() === "miner" ?
                                        <img src={images["bottle.webp"]}/> : 
                                        <img src={images[`${pageJson[level - 1][element].toString().toLowerCase()}.webp`]} />
                                        :
                                        element === "Level" ?
                                            <span contentEditable onBlur={e => {
                                                if (Number(e.target.textContent) && Number(e.target.textContent) <= pageJson.length) {
                                                    setLevel(Number(e.target.textContent))
                                                }
                                            }}>{pageJson[level - 1][element]}</span>
                                            :
                                            <p className='w-full break-all'>{pageJson[level - 1][element]}</p>}
                                </div>
                                <span className='break-word'>{element}</span>
                            </div>
                        )
                    })}
                </div>
                <input type='range' min={1} max={pageJson.length} className="w-9/12 xl:w-2/4 m-12" onChange={e => setLevel(Number(e.target.value))} />
            </div>
        </div>
    )
}