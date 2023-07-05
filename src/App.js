import React from 'react'
import "./App.css"
import img1 from "./banana.png"
import img2 from "./apple.png"
import img3 from "./peach.png"



export default function App() {
  const forCancel = (e) => {
    let elcha = document.querySelector("#deleteBtn")
    console.log(elcha.classList.toggle("hidden"));


  }

  const price = (e) => {
    if (e.target.textContent === "show price") {
      e.target.transition = "all 4s easy"
      e.target.textContent = 5 + "$"
    } else if (e.target.textContent === "15$") {
      e.target.textContent = "show price"
      e.target.transition = "all 4s easy"
    }

  }


  const priceone = (e) => {
    if (e.target.textContent === "show price") {
      e.target.transition = "all 4s easy"
      e.target.textContent = 7 + "$"
    } else if (e.target.textContent === "25$") {
      e.target.textContent = "show price"
      e.target.transition = "all 4s easy"
    }

  }


  const pricetwo = (e) => {
    if (e.target.textContent === "show price") {
      e.target.transition = "all 4s easy"
      e.target.textContent = 10 + "$"
    } else if (e.target.textContent === "35$") {
      e.target.textContent = "show price"
      e.target.transition = "all 4s easy"
    }

  }
  const delFun = (e) => {
    let elcha = document.querySelector("#deleteBtn")
    elcha.classList.toggle("hidden")
    // let card = document.querySelectorAll("#card-contain")
    let addi = document.querySelector(".addi")
    let one = document.querySelector(".he")
    let two = document.querySelector(".hetwo")
    let three = document.querySelector(".hethree")
    if (addi.textContent === "banana") {
      return one.remove()
    } else if (addi.textContent === "apple") {
      return two.remove()
    } else if (addi.textContent === "peach") {
      return three.remove()
    }


  }


  const delFunone = (e) => {
    let elcha = document.querySelector("#deleteBtn")
    console.log(elcha.classList.toggle("hidden"));
    let addi = document.querySelector(".addi")


    addi.textContent = "banana"
  }

  const delFuntwo = (e) => {
    let elcha = document.querySelector("#deleteBtn")
    console.log(elcha.classList.toggle("hidden"));
    let addi = document.querySelector(".addi")
    addi.textContent = "apple"
  }

  const delFunthree = (e) => {
    let elcha = document.querySelector("#deleteBtn")
    console.log(elcha.classList.toggle("hidden"));
    let addi = document.querySelector(".addi")
    addi.textContent = "peach"
  }

  return (
    <>


      <div className="max-w-screen-xl mx-auto ">
        <h1 className='font-bold text-4xl capitalize my-5'>java script пратиника</h1>
        <div className="flex items-center gap-28 ">

          <div className=" w-[20%] border-solid border-red-600 border-2 p-4 he" id='card-contain'>
          <img src={img1} alt="" style={{height: "170px"}}/>

            <h3 className="font-bold capitalize">
              banana
            </h3>
            <div className="flex ites-center gap-2 mt-5 ml-3" >

              <button className="border-none bg-blue-500 text-white w-28 h-8 rounded-md capitalize" onClick={price}>
                show price
              </button>
              <button className="border-none bg-red-500 text-white w-20 h-8 rounded-md capitalize" onClick={delFunone}>
                delete
              </button>

            </div>
          </div>

          <div className=" w-[20%] border-solid border-red-600 border-2 p-4  hetwo" id='card-contain'>
          <img src={img2} alt="" style={{height: "170px"}}/>

            <h3 className="font-bold capitalize">
              apple
            </h3>
            <div className="flex ites-center gap-2 mt-5 ml-3" >

              <button className="border-none bg-blue-500 text-white w-28 h-8 rounded-md capitalize" onClick={priceone}>
                show price
              </button>
              <button className="border-none bg-red-500 text-white w-20 h-8 rounded-md capitalize" onClick={delFuntwo}>
                delete
              </button>

            </div>
          </div>

          <div className=" w-[20%] border-solid border-red-600 border-2  p-4 hethree" id='card-contain'>
          <img src={img3} alt="" style={{height: "170px"}}/>

            <h3 className="font-bold capitalize">
              peach
            </h3>
            <div className="flex ites-center gap-2 mt-5 ml-3" >

              <button className="border-none bg-blue-500 text-white w-28 h-8 rounded-md capitalize" onClick={pricetwo}>
                show price
              </button>
              <button className="border-none bg-red-500 text-white w-20 h-8 rounded-md capitalize" onClick={delFunthree}>
                delete
              </button>

            </div>
          </div>

        </div>
      </div>


      <div className='hidden' id='deleteBtn'>

        <div className=" h-[100vh] w-[100%] absolute top-[0]  z-0 blur-lg">
        </div>

        <div className="bg-white rounded-md p-2 border-solid border-2 z-10 border-gray-600 w-[30%] blur-none absolute left-[33%] top-[20%]">

          <h3 className="font-bold">
            Really do you want to delete it ?
            <br />
            It name is : <span className='addi'></span>

          </h3>
          <div className="flex">

            <button className="border-none bg-gray-500 text-white w-20 h-8 rounded-md capitalize mt-28 ml-[10%]" onClick={forCancel} >
              cancel
            </button>
            <button className="border-none bg-red-500 text-white w-20 h-8 rounded-md capitalize mt-28 ml-[50%]" onClick={delFun} >
              delete
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
