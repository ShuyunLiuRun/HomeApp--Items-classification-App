import React from 'react';

const DataComponent = (ComposedComponent, url) =>
    class DataComponent extends React.Component{
        constructor(props){
            super();
            this.state = {
                data:[],
                loading:false,
                loaded:false
            }
        } 

        componentWillMount(){
            const {count} = this.props
            this.setState({loading:true})
            fetch(count?
                `${url}?results=${count}`: url)
                .then(response => response.json())
                //.then(obj => obj.results)
                .then(data => this.setState({
                    loaded:true,
                    loading:false,
                    data
                    
                }))
            
        }

        render(){
            console.log(this.state)
            return(
                <div className="data-component">
                    {(this.state.loading) ?
                    <div>Loading...</div>:
                    <ComposedComponent {...this.state}
                    //enable the HOC to pass any prop to composedComponent
                                        {...this.props}/>}
                </div>
            )
        }
    }

    export default DataComponent