import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tohImg from "../assets/toh-github.png";
import deduceImg from "../assets/deduce-github.png";
import clockAppImg from "../assets/aca-github.png";
import nlpImg from "../assets/nlp-github.png";
import twenty48Img from "../assets/2048-github.png";
import tictactoeImg from "../assets/tictactoe-github.png";
// import { Link } from "react-router-dom";

class Project extends React.Component {
    render () {
        return (
            <section id="proj-section">
                <h1 className="proj-section-title text-center">Portfolio</h1>
                <hr className="section-hr border border-primary border-2 opacity-75 mx-auto"></hr>
                <Container className="mygrid" fluid="md">
                    <Row className="m-1">
                        <Col className="col-lg-4 mt-3" xs={6}>
                            <div className="proj-link">
                                <a href="https://github.com/bramirez246/Course-work/tree/main/Towers-of-hanoi/toh.cpp" target="_blank" rel="noreferrer noopener">
                                    <div className="proj-image">
                                        <img alt="towers of hanoi" src= {tohImg} width={"400px"} className="rounded dynamic-sizing"/>
                                        <div className="proj-content text-center">
                                            <h3 className="proj-title">Towers of Hanoi</h3>
                                            <p className="proj-lang text-wrap">Language: C++</p>
                                            <p className="proj-descr text-wrap text-break">
                                                    This program uses A* algorithm to find the optimal path. Once it reaches the goal, it will display the optimal path for
                                                    you from goal state to initial state.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </Col>

                        <Col className="col-lg-4 mt-3" xs={6}>
                            <div className="proj-link">
                                <a href="https://github.com/bramirez246/Course-work/blob/main/Deduce-program/deduce.cpp" target="_blank" rel="noreferrer noopener">
                                    <div className="proj-image">
                                        <img alt="deduce program" src={deduceImg} width={"400px"} className="rounded dynamic-sizing"/>
                                        <div className="proj-content text-center">
                                            <h3 className="proj-title">Deduce Program</h3>
                                            <p className="proj-lang text-wrap">Language: C++</p>
                                            <p className="proj-descr text-wrap text-break">
                                                    This program will deduce a logical conclusion based on a few implication rules and facts
                                                stored in text files (kb1-kb6). Implication rules only include AND or OR statements.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </Col>

                        <Col className="col-lg-4 mt-3" xs={6}>
                            <div className="proj-link">
                                <a href="https://github.com/bramirez246/Course-work/tree/main/Alarm%20Clock%20App" target="_blank" rel="noreferrer noopener">
                                    <div className="proj-image">
                                        <img alt="alarm clock (kotlin)" src={clockAppImg} width={"400px"} className="rounded dynamic-sizing"/>
                                        <div className="proj-content text-center">
                                            <h3 className="proj-title">Alarm Clock App</h3>
                                            <p className="proj-lang text-wrap">Language: Kotlin</p>
                                            <p className="proj-descr text-wrap text-break">
                                                   This was a group project, in which I was in charge of the timer fragment. It is a basic alarm clock that features a timer, 
                                                stop watch, alarm, and a pomodoro clock.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </Col>

                        <Col className="col-lg-4 mt-3" xs={6}>
                            <div className="proj-link">
                                <a href="https://github.com/bramirez246/Course-work/blob/main/NLP%20Probabilities/probabnlp.cpp" target="_blank" rel="noreferrer noopener">
                                    <div className="proj-image">
                                        <img alt="nlp probabilities" src={nlpImg} width={"400px"} className="rounded dynamic-sizing"/>
                                        <div className="proj-content text-center">
                                            <h3 className="proj-title">NLP Probabilities</h3>
                                            <p className="proj-lang text-wrap">Language: C++</p>
                                            <p className="proj-descr text-wrap text-break">
                                                This program calculates the probabilty of any given trigram. The program uses trigram probabilities stored in files.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </Col>

                        <Col className="col-lg-4 mt-3" xs={6}>
                            <div className="proj-link">
                                <a href="https://github.com/bramirez246/PersonalProjects/blob/main/2048/main.py" target="_blank" rel="noreferrer noopener">
                                    <div className="proj-image">
                                        <img alt="2048" src={twenty48Img} width={"400px"} className="rounded dynamic-sizing"/>
                                        <div className="proj-content text-center">
                                            <h3 className="proj-title">2048</h3>
                                            <p className="proj-lang text-wrap">Language: Python</p>
                                            <p className="proj-descr text-wrap text-break">
                                                    This 2048 program uses linear algebra to transpose the grid as a matrix of values to simplify up and down movements.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </Col>

                        <Col className="col-lg-4 mt-3" xs={6}>
                            <div className="proj-link">
                                <a href="https://github.com/bramirez246/PersonalProjects/blob/main/TicTacToe_with_AI/tictac.cpp" target="_blank" rel="noreferrer noopener">
                                    <div className="proj-image">
                                        <img alt="tictactoe" src={tictactoeImg} width={"400px"} className="rounded dynamic-sizing"/>
                                        <div className="proj-content text-center">
                                            <h3 className="proj-title">Tic Tac Toe</h3>
                                            <p className="proj-lang text-wrap">Language: C++</p>
                                            <p className="proj-descr text-wrap text-break">
                                                This game of Tic Tac Toe features 3 ways to play. The user can play PvP, PvAI, or AIvAI.
                                                The program uses a min-max algorithm for the AI component.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="spacer bg-waves2"></div>
            </section>
        )
    }
}

export default Project;