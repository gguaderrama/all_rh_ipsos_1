// Dependencies
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Icon from '@material-ui/core/Icon';

// Styles
import { styles } from './styles';

const RadiobuttonGroupMain = props => {
  const { classes,
    label = null,
    name = "noName",
    radioList = [{label:'Inner label 1', valuetext: 'innerValue1'}, {label:'Inner label 2', valuetext: 'innerValue2'}],
    value = null,
    //labelPlacement = null,
    color = null,
    style = null,
    suited = 'row',
    visible = true,
    required = null,
    // flexbox
    justifyContent = null,

    // about Error validate
    error = null,
    warning = "",
    texto = '',
    // Redux form props
    //meta = {},

    handleOnChange = e => console.log('RADIOGROUP>', e.target),
    onChange = null,
    handleOnFocus = null,
    onFocus = null,
    handleOnBlur = null,
    onBlur = null,
  } = props;

  if(!visible)
    return null;

  const radioListRender = ({disabled, labelPlacement}) => radioList.map(i =>
    <FormControlLabel key={i.valuetext}
      style={i.label ? null : {marginRight: 0}}
      disabled={disabled}
      label={i.label || i.key}
      value={i.valuetext || i.name || i.value}
      labelPlacement={labelPlacement || "end"}
      control={<Radio color={color || "default"} checked={i.checked} />}
    />);

  return (<FormControl className={classes.formControl} style={style} error={!!error} component="fieldset" required={!!required}>
    { label && <FormLabel component="legend">{label}</FormLabel> }
    <RadioGroup aria-label={name} name={name}
      style={justifyContent && {display:'flex', justifyContent: justifyContent}}
      value={value}
      onChange={ onChange || handleOnChange}
      onFocus={ onFocus || handleOnFocus}
      onBlur={ onBlur || handleOnBlur}
      children={radioListRender(props)} row={suited === 'row' || false}/>
    <FormHelperText style={{marginTop:'0px'}}>{texto && <span>{texto} </span>}
      {error && <Icon style={{position: 'relative', fontSize:'13px', padding:'0', top:'3px'}}>error</Icon>}
      {(error
        && <span> { typeof(error) === "boolean" ? "Error..." : error }</span>)
        || (warning && <span>{ typeof(warning) === "boolean" ? "Warning..." : warning }</span>)
      }
      {/*meta.touched && meta.error && <Icon style={{fontSize:'13px', marginRight:'5px'}}>error</Icon>*/}
      {/*meta.touched && ((meta.error && <span>{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>))*/}
    </FormHelperText>
  </FormControl>);
}

const RGroup = withStyles(styles)(props => <RadiobuttonGroupMain {...props} />);
const RadiobuttonGroup = props => <RGroup {...props}/>;
export default RadiobuttonGroup;

RadiobuttonGroup.displayName = 'RadiobuttonGroup';
