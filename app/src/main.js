import './style.css'
import { inputListeners} from './utils/utils.js';
import { LOAD_MAIN, render} from './utils/render.js';

const main = ( ) => {

    LOAD_MAIN();
    inputListeners('#search', render);

}

main();