import { supabase } from "../config/supabase.js";

export const authService = {
	register: async (email, password) => {
		const {data, error} = await supabase.auth.signUp({
			email,
			password,
		});

		if(error) throw new Error(error.message);

		return data;
	},

	login: async (email, password) => {
		const {data, error} = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if(error) throw new Error(error.message);

		return data;
	},
};
