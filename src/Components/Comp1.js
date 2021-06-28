import React, {useEffect, useState} from 'react';

function Comp1({item, currentTime, sellEgg, deleteEgg, changeTo1, changeTo2, changeTo3}) {

    // const [singleEgg, setSingleEgg] = useState({})

    // useEffect(() => {
    //             setSingleEgg(item)
    // }, [])



    useEffect(() => {
        const timeoutID = window.setInterval(() => {
            checkStatus()
        }, 1000);

        return () => window.clearInterval(timeoutID );
    }, []);





    function checkStatus() {

        if(item) {

            if (Date.now() - item.timeStamp > 3000 && item.randomNum === 0) {
                deleteEgg(item.id)
            }
            if (Date.now() - item.timeStamp > 3000 && item.randomNum === 1) {
                // console.log("first")
                changeTo1(item.id)
            }
            // else {console.log("not first")}
            if (Date.now() - item.timeStamp > 6000) {
                // console.log("second")
                changeTo2(item.id)
            }
            // else {console.log("not second")}
            if (Date.now() - item.timeStamp > 9000) {
                // console.log("third")
                changeTo3(item.id)
            }
            // else {console.log("not third")}
            if (Date.now() - item.timeStamp > 12000) {
                // console.log("delete")
                deleteEgg(item.id)
            }
            // else {console.log("not delete")}
        }
    }



    function sellEggFun() {
        sellEgg(item.id)
    }

    return (
        <div className="eggHolder" key={item.id}>
            <div>{item.id}</div>
            {/*<div>{item.status}</div>*/}
            {item.status === 0 ? <img
                src="https://www.pinclipart.com/picdir/middle/138-1389645_black-and-white-download-egg-line-drawing-at.png"
                alt="egg"/> : null}
            {item.status === 1 ? <img
                src="https://www.jing.fm/clipimg/detail/318-3180512_chick-bird-baby-small-fuzzy-farm-easter-spring.png"
                alt="small"/> : null}
            {item.status === 2 ? <img
                src="https://thumbs.dreamstime.com/b/chicken-sketch-vector-farm-eggs-white-background-illustration-120824656.jpg"
                alt="big"/> : null}
            {item.status === 3 ? <img
                src="https://thumbs.dreamstime.com/b/chicken-farm-eggs-sketch-white-background-vector-illustration-chicken-eggs-sketch-vector-120824651.jpg"
                alt="big"/> : null}
            {/*<div>{item.timeStamp}</div>*/}
            {/*<div>{currentTime}</div>*/}
            <div>{((currentTime) / 1000).toFixed(0) - ((item.timeStamp) / 1000).toFixed(0)}</div>
            {item.price > 0 ? <button className="btn" onClick={sellEggFun}>Sell For {item.price}$</button> : <div className="empty"> </div>}

        </div>
    );
}

export default Comp1;


// if(currentTime-eggs[i].timeStamp>3000 && eggs[i].randomNum === 0) {
//     let tempEggs = eggs.splice(i,1)
//     setEggs(tempEggs)
// }
// if(currentTime-eggs[i].timeStamp>3000 && eggs[i].randomNum === 1) {
//     eggs[i].status = 1
//     eggs[i].price = 2
// }