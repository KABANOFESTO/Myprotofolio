
import React, { useEffect, useRef } from 'react';
import festo from '../assets/images/f.jpg';
import $ from 'jquery';
import '../tools/Typerwriter';
import { Link } from 'react-router-dom';

const Banner = () => {
    const typewriteTextRef = useRef(null);

    useEffect(() => {
        const typewriteText = typewriteTextRef.current;
        if (typewriteText) {
            $(typewriteText).typewrite({
                speed: 8,
                blinkSpeed: 2,
                showCursor: true,
                blinkingCursor: true,
                cursor: "|",
                selectedBackground: "#F1F1F1",
                selectedText: "#333333",
                actions: [
                    { type: '“Coding is My Passion!!!”' },
                    { delay: 1000 },
                    { remove: { num: 25, type: '' } },
                    { type: 'Make it Work! Make it Right!' },
                    { delay: 1000 },
                    { remove: { num: 28, type: '' } },
                    { type: '“Coding is My Passion!!!”' },
                ],
            });
        }
    }, []);
    return (
        <>
            <section class="w-full py-5 min-h-full body-section ">
                <div class="container homeBody">
                    <div class="row align-items-center ">
                        <div class="col-md-6">
                            <div class="card mx-auto">
                                <div class="card-body text-start">
                                    <h1 class="card-title">Hey! My name is</h1>
                                    <h4>KABANO  Festo</h4>
                                    <p class="card-text">A results-driven software developer with a fervor for creating robust and innovative solutions. My journey in the realm of coding.</p>
                                    <div class="button-container">
                                        <a href="#" class="btn btn-success">Hire Me</a>
                                        <a href="#" class="btn btn-secondary">Learn More</a>
                                    </div>
                                    <div class="socials mt-4">
                                        <a class="social-item" href="https://www.facebook.com/kabano.festo"><i class="bi bi-facebook"></i></a>
                                        <a class="social-item" href="https://www.linkedin.com/in/festo-kabano-3b5150251/"><i class="bi bi-linkedin"></i></a>
                                        <a class="social-item" href="https://github.com/KABANOFESTO"><i class="bi bi-github"></i></a>
                                        <a class="social-item" href="https://www.instagram.com/kbb.32/"><i class="bi bi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <img
                                className="img-body"
                                src={festo}
                                alt="KABANO U. Festo"
                                style={{
                                    boxShadow: '0.5 2rem 2.5rem rgba(0, 0, 0,0.45)',
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="copyRight text-center">
                        <p id="typewriteText" ref={typewriteTextRef}></p>
                        <p>“Means with coding, I can do whatever you want: Just DM me”</p>
                    </div>
                </div>
                <hr />
            </section>
        </>
    );
}

export default Banner;