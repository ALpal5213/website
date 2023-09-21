import { BiSolidBriefcase, BiSolidGraduation, BiSolidEnvelope, BiSolidData} from 'react-icons/bi'
import { IconContext } from 'react-icons'
import { AppContext } from '../App.js'
import { useContext }  from 'react'

/*********************ICONS*********************/
export const BriefcaseIconSmall = () => {
  const {selectedView} = useContext(AppContext);

  return (
    <IconContext.Provider value={{ 
      color: selectedView === 'career' ? '#800000' : '#ffffff',
      size: '30px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <BiSolidBriefcase />
      </div>
    </IconContext.Provider>
  );
}

export const BriefcaseIconLarge = () => {
  const {selectedView} = useContext(AppContext);

  return (
    <IconContext.Provider value={{ 
      color: selectedView === 'career' ? '#800000' : '#ffffff',
      size: '6vh',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <BiSolidBriefcase />
      </div>
    </IconContext.Provider>
  );
}

export const EducationIconSmall = () => {
  const {selectedView} = useContext(AppContext);

  return (
    <IconContext.Provider value={{ 
      color: selectedView === 'education' ? '#800000' : '#ffffff',
      size: '30px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <BiSolidGraduation />
      </div>
    </IconContext.Provider>
  );
}

export const EducationIconLarge = () => {
  const {selectedView} = useContext(AppContext);

  return (
    <IconContext.Provider value={{ 
      color: selectedView === 'education' ? '#800000' : '#ffffff',
      size: '6vh',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <BiSolidGraduation />
      </div>
    </IconContext.Provider>
  );
}

export const SkillsIconSmall = () => {
  const {selectedView} = useContext(AppContext); 

  return (
    <IconContext.Provider value={{ 
      color: selectedView === 'skills' ? '#800000' : '#ffffff',
      size: '30px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <BiSolidData />
      </div>
    </IconContext.Provider>
  );
}

export const SkillsIconLarge = () => {
  const {selectedView} = useContext(AppContext);

  return (
    <IconContext.Provider value={{ 
      color: selectedView === 'skills' ? '#800000' : '#ffffff',
      size: '6vh',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <BiSolidData />
      </div>
    </IconContext.Provider>
  );
}

export const ContactIconSmall = () => {
  const {selectedView} = useContext(AppContext); 

  return (
    <IconContext.Provider value={{ 
      color: selectedView === 'contact' ? '#800000' : '#ffffff',
      size: '30px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <BiSolidEnvelope />
      </div>
    </IconContext.Provider>
  );
}

export const ContactIconLarge = () => {
  const {selectedView} = useContext(AppContext);

  return (
    <IconContext.Provider value={{ 
      color: selectedView === 'contact' ? '#800000' : '#ffffff',
      size: '60px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <BiSolidEnvelope />
      </div>
    </IconContext.Provider>
  );
}

/********************DIVIDERS*******************/

export const RedDividerVertical = () => {
  return (
    <div style={{
      border: 'solid #800000 1px',
      width: '1px',
      height: '100%',
      margin: '0 5px 0 5px',
    }}></div>
  );
}

export const RedDividerHorizontal = () => {
  return (
    <div style={{
      border: 'solid #800000 1px',
      width: '100%',
      height: '.5px',
      margin: '5px 0 5px 0'
    }}></div>
  );
}