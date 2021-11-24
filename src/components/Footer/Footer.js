import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './Footer.css';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        backgroundImage: 'url(/Users/l/my-react-website/src/images/bg copy.png)',
        boxShadow: 'inset 0px 1px 0px 0px rgba(0, 0, 0, 0.05), inset 0px 2px 3px 0px rgba(0, 0, 0, 0.1)',
        padding: '8em 0 8em 0',
        textAlign: 'center'
    },
    style4: {
        backgroundColor: '#303030',
        color: '#999',
        textShadow: '-1px -1px 0px #181818'
    },
    container: {
        margin: '0 auto',
        maxWidth: 'calc(100% - 50px)',
        width: '1200px'
    },
    medium: {
        width: '900px'
    }
}))




function Footer() {
    const classes = useStyles();

    return (
        <div id='contact' className={` ${classes.wrapper} ${classes.style4} `}>
            <div className={` ${classes.container} ${classes.medium} `}>
                <header>
                    <h2>Talk to me.</h2>
                </header>
                <div className="row">
                        <form method='post' action="#">
                            <div className="row">
                                <div className="col-6 col-12-small">
									<input type="text" name="name" id="name" placeholder="Name" />
								</div>
                                <div className="col-6 col-12-small">
									<input type="text" name="email" id="email" placeholder="Email" />
								</div>
								<div className="col-12">
									<input type="message" name="subject" id="subject" placeholder="Subject" />
								</div>
                                <div className="col-12">
									<textarea name="message" id="message" placeholder="Message"></textarea>
								</div>
                                <div className="col-12">
                                    <ul className="actions">
                                        <li><input type="submit" value="Send Message" /></li>
                                        <li><input type="reset" value="Clear Form" className="alt" /></li>
                                    </ul>
								</div>
                            </div>
                        </form>
                    <div className="col-12">
                        <hr />
                        <h3>Social Media</h3>
                        <ul className='social'>
                            <li><a href="https://twitter.com/sufitogoofies" class="icon brands fa-twitter"><span className='label'>Twitter</span></a></li>
                            <li><a href="https://www.linkedin.com/in/amcortez92" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
                            <li><a href="https://github.com/alexlitocortez" class="icon brands fa-github"><span class="label">Github</span></a></li>
                        </ul>
                        <hr />
                    </div>
                </div>
                <footer>
                    <ul id="copyright">
                        <li style={{ listStyle: 'none' }}>&copy; Untitled. All rights reserved.</li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer
