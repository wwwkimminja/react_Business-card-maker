import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';


const Maker = ({ FileInput, authService }) => {
    const [cards, setCards] = useState({
        "1": {
            id: '1',
            name: 'Ellie',
            company: 'Samsung',
            theme: 'light',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'elle',
            fileURL: null,
        },
        "2": {
            id: '2',
            name: 'Ellie2',
            company: 'Samsung',
            theme: 'dark',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'elle',
            fileURL: null,
        },
        "3": {
            id: '3',
            name: 'Ellie3',
            company: 'Samsung',
            theme: 'colorful',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'elle',
            fileURL: null,
        },
    })
    const navigate = useNavigate();
    const onLogout = () => {
        authService.logout();

    }
    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                navigate("/");
            }
        });
    });


    const CreateOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        })

    }
    const deleteCard = (card) => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        })
    }
    return (
        <section className={styles.maker} >
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor FileInput={FileInput} cards={cards} addCard={CreateOrUpdateCard} updateCard={CreateOrUpdateCard} deleteCard={deleteCard} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
}

export default Maker;