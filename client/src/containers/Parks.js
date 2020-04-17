import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchParks} from '../actions/fetchParks'
import ParksList from ""
import Park from ""


class ParksContainer extends Component {
    componentDidMount() {
        this.props.fetchParks()
    }
    render() {
        const {match} = this.props
        return (
            <div>
                <Route exact path={match.url} render={() => (
                    <ParksList parks={this.props.parks} />
                )}/>
                <Route path={`${match.url}/:parkId`} render={routerProps => <Park {...routerProps} parks={this.props.parks} />}/>
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