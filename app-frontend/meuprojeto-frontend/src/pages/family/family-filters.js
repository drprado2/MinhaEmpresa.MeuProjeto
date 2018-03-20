import React from 'react';
import {Form, Input, Button, Radio, Card, InputNumber, Switch, Col, Row} from 'antd';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;
const FormItem = Form.Item;

const FormFields = props => {

  const { getFieldDecorator } = props.form;

  function onSubmit(event){
    event.preventDefault();
    props.form.validateFields((err, values) => {
      props.onSearch(values);
    });
  }

  return (
    <Form onSubmit={onSubmit}>
      <Row gutter={24}>
        <Col md={{span: 8}} sm={{span: 24}}>
          <FormItem label="Nome" >
            {getFieldDecorator('name', {rules: []})(
              <Input  placeholder="Preencha o nome" />
            )}
          </FormItem>
        </Col>
        <Col md={{span: 8}} sm={{span: 24}}>
          <FormItem label="Data Última Compra">
            {getFieldDecorator('dateLastBuy', {initialValue: null, rules: []})(
              <RangePicker />
            )}
          </FormItem>
        </Col>
        <Col md={{span: 4}} xs={{span: 8}}>
          <FormItem label="Idade">
            {getFieldDecorator('age', {rules: []})(
              <InputNumber min={1} max={110} defaultValue={18} />
            )}
          </FormItem>
        </Col>
        <Col md={{span: 4}} sm={{span: 8}}>
          <FormItem label="Ativo">
            {getFieldDecorator('active', {initialValue: true, rules: []})(
              <Switch defaultChecked />
            )}
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col md={{span: 6}}>
          <Button loading={props.loading} htmlType="submit" icon="search" type="primary">Buscar</Button>
        </Col>
      </Row>
    </Form>

  )
}

export const FamilyFilters = Form.create()(FormFields);

