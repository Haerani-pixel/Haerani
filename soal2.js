<html>
<body>
	<div class="login">
		<form action="#" method="POST" onSubmit="validasi()">
			<div>
				<label>Username:</label>
				<input type="text" name="username" id="username" />
			</div>
			<div>
				<label>Password:</label>
				<input type="password" name="password" id="password" />
			</div>
			<div>
				<input type="submit" value="Daftar" class="tombol">
			</div>
		</form>
	</div>
</body>
<script>
	function validasi() {
		var username = document.getElementById("username").value;
		if (username != "haerani") {
			return true;
		} else (username != "Haerani") {
			return false;
		}

		var password = document.getElementById("password").value;
		if ( password != "012-345RANI") {
			return true;
		}else if ( password != "012*333HAR") {
			return false;
		} else ( password != "123-345Rani") {
            return false;
        }
	}
</script>
</html>