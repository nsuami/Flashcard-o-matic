import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import NotFound from './NotFound';
import Home from './Home';
import StudyDeck from './StudyDeck';
import CreateDeck from './CreateDeck';
import ViewDeck from './ViewDeck';
import EditeDeck from './EditeDeck';
import AddCard from './AddCard';
import EditeCard from './EditeCard';

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <Link to='/decks/new'>
              <button className='btn btn-info'>
                <i className='fas fa-plus'></i> Create Deck
              </button>
            </Link>
            <Home />
          </Route>

          <Route exact path='/decks/new'>
            <CreateDeck />
          </Route>

          <Route exact path='/decks/:deckId/study'>
            <StudyDeck />
          </Route>

          <Route exact path='/decks/:deckId/edit'>
            <EditeDeck />
          </Route>

          <Route exact path='/decks/:deckId'>
            <ViewDeck />
          </Route>

          <Route exact path='/decks/:deckId/cards/new'>
            <AddCard />
          </Route>

          <Route exact path='/decks/:deckId/cards/:cardId/edit'>
            <EditeCard />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default Layout;
