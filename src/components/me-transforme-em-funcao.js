import React, { useState, useEffect, Fragment } from 'react';
import { Form, Button } from 'semantic-ui-react'

function ExampleComponent () {
    const [ showForm, setShowForm ] = useState(false)
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")

    useEffect(() => {
        setShowForm(showForm)
        setName(name)
        setEmail(email)
    }, [showForm, name, email])

    if (showForm === true) {
        return (
            <Form onSubmit={e => {
                e.preventDefault()
                console.log("Form Submetido")
                console.log(showForm)
                console.log(name)
                console.log(email)
            }}>
                <Form.Input name="name" value={name} onChange={e => setName(e.target.value)} />
                <Form.Input name="email" value={email} onChange={e => setEmail(e.target.value)} />
                <Form.Button type="submit">Submit!</Form.Button>
            </Form>
        )
    }

    return (
        <div >
            <Fragment>
                <h3>Hi, {name}</h3>
                <Button onClick={() => setShowForm(!showForm)} >Enter Email Address!</Button>
            </Fragment>
        </div>
    )
} 

//Classe de componente que foi refatorada acima
// class ExampleComponent extends Component {

//     state = {
//         showForm: false,
//         email: "",
//         name: this.props.name
//     }

//     componentDidMount() {

//         /* algum fetch de dado que a gente quer rodar somente uma vez
//         ....................
//         */
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()

//         /* executa alguma request 
//         ....................
//         */
//     }


//     toggleShowForm = (e) => {

//         this.setState({
//             showForm: !this.state.showForm,
//         })
//     }

//     // RENDERS ------------------------------

//     renderForm() {
//         return <Form onSubmit={this.handleSubmit}>
//             <Form.Input name="name" value={this.state.name} onChange={this.handleFormChange} />
//             <Form.Input name="email" value={this.state.email} onChange={this.handleFormChange} />
//             <Form.Button type="submit">Submit!</Form.Button>
//         </Form>
//     }

//     // RENDER --------------------------------
//     render() {

//         return (
//             <div >
//                 {this.state.showForm ? this.renderForm()
//                     : <Fragment>
//                         <h3>Hi, {this.state.name}</h3>
//                         <Button onClick={this.toggleShowForm} >Enter Email Address!</Button>
//                     </Fragment>
//                 }
//             </div>
//         )
//     }
// }

export default ExampleComponent