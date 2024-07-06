import { useEffect, useState } from "react";
import Image from "next/image";
import { IoMdCheckmark } from 'react-icons/io'

const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {
  const [ischecked, setIsChecked] = useState(false)

  const handleTopping = () => {
    if (ischecked) {
      const newtoppings = new Set([...additionalTopping, { ...topping }])
      setAdditionalTopping(Array.from(newtoppings))
    } else {
      const newtoppings = additionalTopping.filter((toppingObj) => {
        return toppingObj.name !== topping.name
      })
      setAdditionalTopping(newtoppings)
    }
  }

  useEffect(() => {
    handleTopping()
  }, [ischecked])

  const handleCheckBox = () => {
    setIsChecked(!ischecked)
  }
  return (
    <div className={`${ischecked && 'border-orange'} w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}>
      <Image src={topping.image} width={70} height={70} alt={topping.name}
        className="mb-2"
      />
      <div className="text-sm capitalize text-center font-medium">
        {topping.name}
      </div>
      <input className="absolute w-full h-full opacity-0 cursor-pointer" type='checkbox' checked={ischecked} onChange={handleCheckBox} />
      <div className={`${ischecked ? 'opacity-100' : 'opacity-0'} absolute top-1 right-1`}>
        <IoMdCheckmark className="text-xl text-orange" />
      </div>
    </div>
  )
};

export default Topping;
