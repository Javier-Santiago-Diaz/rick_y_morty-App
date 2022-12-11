import { connect } from "react-redux"
import s from './favorite.module.css'

export function Favorites({ myFavorites }) {
    return (
        <div>
            <span className={s.title}>Favorites</span>
            {myFavorites.map(character => (<div>
                <h3>{character.name}</h3>
                <img src={character.image} alt="" />
            </div>))}

        </div>
    )
}

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)