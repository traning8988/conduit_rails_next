'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await fetch('http://localhost:3000/api/users',
        { method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          cache: 'no-store',
          body: JSON.stringify({
            user: {
              name: username,
              email: email,
              password: password
            }
          })
        }
      )
      const data = await res.json();
      if(res.ok){
        localStorage.setItem('token', data.user.token);
        console.log('登録成功')
        router.push("/");
      } else {
        setErrorMessage(data.errorMessage ||'Registration failed');
      }
    } catch (error){
        setErrorMessage('An error occurred during signUp');
    };
  };

  return(
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link href="/login">Have an account?</Link>
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
                  type="text" 
                  placeholder="Username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg" 
                  type="text" 
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
                  onChange={(e) => setPassword(e.target.value)} />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};