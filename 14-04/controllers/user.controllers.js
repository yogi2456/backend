export const Register = (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        console.log(name, email, password, confirmPassword, "All Data");
        res.send(true);
    } catch (error) {
        return res.status(500).json({ success: false, error: error});
    }
};

export const Login = (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        console.log(name, email, password, confirmPassword, "All Data");
        res.send(true)
    } catch (error) {
        return res.status(500).json({ success: false, error: error })
    }
}

export const Logout = (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        console.log(name, email, password, confirmPassword, "All Data");
        res.send(true)
    } catch (error) {
        return res.status(500).json({ success: false, error: error });
    }
}