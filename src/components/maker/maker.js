import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';


const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
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
        {
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
        {
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
    ])
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
    return (
        <section className={styles.maker} >
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
}

export default Maker;