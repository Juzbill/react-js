import './topselling.css';
// import Image from'next/image';

const Sellingitem : React.FC = () =>{
return(
    <div className='selling-wrapper'>
        <div className="selling-info">
            <div className="selling-txt">
            <span>Top Selling Item</span>
            </div>
            <div className="selling-line">
        
      </div>
            <div className="selling-items">
        <ul>
          <li className="selling-list">
            <span className="selling-item-name">Cement (UltraTech)</span>
            <span className="selling-item-stock">3200</span>
          </li>
        </ul>
      </div>
        </div>
    </div>
)
}
export default Sellingitem;
