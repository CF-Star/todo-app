import './Header.scss';
import {VscTasklist} from 'react-icons/vsc'

function Header() {
    return (
        <header>
            <div className='title'> <VscTasklist className='taskIcon'/> Todo App</div>
            <div className='author'>by Chloe Fines</div>
        </header>
    );
}

export default Header;