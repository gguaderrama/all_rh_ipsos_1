// Dependencies
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// material
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import OutlinedInput from '@material-ui/core/OutlinedInput';

// Styles
import { styles } from './styles';

const SelectDecoredMain = props => {
  // Herited styles
  const { classes } = props;
  const {
    style,
    label = 'Label no definido',
    value = '',
    keySelect = '',
    valueSelect = '',
    inputProps = { id: { name }, value: 'demo' },
    itemList = [],
    renderValue,
    disabled = false,
    onEmptyMsg = 'Empty select...',
    required = false,
    // about Error validate
    texto = '',
    error = null,
    warning = null,
    multiple,
    placeholder,
    name = null,
    // Redux form props
    //meta={},

    handleOnChange,
    onChange = null,
    handleOnFocus = null,
    onFocus = null,
    handleOnBlur = null,
    onBlur = null,
  } = props;
  const finalValue = multiple ? (value || []) : (value || (placeholder ? ' ' : ''));

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    // console.log(inputLabel.current.offsetWidth)
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return (
    <FormControl className={classes.formControl} error={!!error} style={style} required={!!required} variant="outlined" className={classes.formControl}>
      {label && <InputLabel htmlFor={inputProps.id} margin="dense" ref={inputLabel} error={false}>{label}</InputLabel>}
      <Select
        value={value}
        classes={{
          root: classes.root,
          disabled: classes.disabled,
        }}
        onChange={onChange || handleOnChange}
        onBlur={onBlur || handleOnBlur}
        className={classes.resize}
        input={<OutlinedInput labelWidth={labelWidth} classes={{ input: classes.resize }} name={name} id="outlined-age-simple" />}
      >
        {itemList && itemList.map(x => <MenuItem key={x[keySelect]} value={x[keySelect]}>{x[valueSelect]}</MenuItem>)}
      </Select>
      <FormHelperText style={{ marginTop: '5px' }}>{texto && <span>{texto} </span>}
        {error && <Icon style={{ position: 'relative', fontSize: '13px', padding: '0', top: '3px'/*, fontSize: '1.25em'*/ }}>error</Icon>}
        {(error
          && <span> {typeof (error) === "boolean" ? "Error..." : error}</span>)
          || (warning && <span>{typeof (warning) === "boolean" ? "Warning..." : warning}</span>)
        }
      </FormHelperText>
    </FormControl>
  );
}

const SDecored = withStyles(styles)(props => <SelectDecoredMain {...props} />);
const SelectDecored = props => <SDecored {...props} />;
export default SelectDecored;

SelectDecored.displayName = 'SelectDecored';

SelectDecored.propTypes = {
  label: PropTypes.string,
  onEmptyMsg: PropTypes.string
};
