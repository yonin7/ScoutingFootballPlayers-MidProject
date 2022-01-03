import { useState, useEffect } from 'react';
import api from '../../api/api';
import SearchInput from '../../components/SearchInput/SearchInput';
import PlayersList from '../../components/PlayersList/PlayersList';
import './search.css';

const Search = ({ selectedPlayer }) => {
  const [playersData, setPlayersData] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPlayersInfo = async () => {
      try {
        setIsLoading(true);
        const response = await api.get();
        setPlayersData(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchPlayersInfo();
  }, []);

  const search = (input) => {
    setSearchField(input);
  };
  //check it
  const debounce = (func) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        console.log('Daniel');
        func();
      }, 1000);
    };
  };

  useEffect(() => {
    if (searchField) {
      const newFilteredPlayers = playersData.filter((player) =>
        player.name.toLowerCase().startsWith(searchField.toLowerCase())
      );
      setFilteredPlayers(newFilteredPlayers);
    } else {
      setFilteredPlayers(playersData);
    }
  }, [searchField, playersData]);

  return (
    <div className="search__container">
      <SearchInput handleSearchInput={search} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        searchField && (
          <PlayersList
            players={filteredPlayers}
            selectedPlayer={selectedPlayer}
          />
        )
      )}
    </div>
  );
};

export default Search;
