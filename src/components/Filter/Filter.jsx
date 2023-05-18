import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import PropTypes from 'prop-types';
import './Filter.css'
import { TextField, Typography } from '@mui/material';

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
                className="filter__input"
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