import validations from "../jsonObjects/validations";

export const validate = e => {
	var elementToBeValidated = e.target.id;
		if (
			new RegExp(validations[elementToBeValidated].regexp).test(
				e.target.value
			)
		) {
			removeError(elementToBeValidated);
			return false;
		} else {
			showError(
				elementToBeValidated,
				validations[elementToBeValidated].message
			);
			return true;
		}
};

export const showError = (id, error, classToBeAdded = "errorText") => {
	if (document.getElementById("error-" + id)) return true;
	var errorMessageElement = document.createElement("span");
	errorMessageElement.setAttribute("class", classToBeAdded);
	errorMessageElement.setAttribute("id", "error-" + id);
	var errorMessage = document.createTextNode(error);
	errorMessageElement.appendChild(errorMessage);
	var elementWithValidationError = document.getElementById(id).parentNode;
	elementWithValidationError.parentNode.insertBefore(
		errorMessageElement,
		elementWithValidationError.nextSibling
	);
};

export const removeError = id => {
	if (!document.getElementById("error-" + id)) return true;
	var elementToBeRemoved = document.getElementById("error-" + id);
	elementToBeRemoved.remove();
};

export const checkForErrors = () => {
	var parentElement = document.querySelector(".mainDiv");
	if (parentElement.querySelector(".errorText") === null) {
		return true;
	} else return false;
};
