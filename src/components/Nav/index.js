import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
    return (
    <nav className="nav">
        <Link to="/">
            <a>Adam Belin</a>
        </Link>
        <ul>
            <CustomLink to="/Portfolio">My Portfolio</CustomLink>
            <CustomLink to="/Contact">Contact Me!</CustomLink>
            <CustomLink to="/Resume">My Resume</CustomLink>
        </ul>
    </nav>

    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}