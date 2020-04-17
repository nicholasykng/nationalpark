import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchParks} from '../action/fetchParks'


class ParksContainer extends Component {
    componentDidMount() {
        this.props.fetchParks()
    }
    render() {
        return (
            <div>
                <Route exact path={match.url} render={() => (
                    <ParksList parks={this.props.parks} />
                )}/>
            </div>
        )
    }
}
mapStateToProps = state => {
    return {
        parks: state.parks
    }
}

mapDispatchToProps = dispatch => {
    return {
        fetchParks: () => dispatch(fetchParks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParksContainer)