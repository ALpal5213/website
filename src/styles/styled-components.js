import { BiSolidBriefcase, BiSolidGraduation, BiSolidEnvelope} from 'react-icons/bi'
import { IconContext } from 'react-icons'


/*********************ICONS*********************/
export const BriefcaseIconSmall = () => {
  return (
    <IconContext.Provider value={{ 
      color: "white",
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
  return (
    <IconContext.Provider value={{ 
      color: "white",
      size: '60px',
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
  return (
    <IconContext.Provider value={{ 
      color: "white",
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
  return (
    <IconContext.Provider value={{ 
      color: "white",
      size: '65px',
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

export const ContactIconSmall = () => {
  return (
    <IconContext.Provider value={{ 
      color: "white",
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
  return (
    <IconContext.Provider value={{ 
      color: "white",
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