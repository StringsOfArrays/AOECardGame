import React, { useEffect, useState } from 'react';
import fakeAxios from "./__mocks__/axios";

// types
import { CardData } from './types/types';

// components
import Heading from './components/heading';
import SelectedCardDisplay from './components/selectedCardDisplay';
import CardGrid from './components/cardGrid';
import ControlPanel from './components/controlPanel';

// style
import appStyle from './style/app.module.scss';


function App() {

  //state
  const [cardData, setCardData] = useState<Array<CardData>>();
  const [selectedCard, setSelectedCard] = useState<CardData | undefined>(undefined);


  // functions
  function sortCards(ascending:boolean = true) {
    if(!cardData) return;

    const newCardData = [...cardData];
    if(ascending){
      newCardData.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    else {
      newCardData.sort((a, b) => a.name < b.name ? 1 : -1);
    }
    setCardData(newCardData);
  }

  async function submitSelectedCard():Promise<boolean> {
    let success = false;
    if(!selectedCard) return success;

    try {
      await fakeAxios.post('https://thereisnoapi.com/cards', JSON.stringify(selectedCard));
      success = true;
      return success;
    }
    catch(e) {
      console.log(e);
      return success
    }
  }

  useEffect( () => {
    fakeAxios.get('https://thereisnoapi.com/cards')
          .then( res => setCardData(JSON.parse(res)));
  }, []);

  return (
    <>
      <header className={appStyle.heading}>
        <Heading/>
      </header>
      <main className={appStyle.wrapper}>
          <div className={appStyle.selectedCard}>
            {selectedCard && <SelectedCardDisplay {...selectedCard}/>}
          </div>
          <div className={appStyle.cardGrid}>
            {cardData ?
              <CardGrid data={cardData} onElementClicked={setSelectedCard}/>
              :
              <p>Loading...</p>}
          </div>
          <div className={appStyle.buttonArea}>
              <ControlPanel sort={sortCards} submit={submitSelectedCard}/>
          </div>
      </main>
      <footer className={appStyle.foot}>
              <p>Made by Pascal Mehl</p>
      </footer>
    </>
  );
}

export default App;