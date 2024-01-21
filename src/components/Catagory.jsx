import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush , faHeartbeat , faBook, faGamepad, faPlane} from '@fortawesome/free-solid-svg-icons';

function Category(props) {
    const icons = [ faPaintBrush , faHeartbeat , faBook, faGamepad, faPlane]
  return (
    <Link to={props.link}>
      <div className={`${props.bgColor}  box text-xl font-semibold rounded-[15px] w-[155px] h-[105px] flex flex-col items-center justify-center cursor-pointer`}>
        <p>Blog By</p>
        {props.title}
      </div>
    </Link>
  );
}

export default Category;
