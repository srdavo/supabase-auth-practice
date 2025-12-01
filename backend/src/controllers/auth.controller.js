import { authService } from "../services/auth.service.js";

export const authController = {
	register: async (req, res) => {
		try{
			const {email, password} = req.body;

			const data = await authService.register(email, password);

			res.json({
				ok: true,
				message: "User registered sucessfully",
				data,
			});
		} catch (err) {
			res.status(400).json({ok:false, error: err.message });
		}
	},

	login: async (req, res) => {
		try {
			const {email, password} = req.body;

			const data = await authService.login(email,password);

			res.json({
				ok: true,
				message: "Logged in",
				data,
			});
		} catch(err) {
			res.status(400).json({ok:false, error: err.message});
		}
	},
};
