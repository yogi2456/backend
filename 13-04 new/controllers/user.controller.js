export const Register = (req, res) => {
    try {
        const {name, email, password, confirmpassword} = req.body;
        console.log(name, email, password, confirmpassword, "all data");
        res.send(true);
    } catch (error) {
        return res.status(500).json({success: false, message: error});
    }
}


export const Login = (req, res) => {
    try {
        const {name, email, password, confirmpassword} = req.body;
        console.log(name, email, password, confirmpassword, "all data");
        res.send(true);
    } catch (error) {
        return res.status(500).json({success: false, message: error});
    }
}