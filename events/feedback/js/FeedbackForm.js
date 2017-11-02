'use strict';

function FeedbackForm({data, onSubmit}) {
    let nameField,
        emailField,
        subjectField,
        messageField,
        form;

    const saveForm = event => {
        event.preventDefault();
        let salutationField = form.querySelector('input[type=radio]:checked');
        let snacksFields = form.querySelectorAll('input[type=checkbox]:checked');
        let snacks = Array.from(snacksFields).map(item => item.value);
        const result = {
            [nameField.name]: nameField.value,
            [emailField.name]: emailField.value,
            [subjectField.name]: subjectField.value,
            [messageField.name]: messageField.value,
            [salutationField.name]: salutationField.value,
            snacks: snacks
        };
        onSubmit(JSON.stringify(result));
    };

    return (
        <form className="content__form contact-form" ref={element => form = element} onSubmit={saveForm}>
            <div className="testing">
                <p>Чем мы можем помочь?</p>
            </div>
            <div className="contact-form__input-group">
                <input className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value="Мистер" defaultChecked={data.salutation === 'Мистер'}/>
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
                <input className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" value="Мисис" defaultChecked={data.salutation === 'Мисис'}/>
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
                <input className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" value="Мис" defaultChecked={data.salutation === 'Мис'}/>
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="name">Имя</label>
                <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" defaultValue={data.name} ref={element => nameField = element}/>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
                <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={data.email} ref={element => emailField = element}/>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
                <select className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={data.subject} ref={element => subjectField = element}>
                    <option>У меня проблема</option>
                    <option>У меня важный вопрос</option>
                </select>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
                <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" defaultValue={data.message} ref={element => messageField = element}></textarea>
            </div>
            <div className="contact-form__input-group">
                <p className="contact-form__label--checkbox-group">Хочу получить:</p>
                <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца" defaultChecked={data.snacks && data.snacks.includes('пицца')}/>
                <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
                <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог" defaultChecked={data.snacks && data.snacks.includes('пирог')}/>
                <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
            </div>
            <button className="contact-form__button" type="submit">Отправить сообщение!</button>
            <output id="result" />
        </form>
    )
}