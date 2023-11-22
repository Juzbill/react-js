import './upcomingexp.css';

const Upcomingexp : React.FC = () =>{
return(
    <div className='upcomexp-wrapper'>
        <div className="upcomexp-info">
            <div className="upcomexp-txt">
            <span>Upcoming Expiry Items</span>
            <span className='upcomexp-see'>See All</span>
            </div>
            <div className="upcomexp-line">
        
      </div>
            <div className="upcomexp-items">
        <ul>
          <li className="upcomexp-list">
            <span className="upcomexp-item-name">Steel Nail</span>
            <span className="upcomexp-item-stock">10</span>
          </li>
        </ul>
      </div>
        </div>
    </div>
)
}
export default Upcomingexp;
