import React from 'react';
import {Link} from 'react-router-dom'
import './styles/BadgesList.css'
import BadgeListItem from './BadgeListItem';


class BadgeList extends React.Component {
 render()
 {
  if(this.props.data.length === 0)
  {
   return (
     <div>
       <h3>
         No badges were found
       </h3>
       <Link to='/badges/new'
             className='btn btn-primary'>
               Create new badge
       </Link>
     </div>
   )
   }
   return(
   <div className="BadgesList">
     <ul>
     {this.props.data.map((badge) => {
       return (
        <li className="list-unstyled" 
        key={badge.id}
        >
          <Link className="text-reset text-decoration-none" 
                to={`/badges/${badge.id}`}>
            <BadgeListItem badge={badge} />
          </Link>
        </li>
       )
     })}
     </ul>
   </div>
  )
 }
}

export default BadgeList;