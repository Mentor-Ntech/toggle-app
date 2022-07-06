const appRoot = document.getElementById("app");
//React ==> Component ==> React.Component

 const title ='Indecision Application'
 const subTitle = "Let computer make decision for you ......"
 const optionList = ['Item One', 'Item Two', 'Item Three']

//Nest its when you move other classes to one place
class IndecisionApp extends React.Component {
    render() {
        return (<div>
        <Header  title= {title} subTitle={subTitle}/>
        <Action />
        <Options  optionList={optionList}/>
        <AddOptions />
        </div>)
    }
}

class Header extends React.Component {
    render() {

        console.log(this.props)
        return (<div>
    <h1>{this.props.title}</h1>
    <h2>{this.props.subTitle}</h2>
</div>)
    }
}

class Action extends React.Component {
    render() {
        return (<div>
            <button>What should i do....</button>
        </div>)
    }
}

class Options extends React.Component {
    render() {
        return (<div> 
            <p>{this.props.optionList.length}</p>
            {this.props.optionList.map(optionT => <Option key={optionT} OptionText={optionT}></Option>)} 
        </div>)

    }

}

class Option extends React.Component {
    render() {
        return (<div>
          Available options:<p>{this.props.OptionText}</p>
        </div>)
    }
}

class AddOptions extends React.Component {
    render() {
        return  (<div>
            <p>Add  Option Component here...</p>
        </div>)
        
    }
}



ReactDOM.render(<IndecisionApp />, appRoot);



