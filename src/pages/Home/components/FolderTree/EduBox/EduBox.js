import React from "react";
import "./EduBox.scss";

export const SetHeight = React.createContext();

const EduBox = ({ eduData, flip, setState }) => {
  const {
    jobName,
    jobSubTitle,
    jobTime,
    jobDesc,
    keywords,
    icon,
    moreClassName,
  } = eduData;

  const handleShowModal = () => {
    document.body.style.overflow = "hidden";
    setState(true);
  };
  return (
    <>
      <div className={`eduBox__item ${flip}`}>
        <div className='item__content'>
          <div className='eduBox__job animated'>
            <p className='job__name'>{jobName}</p>
            <p className='job__subTitle'>{jobSubTitle}</p>
            <p className='job__time'>{jobTime}</p>
            <p className='job__desc'>{jobDesc}</p>
            <button
              value='true'
              type='button'
              onClick={handleShowModal}
              className={`item__more ${moreClassName}`}
            >
              <i className='fa-solid fa-ellipsis'></i>
            </button>
          </div>
          <div className='item__key animated'>
            {keywords ? <span>{keywords}</span> : <i className={icon} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default EduBox;
