import React, {Component} from 'react';
import axios from '../../axios-scripts';
import styles from './ScriptForm.css';

class ScriptForm extends Component {

    state = {
        runAsync: false,
        value: '',
    };

    changeAsyncModeHandler = (event) => {
        this.setState({
            runAsync: event.target.checked,
        });
    };

    scriptTextUpdateHandler = (event) => {
        this.setState({
            value: event.target.value,
        })
    };

    sendScriptHandler = (event) => {
        axios.post('/scripts?async=' + this.state.runAsync, this.state.value, {
            headers: {
                'Content-type': 'application/javascript',
            }
        })
            .then(res => {
                {this.state.runAsync ? alert('Script will be executed asynchronously') : alert('Script has been finished')}
            })
            .catch(err => {
                alert('Error during script execution')
            });
    };

    render() {
        return (
            <div className={styles.ScriptForm}>
                <label className={styles.FormItem}>
                    <textarea
                        onChange={this.scriptTextUpdateHandler}
                        value={this.state.value}>
                    </textarea>
                </label>
                <label className={styles.FormItem}>
                    <input
                        type="checkbox"
                        checked={this.state.runAsync}
                        onChange={this.changeAsyncModeHandler}/>Run async
                </label>
                <button className={styles.FormItem}
                    onClick={this.sendScriptHandler}
                    disabled={this.state.value === ''}>Send script
                </button>
            </div>
        );
    }
}

export default ScriptForm;
