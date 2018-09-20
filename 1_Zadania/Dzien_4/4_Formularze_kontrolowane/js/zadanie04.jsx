import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class SelectOrType extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                items: this.props.items,
                select: this.props.items[0],
                inputValue: '',
                otherValue: 'Inne'
            }
        }
        changeItem = (e) => {
            this.setState({
                select: e.target.value
            })
        }
        insertValue = (e) => {
            this.setState({
                inputValue: e.target.value
            })
        }
        changeValue = (e) => {
            this.setState({
                otherValue: this.state.inputValue,
                select: this.state.inputValue 
            })
        }
        render() {
            return (
                <div>
                    <select value={this.state.select} onChange={this.changeItem}>
                        {this.state.items.map((elem, index) => {
                           return <option key={`item-${index}`}>{elem}</option> 
                        })}
                        <option>{this.state.otherValue}</option>
                    </select>
                    {this.state.select == this.state.otherValue && 
                    <div>
                         <input type="text" 
                         value={this.state.inputValue}
                         onChange={this.insertValue}
                         />
                         <button onClick={this.changeValue}>Click</button>
                    </div> 
                    }
                </div>
            )
        }
    }
    ReactDOM.render(
        <SelectOrType items={['BMW', 'Jaguar', 'Porshe']}/>,
        document.getElementById('app')
    );
});


