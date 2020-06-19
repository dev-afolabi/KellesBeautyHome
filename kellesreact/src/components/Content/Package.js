import React, {Component} from 'react'

class Package extends Component
{
    render()
    {
        return (
            <div className="col-md-6 col-lg-3">
                <div className="package-box ">
                    <h3>{ this.props.package.name.toUpperCase() }<span>PACKAGE</span></h3>
                    <p className="price">#2195.00</p>
                    <ul>
                        <li><i className="fa fa-check" aria-hidden="true"></i>Air Brush</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i>Retouch</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i>Hairstyling</li>
                        <li><i className="fa fa-times" aria-hidden="true"></i>Corner Lashes</li>
                        <li><i className="fa fa-times" aria-hidden="true"></i>Body Glowing</li>
                        <li><i className="fa fa-times" aria-hidden="true"></i>Eyebrows</li>
                    </ul>
                    <a href="product-calendar/classNameic-package/index.html" className="select-package">SELECT</a>
				</div>
			</div>
        );
    }
}

export default Package;