// Dependencies
import React from "react";
// material
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import Icon from "@material-ui/core/Icon";
// imports
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

// Styles
import { styles } from "./styles";

const TextFieldDecoredMain = props => {
  // Herited styles
  const { classes = { formControl: "" } } = props;
  const {
    variant = "outlined",
    multiline = false,
    disabled = false,
    required = false,
    readOnly = false,
    label = "",
    value = "",
    handleOnChange = e => console.log("TextFieldDecored:>", e),
    handleOnBlur = e => console.log("TextField Blur:>", e),
    inputProps = {},
    InputLabelProps = {},
    type = null,
    placeholder = null,
    // about Error validate
    texto = "",
    name = "",
    error = null,
    warning = "",
    maxLength = "",
    search = false,
    // Redux form props
    //meta = {},
    style
  } = props;
  //

  return (
    <FormControl className={classes.formControl} error={error} style={style}>
      <TextField
        disabled={disabled}
        type={!type ? "search" : type}
        placeholder={placeholder}
        required={required}
        name={name}
        value={value}
        id="outlined-email-input"
        label={label}
        inputProps={{
          maxLength: maxLength,
          readOnly: readOnly
        }}
        InputProps={{
          classes: {
            input: classes.resize,
            notchedOutline: classes.notchedOutline
          },
          endAdornment: search === true ? (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ) : ''
        }}
        onChange={handleOnChange}
        onBlur = {handleOnBlur}
        className={classes.textField}
        // autoComplete="email"
        margin="dense"
        variant={variant}
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
          ></Icon>
        )}
        {(error && <span>{error}</span>) || (warning && <span>{warning}</span>)}
        {/*meta.touched && meta.error && <Icon style={{fontSize:'13px', marginRight:'5px'}}>error</Icon>*/}
        {/*meta.touched && ((meta.error && <span>{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>))*/}
      </FormHelperText>
    </FormControl>
  );
};

const TFDecored = withStyles(styles)(props => (
  <TextFieldDecoredMain {...props} />
));
const TextFieldDecored = props => <TFDecored {...props} />;
export default TextFieldDecored;

TextFieldDecored.displayName = "TextFieldDecored";

TextFieldDecored.propTypes = {};
