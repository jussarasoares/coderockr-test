import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import './styles.css';

function Contact() {
  const { handleSubmit, register, errors } = useForm();

  function onSubmit(values) {
    console.log(values);
    toast.success('Saved successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="contact">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <fieldset className="contact__fieldset">
          <h1>Contact</h1>
          <Input
            ref={register({
              required: 'This field is required',
            })}
            name="name"
            label="Name"
            placeholder="Fill your full name"
            error={errors.name}
          />

          <Input
            ref={register({
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            name="email"
            type="email"
            label="E-mail"
            placeholder="Fill your full email"
            error={errors.email}
          />

          <Input
            ref={register({
              required: 'This field is required',
            })}
            name="phone"
            label="Phone"
            placeholder="Fill your phone"
            error={errors.phone}
          />

          <Textarea
            ref={register({
              required: 'This field is required',
            })}
            name="post"
            label="Post"
            placeholder="Hello..."
            error={errors.post}
          />
        </fieldset>
        <div className="contact__submit">
          <button type="submit" className="contact__submit--button">
            <FontAwesomeIcon icon={faLocationArrow} /> Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
