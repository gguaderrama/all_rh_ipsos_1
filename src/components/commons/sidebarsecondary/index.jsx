import React from "react";
import Sidebar from "react-sidebar";
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import SidePan from '../SideBar';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }
    render() {
        return (
            <Sidebar
                sidebar={<SidePan></SidePan>}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { width: '20%', height: '100%',borderColor:'#00AFA9',borderStyle:'solid',background: "white", } }}
                pullRight={true}
            >
                <Button style= {{ marginTop:'10%',marginLeft:'15%', width:'200px',height:'200px',background:'#00AFA9'}} className="btn-info" onClick={() => this.onSetSidebarOpen(true)}>
                    <InfoIcon fontSize="small" style={{ color: 'white' }} />
                </Button>
            </Sidebar>
        );
    }
}
export default App;







