"use client"
import { useState } from "react";
import Image from "next/image";
import Modal from 'react-modal';
import { IoCloseSharp } from "react-icons/io5";
import PizzaDetails from "./PizzaDetails"

Modal.setAppElement('body')

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
}

const Pizza = ({ pizza }) => {
  const [modal, setModal] = useState(false)

  const openModel = () => {
    setModal(true)
  }

  const closeModel = () => {
    setModal(false)
  }

  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
      <Image onClick={openModel} className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8" width={270} height={270} src={pizza.image} alt={pizza.name} priority={1} />
      <div>
        <div onClick={openModel} className="text-xl font-bangers mb-3 capitalize cursor-pointer">
          {pizza.name}
        </div>
      </div>
      <div className="text-sm font-medium min-h-[60px] mb-6">
        {pizza.description}
      </div>

      <div className="mb-6 flex items-center justify-between">
        <div className="hidden lg:flex tetx-xl font-semibold">starts at {pizza.priceSm}</div>
        <button onClick={openModel} className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm">Choose</button>

        <button onClick={openModel} className="btn btn-sm lg:hidden text-sm px-3 gradient">Starts at {pizza.priceSm}</button>
      </div>
      {modal &&
        <Modal isOpen={modal} style={modalStyles} onRequestClose={closeModel} contentLabel='Pizza Modal'
          className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
        >
          <div className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer" onClick={closeModel}>
            <IoCloseSharp className="text-4xl text-orange" />
          </div>
          <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />
        </Modal>}
    </div>
  )
};

export default Pizza;