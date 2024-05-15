import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";

function PetsList() {
  const [petType, setPetType] = useState("");
  const selectedChange = (event) => {
    setPetType(event.target.value);
  };

  const filterType = pets.filter((pet) => {
    if (pet.type.includes(petType)) {
      return true;
    } else {
      return false;
    }
  });
  const [query, setquery] = useState("");

  const handleChange = (e) => {
    setquery(e.target.value);
  };
  const filterPetsName = filterType.filter((pet) => {
    if (pet.name.toLowerCase().includes(query.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  //const petList = filterType.map((pet) => <PetItem pet={pet} key={pet.id} />);
  const petList = filterPetsName.map((pet) => (
    <PetItem pet={pet} key={pet.id} />
  ));
  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                {/*search Bar*/}
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={handleChange}
                />
              </div>
              <br />
              Type:
              <select
                className="form-select"
                value={petType}
                onChange={selectedChange}
              >
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
