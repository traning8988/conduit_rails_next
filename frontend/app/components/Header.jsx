import Link from "next/link";

export default function Header() {
  return(
    <header>
      <nav class="navbar navbar-light">
        <div class="container">
          <a class="navbar-brand" href="/">conduit</a>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              <a class="nav-link active" href="/">Home</a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/login">Sign in</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/register">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};