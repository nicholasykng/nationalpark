import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchParks} from '../actions/fetchParks.js'
import ParksList from "../components/ParksList"
import ParkShow from "./ParkShow"


class ParksContainer extends Component {
    componentDidMount() {
        this.props.fetchParks()
    }
    render() {
        const {match, parks} = this.props
        return (
            <div>
                <Switch>
                <Route exact path={match.url} render={() => (
                    <ParksList parks={parks} />
                )}/>
                <Route path={`${match.url}/:parkId`} component={ParkShow}/>
                </Switch>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        parks: state.parks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchParks: () => dispatch(fetchParks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParksContainer)