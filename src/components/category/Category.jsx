// Category.jsx
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWind,
  faMobileScreenButton,
  faLaptop,
  faShoePrints,
  faHouse,
  faSmoking
} from '@fortawesome/free-solid-svg-icons';

const category = [
  { icon: faWind, name: 'perfumes' },
  { icon: faSmoking, name: 'Vapes' },
//   { icon: faUserTie, name: 'jacket' },
  { icon: faMobileScreenButton, name: 'mobile' },
  { icon: faLaptop, name: 'laptop' },
  { icon: faShoePrints, name: 'shoes' },
  { icon: faHouse, name: 'home' },
//   { icon: faBook, name: 'books' }
];

const Category = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col mt-5">
      <div >
        <div className="flex justify-between">
          {category.map((item, index) => (
            <div key={index} className="px-2 flex flex-col items-center">
              <div
                onClick={() => navigate(`/category/${item.name}`)}
                className="w-12 h-12 lg:w-18 lg:h-20 rounded-full bg-gray-600 transition-all hover:bg-slate-700 cursor-pointer flex items-center justify-center mb-2"
              >
                <FontAwesomeIcon icon={item.icon} className="text-white text-xl lg:text-2xl" />
              </div>
              <h1 className="uppercase text-sm lg:text-lg text-center font-medium">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;