import { Link } from 'react-router-dom';
import cpp from './assets/C++.svg';
import home from './assets/home.svg';
import results from './assets/results.svg';
import signout from './assets/sign-out.svg';
import qna from './assets/qna.svg';

function CPP () {
    return (
        <>
            <header className = "sidebar">
                <Link to = "/dashboard" className='logo'>QuizQuest</Link>
                <div className="sidebar-buttons">
                    <Link to = "/dashboard">
                        <img src = {home}></img>
                        Home
                    </Link>

                    <Link to = "/results">
                        <img src = {results}></img>
                        Results
                    </Link>

                    <Link to = "/" className="sidebar-bottom">
                        <img src = {signout}></img>
                        Sign Out
                    </Link>
                </div>
            </header>

            <main className = "course-main-content">
                <h1 className="page-title">C++</h1>
                <h2 className="page-subheading">Course Details</h2>

                <div className = "course-sections">
                    <div className = "lectures-container">
                        <div className = "lectures-logo">
                            <img src = {cpp}></img>
                        </div>

                        <div className = "lectures">
                            <a href = "https://www.youtube.com/watch?v=ZzaPdXTrSb8" className = "lecture">
                                <h2 className = "lecture-title">Lecture 1: Beginner</h2>
                                <p className = "lecture-description">Description:  1-hour C++ tutorial by Programming with Mosh on YouTube.</p>
                            </a>

                            <a href = "https://www.youtube.com/watch?v=vLnPwxZdW4Y" className = "lecture">
                                <h2 className = "lecture-title">Lecture 2: Advanced</h2>
                                <p className = "lecture-description">Description:  4-hour C++ tutorial by FreeCodeCamp on YouTube.</p>
                            </a>
                        </div>
                    </div>

                    <div className = "bottom-section">
                        <div className = "course-quizzes">
                            <div className = "quizzes-logo">
                                <img src = {qna}></img>
                            </div>

                            <div className = "quizzes">
                                <Link to = "#" className = "quiz">
                                    <div className = "quiz-heading">
                                        <h2 className = "quiz-title">Quiz 1:</h2>
                                        <h2 className = "quiz1-difficulty">Easy</h2>
                                        <h2 className = "attempt-status">(Not Attempted)</h2>
                                    </div>

                                    <p className = "quiz-info">Number of Questions: 10</p>
                                    <p className = "quiz-info">Description: Easy quiz with basic C++ questions.</p>
                                </Link>

                                <Link to = "#" className = "quiz">
                                    <div className = "quiz-heading">
                                        <h2 className = "quiz-title">Quiz 2:</h2>
                                        <h2 className = "quiz2-difficulty">Medium</h2>
                                        <h2 className = "attempt-status">(Not Attempted)</h2>
                                    </div>

                                    <p className = "quiz-info">Number of Questions: 10</p>
                                    <p className = "quiz-info">Description: Moderate quiz with more challenging C++ questions. </p>
                                </Link>
                            </div>
                        </div>

                        <div className = "course-result">
                            <h2 className = "course-result-title">Course Results</h2>

                            <div className = "course-result-info">
                                <p>Quizzes Attempted: 0</p>
                                <p>Average Score: 0%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default CPP