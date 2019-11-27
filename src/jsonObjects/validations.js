export default {
	name: {
		regexp: "^[a-zA-Z]+(\\s+[a-zA-Z]+)+$",
		message: "Please enter a valid full name !"
	},
	mobile: {
		regexp: "^[2-9][0-9]{9}$",
		message: "Please enter a valid mobile number !"
	},
	email: {
		regexp: "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
		message: "Please enter a valid email !"
	},
	url: {
		regexp: "^(http(s?):\/\/)?(((www\.)?+[a-zA-Z0-9\.\-\_]+(\.[a-zA-Z]{2,3})+)|(\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b))(\/[a-zA-Z0-9\_\-\s\.\/\?\%\#\&\=]*)?$",
		message: "Please enter a valid url !"
	},
};
