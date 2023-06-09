import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorites, deleteFavorites } from "../../redux/actions";

export default function Favorites() {
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = (id, name, image, species, gender, onClose) => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorites(id));
    } else {
      setIsFav(true);
      dispatch(addFavorites({ id, name, image, species, gender, onClose }));
    }
  };

  return (
    <div className=" ">
      <h1 className="text-danger">Favorites</h1>
      {myFavorites.map((character) => (
        <div className="row  border border-danger rounded bg-danger  mt-2">
          <div className="col-sm-5">
            <div className="d-flex justify-content-center">
              <img
                src={character.image}
                alt=""
                className="rounded mt-1 mb-1 ml-1 mr-1 "
              />
            </div>
          </div>

          <div className="col-sm-6   d-flex  flex-column align-items-center  ">
            <br />

            <h3 className="text-white  ">{character?.name}</h3>

            <h4 className="text-white ">{character?.species}</h4>

            <h4 className="text-white "> {character?.gender}</h4>
            <div className="text-center">
              {isFav ? (
                <button
                  onClick={() => handleFavorite(character.id)}
                  className="rounded"
                >
                  ❤️
                </button>
              ) : (
                ""
              )}
            </div>
            <br />
          </div>
        </div>
      ))}
    </div>
  );
}
