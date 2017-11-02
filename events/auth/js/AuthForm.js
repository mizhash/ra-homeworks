'use strict';

function AuthForm({onAuth}) {
    const fields = {
        name: null,
        email: null,
        password: null
    };

    const regs = {
        password: /[^a-z0-9_]/ig,
        email: /[^a-z0-9_@\-\.]/ig
    };

    const auth = () => {
        event.preventDefault();
        onAuth && typeof(onAuth) === 'function' &&
        onAuth({
            name: fields.name.value,
            email: fields.email.value,
            password: fields.password.value
        });
    };

    const verifyField = fieldsName => fields[fieldsName].value = fields[fieldsName].value.replace(regs[fieldsName], '');

    return (
        <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={auth}>
            <div className="Input">
                <input required type="text" placeholder="Имя" ref={element => fields.name = element}/>
                <label></label>
            </div>
            <div className="Input">
                <input type="email" placeholder="Электронная почта" ref={element => fields.email = element} onChange={() => verifyField('email')}/>
                <label></label>
            </div>
            <div className="Input">
                <input required type="password" placeholder="Пароль" ref={element => fields.password = element} onChange={() => verifyField('password')}/>
                <label></label>
            </div>
            <button type="submit">
                <span>Войти</span>
                <i className="fa fa-fw fa-chevron-right"></i>
            </button>
        </form>
    );
}