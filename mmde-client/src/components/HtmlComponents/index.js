import React from 'react'
import domToReact from 'html-react-parser';

export const H1Component = ({
    children,
    collapsed,
    toggleHiddenClass,
    iconToRender, 
}) => {
    return(
        <div className='Entry_titleContainer'>
            <h3 className='Entry_title'>
                {domToReact(children[0].data)}
            </h3>
            <button onClick={toggleHiddenClass} className='Entry_button' aria-expanded={!collapsed}>
                {iconToRender}
            </button>
        </div>
    )
}

export const HeaderComponent = ({
    children,
    collapsed,
    adminControls
}) => {
    return(
        <div className={collapsed ? 'Entry_contentCollapseContainer': null}>
            <h4 className='Entry_content'>
                {domToReact(children[0].data)}
            </h4>
            {adminControls}
        </div>
    )
}

export const ImageComponent = ({
    attribs,
    collapsed
}) => {
    return(
        <div className={collapsed ? 'Entry_contentCollapseContainer': null}>
            <img 
                crossOrigin='anonymous' 
                src={attribs.src} 
                alt={attribs.alt} 
                className='Entry_images' 
            />
        </div>
    )
}

export const ContentComponent = ({
    children,
    collapsed,
}) => {
    return(
        <div className={collapsed ? 'Entry_contentCollapseContainer': null}>
            <div className='Entry_content'>
                {domToReact(children[0].data)}
            </div>
        </div>
    )
}