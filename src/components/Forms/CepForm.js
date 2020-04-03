import React from 'react'
import { Form, FormGroup, Label, Input, FormFeedback, Container, Button, Spinner } from 'reactstrap';

import './CepForm/style.css';

class CepForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            cep: '',
            logradouro: '',
            complemento: '',
            bairro: '',
            localidade: '',
            uf: '',
            numero: '',
            loading:false,
            error: ''
        }
    }
    
    checkCep = async (cep) => {
        this.setState({error: false})
        return await fetch(`http://viacep.com.br/ws/${cep}/json/`)
        .then(re => re.json())
        .then(result => {
            this.setState({loading: false})
            return result
        })
        .catch(error => this.setState({
            error: true,
            loading: false
        }))
    }
    
    handleChange = async (fields) => {
        const {name, value} = fields
        this.setState({
            [name]: value, 
            error: false
        })
        if (name === 'cep' && value.length === 8) {
            this.setState({loading:true})
            const localObj = await this.checkCep(value)
            if (localObj) {
                if (localObj.erro) {
                    this.setState({error:true})
                    return
                }
            }
            const { cep, logradouro, complemento, bairro, localidade, uf, numero } = localObj
            this.setState({cep, logradouro, complemento, bairro, localidade, uf, numero})
        }
    } 

    handleBlur = async value => {
        if(value.length === 8 ){
          this.setState({loading:true})
          const localObj = await this.checkCep(value)
          if (localObj) {
              if(localObj.erro){
                this.setState({error:true})
                return
              }
          }
          const { cep, logradouro, complemento, bairro, localidade, uf, numero } = localObj
          this.setState({cep, logradouro, complemento, bairro, localidade, uf, numero})
        }
    }

    render() {
        const { loading, cep, logradouro, complemento, bairro, localidade, uf, numero, error } = this.state
        return(
          <Container>
                {loading && <Spinner size="sm" color="primary" />}
                <Form id="form-cep"> 
                <FormGroup id="formcep-group">
                  <Label for="cep">CEP</Label>
                  <Input invalid={error.toString()} name="cep" value={cep} onChange={e => this.handleChange(e.target)} onBlur={e => this.handleBlur(e.target.value)} maxLength={9}/>
                  <FormFeedback invalid={error.toString()}>Error</FormFeedback>
                </FormGroup>
                <FormGroup id="formcep-group">
                  <Label for="logradouro">Logradouro</Label>
                  <Input name="logradouro" value={logradouro} onChange={e => this.handleChange(e.target)}/>
                </FormGroup>
                <FormGroup id="formcep-group">
                  <Label for="complemento">Complemento</Label>
                  <Input name="complemento" value={complemento} onChange={e => this.handleChange(e.target)}/>
                </FormGroup>
                <FormGroup id="formcep-group">
                  <Label for="bairro">Bairro</Label>
                  <Input name="bairro" value={bairro} onChange={e => this.handleChange(e.target)}/>
                </FormGroup>
                <FormGroup id="formcep-group">
                  <Label for="localidade">Localidade</Label>
                  <Input name="localidade" value={localidade} onChange={e => this.handleChange(e.target)}/>
                </FormGroup>
                <FormGroup id="formcep-group">
                  <Label for="uf">UF</Label>
                  <Input name="uf" value={uf}  onChange={e => this.handleChange(e.target)}/>
                </FormGroup>
                <FormGroup id="formcep-group">
                  <Label for="numero">Numero</Label>
                  <Input name="numero" value={numero}  onChange={e => this.handleChange(e.target)}/>
                </FormGroup>
                <FormGroup id="formcep-group">
                  <Button color="success" onClick={this.verificaCep}>Enviar</Button>
                </FormGroup>
                </Form>
          </Container>
        )
    }
}

export default CepForm;
