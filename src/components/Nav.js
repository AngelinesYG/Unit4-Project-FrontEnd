import React from 'react'

class Nav extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <nav>
                    <h1>bingo</h1>
                    <ul>
                        <a href="#add"><li>add a buddy</li></a>
                        <a href="#weather"><li>weather</li></a>
                        <a href="#map"><li>parks near me</li></a>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav
