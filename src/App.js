import './App.css';
import React, {useEffect, useState} from "react";
import nextId from "react-id-generator";
import Comp1 from "./Components/Comp1";


function App() {
    const [eggs, setEggs] = useState([])
    const [hatcheryLength, setHatcheryLength] = useState(5)
    const [hatcheryPrice, setHatcheryPrice] = useState(100)
    const [wallet, setWallet] = useState(500)
    const [currentTime, setCurrentTime] = useState(Date.now())

    useEffect(()=> {
        setInterval(()=>{
            setCurrentTime(Date.now())
        },1000)
    },[])

    function buyOneEgg(){
         if(wallet>0 && eggs.length<hatcheryLength){
            let tempEggs = eggs
            setWallet(wallet-1)
            const tempId = nextId("egg-id-");
            let randomNum = Math.floor(Math.random()*2)
            tempEggs.push({
                id: tempId,
                status: 0,
                timeStamp: Date.now(),
                price: 0,
                randomNum: randomNum,
            })
            setEggs(tempEggs)
        }

    }

    function buyMoreSpace(){
        if(wallet>hatcheryPrice){
            setWallet(wallet-hatcheryPrice)
            setHatcheryLength(hatcheryLength+5)
            setHatcheryPrice(hatcheryPrice+50)

        }

    }

    function sellEgg(id){
        let tempEggs = eggs
        let index = tempEggs.findIndex(x=> x.id === id)
        if(tempEggs[index]){
            setWallet(wallet+tempEggs[index].price)
            tempEggs.splice(index,1)
            setEggs(tempEggs)

        }



    }

    function changeTo1(id){
        let tempEggs = eggs
        let index = tempEggs.findIndex(x=> x.id === id)

        if(tempEggs[index]){
            tempEggs[index].status = 1
            tempEggs[index].price = 2
            setEggs(tempEggs)

        }

    }
    function changeTo2(id){
        let tempEggs = eggs
        let index = tempEggs.findIndex(x=> x.id === id)

        if(tempEggs[index]){
            tempEggs[index].status = 2
            tempEggs[index].price = 4
            setEggs(tempEggs)

        }

    }
    function changeTo3(id){
        let tempEggs = eggs
        let index = tempEggs.findIndex(x=> x.id === id)
        if(tempEggs[index]){
            tempEggs[index].status = 3
            tempEggs[index].price = 6
            setEggs(tempEggs)

        }

    }



    function deleteEgg(id){
        let tempEggs = eggs
        let index = tempEggs.findIndex(x=> x.id === id)
        if(tempEggs[index]){
            tempEggs.splice(index,1)
            setEggs(tempEggs)

        }

    }




  return (
    <div className="App">
        <div className="backGround">
            <img src="https://image.freepik.com/free-vector/sketch-set-hen-chick-eggs-hand-drawn-realistic-chicken-ink-engraved-graphic-illustration-little-bird-chicken-eggs_152222-172.jpg" alt="backGround"/>
            <img src="https://image.freepik.com/free-vector/sketch-set-hen-chick-eggs-hand-drawn-realistic-chicken-ink-engraved-graphic-illustration-little-bird-chicken-eggs_152222-172.jpg" alt="backGround"/>

        </div>
        <div className="content">
            <div className="box">
                <div className="boxBackGround"> </div>

                <div className="twoHolder">

                    <div className="column">
                        <h4>Shop</h4>
                        <div className="block1" title="One Egg" onClick={buyOneEgg}>Buy One Egg For 1 $</div>
                        <div className="block1" title="More Space In A Hatchery" onClick={buyMoreSpace}>Buy More Space In a Hatchery For {hatcheryPrice} $</div>
                    </div>
                    <div className="column">
                        <h4>Hatchery Length</h4>
                        <div className="block1">{hatcheryLength}</div>

                    </div>
                    <div className="column">
                        <h4>Wallet</h4>
                        <div className="block1">{wallet} $</div>

                    </div>
                </div>


            </div>
            <div>Timestamp: {currentTime}</div>
            <div className="box2">
                <div className="boxBackGround"> </div>
                <h4>Hatchery ({eggs.length})</h4>
                <div className="hatcheryHolder">

                    <div className="hatcheryBlock10">
                        {eggs.map(item =>

                            <Comp1 key={item.id} item={item} currentTime={currentTime} sellEgg={sellEgg} changeTo1={changeTo1} changeTo2={changeTo2} changeTo3={changeTo3}deleteEgg={deleteEgg}/>

                        )}

                    </div>


                </div>
            </div>
        </div>


    </div>
  );
}

export default App;















// function checkStatus(){
//     // console.log("status checked")
//     for (let i = 0; i < eggs.length; i++) {
//         // if(currentTime-eggs[i].timeStamp>3000 && eggs[i].randomNum === 0) {
//         //     let tempEggs = eggs.splice(i,1)
//         //     setEggs(tempEggs)
//         // }
//         // if(currentTime-eggs[i].timeStamp>3000 && eggs[i].randomNum === 1) {
//         //     eggs[i].status = 1
//         //     eggs[i].price = 2
//         // }
//         if(currentTime-eggs[i].timeStamp>3000) {
//             eggs[i].status = 1
//             eggs[i].price = 2
//         }
//         if(currentTime-eggs[i].timeStamp>6000){
//             eggs[i].status = 2
//             eggs[i].price = 4
//         }
//         if(currentTime-eggs[i].timeStamp>9000){
//             eggs[i].status = 3
//             eggs[i].price = 6
//         }
//         if(currentTime-eggs[i].timeStamp>12000){
//             let tempEggs = eggs.splice(i,1)
//             setEggs(tempEggs)
//         }
//     }
// }

// setInterval(()=> {
//     checkStatus()
// },100000)

// checkStatus()

// setTimeout(()=> {
//     checkStatus()
// },1000)

// useEffect(()=> {
//     checkStatus()
//
// },[currentTime])

// <div className="eggHolder" key={item.id}>
//     <div>{item.id}</div>
//     <div>{item.status}</div>
//     {item.status===0? <img src="https://www.pinclipart.com/picdir/middle/138-1389645_black-and-white-download-egg-line-drawing-at.png" alt="egg"/>:null}
//     {item.status===1? <img src="https://www.jing.fm/clipimg/detail/318-3180512_chick-bird-baby-small-fuzzy-farm-easter-spring.png" alt="small"/>:null}
//     {item.status===2? <img src="https://thumbs.dreamstime.com/b/chicken-sketch-vector-farm-eggs-white-background-illustration-120824656.jpg" alt="big"/>:null}
//     {item.status===3? <img src="https://thumbs.dreamstime.com/b/chicken-farm-eggs-sketch-white-background-vector-illustration-chicken-eggs-sketch-vector-120824651.jpg" alt="big"/>:null}
//     <div>{item.timeStamp}</div>
//     <div>{((currentTime)/1000).toFixed(0)-((item.timeStamp)/1000).toFixed(0)}</div>
//     {item.price>0? <button onClick={()=>sellEgg(item.id)}>Sell For {item.price}$</button>:null}
//
// </div>