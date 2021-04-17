
import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
const axios = require('axios');

export default function Index() {


	const history = useHistory()
	const [isLogin, setisLogin] = useState(false)
	const token = localStorage.token

	useEffect(() => {
		// console.log(isLogin)
		if (token == null || token == undefined) {
			setisLogin(false);
			// setTValue({});
		}
		else {
			setisLogin(true);
			// setTValue({});
		}
		// setTValue({});
	}, [])

	const klikLogout = () => {
		localStorage.clear()
		alert("Anda Berhasil Logout!");
		setisLogin(false)
		// setTValue({});
		history.push("/login")
	}


	const a = axios.defaults.headers.common['Authorization'] = 'bearer ' + token
	console.log(a)


	if (!token) {
		// alert("Tidak Bisa Akses Halaman Ini. Silakan Login Dulu!");
		return <Redirect to="/login" />
	}


	if (localStorage.getItem('dataUserType')== 'USER') {
		return <Redirect to="/home" />
	} 

	return (
		<div>
			HALAMAN ADMIN
			<div>
				<button onClick={klikLogout}>logout</button>
			</div>
		</div>
	)
}
