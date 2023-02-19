


import css from './Filter.module.css'
// import PropTypes from 'prop-types'


const Filter = ({name, onChange}) => {
    return (
        <input className={css.input} type="text" name={name} onChange={onChange}/>
    )
}

export default Filter;
