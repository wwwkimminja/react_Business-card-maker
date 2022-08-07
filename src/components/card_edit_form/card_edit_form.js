import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ card, updateCard, deleteCard }) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const themeRef = useRef();
    const {
        name,
        company,
        title,
        email,
        message,
        theme,
        fileName,
        fileURL,
    } = card;
    const onSubmit = () => {
        deleteCard(card);
    };
    const onChange = (event) => {
        if (event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    }
    return (
        <form className={styles.form}>
            <input ref={nameRef} onChange={onChange} className={styles.input} type="text" name="name" value={name} />
            <input ref={companyRef} onChange={onChange}
                className={styles.input}
                type="text"
                name="company"
                value={company}
            />
            <select ref={themeRef} onChange={onChange} className={styles.select} name="theme" value={theme}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input ref={titleRef} onChange={onChange} className={styles.input} type="text" name="title" value={title} />
            <input ref={emailRef} onChange={onChange} className={styles.input} type="text" name="email" value={email} />
            <textarea ref={messageRef} onChange={onChange} className={styles.textarea} name="message" value={message} />
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name="Delete" onClick={onSubmit} />
        </form>
    );
};

export default CardEditForm;
