import { connect } from "react-redux"
import Cards from "../cards/Cards"

export function Favorites(props) {
    return (
        <div>
            <div>Favorites</div>
            {props.myFavorites.map(ele => {
                <Cards
                />
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