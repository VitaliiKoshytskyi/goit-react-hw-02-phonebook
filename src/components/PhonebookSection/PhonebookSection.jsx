import css from './PhonebookSection.module.css'


const PhonebookSection = ({title,children}) => {
    

    return (
        <div>
            <h3 className={css.title}>{title}</h3>
            {children}

        </div>
    )
}

export default PhonebookSection