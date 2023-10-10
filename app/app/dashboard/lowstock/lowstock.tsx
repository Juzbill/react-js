import './lowstock.css';

const Lowstock : React.FC = () =>{
return(
    <div className='lowstock-wrapper'>
        <div className="lowstock-info">
            <div className="lowstock-txt">
            <span>Low Stock</span>
            <span className="lowstock-see">See All</span>
            </div>
            <div className="lowstock-line">
        
      </div>
            <div className="lowstock-items">
        <ul>
          <li className="lowstock-list">
            <span className="lowstock-item-name">Enamel Paint (100 m)</span>
            <span className="lowstock-item-stock">10</span>
          </li>
        </ul>
      </div>
        </div>
    </div>
)
}
export default Lowstock;
