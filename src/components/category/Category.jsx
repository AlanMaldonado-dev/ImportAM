import { useNavigate } from "react-router";
import logo from '../../images/Elfbar-logo.jpeg'
const category = [
    {
        image: logo,
        name: 'Elfbar'
    },
    
]

const Category = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-1">
                <div className="flex justify-center">
                    <div className="flex ">
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-2 lg:px-">
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 "  >
                                        <div className="flex justify-center mb-10">
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    <h1 className='uppercase text-sm lg:text-lg text-center font-medium title-font '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Category