import React, { Component } from 'react';
import Moment from 'react-moment';
import dompurify from 'dompurify';
import parse, { domToReact } from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import propTypes from 'prop-types';
import AdminControls from '../AdminControls/AdminControls';
import {
  H1Component, HeaderComponent, ImageComponent, ContentComponent,
} from '../HtmlComponents';
import './BlogEntry.css';

export default class BlogEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
    this.onDelete = this.onDelete.bind(this);
    this.toggleHiddenClass = this.toggleHiddenClass.bind(this);
    this.optionsReplace = this.optionsReplace.bind(this);
  }

  onDelete() {
    this.setState({ collapsed: true });
  }

  toggleHiddenClass() {
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed });
  }

  // logic to create custom react elements from html string
  optionsReplace({ name, children, attribs }) {
    const remainingHeaderTags = ['h2', 'h3', 'h4', 'h5', 'h6'];
    const availableContentTags = ['a', 'p'];
    const { collapsed } = this.state;
    const iconToRender = collapsed
      ? <FontAwesomeIcon size="2x" icon="plus" className="Entry_icons" />
      : <FontAwesomeIcon size="2x" icon="minus" className="Entry_icons" />;

    if (name === 'h1') {
      return (
        <H1Component
          {...this.props}
          children={domToReact(children, this.optionsReplace)}
          collapsed={collapsed}
          toggleHiddenClass={this.toggleHiddenClass}
          iconToRender={iconToRender}
        />
      );
    }
    if (remainingHeaderTags.includes(name)) {
      return (
        <HeaderComponent
          {...this.props}
          children={domToReact(children, this.optionsReplace)}
          collapsed={collapsed}
        />
      );
    }
    if (name === 'img') {
      return (
        <ImageComponent
          {...this.props}
          attribs={attribs}
          collapsed={collapsed}
        />
      );
    }
    if (availableContentTags.includes(name)) {
      return (
        <ContentComponent
          {...this.props}
          children={domToReact(children, this.optionsReplace)}
          collapsed={collapsed}
          optionsReplace={this.optionsReplace}
        />
      );
    }
    return null;
  }

  render() {
    const { collapsed } = this.state;
    const { loggedIn, entries } = this.props;
    const {
      id,
      content,
      createdAt,
      published,
    } = entries;

    const adminControls = loggedIn
      ? (
        <AdminControls
          postId={id}
          published={published}
          onDelete={() => this.onDelete()}
        />
      )
      : null;
    const sanitizer = dompurify.sanitize;
    const cleanHtml = sanitizer(content);
    // attach our custom html ---> react parser logic
    const options = { replace: this.optionsReplace };
    const reactFromHtml = parse(cleanHtml, options);

    return (
      <div className="Landing_underline Landing_underlineCenter">
        {reactFromHtml}
        <div className="Entry_dateContainer">
          <Moment
            className={collapsed ? 'Entry_date' : 'Entry_contentCollapseContainer'}
            format="MMMM Do, YYYY"
          >
            {createdAt}
          </Moment>
        </div>
        <div className={collapsed ? 'Entry_contentCollapseContainer' : null}>
          {adminControls}
        </div>
      </div>
    );
  }
}

BlogEntry.propTypes = {
  loggedIn: propTypes.bool,
  entries: propTypes.shape({
    id: propTypes.number,
    content: propTypes.string,
    published: propTypes.bool,
    createdAt: propTypes.string,
    updatedAt: propTypes.string,
  }).isRequired,
};

BlogEntry.defaultProps = {
  loggedIn: false,
};
