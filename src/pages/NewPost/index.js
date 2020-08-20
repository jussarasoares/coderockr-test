import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import './styles.css';

function NewPost() {
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
    <div className="newpost">
      <div className="newpost__avatar">
        <img
          src="https://s3-alpha-sig.figma.com/img/2387/237e/7d7e75f574f43f33e307aa50aa867a99?Expires=1598227200&Signature=GbBIkJnFHx7isGyLNBRJenb8GmRYOFU-OccjjYw269~U6PPtYoRtzwjHj5fnJVPr0XxpI-n2s4GtzUUCacwwm9vZcH98kddmWAVHZytXyf8JVJcrXdb2BLfk6LwHMcaplRB4guEGrEWXyY9BKtLWSEOnCKgkxRUbW12QCjDPx5m6CJMZqHxxJru8~A7hGigmCbZZ5zR0A-FI1FPA-LqYwlbFC3-ZHwFYhOjdgdxhFzCjIX-4hrlOPdONnnYgzpKEzzZ-TiAtXXKjFt6MpXWBCrLHpaw0SkzLzTtt2QifVsE5m0uaEgL-juyFrMvJV5Ne-53rIM0mcFpRr8WNZNU~ZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="avatar"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <fieldset className="newpost__fieldset">
          <h1>New Post</h1>
          <Input
            ref={register({
              required: 'This field is required',
            })}
            name="title"
            label="Title"
            placeholder="Fill the title"
            error={errors.title}
          />

          <Input
            ref={register({
              required: 'This field is required',
            })}
            name="author"
            label="Author"
            placeholder="Fill the author name"
            error={errors.author}
          />

          <Input
            ref={register({
              required: 'This field is required',
            })}
            name="imageURL"
            label="Image URL"
            placeholder="Fill the image URL"
            error={errors.imageURL}
          />

          <Textarea
            ref={register({
              required: 'This field is required',
            })}
            name="post"
            label="Post"
            placeholder="Post..."
            error={errors.post}
          />
        </fieldset>
        <div className="newpost__submit">
          <button type="submit" className="newpost__submit--button">
            <FontAwesomeIcon icon={faPencilAlt} /> Create Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
