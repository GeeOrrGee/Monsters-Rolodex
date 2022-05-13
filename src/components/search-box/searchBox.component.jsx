import { Component } from 'react';
import './search-box.style.css';

export const SearchBox = ({
    className,
    placeholder,
    onSearchChangeHandler,
}) => {
    return (
        <input
            key='hah'
            className={className}
            placeholder={placeholder}
            type='search'
            onChange={onSearchChangeHandler}
        />
    );
};

// export class SearchBox extends Component {
//     render() {
//         return (
//             <input
//                 className={this.props.className}
//                 placeholder={this.props.placeholder}
//                 type='search'
//                 onChange={this.props.onSearchChangeHandler}
//             />
//         );
//     }
// }

// export default SearchBox;
