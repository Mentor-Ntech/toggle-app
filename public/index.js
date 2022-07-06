'use strict';

var appRoot = document.getElementById("app");

var visibility = false;

var checkBtn = function checkBtn() {
    visibility = !visibility;
    renderTemplate();
};

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Hello world'
        ),
        React.createElement(
            'button',
            { onClick: checkBtn },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility ? React.createElement(
            'p',
            null,
            'Here are your details...'
        ) : null
    );

    ReactDOM.render(template, appRoot);
};
renderTemplate();

// let visibility = false

// class ToggleApp extends React.Component {
//     constructor(props) {
//         super(props)

//         this.checkBtn = this.checkBtn.bind(this)
//         this.state = {
//             visibility: false
//         }
//     }

//     checkBtn(){
//         this.setState((prevState) =>{
//                 return {
//                 visibility: !prevState.visibility
//             }


//         })


//     }

//     render() {
//         return (<div>
//             <h1>Hello world</h1>
//             <button onClick={this.checkBtn}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
//              {this.state.visibility ?<p>Here are your details...</p> : null}

//         </div>)
//     }
// }
// ReactDOM.render(<ToggleApp />, appRoot)
