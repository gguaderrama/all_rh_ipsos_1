import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class AppTopbar extends Component {

    static defaultProps = {
        onToggleMenu: null
    }

    static propTypes = {
        onToggleMenu: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="layout-topbar clearfix">
                <button className="p-link layout-menu-button" onClick={this.props.onToggleMenu}>
                    <span className="pi pi-bars"/>
                </button>
                <div className="layout-topbar-icons">
                    <button className="p-link">
                        <span className="layout-topbar-item-text">Alertas</span>
                        <span className="layout-topbar-icon pi pi-exclamation-triangle"/>
                        <span className="layout-topbar-badge">5</span>
                    </button>
                    <button className="p-link">
                        <span className="layout-topbar-item-text">Notificaciones</span>
                        <span className="layout-topbar-icon pi pi-envelope"/>
                        <span className="layout-topbar-badge">5</span>
                    </button>
                    <button className="p-link">
                        <span className="layout-topbar-item-text">Avisos</span>
                        <span className="layout-topbar-icon pi pi-bell"/>
                        <span className="layout-topbar-badge">5</span>
                    </button>
                    
                </div>
            </div>
        );
    }
}