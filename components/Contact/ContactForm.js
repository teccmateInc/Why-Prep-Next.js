import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl';

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = ({ t }) => {

    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        console.log(contact)
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            await axios.post(url, payload);
            console.log(url);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    return (

        <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder={t('d.name')}
                                className="form-control"
                                value={contact.name}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.name && 'Please enter your name'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder={t('d.email')}
                                className="form-control"
                                value={contact.email}
                                onChange={handleChange}
                                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.email && 'Please enter your email'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="number"
                                placeholder={t('d.phone')}
                                className="form-control"
                                value={contact.number}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.number && 'Please enter your number'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder={t('d.subject')}
                                className="form-control"
                                value={contact.subject}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.subject && 'Please enter your number'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <textarea
                                name="text"
                                cols="30"
                                rows="5"
                                placeholder={t('d.message')}
                                className="form-control"
                                value={contact.text}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.text && 'Write your message'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-sm-12">
                        <button type="submit" className="btn btn-primary">{t("d.button")}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;