import { connect } from "react-redux"

export function Favorites({ myFavorites }) {
    return (
        <div>
            <div>Favorites</div>
            {myFavorites.map(favorit => {
                <div>
                    <h3>{favorit.name}</h3>
                    <img src={favorit.img} alt="" />
                </div>
            })}
        </div>
    )
}

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)