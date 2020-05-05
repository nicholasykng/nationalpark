import React from 'react'

class ParkSearch extends React.component {
    state = {
        searchterm: ""
    }
    handleOnChange = event => {
        this.setState({
            searchterm: event.target.value
        })
    }
    handleOnSubmit = event => {
        event.preventDefault()
        this.props.search(this.state.searchterm)
    }
    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name="searchterm" value={this.state.searchterm} onChange={this.handleOnChange} />
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}
export default connect(null, {searchpark})(ParkSearch)