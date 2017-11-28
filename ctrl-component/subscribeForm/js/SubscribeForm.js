'use strict';

class SubscribeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            formValid: true
        };
        this.changeEmail = this.changeEmail.bind(this);
    }

    changeEmail(event) {
        this.setState({
            email: event.currentTarget.value,
            formValid: event.currentTarget.validity.valid
        });
    }

    render() {
        return (
            <div className="subscribe__form">
                <form className={`form form--subscribe ${this.state.formValid ? 'is-valid' : 'is-error'}`}>
                    <h4 className="form-title">Подписаться:</h4>
                    <div className="form-group">
                        <label htmlFor="input-email" className="sr-only">Email</label>
                        <input
                            type="email"
                            id="input-email"
                            placeholder="Email"
                            className="form-control"
                            value = {this.state.email}
                            onChange = {this.changeEmail}
                        />
                        <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
                        <button type="submit" className="form-next">
                            <i className="material-icons">keyboard_arrow_right</i>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}