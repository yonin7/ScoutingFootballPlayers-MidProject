import { useState, useEffect } from 'react';
import api from '../../api/api';
import SearchInput from '../../components/SearchInput/SearchInput';
import PlayersList from '../../components/PlayersList/PlayersList';
import Modal from '../../components/Modal';
import './search.css';

const Search = ({ selectedPlayer, selectedPlayerReport }) => {
  const [playersData, setPlayersData] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playerData, setPlayerData] = useState({});

  useEffect(() => {
    const fetchPlayersInfo = async () => {
      try {
        setIsLoading(true);
        const response = await api.post('/find', {
          collection: 'player_stats',
          database: 'myFirstDatabase',
          dataSource: 'Cluster0',
          limit: 10,
        });
        setPlayersData(response.data.documents);
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

  const handleModalOpen = (player) => {
    setIsModalOpen(true);
    setPlayerData(player);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const reportRequest = () => {
    console.log(playerData);
    selectedPlayerReport(playerData);
  };
  const compareRequest = () => {
    selectedPlayer(playerData);
  };

  return (
    <div className="search__container">
      <Modal
        isOpen={isModalOpen}
        handleModalClose={handleModalClose}
        reportRequest={reportRequest}
        compareRequest={compareRequest}
      />
      <SearchInput handleSearchInput={search} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <PlayersList
          players={filteredPlayers}
          selectedPlayer={selectedPlayer}
          onCardClick={handleModalOpen}
        />
      )}
    </div>
  );
};

export default Search;
