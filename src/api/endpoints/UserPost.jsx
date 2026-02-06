import React from 'react';

const UserPost = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((json) => {
                console.log(json);
                return json;
            });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default UserPost;
