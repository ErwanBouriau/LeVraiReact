import React from 'react';
import '../Home.css';
import Bouton from './BoutonHome';

class Home extends React.Component {

    render() {
        return (
            <div>
                <div class="btn">
                    <Bouton label="Trouver l'amour" data-testid="btn-home" history={this.props.history}></Bouton>
                </div>
                <div class="hyperdrive">

                <div class="scene">
                    <div class="wrap">
                        <div class="wall wall-right"></div>
                        <div class="wall wall-left"></div>
                        <div class="wall wall-top"></div>
                        <div class="wall wall-bottom"></div>
                        <div class="wall wall-back"></div>
                    </div>
                    <div class="wrap">
                        <div class="wall wall-right"></div>
                        <div class="wall wall-left"></div>
                        <div class="wall wall-top"></div>
                        <div class="wall wall-bottom"></div>
                        <div class="wall wall-back"></div>
                    </div>
                </div>
                </div>
            </div>
        );
    };
};

export default Home;