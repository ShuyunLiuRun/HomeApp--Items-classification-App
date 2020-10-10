import React from 'react';

const DataComponent = (ComposedComponent,url) =>
class DataComponent extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            data:[],
            loaded:false,
            loading:false
        }

    }

    componentDidMount(){
        this.setState({loading:true})
        fetch(url)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    loaded:true,
                    loading:false,
                    data
                }),
                (error) => {
                    this.setState({
                        loaded: true,
                        error
                    });
                }
                )

    }

    render(){
        console.log("============data-component==========")
        return(
            <div className="data-component">
                {(this.state.loading)?
                    <div>Loading...</div>:
                    <ComposedComponent {...this.state}
                        {...this.props}/>}
            </div>
        )
    }
}
export default DataComponent;