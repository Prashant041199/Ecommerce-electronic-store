import './Footer.css'

import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div className='container footer-container'>
                    <div className='overflow-getstarted'>
                        <div>
                            <p>Ready to get Started ?</p>
                            <p>Talk to us today</p>
                        </div>
                        <div>
                            <NavLink type='button' className='btn btn-dark' to='/contact'>Get Started</NavLink>
                        </div>

                    </div>
                    <div className='footer-flex'>
                        <div className='address'>
                            <h5>Electronic Store</h5>
                            <br></br>
                            <p>&copy; of Prashant singh</p>
                        </div>
                        <div className='address'>
                            <h5>Follow us on</h5>
                            <br></br>
                            <div className='social-flex'>
                                <a href='#'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbklEQVR4nM2WsUrDUBSGu7i1guBgcBN9ABEnwVUnl2odXByVQMXJF+gzaNNWn6NWcHBwl+rg4kuoGKdPLtzhWG5yTtq09IcLIdz/fiTnP8mpVOZRwCJwDNwCA+DVL3fdAxpuTxmgVaAL/KIrBRIgGhfWBL4pri8gLgJa8E81qRJ3lgXYpjzdWV6jphfgBNgEdoFTH6YsxXkB0Wr2DlQD3mWlplEIaKnbRcC3BKwrviTUZ5bo7wvPHvCDTSlQk0DX1BZtCc8lxXQkgXlFd/oAHoAN4an7e249GYBdCXSmPLWUdO8YgPfS8DYh0NJOQ2kYKpsfgStgRXi2/T23nosCB0w/NH0J7M0A2JHAxgyAdQmsGpt4XGD6r/H9AckUgdehaEf+Q1s28FOmexQaK+YDYM2vlhF4ltW/s/8BixHDUk9NbdOIMfJ6tZpm1ezcDAoEKfGx1uTa6iYzIAXBNfc/81NBXwzC7roDHIZGj7nQH5l2x+UgMWysAAAAAElFTkSuQmCC"/></a>
                                <a href='#'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnUlEQVR4nM2XQU7CQBRA60L2ohH2BhEXbNirCSFewETROyCoV0C9gcgt9ABGPYRxJZqgG9CtRBKf+eabNGNLp2Wa8JLZTKfzmJn/px/Pm1WAPFAGKpZNxuaTyhaBc+CF5DwDZzKXrXQb+MAd70DNRjrGPeNQObDkeKUmQyAbJJYzdcUDcAV8G/2npnRuykAyyem810Z/LyhlbOkDHaClraN9fnZ0zseA95f9Ysm9KEZAA5gHSsCBtjXtO9QxUZT9Ykn8SXwCG8AqcB/w/A4oAJsW8koccUOlEplhDFXedCXu61YGrdTkFsgAry7EF8A69siZX7oQt4D9GOI94NiF+AioxxDvAieutroUQ1x0tdV9DS5JmShuNLjeXIjRFClEpNMAWNGYwJV4pJdDQVMmaKUi3Yp7gZQjBv/Jm7qVRQ24ul4sGQ3C2FdmHnvkcuj6PhLdiDMN/0gIwBPp0/NMtDBLm3ZYZSmFWVoMgIV/YpXXUir2voBqoNSQT8rXJCutTpT65FkpzCQYphBKsLZDt9eL/hG5BH9hfou9meQHO/aT+J3d0xMAAAAASUVORK5CYII="/></a>
                                <a href='#'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB20lEQVR4nM3Wu49NURTH8ZsZ45GYymNKj0I3lUZ0GsWgkBATvcQUKv8ACpnxKDQSzSBcao9OMcQolCoNEwUKlVfMSPCRHVuyHfuc+zjnJPNNbnPy2/t399prrb06ndUONuAQLqKLJ/HXjd8OYn2ThjtwE1/1JmhuhDV1DNfhMr4bnJUYhbWDmm7GY/V5hol+TSewpDleY2sv07GGTlpkMVxdlXG407a4UGa6sySRfuEKZmLYhmUF23PGoWRynE80R9Xjeq455Or0G8YLOfC2hvGXf5pM7Eg5XmYic0Y9DqSbhWLP8SFjfK2xJMOdCuHuRHc4JlsduqnxQoXwXqLbgx81jRdS41DgVUwn2tNNGj/oIf6EyUR/NhPyR3g1aKgv9bHgDbYVKuFvT7+PEYziGF5U7DPXGaIxvCucfE0cADYWMn+04vRTqXAcy32af8TxYpkVjMdKGtLn/x4L3DIY4RXbH05X2Gck9vYc87l/OWk4Qgu9ilM4VxHi5TRHUuO92mW27F5CibTF09L5C89bMg2h31Jmugk/WzBdrBz2MN2wYUik2Z7jrT9DeMp73MVJ7IvTST91Hup0Ppu9nbzxHG7jBHaVaEKTORLeUzyMYQy1HNaFb1OVk+Rq4TdhSJDd7NjITAAAAABJRU5ErkJggg=="/></a>
                            </div>
                        </div>
                        <div className='address'>
                            <h5>Call us</h5>
                            <br></br>
                            <p>(+91) 1234567890 </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer