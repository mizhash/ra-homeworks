function SearchBox({value, filterBooks}) {
    return (
        <input
            type="text"
            placeholder="Поиск по названию или автору"
            value={value}
            onChange={(event) => filterBooks(event.currentTarget.value)}
        />
    )
}

//
//class SearchBox extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            search: props.value
//        };
//        this.filterBooks = props.filterBooks;
//        this.changeSearch = this.changeSearch.bind(this);
//    }
//
//    componentWillReceiveProps(nextProps) {
//        this.setState({
//            search: nextProps.value
//        });
//    }
//
//    changeSearch(event) {
//        const value = event.currentTarget.value;
//        this.filterBooks(value);
//        this.setState({
//            search: value
//        });
//    }
//
//    render() {
//        return (
//            <input
//                type="text"
//                placeholder="Поиск по названию или автору"
//                value={this.state.search}
//                onChange={this.changeSearch}
//            />
//        )
//    }
//}
//
