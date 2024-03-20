import { useState } from "react"; 
import "./search.css";



const Search = () => {


  const [ isDropDownSearchShown,setIsDropDownMenuShown ] = useState(false);


  const handleDropDownMenu = () =>{

    setIsDropDownMenuShown(!isDropDownSearchShown);

  }


  return (
    <div className="search_container">
      <div className="container">
      <div className="search-wrapper">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Enter the property you're searching"
          className="search"

          onClick={handleDropDownMenu}

        />
        <input type="submit" value="SEARCH" className="submit-button" onClick={handleDropDownMenu} />

        <div className={ `filter-container ${isDropDownSearchShown ? 'active': ''}` }>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            commodi doloribus pariatur cupiditate maxime officia praesentium
            nostrum, accusantium facilis veritatis eos? Maiores quod expedita,
            sit quidem animi vitae voluptas quisquam.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Search;
