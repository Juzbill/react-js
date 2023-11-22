import './pendingorder.css';

const Pendingorders : React.FC = () =>{
return(
    <div className='pending-wrapper'>
        <div className="pending-info">
            <div className="pending-txt">
            <span>Pending Orders</span>
            </div>
            <div className="pending-line">
        
      </div>
            <div className="pending-items">
            <span className="pending-item-orders">No. Of Open Orders</span>
            <span className="pending-item-stock">3</span>
            </div>
         <div className="pending-amt">
            <span className="pending-item-orderamt">Open Sale Orders Amount</span>
            <span className="pending-orderamt">552</span>
            
      </div>
        </div>
    </div>
)
}
export default Pendingorders;
