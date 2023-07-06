import React from 'react';
import PropTypes from 'prop-types';
import FormattedMessage from './FormattedMessage';
import Intersector from './Intersector';

const Timeline = ({ date, tab, img, description, skills, changeTab }) => {
  return (
    <Intersector delay="100ms" threshold={0.3}>
      <div className="timeline">
        <div className="timeline__date">{date}</div>

        <div className="timeline__dot-container">
          <div className="timeline__dot" />
        </div>

        <div className="timeline__card">
          <div className="timeline__image-wrapper">
            <div className="timeline__image">
              <img src={img} alt="" />
            </div>
          </div>

          <div className="timeline__text">
            <div className="timeline__text-header">
              <p
                className={tab === 0 && 'selected'}
                onClick={tab === 1 ? changeTab : () => null}
              >
                <i className="fa-solid fa-envelope-open-text" />{' '}
                <FormattedMessage id="description" />
              </p>
              <p
                className={tab === 1 && 'selected'}
                onClick={tab === 0 ? changeTab : () => null}
              >
                <i className="fa-solid fa-square-plus" />{' '}
                <FormattedMessage id="skills" />
              </p>
            </div>

            <div className="timeline__text-body">
              {tab === 0 && (
                <p>
                  <FormattedMessage id={description} />
                </p>
              )}
              {tab === 1 && <p>{skills}</p>}
            </div>
          </div>
        </div>
      </div>
    </Intersector>
  );
};

Timeline.propTypes = {
  date: PropTypes.string,
  tab: PropTypes.number,
  img: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.node,
  changeTab: PropTypes.func,
};

export default Timeline;
