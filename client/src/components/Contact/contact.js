import React from 'react';


const ContactMe = () => {
	return (
		<>
			<div className="container container-height">
				<div className="col container-height">
					<div className="bg-secondary mt-3 shadow p-3 container-height">
						<form>
							<div className="form-group">
								<label className="text-light" htmlFor="exampleInputEmail1">Email address</label>
								<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
							</div>
							<div className="form-group">
								<label className="text-light" > Name </label>
								<input className="form-control" type="text" placeholder="Name"></input>
							</div>
							<div className="form-group">
								<label className="text-light" htmlFor="exampleFormControlTextarea1">Message</label>
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
							</div>
							<div className="form-group">
								<div className="col-sm-10">
									<button onClick="alert('You pressed the button!')" type="submit" className="btn btn-dark">Submit</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>

	);
}

export default ContactMe;