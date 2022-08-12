import { useState, useEffect, ChangeEvent } from 'react';
import SearchBox from './components/search-box/searchBox.component';
import { CardList } from './components/card-list/CardList.component';
import './App.css';
import { getData } from './utils/fetchData';

export type Monster = {
    id: string;
    name: string;
    email: string;
};
const App = () => {
    const [searchField, setSearchField] = useState('');
    const [title, setTitle] = useState('');
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    // console.log({ searchField });
    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then((response) => response.json())
        //     .then((users) => setMonsters(users));

        const fetchData = async () => {
            const monstersData = await getData<Monster[]>(
                'https://jsonplaceholder.typicode.com/users'
            );
            setMonsters(monstersData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const newfilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        });

        setFilteredMonsters(newfilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    };
    const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const searchFieldString = event.target.value;
        setTitle(searchFieldString);
    };

    return (
        <div className='App'>
            <h1 className='app-title'>{title}</h1>
            <SearchBox
                className='search-box'
                placeholder='search monsters'
                onSearchChangeHandler={onSearchChange}
            />
            <br />
            <SearchBox
                className='title search-box'
                placeholder='set title'
                onSearchChangeHandler={onTitleChange}
            />

            <CardList monsters={filteredMonsters} />
        </div>
    );
};

export default App;
