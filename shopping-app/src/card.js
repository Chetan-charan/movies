import './card.css';


function CardList(){
    return (<div>
      <Card />
    </div>)
  }


function Card(){
const styles = {width: '25rem',marginLeft: '2rem'}
return (
  <div className='card-list'>
    <section>
        <br/>
   <div className="card" style={styles}>
   <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
   <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
   <hr/>
   <ul class="fa-ul">
   <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
   </ul>
   <div class="d-grid">
              <a href className="btn btn-primary text-uppercase">Button</a>
            </div>
   </div>
   <br/>
   </section>
   <section>
   <br/>
<div className="card" style={styles}>
<h5 class="card-title text-muted text-uppercase text-center">PLUS</h5>
<h6 class="card-price text-center">$9<span class="period">/month</span></h6>
<hr/>
<ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 Users</strong></li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
<div class="d-grid">
         <a href className="btn btn-primary text-uppercase">Button</a>
       </div>
</div>
<br/>
</section>
<section>
   <br/>
<div className="card" style={styles}>
<h5 class="card-title text-muted text-uppercase text-center">PRO</h5>
<h6 class="card-price text-center">$49<span class="period">/month</span></h6>
<hr/>
<ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong>
              </li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
            </ul>
<div class="d-grid">
         <a href className="btn btn-primary text-uppercase">Button</a>
       </div>
</div>
<br/>
</section>
</div>
)

}

  export default CardList;