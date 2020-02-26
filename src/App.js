import React, { useState } from 'react';
import api from './services/api';
import Nav from './components/Nav';
import Box from './components/Box';
import Loader from './components/Skeleton';

//styles
import './styles/global.css';
import './styles/flex.css';

function App() {

  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);

  const handle_submit = async e => {
    e.preventDefault();
    setLoading(true)
    const res = await api.get('/source', { params: { term: document.getElementById('term').value } })
    console.log(res.data.list)
    setAnime(res.data.list)
    setLoading(false)
  }

  const create_downloadable_btn = async (epi, anime_uri) => {
    let list = anime.slice();
    list[epi - 1]['loading'] = true;
    setAnime(list)
    const res = await api.get('/downloadable', { params: { uri: anime_uri } })
    const information = res.data.information;
    const uri = `http://${information.sufix}.zippyshare.com${information.uri}`;
    let other_list = anime.slice();
    other_list[epi - 1]['download'] = <a href={uri}>Save</a>;
    other_list[epi - 1]['loading'] = false;
    setAnime(other_list)
  }

  return (
    <main>
      <Nav handle_submit={handle_submit} />

      <section>
        {
          !loading
          ? anime.map(anime => (
              <Box create_downloadable_btn={create_downloadable_btn} anime={anime}/>      
            ))
          : <Loader />
        }
      </section>

    </main>
  );
}

export default App;
