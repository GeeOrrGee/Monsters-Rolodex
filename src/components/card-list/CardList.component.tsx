import { Component } from 'react';
import './card-list.style.css';
import { Card } from '../card.component/card.component';
import { Monster } from '../../App';
type CardListProps = {
    monsters: Monster[];
};
export const CardList = ({ monsters }: CardListProps) => {
    console.log(monsters);
    return (
        <div key='mamamia' className='card-list'>
            {monsters.map((monster) => {
                // console.log(monster);
                return <Card monster={monster} />;
            })}
        </div>
    );
};

// export class CardList extends Component {
//     render() {
//         const { monsters } = this.props;
//         // console.log('hol');
//         return (
//             <div className='card-list'>
//                 {monsters.map((monster) => {
//                     return <Card monster={monster} />;
//                 })}
//             </div>
//         );
//     }
// }

// export default CardList;
