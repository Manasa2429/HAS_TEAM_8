import React from "react";

function Navbar() {
	const user = JSON.parse(localStorage.getItem("currentUser"));

	function Logout() {
		localStorage.removeItem("currentUser");
		window.location.href = "/login";
	}

	const navAction = () => {
		if (user) {
			return (
				<ul className="navbar-nav mr-5">
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<i class="fas fa-user mr-2"></i>
							{user.name}
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a className="dropdown-item" href="/profile">
								Profile
							</a>

							<a className="dropdown-item" href="#" onClick={Logout}>
								Logout
							</a>
						</div>
					</div>
				</ul>
			);
		}

		return (
			<ul className="navbar-nav">
				<li className="nav-item active">
					<a className="nav-link" href="/register">
						<button
							style={{
								backgroundColor: "white",
								padding: "10px 20px",
								color: "black",
								borderRadius: "10px",
								fontSize: "16px",
							}}
						>
							Register
						</button>
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/login">
						<button
							style={{
								backgroundColor: "white",
								padding: "10px 20px",
								color: "black",
								borderRadius: "10px",
								fontSize: "16px",
							}}
						>
							Login
						</button>
					</a>
				</li>
			</ul>
		);
	};

	return (
		<div>
			<nav className="navbar navbar-expand-lg">
				<a className="navbar-brand" href="/">
					HAS Team 8
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon">
						<i class="fas fa-bars" style={{ color: "white" }}></i>
					</span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent" style={{width:"50%",display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="/home">
								<button
									style={{
										padding: "10px 20px",
										color: "white",
										background: "none",
										fontSize: "15px",
										border: "none"
									}}
								>
									Book a Room
								</button>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/foodmanager">
								<button
									style={{
										padding: "10px 20px",
										color: "white",
										background: "none",
										fontSize: "15px",
										border: "none"
									}}
								>
									View Food Menu
								</button>
							</a>
						</li>
					</ul>{navAction()}
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
