import { Component } from 'react';
import '../card-list/card-list.style.css';
import { Monster } from '../../App';

type CardProps = {
    monster: Monster;
};

export const Card = ({ monster }: CardProps) => {
    const { name, id, email } = monster;
    // console.log(props);
    return (
        <div key={id} className='card-container'>
            <img
                alt={`Monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h1 key={id}>{name}</h1>
            <p>{email}</p>
        </div>
    );
};

// export class Card extends Component {
//     render() {
//         const { name, id, email } = this.props.monster;

// return (
//     <div key={id} className='card-container'>
//         <img
//             alt={`Monster ${name}`}
//             src={`https://robohash.org/${id}?set=set2&size=180x180`}
//         />
//         <h1 key={id}>{name}</h1>
//         <p>{email}</p>
//     </div>
// );
//     }
// }

// export default Card;
