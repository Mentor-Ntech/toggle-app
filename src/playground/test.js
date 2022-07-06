const appRoot = document.getElementById("app");

// let visibility = false;

// const checkBtn = () => {
//     visibility = !visibility
//     renderTemplate()
// }

// const renderTemplate = () => {
//     const template =(<div>

//     <h1>Hello world</h1>

//     <button onClick = {checkBtn}>{visibility ? 'Hide details' : 'Show details'}</button>
//     {visibility ?<p>Here are your details...</p> : null}
// </div>)

// ReactDOM.render(template, appRoot)

// }
// renderTemplate()

class ToggleApp extends React.Component {
    constructor(props) {
        super(props)

        this.checkBtn = this.checkBtn.bind(this)
        this.state = {
            visibility: false
        }
    }

    checkBtn(){
        this.setState((prevState) =>{
                return {
                visibility: !prevState.visibility
            }
              

        })
        

    }
    
    render() {
        return (<div>
            <h1>Hello world</h1>
            <button onClick={this.checkBtn}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
             {this.state.visibility ?<p>Here are your details...</p> : null}
            
        </div>)
    }
}
ReactDOM.render(<ToggleApp />, appRoot)



