import React from 'react';
import DatePicker from 'react-datepicker';
import { Form, Dropdown, Button } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import channelOptions from 'Shared/channels';
import moment from 'moment';


class ScheduleVisualizerForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
          startDate: null,
          channel: '',
          validation: true,
          value: []
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleChannelOnChange = this.handleChannelOnChange.bind(this);
    }

    handleChannelOnChange(e, data) {

        this.setState({
          channel: data.value,
          value: data.value
        });

    }

    handleFormSubmit(e) {

        e.preventDefault();

        if(this.state.channel == '' || this.state.startDate == '' || this.state.startDate == null ) {

            return this.setState({validation:false});
        }

        let formData = {
            channel: this.state.channel,
            startDate: this.setFormatForDate(this.state.startDate)
        };

        this.props.getSchedule(formData)

        this.setState({validation:true});
    }


    handleDateChange(date) {

        this.setState({
          startDate: date
        });

    }


    setFormatForDate(date) {
        return moment(date).format('DD-MM-YYYY')
    }

    formValidation() {
        if (!this.state.validation) {

            return (
                <span className="error">Please provide all fields before submitting</span>
            )
        }
    }

    render () {
        const { value } = this.state

        return (
            <div>
                { this.formValidation() }
                <Form onSubmit={this.handleFormSubmit}> 
                    <Form.Field>
                        <label>Channel</label>
                        <Dropdown value={value} placeholder='Select a channel' search selection options={channelOptions} onChange={this.handleChannelOnChange}/>
                    </Form.Field>

                    <Form.Field>
                        <label>Schedule Date</label>

                        <DatePicker
                            selected={this.state.startDate || null}
                            onChange={this.handleDateChange}
                            dateFormat="DD/MM/YYYY"
                            customInput= {
                                <InputMask mask="99/99/9999"/>
                            }
                        />

                    </Form.Field>
                    <Button type='submit'>View Schedule</Button>
                </Form>
            </div>
        )
    }   
};

export default ScheduleVisualizerForm;