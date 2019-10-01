

import React from "react";
// material
import { withStyles } from "@material-ui/core/styles";
import { Button, FilledInput } from '@material-ui/core';
import TextFieldDecored from "../TextFieldDecored";
import PublishIcon from '@material-ui/icons/Publish';

class UploadDecored extends React.Component {
    constructor(props) {
      super(props);
      // Crea una referencia para guardar el elemento textInput del DOM
    }
  

  
    render() {

  const { classes = { formControl: "" } } = this.props;
  const {
    handleFileSelect = e => console.log("TextFieldDecored:>", e),
    selectedFile = '',
    width = '20%',
    label = 'Nombre del archivo',
    // Redux form props
    //meta = {},
    style
  } = this.props;
      // Informa a React de que queremos agregar la referencia `textInput` que creamos
      // en el constructor a la etiqueta <input>
      return (
      <div>
      <input
        type="file"
        style={{ display: "none" }}
        onChange={handleFileSelect}
        ref={fileInput => (this.fileInput = fileInput)}
      />
      <Button
        style={{ background: "#00AFA9" }}
        variant="outlined"
        onClick={() => this.fileInput.click()}
        component="span"
        className={classes.button}
      >
        <PublishIcon style={{ color: "white" }} />
      </Button>
      <TextFieldDecored  
            // style={ { display: this.state.selectedFile !== null ? 'block' : 'none' } }  
                style={{ width: width, marginRight: "3%" }}
                name= {label}
                value={selectedFile && selectedFile || ''}
                label={label}
                maxLength="40"
                readonly="true"
              />
    </div>
      );
    }
  }// // Dependencies

export default UploadDecored;
// import PublishIcon from '@material-ui/icons/Publish';
// // Styles
// import { styles } from "./styles";

// const UploadDecoredMain = props => {
//   // Herited styles
//   const { classes = { formControl: "" } } = props;
//   const {
//     handleFileSelect = e => console.log("TextFieldDecored:>", e),
//     selectedFile = '',
//     // Redux form props
//     //meta = {},
//     style
//   } = props;
//   //

//   return (
//     <div>
//       <input
//         type="file"
//         style={{ display: "none" }}
//         onChange={handleFileSelect}
//         ref={fileInput => (fileInput = fileInput)}
//       />
//       <Button
//         style={{ background: "#00AFA9" }}
//         variant="outlined"
//         onClick={() => fileInput.click()}
//         component="span"
//         className={classes.button}
//       >
//         <PublishIcon style={{ color: "white" }} />
//       </Button>
//       <TextFieldDecored  
//             // style={ { display: this.state.selectedFile !== null ? 'block' : 'none' } }  
//                 style={{ width: "20%", marginRight: "3%" }}
//                 name="Nombre del archivo"
//                 value={selectedFile && selectedFile || ''}
//                 label="Nombre del archivo"
//                 maxLength="40"
//                 readonly="true"
//               />
//     </div>
//   );
// };

// const TFDecored = (props => (
//   <UploadDecoredMain {...props} />
// ));
// const UploadDecored = props => <TFDecored {...props} />;
// export default UploadDecored;

// UploadDecoredMain.displayName = "UploadDecored";

// UploadDecoredMain.propTypes = {};
