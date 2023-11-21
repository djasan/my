import ListMenu from '../ListMenu/ListMenu';
import "./Menu.css";
const Menu = (props)=>{
    return(
        <nav>Hello wordl

            <ListMenu sendEntries= {props.sendEntries}></ListMenu>
        </nav>
    )
}
export default Menu;
