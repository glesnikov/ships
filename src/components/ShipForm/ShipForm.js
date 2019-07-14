import { Button, Form, Input, InputNumber } from 'antd';
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import styles from './ShipForm.module.scss';

class ShipForm extends Component {
    static propTypes = {
        form: PropTypes.object,
        onSave: PropTypes.func.isRequired
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className={styles.root}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('name', {
                            rules: [
                                { required: true, message: 'Name is required!' }
                            ]
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('capacity', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Capacity is required!'
                                }
                            ]
                        })(<InputNumber />)}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSave(values);
                this.props.form.resetFields();
            }
        });
    };
}

export default (ShipForm = Form.create({ name: 'ship_form' })(ShipForm));
