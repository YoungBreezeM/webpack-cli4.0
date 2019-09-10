import _ from 'lodash';
import './style.css';
import icon from './icon.png';
// import printMe from "./print";
import {square} from "./math"
function component() {
    var element = document.createElement('div');
    let btn = document.createElement('button');
    // Lodash（目前通过一个 import 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'],square(5));
    element.classList.add('hello');

    btn.innerText='点击我';
    btn.onclick = e=>import('./print').then(module=>{
        module.default();
    });
    element.appendChild(btn);
    let image = new Image();
    image.src = icon;
    element.appendChild(image);
    return element;
}

document.body.appendChild(component());
// if (module.hot) {
//     module.hot.accept('./print.js', function() {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }