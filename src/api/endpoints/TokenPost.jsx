import React from 'react';

const TokenPost = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [token, setToken] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((json) => {
                console.log(json);
                setToken(json.token);
                return json;
            });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
            <p style={{ wordBreak: 'break-all' }}>{token}</p>
        </div>
    );
};

export default TokenPost;
