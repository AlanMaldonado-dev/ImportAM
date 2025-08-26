
import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-gray-100 bg-[#fc4b08] border border-gray-400 dark:border-gray-700 hover:border-grey-400 hover:text-black  rounded-xl cursor-pointer"
            >
                Completar compra
            </Button>
            <Dialog open={open} handler={handleOpen} className="flex justify-center bg-gray-800">
                <DialogBody className="w-[350px]">
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            value={addressInfo.name}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    name: e.target.value
                                })
                            }}
                            placeholder='Nombre'
                            className='bg-pink-50 border border-[#fc4b08] px-2 py-2 w-full rounded-md outline-none text-black placeholder-black'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    address: e.target.value
                                })
                            }}
                            placeholder='Direccion'
                            className='bg-pink-50 border border-[#fc4b08] px-2 py-2 w-full rounded-md outline-none text-black placeholder-black'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            name="pincode"
                            value={addressInfo.pincode}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    pincode: e.target.value
                                })
                            }}
                            placeholder='Codigo postal'
                            className='bg-pink-50 border border-[#fc4b08] px-2 py-2 w-full rounded-md outline-none text-black text-black placeholder-black'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="mobileNumber"
                            value={addressInfo.mobileNumber}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    mobileNumber: e.target.value
                                })
                            }}
                            placeholder='Numero de teléfono'
                            className='bg-pink-50 border border-[#fc4b08] px-2 py-2 w-full rounded-md outline-none text-black placeholder-black'
                        />
                    </div>

                    <div className="">
                        <Button

                            type="button"
                            onClick={() => {
                                handleOpen();
                                buyNowFunction();
                            }}
                            className="w-full px-4 py-3 text-center text-gray-100 bg-[#fc4b08] border border-transparent dark:border-gray-700 rounded-lg"
                        >
                            Buy now
                        </Button>
                    </div>

                </DialogBody>
            </Dialog>
        </>
    );
}

export default BuyNowModal;