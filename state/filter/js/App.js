'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All'
    }
  };

  setFilter = filter => {
    console.log(filter);
    this.setState({
        selected: filter
    });
  };

  getProjects = () => {
    return this.state.selected === 'All'
            ? this.props.projects
            : this.props.projects.filter(item => this.state.selected === item.category)
  };

  render() {
    return (
        <div>
          <Toolbar
              filters={this.props.filters}
              selected={this.state.selected}
              onSelectFilter={this.setFilter} />
          <Portfolio projects={this.getProjects()} />
        </div>
    );
  }
}
