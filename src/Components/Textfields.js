import React, {Component} from "react"

class Textfields extends Component {
    constructor() {
        super()
        this.state = {
            Age: "",
            Gender: "",
 
            ReturnedData: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount() {
        fetch(" ")
            .then(response => response.json())
            .then(response => {
                const {data} = response.data
                this.setState({ ReturnedData: data })
            })
    }
    
    /**
     * Create the onChagne handler method
     * It should update the corresponding state on every change of the input box
     */
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    transmit(){


    }
    
    render() {
        return (
            <div>
                <form className="text-form">
                    <input 
                        type="text"
                        name="Age"
                        placeholder="Age"
                        value={this.state.Age}
                        onChange={this.handleChange}
                    /> 
                    <br/>
                    <input 
                        type="text"
                        name="Gender"
                        placeholder="Gender"
                        value={this.state.Gender}
                        onChange={this.handleChange}
                    /> 
                    <br/>
                     <input 
                        type="text"
                        name="Ethnicity"
                        placeholder="Ethnicity"
                        value={this.state.Ethnicity}
                        onChange={this.handleChange}
                    /> 
                    <br/>
                    <input 
                        type="checkbox"
                        name="Asthma" 
                         
                        value={this.state.Asthma}
                        onChange={this.handleChange}
                         
                    /> 
                    Asthma 
                    <br/>
                    <input 
                        type="checkbox"
                        name="Cardiovascular Disease"
                       
                        value={this.state.CardiovascularDisease}
                        onChange={this.handleChange}
                    />   
                    Cardiovascular Disease
                    <br/>
                     <input 
                        type="checkbox"
                        name="Chronic lung disease"
                        
                        value={this.state.Chroniclungdisease}
                        onChange={this.handleChange}
                    />  
                    Chronic lung disease
                    <br/>
                     <input 
                        type="checkbox"
                        name="Immune suppression"
                       
                        value={this.state.Immunesuppression}
                        onChange={this.handleChange}
                    /> 
                    Immune suppression
                    <br/>
                     <input 
                        type="checkbox"
                        name="Metabolic disease"
                       
                        value={this.state.Metabolicdisease}
                        onChange={this.handleChange}
                    />    
                    Metabolic disease
                    <br/>
                     <input 
                        type="checkbox"
                        name="Neurological disease"
                         
                        value={this.state.Neurologicaldisease}
                        onChange={this.handleChange}
                    />         
                    Neurological disease    
                    <br/>                                         
                     <input 
                        type="checkbox"
                        name="Other disease"
                        
                        value={this.state.Otherdisease}
                        onChange={this.handleChange}
                    />  
                    Other disease
                    <br/>
                     <input 
                        type="checkbox"
                        name="Autoimmune disease"
                      
                        value={this.state.Autoimmunedisease}
                        onChange={this.handleChange}
                    /> 
                    Autoimmune disease
                    <br/>
                     <input 
                        type="checkbox"
                        name="Obesity"
                        
                        value={this.state.Obesity}
                        onChange={this.handleChange}
                    /> 
                    Obesity
                    <br/>
                     <input 
                        type="checkbox"
                        name="Pregnancy"
                   
                        value={this.state.Pregnancy}
                        onChange={this.handleChange}
                    />  
                    Pregnancy
                    <br/>
                     <input 
                        type="checkbox"
                        name="Renal disease"
                        
                        value={this.state.Renaldisease}
                        onChange={this.handleChange}
                    /> 
                    Renal disease
                    <br/>
                     <input 
                        type="checkbox"
                        name="Gastrointestinal/liver disease"
                        
                        value={this.state.Gastrointestinalliverdisease}
                        onChange={this.handleChange}
                    /> 
                    Gastrointestinal/liver disease
                    <br/>
                     <input 
                        type="checkbox"
                        name="Hypertension"
                       
                        value={this.state.Hypertension}
                        onChange={this.handleChange}
                    />       
                    Hypertension    
                    <br/>                                                                                                         
                    <button    >Go</button>
                </form>
            </div>
        )
    }
}

export default Textfields
    
 

 
 
