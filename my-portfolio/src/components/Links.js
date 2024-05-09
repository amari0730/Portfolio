import './Links.css'

export const Links = () => {
    return (
        <div className="links">
            <ul>
                <li className='home'>
                    <a href="/">Home</a>
                </li>
                <li className='dp'>
                    <a href="/design-process">Design Process</a>
                </li>
                <li className='projects'>
                    <a href="/projects">Projects</a>
                </li>
            </ul>
        </div>
    )
}