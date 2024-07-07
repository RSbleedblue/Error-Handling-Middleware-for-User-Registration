const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

const isValid  = (req, res, next) => {
    const { FirstName, LastName, Password, Email, Phone } = req.body;

    if (!FirstName || !LastName || !Password || !Email || !Phone) {
        return res.status(400).json({ message: "Please fill all the fields", success: false });
    }

    if (FirstName.charAt(0) !== FirstName.charAt(0).toUpperCase() || LastName.charAt(0) !== LastName.charAt(0).toUpperCase()) {
        return res.status(400).json({ message: "First and Last Name must start with an uppercase letter", success: false });
    }

    if (!checkPassword(Password)) {
        return res.status(400).json({ message: "Password must be at least 8 characters long and contain one special character, one uppercase letter, and one numeric character", success: false });
    }
    if (!validEmail(Email)){
        return res.status(400).json({message : "Invalid Email Format", success : false})
    }
    if (!validPhone(Phone)){
        return res.status(400).json({message : "Invalid Phone Number", success : false})
    }
    next();
}

const checkPassword = (password) => {
    return passwordRegex.test(password);
}
const validEmail = (email) => {
    return email.includes('@');
}
const validPhone = (Phone) => {
    return Phone.length === 10;
}

export default isValid;