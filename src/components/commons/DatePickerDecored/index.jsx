// Dependencies
import React, { Fragment } from 'react';
// material
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Icon from '@material-ui/core/Icon';
// import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
import { InlineDateTimePicker } from 'material-ui-pickers';
import { InputAdornment } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import Grid from '@material-ui/core/Grid';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// utils
//import { splitPropsFromValueText } from 'utils/misc';

const DatePickerDecored = props => {
  const {
    classes,
    style,
    label = 'Fecha/Hora',
    value = null, //Date.now()
    name = 'name',
    //disabled = false,
    required = false,
    handleOnChange = e => console.log('DataPickerDecored:>', e),
    inputProps = {},

    // about Error validate
    texto = '',
    error = null,
    warning = "",
    inputVariant = 'outlined',
    // Redux form props
    //meta={},
  } = props;

  const _handleOnChange = e => {
    if (handleOnChange) {
      handleOnChange({
        target: { name, value: e.toDate() },
        raw: e
      })
    }
  }
  //
  return (
    <FormControl className={classes.formControl} error={error} style={style}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="dense"
          id="date-picker-dialog"
          label={label}
          format="MM/dd/yyyy"
          value={value}
          onChange={handleOnChange}
          name={name}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
              input: classes.resize
            }
          }}
          inputVariant={inputVariant}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
      <FormHelperText style={{ marginTop: '0px' }}>{texto}
        {error && <Icon style={{ position: 'relative', fontSize: '13px', padding: '0 5px', top: '3px'/*, fontSize: '1.25em'*/ }}>error</Icon>}
        {(error && <span>{error}</span>) || (warning && <span>{warning}</span>)}
        {/*meta.touched && meta.error && <Icon style={{fontSize:'13px', marginRight:'5px'}}>error</Icon>*/}
        {/*meta.touched && ((meta.error && <span>{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>))*/}
      </FormHelperText>
    </FormControl>
  );
}

const TFDecored = withStyles(styles)(props => (
  <DatePickerDecored {...props} />
));

export default TFDecored;

DatePickerDecored.displayName = 'DatePickerDecored';