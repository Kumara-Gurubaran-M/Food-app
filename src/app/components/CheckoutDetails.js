import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { CartContext } from "../context/CartContext";

const CheckoutDetails = ({ setModal }) => {
  const { cart, setCart, cartTotal } = useContext(CartContext);
  const [successMsg, setSuccessMsg] = useState(false);
  const [count, setCount] = useState(5);
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    streetName: '',
    streetNo: '',
    block: '',
    floor: '',
    aptNo: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count, successMsg]);

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg(false);
        setCart([]);
        setModal(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMsg, setCart, setModal]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const isValid =

      formValues.name &&
      formValues.phone &&
      formValues.email &&
      formValues.streetName &&
      formValues.streetNo &&
      formValues.block &&
      formValues.floor &&
      formValues.aptNo;
    setIsFormValid(isValid);
  };

  useEffect(() => {
    validateForm();
  }, [formValues]);

  const handleSubmit = () => {
    if (isFormValid) {
      setSuccessMsg(true);
    }
  };

  return (
    <div>
      {successMsg ? (
        <div className="flex flex-col justify-center items-center h-[100vh] lg:h-[600px] px-6">
          <h1>Thank you! The order has been placed!</h1>
          <Image src={'/success-1.gif'} width={150} height={150} />
          <div className="text-2xl font-semibold text-center">
            This window will close in <span>{count}</span> seconds
          </div>
        </div>
      ) : (
        <div className="lg:gap-x-8 h-full lg:px-12 lg:py-8">
          <h2 className="mb-6 text-[20px] uppercase font-extrabold text-center lg:text-left pt-6 lg:pt-0">Shipping & Checkout</h2>
          <div className="h-[86vh] lg:h-[47.5vh] flex flex-col lg:flex-row lg:gap-x-4">
            <div className="flex-1 h-full overflow-y-auto lg:overflow-visible py-4 px-8 lg:py-0 lg:px-0">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                  <input type="text" className="w-full input" placeholder="Name" onChange={handleInputChange} name="name" value={formValues.name} />
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                  <input type="number" className="w-full input" placeholder="Phone" onChange={handleInputChange} name="phone" value={formValues.phone} />
                  <input type="email" className="w-full input" placeholder="Email Address" onChange={handleInputChange} name="email" value={formValues.email} />
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                  <input type="text" className="w-full input" placeholder="Street Name" onChange={handleInputChange} name="streetName" value={formValues.streetName} />
                  <input type="text" className="w-full input" placeholder="Street No" onChange={handleInputChange} name="streetNo" value={formValues.streetNo} />
                </div>

                <div className="flex justify-between gap-x-4">
                  <input type="text" className="w-full input" placeholder="Block" onChange={handleInputChange} name="block" value={formValues.block} />
                  <input type="text" className="w-full input" placeholder="Floor" onChange={handleInputChange} name="floor" value={formValues.floor} />
                  <input type="text" className="w-full input" placeholder="Apt. No" onChange={handleInputChange} name="aptNo" value={formValues.aptNo} />
                </div>

                <div className="flex-1 h-full">
                  <textarea className="textarea w-full h-full" placeholder="Mentions (optional)"></textarea>
                </div>
              </div>
            </div>
            <div className="flex-1 h-full lg:max-w-[40%] flex flex-col justify-between pt-3 px-8 lg:p-0">
              <div className="border rounded-lg flex flex-col mb-4 p-4 h-full">
                <h3 className="text-base font-extrabold uppercase mb-4 border-b pb-4">Your Order</h3>
                <div className="overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white-500 font-semibold flex flex-col gap-y-4 h-[240px] py-2">
                  <div className="flex justify-between gap-x-2 uppercase font-bold ">
                    <div className="text-gray-400">Items</div>
                    <div className="text-gray-400">Amount</div>
                  </div>
                  {cart.map((pizza, index) => (
                    <div className="flex justify-between text-[15px]" key={index}>

                      <div className="flex gap-x-2">
                        <div className="capitalize">{pizza.name}</div>
                        <div>{pizza.amount > 1 && `X ${pizza.amount}`}</div>
                      </div>
                      <div>$ {parseFloat(pizza.price * pizza.amount).toFixed(2)}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-3 flex justify-between mt-3">
                  <div className="font-extrabold uppercase">Total</div>
                  <div className="font-black">$ {cartTotal}</div>
                </div>
              </div>
              <button
                // onClick={() => setSuccessMsg(true)}
                // className="btn btn-lg gradient w-full"
                // disabled={
                //   !formValues.firstName ||
                //   !formValues.phone ||
                //   !formValues.email ||
                //   !formValues.streetName ||
                //   !formValues.block ||
                //   !formValues.aptNo
                // }
                onClick={handleSubmit}
                className={`btn btn-lg w-full gradient ${!isFormValid && 'opacity-50 cursor-not-allowed '}`}
                disabled={!isFormValid}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutDetails;
