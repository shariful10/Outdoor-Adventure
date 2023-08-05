import { useContext } from "react";
import AuthProvider from "../../Providers/AuthProvider";

const useAuth = () => {
	const auth = useContext(AuthProvider);
	return auth;
};

export default useAuth;
