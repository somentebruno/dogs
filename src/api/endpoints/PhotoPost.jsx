import React from 'react';

const PhotoPost = () => {
    const [token, setToken] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [peso, setPeso] = React.useState('');
    const [idade, setIdade] = React.useState('');
    const [img, setImg] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('peso', peso);
        formData.append('idade', idade);
        formData.append('img', img);

        fetch('https://dogsapi.origamid.dev/json/api/photo', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
            },
            body: formData,
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
                <input type="text" placeholder="Token" value={token} onChange={(e) => setToken(e.target.value)} />
                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="text" placeholder="Peso" value={peso} onChange={(e) => setPeso(e.target.value)} />
                <input type="text" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
                <input type="file" placeholder="Img" onChange={(e) => setImg(e.target.files[0])} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default PhotoPost;
