import React from 'react'

export default function Dashboard() {
    return (
        <div>
            <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                <div className="app-header header-shadow">
                    <div className="app-header__logo">
                        <div className="logo-src" />
                        <div className="header__pane ml-auto">
                            <div>
                                <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="app-header__mobile-menu">
                        <div>
                            <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="app-header__menu">
                        <span>
                            <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                <span className="btn-icon-wrapper">
                                    <i className="fa fa-ellipsis-v fa-w-6" />
                                </span>
                            </button>
                        </span>
                    </div>
                    <div className="app-header__content">
                        <div className="app-header-left">
                            <div className="search-wrapper">
                                <div className="input-holder">
                                    <input type="text" className="search-input" placeholder="Type to search" />
                                    <button className="search-icon"><span /></button>
                                </div>
                                <button className="close" />
                            </div>
                            <ul className="header-menu nav">
                                <li className="nav-item">
                                    <a href="..." className="nav-link">
                                        <i className="nav-link-icon fa fa-database"> </i>
                                        Statistics
                                    </a>
                                </li>
                                <li className="btn-group nav-item">
                                    <a href="..." className="nav-link">
                                        <i className="nav-link-icon fa fa-edit" />
                                        Projects
                                    </a>
                                </li>
                                <li className="dropdown nav-item">
                                    <a href="..." className="nav-link">
                                        <i className="nav-link-icon fa fa-cog" />
                                        Settings
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="app-header-right">
                            <div className="header-btn-lg pr-0">
                                <div className="widget-content p-0">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left">
                                            <div className="btn-group">
                                                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn" href="...">
                                                    <img width={42} className="rounded-circle" src="assets/images/avatars/1.jpg" alt="..." />
                                                    <i className="fa fa-angle-down ml-2 opacity-8" />
                                                </a>
                                                <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                                    <button type="button" tabIndex={0} className="dropdown-item">User
                                                        Account</button>
                                                    <button type="button" tabIndex={0} className="dropdown-item">Settings</button>
                                                    <h6 tabIndex={-1} className="dropdown-header">Header</h6>
                                                    <button type="button" tabIndex={0} className="dropdown-item">Actions</button>
                                                    <div tabIndex={-1} className="dropdown-divider" />
                                                    <button type="button" tabIndex={0} className="dropdown-item">Dividers</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-content-left  ml-3 header-user-info">
                                            <div className="widget-heading">
                                                Alina Mclourd
                                            </div>
                                            <div className="widget-subheading">
                                                VP People Manager
                                            </div>
                                        </div>
                                        <div className="widget-content-right header-user-info ml-3">
                                            <button type="button" className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
                                                <i className="fa text-white fa-calendar pr-1 pl-1" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui-theme-settings">
                    <button type="button" id="TooltipDemo" className="btn-open-options btn btn-warning">
                        <i className="fa fa-cog fa-w-16 fa-spin fa-2x" />
                    </button>
                    <div className="theme-settings__inner">
                        <div className="scrollbar-container">
                            <div className="theme-settings__options-wrapper">
                                <h3 className="themeoptions-heading">Layout Options
                                </h3>
                                <div className="p-3">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <div className="switch has-switch switch-container-class" data-class="fixed-header">
                                                            <div className="switch-animate switch-on">
                                                                <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="success" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-left">
                                                        <div className="widget-heading">Fixed Header
                                                        </div>
                                                        <div className="widget-subheading">Makes the header top fixed, always
                                                            visible!
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <div className="switch has-switch switch-container-class" data-class="fixed-sidebar">
                                                            <div className="switch-animate switch-on">
                                                                <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="success" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-left">
                                                        <div className="widget-heading">Fixed Sidebar
                                                        </div>
                                                        <div className="widget-subheading">Makes the sidebar left fixed, always
                                                            visible!
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <div className="switch has-switch switch-container-class" data-class="fixed-footer">
                                                            <div className="switch-animate switch-off">
                                                                <input type="checkbox" data-toggle="toggle" data-onstyle="success" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-left">
                                                        <div className="widget-heading">Fixed Footer
                                                        </div>
                                                        <div className="widget-subheading">Makes the app footer bottom fixed, always
                                                            visible!
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="themeoptions-heading">
                                    <div>
                                        Header Options
                                    </div>
                                    <button type="button" className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-header-cs-class" data-class>
                                        Restore Default
                                    </button>
                                </h3>
                                {/*  */}
                                <h3 className="themeoptions-heading">
                                    <div>Sidebar Options</div>
                                    <button type="button" className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-sidebar-cs-class" data-class>
                                        Restore Default
                                    </button>
                                </h3>
                                <h3 className="themeoptions-heading">
                                    <div>Main Content Options</div>
                                    <button type="button" className="btn-pill btn-shadow btn-wide ml-auto active btn btn-focus btn-sm">Restore Default
                                    </button>
                                </h3>
                                <div className="p-3">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <h5 className="pb-2">Page Section Tabs
                                            </h5>
                                            <div className="theme-settings-swatches">
                                                <div role="group" className="mt-2 btn-group">
                                                    <button type="button" className="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-class" data-class="body-tabs-line">
                                                        Line
                                                    </button>
                                                    <button type="button" className="btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-class" data-class="body-tabs-shadow">
                                                        Shadow
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-main">
                    <div className="app-sidebar sidebar-shadow">
                        <div className="app-header__logo">
                            <div className="logo-src" />
                            <div className="header__pane ml-auto">
                                <div>
                                    <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="scrollbar-sidebar">
                            <div className="app-sidebar__inner">
                                <ul className="vertical-nav-menu">
                                    <li className="app-sidebar__heading">Dashboards</li>
                                    <li>
                                        <a href="index.html" className="mm-active">
                                            <i className="metismenu-icon pe-7s-rocket" />
                                            Dashboard Example 1
                                        </a>
                                    </li>
                                    <li className="app-sidebar__heading">UI Components</li>
                                    <li>
                                        <a href="...">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Elements
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="elements-buttons-standard.html">
                                                    <i className="metismenu-icon" />
                                                    Buttons
                                                </a>
                                            </li>
                                            <li>
                                                <a href="elements-dropdowns.html">
                                                    <i className="metismenu-icon">
                                                    </i>Dropdowns
                                                </a>
                                            </li>
                                            <li>
                                                <a href="elements-icons.html">
                                                    <i className="metismenu-icon">
                                                    </i>Icons
                                                </a>
                                            </li>
                                            <li>
                                                <a href="elements-badges-labels.html">
                                                    <i className="metismenu-icon">
                                                    </i>Badges
                                                </a>
                                            </li>
                                            <li>
                                                <a href="elements-cards.html">
                                                    <i className="metismenu-icon">
                                                    </i>Cards
                                                </a>
                                            </li>
                                            <li>
                                                <a href="elements-list-group.html">
                                                    <i className="metismenu-icon">
                                                    </i>List Groups
                                                </a>
                                            </li>
                                            <li>
                                                <a href="elements-navigation.html">
                                                    <i className="metismenu-icon">
                                                    </i>Navigation Menus
                                                </a>
                                            </li>
                                            <li>
                                                <a href="elements-utilities.html">
                                                    <i className="metismenu-icon">
                                                    </i>Utilities
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="....">
                                            <i className="metismenu-icon pe-7s-car" />
                                            Components
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="components-tabs.html">
                                                    <i className="metismenu-icon">
                                                    </i>Tabs
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-accordions.html">
                                                    <i className="metismenu-icon">
                                                    </i>Accordions
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-notifications.html">
                                                    <i className="metismenu-icon">
                                                    </i>Notifications
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-modals.html">
                                                    <i className="metismenu-icon">
                                                    </i>Modals
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-progress-bar.html">
                                                    <i className="metismenu-icon">
                                                    </i>Progress Bar
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-tooltips-popovers.html">
                                                    <i className="metismenu-icon">
                                                    </i>Tooltips &amp; Popovers
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-carousel.html">
                                                    <i className="metismenu-icon">
                                                    </i>Carousel
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-calendar.html">
                                                    <i className="metismenu-icon">
                                                    </i>Calendar
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-pagination.html">
                                                    <i className="metismenu-icon">
                                                    </i>Pagination
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-scrollable-elements.html">
                                                    <i className="metismenu-icon">
                                                    </i>Scrollable
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-maps.html">
                                                    <i className="metismenu-icon">
                                                    </i>Maps
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="tables-regular.html">
                                            <i className="metismenu-icon pe-7s-display2" />
                                            Tables
                                        </a>
                                    </li>
                                    <li className="app-sidebar__heading">Widgets</li>
                                    <li>
                                        <a href="dashboard-boxes.html">
                                            <i className="metismenu-icon pe-7s-display2" />
                                            Dashboard Boxes
                                        </a>
                                    </li>
                                    <li className="app-sidebar__heading">Forms</li>
                                    <li>
                                        <a href="forms-controls.html">
                                            <i className="metismenu-icon pe-7s-mouse">
                                            </i>Forms Controls
                                        </a>
                                    </li>
                                    <li>
                                        <a href="forms-layouts.html">
                                            <i className="metismenu-icon pe-7s-eyedropper">
                                            </i>Forms Layouts
                                        </a>
                                    </li>
                                    <li>
                                        <a href="forms-validation.html">
                                            <i className="metismenu-icon pe-7s-pendrive">
                                            </i>Forms Validation
                                        </a>
                                    </li>
                                    <li className="app-sidebar__heading">Charts</li>
                                    <li>
                                        <a href="charts-chartjs.html">
                                            <i className="metismenu-icon pe-7s-graph2">
                                            </i>ChartJS
                                        </a>
                                    </li>
                                    <li className="app-sidebar__heading">PRO Version</li>
                                    <li>
                                        <a href="..." target="_blank">
                                            <i className="metismenu-icon pe-7s-graph2">
                                            </i>
                                            Upgrade to PRO
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        </div>
                    </div></div></div>

        </div>
    )
}
