// Dependencies
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxDecored = props => {
  const { classes = { formControlLabel: '', checkbox: '' },
    label = "",
    color = null,
    value = "noneThis",
    checked = false,
    handleOnChange = e => console.log('CHECKBOXDECORED>:', e.target.checked, e.target.value) } = props;
  //
  return <FormControlLabel
    className={classes.formControlLabel}
    label={label}
    control={
      <Checkbox
        className={classes.checkbox}
        color={color || "default"}
        checked={checked}
        onChange={handleOnChange}
        value={value} />
    }
  />
}

export default CheckboxDecored;

export const propsCheckboxBuilder = _props => ({
  label: _props.label,
  value: _props.valuetext || "none", //_props.props[_props.valuetext]
  color: _props.color || "default",
  handleOnChange: _props.props.handleOnChangeCheckbox,
  checked: _props.checked,
  //required: _props.props.requiredList && _props.props.requiredList[_props.valuetext] && _props.props.requiredList[_props.valuetext].required,
  classes: _props.props.classes
})
