import camelCase from 'lodash/camelCase';

// BEGIN
export default function normalize(document) {
    function kebabToCamel(str) {
      const parts = str.split('-');
      return parts[0] + parts.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    }
  
    const elements = document.body.getElementsByTagName('*');
  
    Array.from(elements).forEach(el => {
      const classes = Array.from(el.classList);
  
      classes.forEach(className => {
        if (className.includes('-')) {
          const camelClass = kebabToCamel(className);
          el.classList.replace(className, camelClass);
        }
      });
    });
  }
// END