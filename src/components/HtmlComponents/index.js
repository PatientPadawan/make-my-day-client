import React from 'react';

export const H1Component = ({
  children,
  collapsed,
  toggleHiddenClass,
  iconToRender,
}) => (
  <div className="Entry_titleContainer">
    <h3 className="Entry_title">
      {children}
    </h3>
    <button onClick={toggleHiddenClass} className="Entry_button" aria-expanded={!collapsed} type="button">
      {iconToRender}
    </button>
  </div>
);

export const HeaderComponent = ({
  children,
  collapsed,
  adminControls,
}) => (
  <div className={collapsed ? 'Entry_contentCollapseContainer' : null}>
    <h4 className="Entry_content">
      {children}
    </h4>
    {adminControls}
  </div>
);

export const ImageComponent = ({
  attribs,
  collapsed,
}) => (
  <div className={collapsed ? 'Entry_contentCollapseContainer' : null}>
    <img
      crossOrigin="anonymous"
      src={attribs.src}
      alt={attribs.alt}
      className="Entry_images"
    />
  </div>
);

export const ContentComponent = ({
  children,
  collapsed,
}) => (
  <div className={collapsed ? 'Entry_contentCollapseContainer' : null}>
    <div className="Entry_content">
      {children}
    </div>
  </div>
);
