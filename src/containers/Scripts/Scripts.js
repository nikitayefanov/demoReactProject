import React, {Component} from 'react';
import axios from '../../axios-scripts';
import Modal from 'react-modal';
import style from './Scripts.css';
import Script from "../../components/Script/Script";
import {FaTimes, FaCheck} from 'react-icons/fa';

class Scripts extends Component {

    state = {
        scripts: null,
        showModal: false,
        currentScriptId: null,
    };

    componentDidMount() {
        this.fetchScripts();
    }

    fetchScripts = (letter) => {
        axios.get('/scripts')
            .then(res => {
                this.setState({
                    scripts: res.data,
                })
            })
            .catch(err => {
                // console.log(err);
            });
    };

    // chooseScriptHandler = (id) => {
    // this.props.history.push('/scripts/' + id);
    // };

    handleOpenModal = (id) => {
        this.setState({
            showModal: true,
            currentScriptId: id,
        });
    };

    handleCloseModal = () => {
        this.setState({showModal: false});
    };

    cancelScript = (id) => {
        axios.delete('/scripts/' + id)
            .then(this.fetchScripts, this.fetchScripts);
    };

    render() {

        let scripts = null;

        if (this.state.scripts) {
            scripts = this.state.scripts.map(script => (
                <li key={script.id} className={style.Element}>
                    <span
                        onClick={() => this.handleOpenModal(script.id)}>Script with ID {script.id}
                    </span>
                    <span
                        className={style.CancelButton}
                        onClick={() => this.cancelScript(script.id)}>{script.status === 'RUNNING' ? <FaTimes/> : <FaCheck/>}</span>
                </li>
            ));
        }

        return (
            <div className={style.Scripts}>
                <ul>
                    {scripts == null || scripts.length === 0 ? 'No scripts found' : scripts}
                </ul>
                {this.state.showModal ?
                    <Modal
                        className={style.Modal}
                        isOpen={this.state.showModal}
                        onRequestClose={this.handleCloseModal}
                        shouldCloseOnOverlayClick={true}
                        appElement={document.getElementById('root')}>
                        <Script
                            script={this.state.scripts[this.state.currentScriptId]}/>
                    </Modal> : null}
            </div>
        );
    }
}

export default Scripts;
