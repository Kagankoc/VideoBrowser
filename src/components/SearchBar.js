import React from "react";


class SearchBar extends React.Component {
  state = {
    searchText: "",
  };

  onInputChange = (event) => {
    this.setState({ searchText: event.target.value });
  };

  onFormSubmit= (event)=> {
    event.preventDefault();
    
    this.props.onFormSubmit(this.state.searchText);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Videos</label>
            <input
              type="text"
              value={this.state.searchText}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
