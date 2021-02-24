import React from 'react';
import { Screen4 } from './styles';
import bg from '../../assets/app-bg.png';

const Complexity = () => {
    return(
        <Screen4>
            <img src={bg} alt="app background"/>
            <div>
                <h1>O fim da complexidade</h1>
                <p>
                    Para quem sabe que tecnologia e design são melhores do que agências e papelada.
                </p>
            </div>
        </Screen4>
    );
}

export default Complexity;