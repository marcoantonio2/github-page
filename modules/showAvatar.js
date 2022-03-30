export const showAvatarInfo = (item, container) => {

        const { avatar_url:avatarImg, login, name,   } = item;
            container.innerHTML += `
            <img src="${avatarImg}" />
            <h2>${login}</h2>
            <h5>${name}</h5>
    
            <button>Follow</button>
            <button>Sponsor</button>
    `

    }