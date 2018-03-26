import React, {Component} from 'react';
import { Form, Input, Button, Radio, Icon } from 'antd';
const FormItem = Form.Item;

class FamilyFormFields extends Component{
  constructor(props){
    super(props);

    this.state={
      name: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submeteu o formulario")
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }


  render(){
    const {name} = this.state;
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Form layout="vertical">
          <FormItem
            label="Nome"
          >
            {getFieldDecorator('name', {
              rules: [
                {required: true, message: "Preencha o campo"}
              ]
            })(
              <Input
                placeholder="Preencha o nome"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                name="name"
                ref={node => this.name = node}
              />

            )}
          </FormItem>
        </Form>
      </div>
    )
  }
}

export const CustomerForm = Form.create()(FamilyFormFields);

