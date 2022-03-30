import { getRepoInfo } from "../helpers/getInfo.js";
import { showAvatarInfo } from "../modules/showAvatar.js";
import { showRepoInfo } from "../modules/showRepoInfo.js";
let contenedorRepos = document.getElementById('contenedor-repositorios');


document.addEventListener('DOMContentLoaded', async () => {
         let userName = localStorage.getItem('user');

         let repos = await getRepoInfo(`https://api.github.com/users/${userName}/repos`)
         .then(res => res)

       showRepoInfo(repos, contenedorRepos);


       let avatar = await getRepoInfo(`https://api.github.com/users/${userName}`)
       .then(res => res)
       console.log(avatar);
       showAvatarInfo(avatar, document.getElementById('izquierda'));
})