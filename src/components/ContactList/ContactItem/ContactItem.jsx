


import css from './ContactItem.module.css'


const ContactItem = ({id,name,number,deleteContactHandler}) => {
    
    return (
        <li className={css.item} >
            <p>{name} : {number}</p>
            <button onClick={() => deleteContactHandler(id)}>Delete</button>
        </li>
    )
}

export default ContactItem