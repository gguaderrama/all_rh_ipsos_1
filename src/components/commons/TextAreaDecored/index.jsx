// Dependencies
import React from "react";
// material
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Icon from "@material-ui/core/Icon";
import TextField from '@material-ui/core/TextField';

// Styles
import { styles } from "./styles";

const TextAreaDecoredMain = props => {
  // Herited styles
  const { classes = { formControl: "" } } = props;
  const {
    variant = "standard",
    multiline = true,
    disabled = false,
    required = false,
    label = "",
    value = "",
    handleOnChange = e => console.log("TextFieldDecored:>", e),
    inputProps = {},
    InputLabelProps = {},
    type = null,
    placeholder = null,
    // about Error validate
    texto = "",
    error = null,
    warning = "",
    rows = false,
    rowsMax = false,
    defaultValue = false,
    // Redux form props
    //meta = {},
    name = '',
    style
  } = props;
  //

  return (
    <FormControl className={classes.formControl} error={error} style={style}>
      <TextField
        id="outlined-multiline-flexible"
        label={label}
        multiline
        rowsMax="4"
        value={value}
        name={name}
        onChange={handleOnChange}
        className={classes.textField}
        margin="normal"
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline,
            input: classes.resize
          }
        }}
        variant="outlined"
        rows={rows}
      />
      <FormHelperText style={{ marginTop: "0px" }}>
        {texto}
        {error && (
          <Icon
            style={{
              position: "relative",
              fontSize: "13px",
              padding: "0 5px",
              top: "3px" /*, fontSize: '1.25em'*/
            }}
          />
        )}
        {(error && <span>{error}</span>) || (warning && <span>{warning}</span>)}
        {/*meta.touched && meta.error && <Icon style={{fontSize:'13px', marginRight:'5px'}}>error</Icon>*/}
        {/*meta.touched && ((meta.error && <span>{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>))*/}
      </FormHelperText>
    </FormControl>
  );
};

const TFDecored = withStyles(styles)(props => (
  <TextAreaDecoredMain {...props} />
));
const TextAreaDecored = props => <TFDecored {...props} />;
export default TextAreaDecored;

TextAreaDecored.displayName = "TextAreaDecored";

TextAreaDecored.propTypes = {};
