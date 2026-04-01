import { useState } from 'react';
import NavBar from '../NavBar/NavBar'
import style from './MainPage.module.css'
import BeltRanks from '../BeltRanks/BeltRanks';
import TrialForm from '../TrialForm/TrialForm';


export default function MainPage (){
    const [selectedPage, setSelectedPage] = useState('home');
    

    return (
        <div className={style['Mainpage-style']}>
            <NavBar setSelectedPage={setSelectedPage}/>
        
        {selectedPage === 'beltranks' && (
    <BeltRanks onClose={() => setSelectedPage(null)} />
        )}

     {selectedPage === 'trialform' && (
    <TrialForm onClose={() => setSelectedPage(null)} />
)}
        </div>
    )
}
