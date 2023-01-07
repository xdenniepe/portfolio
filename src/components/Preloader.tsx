import React, { useEffect, useState } from "react";
import Goku1 from '../assets/goku1.png';

// TODO: Change Goku1

const Preloader: React.FC = () => {
    const quotes = [
        { quote: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
        { quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
        { quote: "It's unbelievable how much you don't know about the game you've been playing all your life.", author: 'Mickey Mantel' },
    ];
    const random = Math.floor(Math.random() * quotes.length);
    const [show, setShow] = useState(true);

    useEffect(() => {
        console.log("current status: ", show)
        setTimeout(() => {
            setShow(false);
        }, 2000);
    }, []);


    return (
        <div className={`preloader space-y-2 ${show ? "" : "hidden invisible"}`}>
            {/* <div className="w-32 text-center goku-bg">
                <img src={Goku1} alt="Preloader_Image" className=" invert"></img>
            </div> */}
            <div className="text-gray-200 font-light max-w-[400px]">“{quotes[random].quote}”</div>
            <div className="text-sky-400 font-light max-w-[400px] text-sm">
                {' '}
                - {quotes[random].author}
            </div>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
export default Preloader;