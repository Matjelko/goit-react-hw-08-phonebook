import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { TextField, Typography } from '@mui/material';

import PropTypes from 'prop-types';
import './Filter.css'

const Filter = () => {
    const dispatch = useDispatch();

    const handleChange = () => {
        const filter = document.querySelector('#filter-input').value

        dispatch(setFilter(filter))
    }

    return (
        <div className="filter__section">
            <Typography className="filter__paragraph">Find contacts by name</Typography>
            <TextField
                size='small'
                id="filter-input"
                type="text"
                name="name"
                title="title"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                onChange={handleChange}
            />
        </div>
    )
}

Filter.propTypes = {
    handleChange: PropTypes.func
}

export default Filter