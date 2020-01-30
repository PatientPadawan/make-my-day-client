import React from 'react';
import propTypes from 'prop-types';

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

H1Component.propTypes = {
  children: propTypes.string.isRequired,
  collapsed: propTypes.bool.isRequired,
  toggleHiddenClass: propTypes.func.isRequired,
  iconToRender: propTypes.shape({
    $$typeof: propTypes.symbol,
    props: propTypes.object,
  }).isRequired,
};

HeaderComponent.propTypes = {
  children: propTypes.string.isRequired,
  collapsed: propTypes.bool.isRequired,
  adminControls: propTypes.shape({
    $$typeof: propTypes.symbol,
    props: propTypes.object,
  }).isRequired,
};

ImageComponent.propTypes = {
  attribs: propTypes.shape({
    width: propTypes.string,
    alt: propTypes.string,
    src: propTypes.string,
  }).isRequired,
  collapsed: propTypes.bool.isRequired,
};

ContentComponent.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.array,
    propTypes.object,
  ]).isRequired,
  collapsed: propTypes.bool.isRequired,
};
