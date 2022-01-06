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
  const [skip, setSkip] = useState(0);

  const fetchPlayersInfo = async () => {
    try {
      setIsLoading(true);
      const response = await api.post('/find', {
        collection: 'player_stats', //reports
        database: 'myFirstDatabase',
        dataSource: 'Cluster0',
        limit: 20,
        skip,
        filter: { player_name: { $regex: searchField, $options: 'i' } },
      });
      setPlayersData(response.data.documents);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPlayersInfo();
  }, [skip]);

  useEffect(() => {
    fetchPlayersInfo();
  }, [searchField]);

  const search = (input) => {
    setSearchField(input);
  };

  useEffect(() => {
    setFilteredPlayers(playersData);
  }, [searchField, playersData]);

  const handleModalOpen = (player) => {
    setIsModalOpen(true);
    setPlayerData(player);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const compareRequest = () => {
    selectedPlayer(playerData);
  };

  const onScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setSkip(skip + 1);
    }
  };

  return (
    <div className="search__container">
      <Modal
        isOpen={isModalOpen}
        handleModalClose={handleModalClose}
        compareRequest={compareRequest}
        selectedPlayerReport={selectedPlayerReport}
        selectedPlayer={selectedPlayer}
        playerData={playerData}
      />
      <SearchInput handleSearchInput={search} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <PlayersList
          onScroll={onScroll}
          players={filteredPlayers}
          onCardClick={handleModalOpen}
        />
      )}
    </div>
  );
};

export default Search;
