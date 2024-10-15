'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react"


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        cache: 'no-store',
        body: JSON.stringify({
          user: {
            email: email,
            password: password
          }
        })
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.user.token);
        router.push("/");
      } else {
        setErrorMessage(data.errorMessage);
      }
    } catch (error) {
      setErrorMessage('An error occurred during login');
    }
  };

  return(
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link href="/register">Need an account?</Link>
            </p>
            {errorMessage && (
              <ul className="error-messages">
              <li>{errorMessage}</li>
              </ul>
            )}

            <form onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )}