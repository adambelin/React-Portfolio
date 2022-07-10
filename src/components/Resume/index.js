import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <button>
        <a href="https://www.linkedin.com/in/adam-belin-803112167/" target="blank">Find my resume here!</a>
        </button>
      </div>
    </section>
  );
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

export default Resume;
