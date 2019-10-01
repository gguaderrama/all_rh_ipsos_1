export const styles = theme => ({
  formControl: {
    width: '100%',
    height: '1px'
  },
  resize: {
    fontSize: 13
  },
  textField: {
    margin: '0 0 5px',
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#9c9c9c !important"
  },
  root: {
    //   borderWidth: "1px",
    // borderColor: "red !important",
    height: '0px',
    '& $notchedOutline': {
      borderColor: "red !important"
    },
  },
  disabled: { color: '#919191' },
})
